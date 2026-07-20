document.addEventListener("DOMContentLoaded", function () {
  if (window.lucide) {
    window.lucide.createIcons();
  }

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
