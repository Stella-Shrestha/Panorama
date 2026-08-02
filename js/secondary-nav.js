function initSecondaryTripNav() {
  const mainNavigation = document.getElementById("mainNavigation");
  const secondaryTripNav = document.getElementById("secondaryTripNav");
  const tripOverview = document.getElementById("trip-overview");

  if (!mainNavigation || !secondaryTripNav || !tripOverview) {
    return;
  }

  const secondaryNavLinks = Array.from(
    secondaryTripNav.querySelectorAll(".secondary-nav-link"),
  );
  const linkedSections = secondaryNavLinks
    .map(function (link) {
      const href = link.getAttribute("href") || "";
      return href.charAt(0) === "#"
        ? document.getElementById(href.slice(1))
        : null;
    })
    .filter(Boolean);

  const triggerSentinel = document.createElement("span");
  triggerSentinel.className = "trip-overview-trigger-sentinel";
  triggerSentinel.setAttribute("aria-hidden", "true");
  tripOverview.before(triggerSentinel);

  let topObserver = null;
  let sectionObserver = null;
  const visibleSectionRatios = new Map();
  let ticking = false;
  let rebuildQueued = false;
  let activeSectionId = "";

  function measureNavigation() {
    const primaryHeight = mainNavigation.offsetHeight || 0;
    const secondaryHeight = secondaryTripNav.offsetHeight || primaryHeight;
    const activeHeight = Math.max(primaryHeight, secondaryHeight);

    document.documentElement.style.setProperty(
      "--sticky-nav-height",
      activeHeight + "px",
    );
    document.documentElement.style.setProperty(
      "--sticky-nav-trigger-offset",
      primaryHeight + "px",
    );
  }

  function setNavigationSwapped(shouldSwap) {
    document.body.classList.toggle("is-swapped", shouldSwap);
    mainNavigation.setAttribute("aria-hidden", shouldSwap ? "true" : "false");
    secondaryTripNav.setAttribute("aria-hidden", shouldSwap ? "false" : "true");
  }

  function updateNavigationSwap() {
    const primaryHeight = mainNavigation.offsetHeight || 0;
    const triggerTop = triggerSentinel.getBoundingClientRect().top;

    setNavigationSwapped(triggerTop <= primaryHeight);
    ticking = false;
  }

  function requestNavigationUpdate() {
    if (ticking) return;

    ticking = true;
    window.requestAnimationFrame(updateNavigationSwap);
  }

  function rebuildTopObserver() {
    rebuildQueued = false;

    if (topObserver) {
      topObserver.disconnect();
    }

    measureNavigation();

    const primaryHeight = mainNavigation.offsetHeight || 0;

    topObserver = new IntersectionObserver(
      function () {
        requestNavigationUpdate();
      },
      {
        root: null,
        rootMargin: "-" + primaryHeight + "px 0px 0px 0px",
        threshold: 0,
      },
    );

    topObserver.observe(triggerSentinel);
    requestNavigationUpdate();
  }

  function rebuildSectionObserver() {
    if (sectionObserver) {
      sectionObserver.disconnect();
    }

    if (!linkedSections.length) return;

    visibleSectionRatios.clear();

    const navHeight =
      secondaryTripNav.offsetHeight || mainNavigation.offsetHeight || 0;

    function setMostVisibleSectionActive() {
      let bestSection = null;
      let bestRatio = 0;

      visibleSectionRatios.forEach(function (ratio, section) {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestSection = section;
        }
      });

      if (bestSection) {
        setActiveSecondaryLink(bestSection.id);
        return;
      }

      linkedSections.forEach(function (section) {
        if (section.getBoundingClientRect().top <= navHeight + 48) {
          bestSection = section;
        }
      });

      if (bestSection) {
        setActiveSecondaryLink(bestSection.id);
      }
    }

    sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            visibleSectionRatios.set(entry.target, entry.intersectionRatio);
          } else {
            visibleSectionRatios.delete(entry.target);
          }
        });

        setMostVisibleSectionActive();
      },
      {
        root: null,
        rootMargin: "-" + (navHeight + 16) + "px 0px -45% 0px",
        threshold: [0.12, 0.25, 0.5, 0.75],
      },
    );

    linkedSections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  function requestObserverRebuild() {
    if (rebuildQueued) return;

    rebuildQueued = true;
    window.requestAnimationFrame(function () {
      rebuildTopObserver();
      rebuildSectionObserver();
    });
  }

  function setActiveSecondaryLink(targetId, shouldRevealLink) {
    if (activeSectionId === targetId) return;

    activeSectionId = targetId;
    let activeLink = null;

    secondaryNavLinks.forEach(function (link) {
      const isActive = link.getAttribute("href") === "#" + targetId;

      link.classList.toggle("active", isActive);

      if (isActive) {
        activeLink = link;
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    if (activeLink && shouldRevealLink !== false) {
      activeLink.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  function updateOnScroll() {
    requestNavigationUpdate();
  }

  secondaryTripNav.addEventListener("click", function (event) {
    const link = event.target.closest("a[href^='#']");

    if (!link || !secondaryTripNav.contains(link)) {
      return;
    }

    const targetId = link.getAttribute("href").slice(1);

    if (!document.getElementById(targetId)) {
      return;
    }

    setNavigationSwapped(true);
    measureNavigation();

    if (link.classList.contains("secondary-nav-link")) {
      setActiveSecondaryLink(targetId, false);
    }
  });

  window.addEventListener("scroll", updateOnScroll, {
    passive: true,
  });
  window.addEventListener("resize", requestObserverRebuild);
  window.addEventListener("load", function () {
    requestObserverRebuild();
    window.setTimeout(requestObserverRebuild, 100);
  });

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(function () {
      requestObserverRebuild();
    });

    resizeObserver.observe(document.body);
    resizeObserver.observe(tripOverview.parentElement || tripOverview);
  }

  rebuildTopObserver();
  rebuildSectionObserver();
  if (linkedSections[0]) {
    setActiveSecondaryLink(linkedSections[0].id);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSecondaryTripNav);
} else {
  initSecondaryTripNav();
}
