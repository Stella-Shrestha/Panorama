(function () {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const travelerCount = document.getElementById("travelerCount");
  const summaryTrekkers = document.getElementById("summaryTrekkers");
  const pricePerTrekker = document.getElementById("pricePerTrekker");
  const baseCost = document.getElementById("baseCost");
  const totalCost = document.getElementById("totalCost");
  const paymentDueLabel = document.getElementById("paymentDueLabel");
  const paymentDueCost = document.getElementById("paymentDueCost");
  const remainingBalance = document.getElementById("remainingBalance");
  const paymentNote = document.getElementById("paymentNote");
  const startDateInput = document.getElementById("startDateInput");
  const summaryStartDate = document.getElementById("summaryStartDate");
  const countrySelect = document.getElementById("countrySelect");
  const bookingMessage = document.getElementById("bookingMessage");
  const bookingForm = document.getElementById("bookingForm");
  const bookingStatus = document.getElementById("bookingStatus");
  const paymentOptions = document.querySelectorAll(".payment-option");
  function getPricePerPerson() {
    if (travelers >= 6) return 1550;
    if (travelers >= 3) return 1750;
    return 1950;
  }

  const permitsAndTaxesPerPerson = 0;
  let travelers = Number(travelerCount.textContent) || 1;
  let selectedPayment = "deposit";

  function formatCurrency(value) {
    return "$" + value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  function formatDate(dateValue) {
    if (!dateValue) return "Date not selected";

    return new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(dateValue + "T00:00:00"));
  }

  function getTotals() {
    const pricePerPerson = getPricePerPerson();
    const base = travelers * pricePerPerson;
    const tax = travelers * permitsAndTaxesPerPerson;
    const total = base + tax;
    const dueNow = selectedPayment === "full" ? total : total * 0.25;
    const remaining = total - dueNow;

    return {
      base,
      dueNow,
      remaining,
      tax,
      total,
      pricePerPerson,
    };
  }

  function updateSummary() {
    const totals = getTotals();

    if (
      !travelerCount ||
      !summaryTrekkers ||
      !pricePerTrekker ||
      !baseCost ||
      !totalCost ||
      !paymentDueLabel ||
      !paymentDueCost ||
      !remainingBalance ||
      !paymentNote
    ) {
      return;
    }

    travelerCount.textContent = travelers;
    summaryTrekkers.textContent =
      travelers + (travelers === 1 ? " Adult" : " Adults");
    if (summaryStartDate && startDateInput) {
      summaryStartDate.textContent = formatDate(startDateInput.value);
    }
    pricePerTrekker.textContent = formatCurrency(totals.pricePerPerson);
    baseCost.textContent = formatCurrency(totals.base);
    totalCost.textContent = formatCurrency(totals.total);

    if (selectedPayment === "full") {
      paymentDueLabel.textContent = "Full Payment Due";
      paymentDueCost.textContent = formatCurrency(totals.dueNow);
      remainingBalance.textContent = formatCurrency(totals.remaining);
      paymentNote.textContent =
        "Your full expedition balance will be paid now.";
    } else {
      paymentDueLabel.textContent = "25% Advance Deposit";
      paymentDueCost.textContent = formatCurrency(totals.dueNow);
      remainingBalance.textContent = formatCurrency(totals.remaining);
      paymentNote.textContent =
        "Final balance is due 60 days before departure.";
    }
  }

  function updatePaymentOptions(selectedOption) {
    paymentOptions.forEach((item) => {
      const input = item.querySelector("input[name='payment']");
      const indicator = item.querySelector("[data-payment-indicator]");
      const isSelected = item === selectedOption;

      item.classList.toggle("border-[#F58220]", isSelected);
      item.classList.toggle("bg-[#FFF7ED]", isSelected);
      item.classList.toggle("border-slate-300", !isSelected);
      item.classList.toggle("bg-white", !isSelected);

      if (input) {
        input.checked = isSelected;
        selectedPayment = isSelected ? input.value : selectedPayment;
      }

      if (indicator) {
        indicator.classList.toggle("border-[#F58220]", isSelected);
        indicator.classList.toggle("border-slate-300", !isSelected);
        indicator.classList.toggle(
          "after:absolute",
          isSelected,
        );
        indicator.classList.toggle("after:left-1/2", isSelected);
        indicator.classList.toggle("after:top-1/2", isSelected);
        indicator.classList.toggle("after:h-1.5", isSelected);
        indicator.classList.toggle("after:w-1.5", isSelected);
        indicator.classList.toggle("after:-translate-x-1/2", isSelected);
        indicator.classList.toggle("after:-translate-y-1/2", isSelected);
        indicator.classList.toggle("after:rounded-full", isSelected);
        indicator.classList.toggle("after:bg-[#F58220]", isSelected);
        indicator.classList.toggle("after:content-['']", isSelected);
      }
    });

    updateSummary();
  }

  document.querySelectorAll("[data-traveler-change]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextValue =
        travelers + Number(button.getAttribute("data-traveler-change"));
      travelers = Math.min(12, Math.max(1, nextValue));
      updateSummary();
    });
  });

  paymentOptions.forEach((option) => {
    option.addEventListener("click", () => {
      updatePaymentOptions(option);
    });
  });

  if (startDateInput) {
    startDateInput.addEventListener("change", updateSummary);
  }

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!bookingForm.checkValidity()) {
      bookingStatus.textContent =
        "Please complete the required contact details and select your country.";
      bookingStatus.classList.remove("hidden");
      bookingForm.reportValidity();
      return;
    }

    const totals = getTotals();
    const country = countrySelect.value || "country not selected";
    const message = bookingMessage.value.trim();
    bookingStatus.textContent =
      "Ready for " +
      (selectedPayment === "full" ? "full payment" : "25% deposit") +
      ": " +
      formatCurrency(totals.dueNow) +
      " for " +
      travelers +
      (travelers === 1 ? " trekker" : " trekkers") +
      " from " +
      country +
      " starting " +
      formatDate(startDateInput.value) +
      (message ? ". Message saved with your inquiry." : ".") +
      " Secure payment integration can be connected next.";
    bookingStatus.classList.remove("hidden");
  });

  updateSummary();
})();
