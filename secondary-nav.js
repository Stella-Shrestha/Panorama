function initSecondaryTripNav() {
  const mainNavigation = document.getElementById("mainNavigation");
  const secondaryTripNav = document.getElementById("secondaryTripNav");

  if (!secondaryTripNav) {
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

  let primaryNavigationHeight = mainNavigation
    ? mainNavigation.offsetHeight
    : 0;

  function getScrollTop() {
    return (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    );
  }

  function refreshOverviewTriggerTop() {
    if (mainNavigation && mainNavigation.offsetHeight) {
      primaryNavigationHeight = mainNavigation.offsetHeight;
    }
  }

  function setActiveSecondaryLink(targetId) {
    secondaryNavLinks.forEach(function (link) {
      const isActive = link.getAttribute("href") === "#" + targetId;

      link.classList.toggle("active", isActive);
      link.classList.toggle("border-transparent", isActive);
      link.classList.toggle("border-white/10", !isActive);
      link.classList.toggle("bg-[#F58220]", isActive);
      link.classList.toggle("text-white", isActive);
      link.classList.toggle("text-white/85", !isActive);
      link.classList.toggle(
        "shadow-[0_12px_24px_-18px_rgba(245,130,32,0.8)]",
        isActive,
      );

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function updateActiveSecondaryLink() {
    if (!linkedSections.length) return;

    const navHeight = secondaryTripNav.offsetHeight || 0;
    const activationLine =
      getScrollTop() + primaryNavigationHeight + navHeight + 40;
    let activeSection = linkedSections[0];

    linkedSections.forEach(function (section) {
      if (section.offsetTop <= activationLine) {
        activeSection = section;
      }
    });

    setActiveSecondaryLink(activeSection.id);
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

    setActiveSecondaryLink(targetId);
  });

  window.addEventListener("scroll", updateActiveSecondaryLink, {
    passive: true,
  });
  window.addEventListener("resize", function () {
    refreshOverviewTriggerTop();
    updateActiveSecondaryLink();
  });
  window.addEventListener("load", function () {
    refreshOverviewTriggerTop();
    updateActiveSecondaryLink();
  });

  refreshOverviewTriggerTop();
  updateActiveSecondaryLink();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSecondaryTripNav);
} else {
  initSecondaryTripNav();
}
