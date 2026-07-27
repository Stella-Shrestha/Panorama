document.addEventListener("DOMContentLoaded", function () {
  function renderIcons() {
    if (
      window.lucide &&
      typeof window.lucide.createIcons === "function"
    ) {
      window.lucide.createIcons();
    }
  }

  renderIcons();

  function initElevationTooltip() {
    const tooltip = document.getElementById("elevationTooltip");
    const tooltipLabel = document.getElementById("elevationTooltipLabel");
    const tooltipAltitude = document.getElementById(
      "elevationTooltipAltitude",
    );
    const tooltipBubble = document.getElementById(
      "elevationTooltipBubble",
    );
    const tooltipAccent = document.getElementById(
      "elevationTooltipAccent",
    );
    const tooltipEyebrow = document.getElementById(
      "elevationTooltipEyebrow",
    );
    const tooltipHalo = document.getElementById("elevationTooltipHalo");
    const tooltipMarker = document.getElementById(
      "elevationTooltipMarker",
    );
    const points = document.querySelectorAll(".elevation-point");

    if (
      !tooltip ||
      !tooltipLabel ||
      !tooltipAltitude ||
      !tooltipBubble ||
      !tooltipAccent ||
      !tooltipEyebrow ||
      !tooltipHalo ||
      !tooltipMarker ||
      !points.length
    ) {
      return;
    }

    function showElevationTooltip(point) {
      const x = Number(point.getAttribute("cx"));
      const y = Number(point.getAttribute("cy"));
      const tooltipX = Math.min(Math.max(x - 155, 8), 882);
      const shouldFlipBelow = y < 180;
      const tooltipY = shouldFlipBelow ? y : Math.max(y - 129, 16);

      tooltipLabel.textContent = point.dataset.label;
      tooltipAltitude.textContent = point.dataset.altitude;
      tooltipBubble.setAttribute(
        "d",
        shouldFlipBelow
          ? "M20 21 H134 L155 0 L176 21 H290 Q310 21 310 41 V109 Q310 129 290 129 H20 Q0 129 0 109 V41 Q0 21 20 21 Z"
          : "M0 0 H290 Q310 0 310 20 V88 Q310 108 290 108 H176 L155 129 L134 108 H20 Q0 108 0 88 V20 Q0 0 20 0 Z",
      );
      tooltipAccent.setAttribute("y", shouldFlipBelow ? "39" : "18");
      tooltipEyebrow.setAttribute("y", shouldFlipBelow ? "56" : "35");
      tooltipLabel.setAttribute("y", shouldFlipBelow ? "88" : "67");
      tooltipAltitude.setAttribute("y", shouldFlipBelow ? "121" : "100");
      tooltip.setAttribute(
        "transform",
        "translate(" + tooltipX + " " + tooltipY + ")",
      );

      tooltipHalo.setAttribute("cx", x);
      tooltipHalo.setAttribute("cy", y);
      tooltipMarker.setAttribute("cx", x);
      tooltipMarker.setAttribute("cy", y);

      tooltip.classList.remove("opacity-0");
      tooltip.classList.add("opacity-100");
      tooltipHalo.classList.remove("opacity-0");
      tooltipHalo.classList.add("opacity-100");
      tooltipMarker.classList.remove("opacity-0");
      tooltipMarker.classList.add("opacity-100");
      point.setAttribute("r", "12");
    }

    function hideElevationTooltip(point) {
      tooltip.classList.add("opacity-0");
      tooltip.classList.remove("opacity-100");
      tooltipHalo.classList.add("opacity-0");
      tooltipHalo.classList.remove("opacity-100");
      tooltipMarker.classList.add("opacity-0");
      tooltipMarker.classList.remove("opacity-100");

      if (point) {
        point.setAttribute("r", "10");
      }
    }

    points.forEach(function (point) {
      point.addEventListener("mouseenter", function () {
        showElevationTooltip(point);
      });
      point.addEventListener("focus", function () {
        showElevationTooltip(point);
      });
      point.addEventListener("mouseleave", function () {
        hideElevationTooltip(point);
      });
      point.addEventListener("blur", function () {
        hideElevationTooltip(point);
      });
    });
  }

  initElevationTooltip();

  const dropdownButtons = document.querySelectorAll(
    ".desktop-dropdown-button",
  );

  function setDropdownOpen(dropdown, arrow, isOpen) {
    dropdown.classList.toggle("is-open", isOpen);
    dropdown.classList.toggle("invisible", !isOpen);
    dropdown.classList.toggle("pointer-events-none", !isOpen);
    dropdown.classList.toggle("opacity-0", !isOpen);
    dropdown.classList.toggle("translate-y-2.5", !isOpen);
    arrow.classList.toggle("is-open", isOpen);
    arrow.classList.toggle("rotate-180", isOpen);
  }

  function closeDesktopDropdowns(exceptButton = null) {
    dropdownButtons.forEach(function (button) {
      if (button === exceptButton) return;

      const dropdown = document.getElementById(
        button.getAttribute("aria-controls"),
      );

      const arrow = button.querySelector(".dropdown-arrow");
      if (!dropdown || !arrow) return;

      setDropdownOpen(dropdown, arrow, false);
      button.setAttribute("aria-expanded", "false");
    });
  }

  dropdownButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.stopPropagation();

      const dropdown = document.getElementById(
        button.getAttribute("aria-controls"),
      );

      const arrow = button.querySelector(".dropdown-arrow");
      if (!dropdown || !arrow) return;

      const isOpen = dropdown.classList.contains("is-open");

      closeDesktopDropdowns(button);

      setDropdownOpen(dropdown, arrow, !isOpen);
      button.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  document.addEventListener("click", function () {
    closeDesktopDropdowns();
  });

  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuIcon = document.getElementById("mobileMenuIcon");

  if (mobileMenuButton && mobileMenu && mobileMenuIcon) {
    mobileMenuButton.addEventListener("click", function () {
      const isOpen = !mobileMenu.classList.contains("hidden");

      mobileMenu.classList.toggle("hidden");
      mobileMenuButton.setAttribute("aria-expanded", String(!isOpen));
      mobileMenuIcon.setAttribute("data-lucide", isOpen ? "menu" : "x");

      renderIcons();
    });
  }

  document
    .querySelectorAll(".mobile-dropdown-button")
    .forEach(function (button) {
      button.addEventListener("click", function () {
        const dropdown = document.getElementById(
          button.getAttribute("aria-controls"),
        );
        const arrow = button.querySelector(".dropdown-arrow");
        if (!dropdown) return;

        const isOpen = !dropdown.classList.contains("hidden");
        dropdown.classList.toggle("hidden", isOpen);
        button.setAttribute("aria-expanded", String(!isOpen));

        if (arrow) {
          arrow.classList.toggle("rotate-180", !isOpen);
        }
      });
    });

  function setAccordionOpen(item, isOpen) {
    const content = item.querySelector(".accordion-content");
    const arrow = item.querySelector(".accordion-arrow");
    const badge = item.querySelector(".itinerary-day-badge");
    const isItineraryDay = item.classList.contains("itinerary-day");
    const isEquipmentItem = item.classList.contains("equipment-item");
    const isFaqItem = item.classList.contains("faq-item");

    item.classList.toggle("is-open", isOpen);

    if (content) {
      content.classList.toggle("hidden", !isOpen);
      content.classList.toggle("grid-rows-[1fr]", isOpen);
      content.classList.toggle("grid-rows-[0fr]", !isOpen);
    }

    if (arrow) {
      arrow.classList.toggle("rotate-180", isOpen);
    }

    if (isItineraryDay) {
      item.classList.toggle("border-[#F58220]/45", isOpen);
      item.classList.toggle(
        "shadow-[0_18px_45px_-34px_rgba(245,130,32,0.8)]",
        isOpen,
      );
    }

    if (isEquipmentItem) {
      item.classList.toggle("border-[#F58220]/45", isOpen);
      item.classList.toggle("border-slate-200", !isOpen);
      item.classList.toggle(
        "shadow-[0_18px_45px_-34px_rgba(245,130,32,0.8)]",
        isOpen,
      );
      item.classList.toggle("shadow-sm", !isOpen);
    }

    if (isFaqItem) {
      item.classList.toggle("border-[#F58220]/45", isOpen);
      item.classList.toggle("border-slate-200", !isOpen);
      item.classList.toggle(
        "shadow-[0_18px_45px_-34px_rgba(245,130,32,0.8)]",
        isOpen,
      );
      item.classList.toggle("shadow-sm", !isOpen);
    }

    if (badge) {
      badge.classList.toggle("bg-[#F58220]", isOpen);
      badge.classList.toggle("text-white", isOpen);
      badge.classList.toggle("bg-[#F58220]/10", !isOpen);
      badge.classList.toggle("text-[#F58220]", !isOpen);
    }
  }

  document.querySelectorAll(".accordion-item").forEach(function (item) {
    setAccordionOpen(item, item.classList.contains("is-open"));
  });

  document
    .querySelectorAll(".accordion-button")
    .forEach(function (button) {
      button.addEventListener("click", function () {
        const item = button.closest(".accordion-item");
        if (!item) return;

        setAccordionOpen(item, !item.classList.contains("is-open"));
        updateItineraryToggleLabel();
        updateEquipmentToggleLabel();
        updateFaqToggleLabel();
      });
    });

  const itineraryToggleAll =
    document.getElementById("itineraryToggleAll");
  const itineraryDays = document.querySelectorAll(".itinerary-day");
  const equipmentToggleAll =
    document.getElementById("equipmentToggleAll");
  const equipmentItems = document.querySelectorAll(".equipment-item");
  const faqToggleAll = document.getElementById("faqToggleAll");
  const faqItems = document.querySelectorAll(".faq-item");

  function updateItineraryToggleLabel() {
    if (!itineraryToggleAll || !itineraryDays.length) return;

    const allOpen = Array.from(itineraryDays).every(function (day) {
      return day.classList.contains("is-open");
    });
    const label = itineraryToggleAll.querySelector("span");
    const icon = itineraryToggleAll.querySelector("[data-lucide]");

    label.textContent = allOpen ? "Collapse All" : "Expand All";
    if (icon) {
      icon.setAttribute(
        "data-lucide",
        allOpen ? "chevrons-up" : "chevrons-down",
      );
    }
    renderIcons();
  }

  if (itineraryToggleAll) {
    itineraryToggleAll.addEventListener("click", function () {
      const shouldExpand = !Array.from(itineraryDays).every(
        function (day) {
          return day.classList.contains("is-open");
        },
      );

      itineraryDays.forEach(function (day) {
        setAccordionOpen(day, shouldExpand);
      });
      updateItineraryToggleLabel();
    });

    updateItineraryToggleLabel();
  }

  function updateEquipmentToggleLabel() {
    if (!equipmentToggleAll || !equipmentItems.length) return;

    const allOpen = Array.from(equipmentItems).every(function (item) {
      return item.classList.contains("is-open");
    });
    const label = equipmentToggleAll.querySelector("span");
    const icon = equipmentToggleAll.querySelector("[data-lucide]");

    label.textContent = allOpen ? "Collapse All" : "Expand All";
    if (icon) {
      icon.setAttribute(
        "data-lucide",
        allOpen ? "chevrons-up" : "chevrons-down",
      );
    }
    renderIcons();
  }

  if (equipmentToggleAll) {
    equipmentToggleAll.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      const allOpen = Array.from(equipmentItems).every(function (item) {
        return item.classList.contains("is-open");
      });
      const shouldExpand = !allOpen;

      equipmentItems.forEach(function (item) {
        setAccordionOpen(item, shouldExpand);
      });
      updateEquipmentToggleLabel();
    });

    updateEquipmentToggleLabel();
  }

  function updateFaqToggleLabel() {
    if (!faqToggleAll || !faqItems.length) return;

    const allOpen = Array.from(faqItems).every(function (item) {
      return item.classList.contains("is-open");
    });
    const label = faqToggleAll.querySelector("span");
    const icon = faqToggleAll.querySelector("[data-lucide]");

    label.textContent = allOpen ? "Collapse All" : "Expand All";
    if (icon) {
      icon.setAttribute(
        "data-lucide",
        allOpen ? "chevrons-up" : "chevrons-down",
      );
    }
    renderIcons();
  }

  if (faqToggleAll) {
    faqToggleAll.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      const allOpen = Array.from(faqItems).every(function (item) {
        return item.classList.contains("is-open");
      });
      const shouldExpand = !allOpen;

      faqItems.forEach(function (item) {
        setAccordionOpen(item, shouldExpand);
      });
      updateFaqToggleLabel();
    });

    updateFaqToggleLabel();
  }

  const printPageButton = document.getElementById("printPageButton");

  if (printPageButton) {
    printPageButton.addEventListener("click", function () {
      window.print();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeDesktopDropdowns();
    }
  });
});

