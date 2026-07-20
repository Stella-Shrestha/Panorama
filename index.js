document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons();

  const desktopDropdownButtons = document.querySelectorAll(
    ".desktop-dropdown-button",
  );

  const mobileMenuButton =
    document.getElementById("mobileMenuButton");

  const mobileMenu = document.getElementById("mobileMenu");

  const mobileMenuIcon =
    document.getElementById("mobileMenuIcon");

  const mobileDropdownButtons = document.querySelectorAll(
    ".mobile-dropdown-button",
  );

  const mobileLinks = document.querySelectorAll(".mobile-link");

  function setDropdownOpen(dropdown, arrow, isOpen) {
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

      const dropdownId = button.getAttribute("aria-controls");
      const dropdown = document.getElementById(dropdownId);
      const arrow = button.querySelector(".dropdown-arrow");

      setDropdownOpen(dropdown, arrow, false);
      button.setAttribute("aria-expanded", "false");
    });
  }

  desktopDropdownButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.stopPropagation();

      const dropdownId = button.getAttribute("aria-controls");
      const dropdown = document.getElementById(dropdownId);
      const arrow = button.querySelector(".dropdown-arrow");

      const isOpen = dropdown.classList.contains("open");

      closeDesktopDropdowns(button);

      setDropdownOpen(dropdown, arrow, !isOpen);
      button.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  document
    .querySelectorAll(".desktop-dropdown")
    .forEach(function (dropdown) {
      dropdown.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    });

  document.addEventListener("click", function () {
    closeDesktopDropdowns();
  });

  function updateMobileMenuIcon(iconName) {
    mobileMenuIcon.setAttribute("data-lucide", iconName);
    lucide.createIcons();
  }

  function closeMobileDropdowns(exceptButton = null) {
    mobileDropdownButtons.forEach(function (button) {
      if (button === exceptButton) {
        return;
      }

      const dropdownId = button.getAttribute("aria-controls");
      const dropdown = document.getElementById(dropdownId);
      const arrow = button.querySelector(".dropdown-arrow");

      dropdown.classList.add("hidden");
      arrow.classList.remove("rotate-180");
      button.setAttribute("aria-expanded", "false");
    });
  }

  function closeMobileMenu() {
    mobileMenu.classList.add("hidden");
    mobileMenuButton.setAttribute("aria-expanded", "false");
    updateMobileMenuIcon("menu");
    closeMobileDropdowns();
  }

  mobileMenuButton.addEventListener("click", function () {
    const isOpen = !mobileMenu.classList.contains("hidden");

    if (isOpen) {
      closeMobileMenu();
    } else {
      mobileMenu.classList.remove("hidden");
      mobileMenuButton.setAttribute("aria-expanded", "true");
      updateMobileMenuIcon("x");
    }
  });

  mobileDropdownButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const dropdownId = button.getAttribute("aria-controls");
      const dropdown = document.getElementById(dropdownId);
      const arrow = button.querySelector(".dropdown-arrow");

      const isOpen = !dropdown.classList.contains("hidden");

      closeMobileDropdowns(button);

      if (isOpen) {
        dropdown.classList.add("hidden");
        arrow.classList.remove("rotate-180");
        button.setAttribute("aria-expanded", "false");
      } else {
        dropdown.classList.remove("hidden");
        arrow.classList.add("rotate-180");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });

  const galleryAlbums = [
    { label: "View All", value: "all" },
    { label: "Everest Region", value: "everest" },
    { label: "Annapurna Region", value: "annapurna" },
    { label: "Langtang Region", value: "langtang" },
    { label: "Wilderness Trekking", value: "wilderness" },
    { label: "Homestay Trekking", value: "homestay" },
    { label: "Newly Opened Treks", value: "newly-opened" },
  ];

  const homeGalleryImages = [
    {
      id: 1,
      src: "./Images/Home/mustang.png",
      title: "Everest Region Lake",
      category: "everest",
    },
    {
      id: 2,
      src: "./Images/Home/everest.png",
      title: "Everest Trails",
      category: "everest",
    },
    {
      id: 3,
      src: "./Images/Home/Background.png",
      title: "Everest Snowline",
      category: "everest",
    },
    {
      id: 4,
      src: "./Images/Home/manaslu.png",
      title: "Annapurna Forest Valley",
      category: "annapurna",
    },
    {
      id: 5,
      src: "./Images/Home/annapurna.png",
      title: "Annapurna Panorama",
      category: "annapurna",
    },
    {
      id: 6,
      src: "./Images/Home/adventure.png",
      title: "Annapurna Ridge Walk",
      category: "annapurna",
    },
    {
      id: 7,
      src: "./Images/Home/team.png",
      title: "Langtang Group Trek",
      category: "langtang",
    },
    {
      id: 8,
      src: "./Images/Home/manaslu1.png",
      title: "Langtang Mountain Trail",
      category: "langtang",
    },
    {
      id: 9,
      src: "./Images/Home/manaslu.png",
      title: "Langtang Remote Valley",
      category: "langtang",
    },
    {
      id: 10,
      src: "./Images/Home/adventure.png",
      title: "Wilderness Trekking",
      category: "wilderness",
    },
    {
      id: 11,
      src: "./Images/Home/mustang.png",
      title: "Upper Mustang Wilderness",
      category: "wilderness",
    },
    {
      id: 12,
      src: "./Images/Home/manaslu1.png",
      title: "Wild Himalayan Route",
      category: "wilderness",
    },
    {
      id: 13,
      src: "./Images/Home/everest.png",
      title: "Homestay Trekking Trail",
      category: "homestay",
    },
    {
      id: 14,
      src: "./Images/Home/team.png",
      title: "Village Welcome",
      category: "homestay",
    },
    {
      id: 15,
      src: "./Images/Home/annapurna.png",
      title: "Community Trek",
      category: "homestay",
    },
    {
      id: 16,
      src: "./Images/Home/annapurna.png",
      title: "Newly Opened Route",
      category: "newly-opened",
    },
    {
      id: 17,
      src: "./Images/Home/Background.png",
      title: "New Mountain Viewpoint",
      category: "newly-opened",
    },
    {
      id: 18,
      src: "./Images/Home/manaslu1.png",
      title: "Fresh Himalayan Trail",
      category: "newly-opened",
    },
  ];

  const galleryOverlay = document.getElementById("homeGalleryOverlay");
  const galleryViewer = document.getElementById("homeGalleryViewer");
  const closeGalleryButton = document.getElementById("closeHomeGallery");
  const fullscreenGalleryButton = document.getElementById(
    "fullscreenHomeGallery",
  );
  const homeGalleryTitle = document.getElementById("homeGalleryTitle");
  const homeGalleryCount = document.getElementById("homeGalleryCount");
  const homeGalleryCaption =
    document.getElementById("homeGalleryCaption");
  const homeGalleryMainImage = document.getElementById(
    "homeGalleryMainImage",
  );
  const homeGalleryThumbnails = document.getElementById(
    "homeGalleryThumbnails",
  );
  const homeGalleryLinks = document.querySelectorAll(
    ".gallery-card",
  );
  let activeGalleryImages = [];
  let activeGalleryImageIndex = 0;
  let lastGalleryWheelTime = 0;
  let galleryWheelDelta = 0;

  function getAlbumLabel(albumValue) {
    const album = galleryAlbums.find(function (item) {
      return item.value === albumValue;
    });

    return album ? album.label : "View All";
  }

  function getAlbumFromHref(href) {
    const url = new URL(href, window.location.href);
    return url.searchParams.get("region") || "all";
  }

  function setActiveHomeGalleryImage(index) {
    const image = activeGalleryImages[index];

    if (!image) {
      return;
    }

    activeGalleryImageIndex = index;
    homeGalleryMainImage.src = image.src;
    homeGalleryMainImage.alt = image.title;
    homeGalleryCaption.textContent = image.title;

    homeGalleryThumbnails
      .querySelectorAll(".home-gallery-thumb")
      .forEach(function (thumbnail) {
        const isActive =
          Number(thumbnail.dataset.index) === activeGalleryImageIndex;
        thumbnail.setAttribute("aria-current", String(isActive));
        thumbnail.classList.toggle("border-[#F58220]", isActive);
        thumbnail.classList.toggle("border-transparent", !isActive);
        thumbnail.classList.toggle("opacity-100", isActive);
        thumbnail.classList.toggle("opacity-70", !isActive);
      });
  }

  function moveHomeGalleryImage(direction) {
    if (!activeGalleryImages.length) {
      return;
    }

    setActiveHomeGalleryImage(
      (activeGalleryImageIndex + direction + activeGalleryImages.length) %
        activeGalleryImages.length,
    );
  }

  function openHomeGallery(albumValue) {
    const safeAlbum = galleryAlbums.some(function (album) {
      return album.value === albumValue;
    })
      ? albumValue
      : "all";

    activeGalleryImages =
      safeAlbum === "all"
        ? homeGalleryImages
        : homeGalleryImages.filter(function (image) {
            return image.category === safeAlbum;
          });

    homeGalleryTitle.textContent = getAlbumLabel(safeAlbum);
    homeGalleryCount.textContent =
      activeGalleryImages.length +
      (activeGalleryImages.length === 1 ? " photo" : " photos");

    homeGalleryThumbnails.innerHTML = activeGalleryImages
      .map(function (image, index) {
        return `
          <button
            type="button"
            class="home-gallery-thumb h-20 w-32 shrink-0 overflow-hidden rounded border-2 border-transparent bg-black opacity-70 shadow-lg transition hover:opacity-100 lg:h-24 lg:w-36"
            data-index="${index}"
            aria-current="false"
            aria-label="Show ${image.title}"
          >
            <img
              src="${image.src}"
              alt=""
              class="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </button>
        `;
      })
      .join("");

    galleryOverlay.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    setActiveHomeGalleryImage(0);
    closeGalleryButton.focus();
  }

  function closeHomeGallery() {
    if (galleryOverlay.classList.contains("hidden")) {
      return;
    }

    galleryOverlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  homeGalleryLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      openHomeGallery(getAlbumFromHref(link.href));
    });
  });

  homeGalleryThumbnails.addEventListener("click", function (event) {
    const thumbnail = event.target.closest(".home-gallery-thumb");

    if (!thumbnail) {
      return;
    }

    setActiveHomeGalleryImage(Number(thumbnail.dataset.index));
  });

  galleryViewer.addEventListener(
    "wheel",
    function (event) {
      if (
        galleryOverlay.classList.contains("hidden") ||
        event.target.closest("#homeGalleryThumbnails")
      ) {
        return;
      }

      const now = Date.now();

      event.preventDefault();

      if (now - lastGalleryWheelTime < 700) {
        return;
      }

      galleryWheelDelta += Math.abs(event.deltaY) > Math.abs(event.deltaX)
        ? event.deltaY
        : event.deltaX;

      if (Math.abs(galleryWheelDelta) < 120) {
        return;
      }

      lastGalleryWheelTime = now;
      const direction = galleryWheelDelta > 0 ? 1 : -1;
      galleryWheelDelta = 0;
      moveHomeGalleryImage(direction);
    },
    { passive: false },
  );

  closeGalleryButton.addEventListener("click", closeHomeGallery);

  galleryOverlay.addEventListener("click", function (event) {
    if (event.target === galleryOverlay) {
      closeHomeGallery();
    }
  });

  fullscreenGalleryButton.addEventListener("click", function () {
    if (!document.fullscreenElement && galleryViewer.requestFullscreen) {
      galleryViewer.requestFullscreen();
      return;
    }

    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeHomeGallery();
      closeDesktopDropdowns();
      closeMobileMenu();
    }

    if (galleryOverlay.classList.contains("hidden")) {
      return;
    }

    if (event.key === "ArrowRight" && activeGalleryImages.length) {
      moveHomeGalleryImage(1);
    }

    if (event.key === "ArrowLeft" && activeGalleryImages.length) {
      moveHomeGalleryImage(-1);
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) {
      closeMobileMenu();
    } else {
      closeDesktopDropdowns();
    }
  });
});
