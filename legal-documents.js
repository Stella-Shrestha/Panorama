document.addEventListener("DOMContentLoaded", function () {
  const documents = {
    registration: {
      type: "Certificate",
      title: "Company Registration Certificate",
      image: "./Images/Home/details/routes.png",
    },
    license: {
      type: "License",
      title: "Trekking Agency Operating License",
      image: "./Images/Home/details/bg.jpeg",
    },
    exchange: {
      type: "Approval",
      title: "Foreign Exchange Authorization",
      image: "./Images/Home/Background.png",
    },
  };

  const modal = document.getElementById("legalDocumentModal");
  const closeButton = document.getElementById("legalModalClose");
  const documentButtons = document.querySelectorAll(
    ".legal-document-button, .legal-preview-button",
  );

  const fields = {
    image: document.getElementById("modalDocumentImage"),
    type: document.getElementById("modalDocumentType"),
    title: document.getElementById("modalDocumentTitle"),
  };

  function openModal(documentKey) {
    const item = documents[documentKey];

    if (!item || !modal) {
      return;
    }

    fields.image.src = item.image;
    fields.image.alt = item.title;
    fields.type.textContent = item.type;
    fields.title.textContent = item.title;

    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("overflow-hidden");

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function closeModal() {
    if (!modal) {
      return;
    }

    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("overflow-hidden");
  }

  documentButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      openModal(button.dataset.document);
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });
});