(function () {
  function initBookingSidebar() {
    const travelerCount = document.getElementById("travelerCount");
    const estimatedTotal = document.getElementById("estimatedTotal");
    const currentPricePerPerson = document.getElementById(
      "currentPricePerPerson",
    );
    const departureDate = document.getElementById("departureDate");
    const bookingName = document.getElementById("bookingName");
    const bookingEmail = document.getElementById("bookingEmail");
    const sendInquiryButton =
      document.getElementById("sendInquiryButton");
    const inquiryModal = document.getElementById("inquiryModal");
    const closeInquiryModal =
      document.getElementById("closeInquiryModal");
    const inquiryForm = document.getElementById("inquiryForm");
    const inquiryName = document.getElementById("inquiryName");
    const inquiryPhone = document.getElementById("inquiryPhone");
    const inquiryEmail = document.getElementById("inquiryEmail");
    const inquiryCountry = document.getElementById("inquiryCountry");
    const inquiryMessage = document.getElementById("inquiryMessage");
    const inquiryModalStatus = document.getElementById(
      "inquiryModalStatus",
    );
    const whatsappBookingLink = document.getElementById(
      "whatsappBookingLink",
    );
    const bookingStatus = document.getElementById("bookingStatus");
    const bookingPriceTiers = document.querySelectorAll(
      ".booking-price-tier",
    );
    const groupPricingToggle =
      document.getElementById("groupPricingToggle");
    const groupPricingPanel =
      document.getElementById("groupPricingPanel");

    if (!travelerCount || !estimatedTotal || !currentPricePerPerson) {
      return;
    }

    let travelers = Number(travelerCount.textContent) || 2;

    function getPricePerPerson() {
      if (travelers >= 6) return 1550;
      if (travelers >= 3) return 1750;
      return 1950;
    }

    function getBookingMessage(extraDetails = {}) {
      const pricePerPerson = getPricePerPerson();
      const total = travelers * pricePerPerson;
      const selectedDate =
        departureDate && departureDate.value
          ? departureDate.value
          : "Not selected";
      const guestName =
        extraDetails.name ||
        (bookingName && bookingName.value.trim()
          ? bookingName.value.trim()
          : "");
      const guestEmail =
        extraDetails.email ||
        (bookingEmail && bookingEmail.value.trim()
          ? bookingEmail.value.trim()
          : "");

      return [
        "Three Passes Trek Inquiry",
        "Name: " + (guestName || "Not provided"),
        "Email: " + (guestEmail || "Not provided"),
        "Phone: " + (extraDetails.phone || "Not provided"),
        "Country: " + (extraDetails.country || "Not selected"),
        "Departure date: " + selectedDate,
        "Travelers: " + travelers,
        "Price per person: $" + pricePerPerson.toLocaleString(),
        "Estimated total: $" + total.toLocaleString(),
        "",
        "Message:",
        extraDetails.message || "Not provided",
      ].join("\n");
    }

    function openInquiryModal() {
      if (!inquiryModal) return;

      if (inquiryName && bookingName) {
        inquiryName.value = bookingName.value;
      }

      if (inquiryEmail && bookingEmail) {
        inquiryEmail.value = bookingEmail.value;
      }

      if (inquiryMessage && !inquiryMessage.value.trim()) {
        inquiryMessage.value =
          "Hi Panorama Trekking, I would like to inquire about the Everest Base Camp Hike for " +
          travelers +
          (travelers === 1 ? " traveler." : " travelers.");
      }

      inquiryModal.classList.remove("hidden");
      inquiryModal.classList.add("flex");
      document.body.classList.add("overflow-hidden");

      if (inquiryName) {
        inquiryName.focus();
      }
    }

    function closeInquiryModalPanel() {
      if (!inquiryModal) return;

      inquiryModal.classList.add("hidden");
      inquiryModal.classList.remove("flex");
      document.body.classList.remove("overflow-hidden");

      if (sendInquiryButton) {
        sendInquiryButton.focus();
      }
    }

    function getInquiryDetails() {
      return {
        name:
          inquiryName && inquiryName.value.trim()
            ? inquiryName.value.trim()
            : "",
        phone:
          inquiryPhone && inquiryPhone.value.trim()
            ? inquiryPhone.value.trim()
            : "",
        email:
          inquiryEmail && inquiryEmail.value.trim()
            ? inquiryEmail.value.trim()
            : "",
        country:
          inquiryCountry && inquiryCountry.value
            ? inquiryCountry.value
            : "",
        message:
          inquiryMessage && inquiryMessage.value.trim()
            ? inquiryMessage.value.trim()
            : "",
      };
    }

    function syncHiddenInquiryFields(details) {
      if (bookingName) {
        bookingName.value = details.name;
      }

      if (bookingEmail) {
        bookingEmail.value = details.email;
      }
    }

    function getLegacyBookingMessage() {
      const pricePerPerson = getPricePerPerson();
      const total = travelers * pricePerPerson;
      const selectedDate =
        departureDate && departureDate.value
          ? departureDate.value
          : "Not selected";
      const guestName =
        bookingName && bookingName.value.trim()
          ? bookingName.value.trim()
          : "Not provided";
      const guestEmail =
        bookingEmail && bookingEmail.value.trim()
          ? bookingEmail.value.trim()
          : "Not provided";

      return [
        "Three Passes Trek Inquiry",
        "Name: " + guestName,
        "Email: " + guestEmail,
        "Departure date: " + selectedDate,
        "Travelers: " + travelers,
        "Price per person: $" + pricePerPerson.toLocaleString(),
        "Estimated total: $" + total.toLocaleString(),
      ].join("\n");
    }

    function updateTravelerPrice() {
      const pricePerPerson = getPricePerPerson();
      const total = travelers * pricePerPerson;
      const activeTier =
        travelers >= 6 ? "6" : travelers >= 3 ? "3" : "1";

      travelerCount.textContent = travelers;
      estimatedTotal.textContent = "$" + total.toLocaleString();
      currentPricePerPerson.textContent =
        "$" + pricePerPerson.toLocaleString() + " per person";

      if (whatsappBookingLink) {
        whatsappBookingLink.href =
          "https://wa.me/9779841373860?text=" +
          encodeURIComponent(getLegacyBookingMessage());
      }

      bookingPriceTiers.forEach(function (tier) {
        const isActive = tier.dataset.priceTier === activeTier;
        tier.classList.toggle("bg-white", isActive);
        tier.classList.toggle("text-[#F58220]", isActive);
        tier.classList.toggle("shadow-sm", isActive);
      });
    }

    function setGroupPricingOpen(isOpen) {
      if (!groupPricingToggle || !groupPricingPanel) return;

      const chevron = groupPricingToggle.querySelector(
        ".group-pricing-chevron",
      );

      groupPricingToggle.setAttribute("aria-expanded", String(isOpen));
      groupPricingPanel.classList.toggle("hidden", !isOpen);

      if (chevron) {
        chevron.classList.toggle("rotate-180", !isOpen);
      }
    }

    document
      .querySelectorAll("[data-booking-change]")
      .forEach(function (button) {
        button.addEventListener("click", function () {
          const change = Number(button.dataset.bookingChange);
          if (!Number.isFinite(change)) return;

          travelers = Math.min(20, Math.max(1, travelers + change));
          updateTravelerPrice();
        });
      });

    [departureDate, bookingName, bookingEmail].forEach(function (field) {
      if (!field) return;
      field.addEventListener("input", updateTravelerPrice);
    });

    if (sendInquiryButton) {
      sendInquiryButton.addEventListener("click", function () {
        openInquiryModal();
      });
    }

    if (closeInquiryModal) {
      closeInquiryModal.addEventListener(
        "click",
        closeInquiryModalPanel,
      );
    }

    if (inquiryModal) {
      inquiryModal.addEventListener("click", function (event) {
        if (event.target === inquiryModal) {
          closeInquiryModalPanel();
        }
      });
    }

    document.addEventListener("keydown", function (event) {
      if (
        event.key === "Escape" &&
        inquiryModal &&
        !inquiryModal.classList.contains("hidden")
      ) {
        closeInquiryModalPanel();
      }
    });

    if (inquiryForm) {
      inquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const inquiryDetails = getInquiryDetails();
        syncHiddenInquiryFields(inquiryDetails);

        if (bookingStatus) {
          bookingStatus.textContent =
            "Opening your email app with the trek inquiry details.";
          bookingStatus.classList.remove("hidden");
        }

        if (inquiryModalStatus) {
          inquiryModalStatus.textContent =
            "Opening your email app with the trek inquiry details.";
          inquiryModalStatus.classList.remove("hidden");
        }

        window.location.href =
          "mailto:info@panoramatrekking.com?subject=" +
          encodeURIComponent("Three Passes Trek Inquiry") +
          "&body=" +
          encodeURIComponent(getBookingMessage(inquiryDetails));
      });
    }

    if (groupPricingToggle && groupPricingPanel) {
      groupPricingToggle.addEventListener("click", function () {
        const isOpen =
          groupPricingToggle.getAttribute("aria-expanded") === "true";
        setGroupPricingOpen(!isOpen);
      });
    }

    updateTravelerPrice();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBookingSidebar);
  } else {
    initBookingSidebar();
  }
})();

