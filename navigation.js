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

  const destinationItems = [
    {
      label: "Nepal",
      href: "./nepal.html",
      icon: "mountain-snow",
    },
    {
      label: "Tibet",
      href: "#",
      icon: "landmark",
    },
    {
      label: "Bhutan",
      href: "#",
      icon: "trees",
    },
    {
      label: "India",
      href: "#",
      icon: "map-pinned",
    },
  ];

  const travelGuideItems = [
    {
      label: "Travel Insurance",
      href: "./travel-insurance.html",
      icon: "shield-check",
    },
    {
      label: "Trekking Permit & Fee",
      href: "./trekking-permit-fee.html",
      icon: "file-text",
    },
    {
      label: "Visa Info",
      href: "./visa-info.html",
      icon: "stamp",
    },
    {
      label: "Foreign Embassies in Nepal",
      href: "./foreign-embassies.html",
      icon: "landmark",
    },
  ];

  function isTreksLink(link) {
    return link && link.textContent.trim().toLowerCase() === "treks";
  }

  function isTextLink(link, text) {
    return link && link.textContent.trim().toLowerCase() === text.toLowerCase();
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

  function getDesktopDropdownButtonClass(items) {
    if (items.some(function (item) {
      return isCurrentPage(item.href);
    })) {
      return "desktop-dropdown-button inline-flex items-center gap-1 py-3 text-[#F58220]";
    }

    return "desktop-dropdown-button inline-flex items-center gap-1 py-3 transition-colors hover:text-[#F58220]";
  }

  function getMobileDropdownButtonClass(items) {
    if (items.some(function (item) {
      return isCurrentPage(item.href);
    })) {
      return "mobile-dropdown-button flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-[#F58220]";
    }

    return "mobile-dropdown-button flex w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-colors hover:bg-slate-100 hover:text-[#F58220]";
  }

  function getDesktopDropdownLinkClass(href) {
    if (isCurrentPage(href)) {
      return "flex items-center gap-3 rounded-lg bg-orange-50 px-3 py-3 text-sm font-medium text-[#F58220]";
    }

    return "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-orange-50 hover:text-[#F58220]";
  }

  function getMobileDropdownLinkClass(href) {
    if (isCurrentPage(href)) {
      return "mobile-link block rounded-lg bg-white px-3 py-2.5 text-xs font-bold text-[#F58220]";
    }

    return "mobile-link block rounded-lg px-3 py-2.5 text-xs font-medium text-slate-600 hover:bg-white hover:text-[#F58220]";
  }

  function createDesktopDropdown(label, dropdownId, widthClass, items) {
    return (
      '<button type="button" class="' +
      getDesktopDropdownButtonClass(items) +
      '" aria-expanded="false" aria-controls="' +
      dropdownId +
      '">' +
      label +
      ' <i data-lucide="chevron-down" class="dropdown-arrow h-4 w-4 transition-transform duration-200"></i>' +
      "</button>" +
      '<div id="' +
      dropdownId +
      '" class="desktop-dropdown invisible pointer-events-none absolute left-1/2 top-full ' +
      widthClass +
      ' -translate-x-1/2 translate-y-2.5 pt-3 opacity-0 transition-all duration-200">' +
      '<div class="rounded-xl border border-slate-200 bg-white p-3 shadow-xl">' +
      items
        .map(function (item) {
          return (
            '<a href="' +
            item.href +
            '" class="' +
            getDesktopDropdownLinkClass(item.href) +
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

  function createMobileDropdown(label, dropdownId, items) {
    return (
      '<button type="button" class="' +
      getMobileDropdownButtonClass(items) +
      '" aria-expanded="false" aria-controls="' +
      dropdownId +
      '">' +
      "<span>" +
      label +
      '</span><i data-lucide="chevron-down" class="dropdown-arrow h-4 w-4 transition-transform duration-200"></i>' +
      "</button>" +
      '<div id="' +
      dropdownId +
      '" class="mobile-dropdown hidden px-3 pb-3">' +
      '<div class="space-y-1 rounded-xl border border-slate-200 bg-slate-50 p-3">' +
      items
        .map(function (item) {
          return (
            '<a href="' +
            item.href +
            '" class="' +
            getMobileDropdownLinkClass(item.href) +
            '">' +
            item.label +
            "</a>"
          );
        })
        .join("") +
      "</div></div>"
    );
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

  function normalizeDropdownNavigation(config) {
    let desktopItem = document.getElementById(config.desktopId)?.closest("li");

    if (!desktopItem) {
      document.querySelectorAll("nav ul.hidden li > button").forEach(function (button) {
        if (isTextLink(button, config.label)) {
          desktopItem = button.closest("li");
        }
      });
    }

    if (!desktopItem && config.insertAfterText) {
      document.querySelectorAll("nav ul.hidden li > a").forEach(function (link) {
        if (desktopItem || !isTextLink(link, config.insertAfterText)) {
          return;
        }

        const sourceItem = link.closest("li");
        if (sourceItem) {
          desktopItem = document.createElement("li");
          sourceItem.insertAdjacentElement("afterend", desktopItem);
        }
      });
    }

    if (desktopItem) {
      desktopItem.classList.add("relative");
      desktopItem.innerHTML = createDesktopDropdown(
        config.label,
        config.desktopId,
        config.widthClass,
        config.items,
      );
    }

    let mobileItem = document.getElementById(config.mobileId)?.closest("li");

    if (!mobileItem) {
      document.querySelectorAll("#mobileMenu li > button").forEach(function (button) {
        if (isTextLink(button, config.label)) {
          mobileItem = button.closest("li");
        }
      });
    }

    if (!mobileItem && config.insertAfterText) {
      document.querySelectorAll("#mobileMenu li > a").forEach(function (link) {
        if (mobileItem || !isTextLink(link, config.insertAfterText)) {
          return;
        }

        const sourceItem = link.closest("li");
        if (sourceItem) {
          mobileItem = document.createElement("li");
          sourceItem.insertAdjacentElement("afterend", mobileItem);
        }
      });
    }

    if (mobileItem) {
      mobileItem.innerHTML = createMobileDropdown(
        config.label,
        config.mobileId,
        config.items,
      );
    }

    refreshIcons();
  }

  function normalizeContactLinks() {
    document.querySelectorAll("nav a").forEach(function (link) {
      if (!isTextLink(link, "Contact Us")) {
        return;
      }

      link.setAttribute("href", "./contact-us.html");

      if (isCurrentPage("./contact-us.html")) {
        link.setAttribute("aria-current", "page");
        link.classList.add("text-[#F58220]");
      }
    });
  }

  normalizeTreksNavigation();
  normalizeDropdownNavigation({
    label: "Peaks & Expendition",
    desktopId: "destinationsDropdown",
    mobileId: "mobileDestinationsDropdown",
    widthClass: "w-64",
    items: destinationItems,
    insertAfterText: "Day Tours",
  });
  normalizeDropdownNavigation({
    label: "Travel Guide",
    desktopId: "travelGuideDropdown",
    mobileId: "mobileTravelDropdown",
    widthClass: "w-72",
    items: travelGuideItems,
    insertAfterText: "Peaks & Expendition",
  });
  normalizeContactLinks();

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
