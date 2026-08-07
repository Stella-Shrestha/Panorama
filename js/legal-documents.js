document.addEventListener("DOMContentLoaded", function () {
  const documents = {
    registration: {
      type: "Certificate",
      title: "Companys Registration Certificate",
      image: "../Images/docs/officeregistrar.jpeg",
    },
    license: {
      type: "License",
      title: "Trekking Agency Operating License",
      image: "../Images/docs/Tourism-board.jpeg",
    },
    exchange: {
      type: "Approval",
      title: "Foreign Exchange Authorization",
      image: "../Images/docs/NRB-license.jpeg",
    },
  };

  const modal = document.getElementById("legalDocumentModal");
  const closeButton = document.getElementById("legalModalClose");

  const fields = {
    image: document.getElementById("modalDocumentImage"),
    type: document.getElementById("modalDocumentType"),
    title: document.getElementById("modalDocumentTitle"),
  };

  const header = document.getElementById("modalDocumentHeader");

  function openModal(documentKey) {
    const item = documents[documentKey];

    if (!item || !modal) {
      return;
    }

    fields.image.src = item.image;
    fields.image.alt = item.title;
    if (fields.type) fields.type.textContent = item.type;
    if (fields.title) fields.title.textContent = item.title;
    if (header) header.textContent = item.title;
    if (header) header.textContent = item.title;

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

  document.addEventListener("click", function (event) {
    const documentButton = event.target.closest("[data-document]");

    if (!documentButton) {
      return;
    }

    openModal(documentButton.dataset.document);
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
