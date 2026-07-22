document.addEventListener("DOMContentLoaded", function () {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const trekItems = [
    {
      label: "Trekking in Nepal",
      href: "./trekking-in-nepal.html",
      icon: "mountain",
    },
    {
      label: "Peak Climbing",
      href: "./nepal.html#activities",
      icon: "flag",
    },
    {
      label: "Expedition in High Mountain",
      href: "./nepal.html#activities",
      icon: "mountain-snow",
    },
    {
      label: "Cultural Visit",
      href: "./nepal.html#activities",
      icon: "landmark",
    },
    {
      label: "Rafting",
      href: "./nepal.html#activities",
      icon: "waves",
    },
  ];

  function isTreksLink(link) {
    return link && link.textContent.trim().toLowerCase() === "treks";
  }

  function isCurrentPage(href) {
    const page = href.replace("./", "").split("#")[0];
    return page && window.location.pathname.endsWith("/" + page);
  }

  function getDesktopTrekLinkClass(href) {
    if (isCurrentPage(href)) {
      return "flex items-center gap-3 rounded-lg bg-orange-50 px-3 py-3 text-sm font-medium text-[#F58220]";
    }

    return "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-orange-50 hover:text-[#F58220]";
  }

  function getMobileTrekLinkClass(href) {
    if (isCurrentPage(href)) {
      return "mobile-link block rounded-lg bg-white px-3 py-2.5 text-xs font-bold text-[#F58220]";
    }

    return "mobile-link block rounded-lg px-3 py-2.5 text-xs font-medium text-slate-600 hover:bg-white hover:text-[#F58220]";
  }

  function createDesktopTreksDropdown() {
    return (
      '<button type="button" class="desktop-dropdown-button inline-flex items-center gap-1 py-3 transition-colors hover:text-[#F58220]" aria-expanded="false" aria-controls="treksDropdown">' +
      'Treks <i data-lucide="chevron-down" class="dropdown-arrow h-4 w-4 transition-transform duration-200"></i>' +
      "</button>" +
      '<div id="treksDropdown" class="desktop-dropdown invisible pointer-events-none absolute left-1/2 top-full w-72 -translate-x-1/2 translate-y-2.5 pt-3 opacity-0 transition-all duration-200">' +
      '<div class="rounded-xl border border-slate-200 bg-white p-3 shadow-xl">' +
      trekItems
        .map(function (item) {
          return (
            '<a href="' +
            item.href +
            '" class="' +
            getDesktopTrekLinkClass(item.href) +
            '">' +
            '<i data-lucide="' +
            item.icon +
            '" class="h-4 w-4"></i>' +
            item.label +
            "</a>"
          );
        })
        .join("") +
      "</div></div>"
    );
  }

  function createMobileTreksDropdown() {
    return (
      '<button type="button" class="mobile-dropdown-button flex w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-colors hover:bg-slate-100 hover:text-[#F58220]" aria-expanded="false" aria-controls="mobileTreksDropdown">' +
      '<span>Treks</span><i data-lucide="chevron-down" class="dropdown-arrow h-4 w-4 transition-transform duration-200"></i>' +
      "</button>" +
      '<div id="mobileTreksDropdown" class="mobile-dropdown hidden px-3 pb-3">' +
      '<div class="space-y-1 rounded-xl border border-slate-200 bg-slate-50 p-3">' +
      trekItems
        .map(function (item) {
          return (
            '<a href="' +
            item.href +
            '" class="' +
            getMobileTrekLinkClass(item.href) +
            '">' +
            item.label +
            "</a>"
          );
        })
        .join("") +
      "</div></div>"
    );
  }

  function normalizeTreksNavigation() {
    const desktopTreksDropdown = document.getElementById("treksDropdown");
    if (desktopTreksDropdown) {
      const treksItem = desktopTreksDropdown.closest("li");
      if (treksItem) {
        treksItem.classList.add("relative");
        treksItem.innerHTML = createDesktopTreksDropdown();
      }
    } else {
      document.querySelectorAll("nav ul.hidden li > a").forEach(function (link) {
        if (!isTreksLink(link)) {
          return;
        }

        const treksItem = link.closest("li");
        if (treksItem) {
          treksItem.classList.add("relative");
          treksItem.innerHTML = createDesktopTreksDropdown();
        }
      });
    }

    const mobileTreksDropdown = document.getElementById("mobileTreksDropdown");
    if (mobileTreksDropdown) {
      const mobileTreksItem = mobileTreksDropdown.closest("li");
      if (mobileTreksItem) {
        mobileTreksItem.innerHTML = createMobileTreksDropdown();
      }
    } else {
      document.querySelectorAll("#mobileMenu li > a").forEach(function (link) {
        if (!isTreksLink(link)) {
          return;
        }

        const mobileTreksItem = link.closest("li");
        if (mobileTreksItem) {
          mobileTreksItem.innerHTML = createMobileTreksDropdown();
        }
      });
    }

    refreshIcons();
  }

  normalizeTreksNavigation();

  const desktopDropdownButtons = document.querySelectorAll(
    ".desktop-dropdown-button",
  );
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuIcon = document.getElementById("mobileMenuIcon");
  const mobileDropdownButtons = document.querySelectorAll(
    ".mobile-dropdown-button",
  );
  const mobileLinks = document.querySelectorAll(".mobile-link");

  function refreshIcons() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function setDropdownOpen(dropdown, arrow, isOpen) {
    if (!dropdown || !arrow) {
      return;
    }

    dropdown.classList.toggle("open", isOpen);
    dropdown.classList.toggle("invisible", !isOpen);
    dropdown.classList.toggle("pointer-events-none", !isOpen);
    dropdown.classList.toggle("opacity-0", !isOpen);
    dropdown.classList.toggle("translate-y-2.5", !isOpen);
    arrow.classList.toggle("rotate-180", isOpen);
  }

  function closeDesktopDropdowns(exceptButton = null) {
    desktopDropdownButtons.forEach(function (button) {
      if (button === exceptButton) {
        return;
      }

      const dropdown = document.getElementById(
        button.getAttribute("aria-controls"),
      );
      const arrow = button.querySelector(".dropdown-arrow");

      setDropdownOpen(dropdown, arrow, false);
      button.setAttribute("aria-expanded", "false");
    });
  }

  desktopDropdownButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.stopPropagation();

      const dropdown = document.getElementById(
        button.getAttribute("aria-controls"),
      );
      const arrow = button.querySelector(".dropdown-arrow");
      const isOpen = dropdown && dropdown.classList.contains("open");

      closeDesktopDropdowns(button);
      setDropdownOpen(dropdown, arrow, !isOpen);
      button.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  document.querySelectorAll(".desktop-dropdown").forEach(function (dropdown) {
    dropdown.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });

  document.addEventListener("click", function () {
    closeDesktopDropdowns();
  });

  function closeMobileDropdowns(exceptButton = null) {
    mobileDropdownButtons.forEach(function (button) {
      if (button === exceptButton) {
        return;
      }

      const dropdown = document.getElementById(
        button.getAttribute("aria-controls"),
      );
      const arrow = button.querySelector(".dropdown-arrow");

      if (dropdown) {
        dropdown.classList.add("hidden");
      }

      if (arrow) {
        arrow.classList.remove("rotate-180");
      }

      button.setAttribute("aria-expanded", "false");
    });
  }

  function closeMobileMenu() {
    if (!mobileMenu || !mobileMenuButton) {
      return;
    }

    mobileMenu.classList.add("hidden");
    mobileMenuButton.setAttribute("aria-expanded", "false");

    if (mobileMenuIcon) {
      mobileMenuIcon.setAttribute("data-lucide", "menu");
      refreshIcons();
    }

    closeMobileDropdowns();
  }

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      const isOpen = !mobileMenu.classList.contains("hidden");

      if (isOpen) {
        closeMobileMenu();
      } else {
        mobileMenu.classList.remove("hidden");
        mobileMenuButton.setAttribute("aria-expanded", "true");

        if (mobileMenuIcon) {
          mobileMenuIcon.setAttribute("data-lucide", "x");
          refreshIcons();
        }
      }
    });
  }

  mobileDropdownButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const dropdown = document.getElementById(
        button.getAttribute("aria-controls"),
      );
      const arrow = button.querySelector(".dropdown-arrow");
      const isOpen = dropdown && !dropdown.classList.contains("hidden");

      closeMobileDropdowns(button);

      if (!dropdown || !arrow) {
        return;
      }

      dropdown.classList.toggle("hidden", isOpen);
      arrow.classList.toggle("rotate-180", !isOpen);
      button.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });
});