(function () {
  function initSecondaryTripNav() {
    const siteHeader = document.getElementById("siteHeader");
    const mainNavigation = document.getElementById("mainNavigation");
    const secondaryTripNav = document.getElementById("secondaryTripNav");
    const overviewSection = document.getElementById("overview");
    const secondaryNavLinks = document.querySelectorAll(
      ".secondary-nav-link",
    );

    if (!mainNavigation || !secondaryTripNav || !overviewSection) {
      return;
    }

    document.body.appendChild(secondaryTripNav);

    function hasReachedOverviewSection() {
      const mainNavHeight = mainNavigation.offsetHeight || 0;
      const overviewTop = overviewSection.getBoundingClientRect().top;

      return overviewTop <= mainNavHeight;
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

      if (targetId === "highlights") {
        const groupPricingToggle =
          document.getElementById("groupPricingToggle");
        const groupPricingPanel =
          document.getElementById("groupPricingPanel");
        const groupPricingChevron = document.querySelector(
          ".group-pricing-chevron",
        );

        if (groupPricingToggle && groupPricingPanel) {
          groupPricingToggle.setAttribute("aria-expanded", "false");
          groupPricingPanel.classList.add("hidden");
        }

        if (groupPricingChevron) {
          groupPricingChevron.classList.add("rotate-180");
        }
      }
    }

    function setPrimaryNavigationVisible(isVisible) {
      [siteHeader, mainNavigation].forEach(function (element) {
        if (!element) return;

        if (isVisible) {
          element.style.removeProperty("display");
        } else {
          element.style.setProperty("display", "none", "important");
        }

        element.style.setProperty("opacity", isVisible ? "1" : "0");
        element.style.setProperty(
          "pointer-events",
          isVisible ? "auto" : "none",
        );
        element.style.setProperty(
          "transform",
          isVisible ? "translateY(0)" : "translateY(-100%)",
        );
        element.style.setProperty(
          "visibility",
          isVisible ? "visible" : "hidden",
        );
      });
    }

    function setSecondaryNavigationVisible(isVisible) {
      secondaryTripNav.style.setProperty(
        "display",
        isVisible ? "block" : "none",
        "important",
      );
      secondaryTripNav.style.setProperty("position", "fixed");
      secondaryTripNav.style.setProperty("top", "0");
      secondaryTripNav.style.setProperty("left", "0");
      secondaryTripNav.style.setProperty("right", "0");
      secondaryTripNav.style.setProperty("width", "100%");
      secondaryTripNav.style.setProperty("z-index", "9999");
      secondaryTripNav.style.setProperty(
        "visibility",
        isVisible ? "visible" : "hidden",
      );
      secondaryTripNav.style.setProperty("opacity", isVisible ? "1" : "0");
      secondaryTripNav.style.setProperty(
        "pointer-events",
        isVisible ? "auto" : "none",
      );
      secondaryTripNav.style.setProperty("transform", "translateY(0)");
    }

    function syncTripNavigation() {
      const shouldShowSecondary = hasReachedOverviewSection();

      document.body.classList.toggle(
        "show-secondary-nav",
        shouldShowSecondary,
      );
      document.body.dataset.tripNav =
        shouldShowSecondary ? "secondary" : "primary";
      setPrimaryNavigationVisible(!shouldShowSecondary);
      setSecondaryNavigationVisible(shouldShowSecondary);
    }

    secondaryNavLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        const targetId = link.getAttribute("href").slice(1);
        const target = document.getElementById(targetId);

        if (!target) return;

        event.preventDefault();
        document.body.classList.add("show-secondary-nav");
        setActiveSecondaryLink(targetId);
        setPrimaryNavigationVisible(false);
        setSecondaryNavigationVisible(true);

        const navHeight = secondaryTripNav.offsetHeight || 0;
        const targetTop =
          target.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: Math.max(targetTop - navHeight - 18, 0),
          behavior: "smooth",
        });

        if (window.history && window.history.pushState) {
          window.history.pushState(null, "", "#" + targetId);
        }
      });
    });

    window.addEventListener("scroll", syncTripNavigation, {
      passive: true,
    });
    window.addEventListener("resize", function () {
      syncTripNavigation();
    });
    window.addEventListener("load", function () {
      syncTripNavigation();
    });

    syncTripNavigation();

    if ("IntersectionObserver" in window) {
      const linkedSections = Array.from(secondaryNavLinks)
        .map(function (link) {
          return document.getElementById(
            link.getAttribute("href").slice(1),
          );
        })
        .filter(Boolean);

      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              setActiveSecondaryLink(entry.target.id);
            }
          });
        },
        {
          rootMargin: "-25% 0px -65% 0px",
        },
      );

      linkedSections.forEach(function (section) {
        observer.observe(section);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSecondaryTripNav);
  } else {
    initSecondaryTripNav();
  }
})();
