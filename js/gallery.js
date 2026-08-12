document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons();

  const categories = [
    { label: "View All", value: "all" },
    { label: "Everest Region", value: "everest" },
    { label: "Annapurna Region", value: "annapurna" },
    { label: "Langtang Region", value: "langtang" },
    { label: "Wilderness Trekking", value: "wilderness" },
    { label: "Homestay Trekking", value: "homestay" },
    { label: "Newly Opened Treks", value: "newly-opened" },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "../Images/Home/everest.png",
      title: "Everest Trails",
      category: "everest",
    },
    {
      id: 2,
      src: "../Images/Home/Background.png",
      title: "Snowline Paths",
      category: "everest",
    },
    {
      id: 3,
      src: "../Images/Home/annapurna.png",
      title: "Annapurna Panorama",
      category: "annapurna",
    },
    {
      id: 4,
      src: "../Images/Home/adventure.png",
      title: "Mardi Himal Ridge",
      category: "annapurna",
    },
    {
      id: 5,
      src: "../Images/Home/manaslu.png",
      title: "Langtang Valley Road",
      category: "langtang",
    },
    {
      id: 6,
      src: "../Images/Home/manaslu1.png",
      title: "Kyanjin Trail",
      category: "langtang",
    },
    {
      id: 7,
      src: "../Images/Home/mustang.png",
      title: "Upper Mustang",
      category: "wilderness",
    },
    {
      id: 8,
      src: "../Images/Home/adventure.png",
      title: "Remote River Crossing",
      category: "wilderness",
    },
    {
      id: 9,
      src: "../Images/Home/team.png",
      title: "Village Welcome",
      category: "homestay",
    },
    {
      id: 10,
      src: "../Images/Home/annapurna.png",
      title: "Community Trail",
      category: "homestay",
    },
    {
      id: 11,
      src: "../Images/Home/annapurna.png",
      title: "New Annapurna Route",
      category: "newly-opened",
    },
    {
      id: 12,
      src: "../Images/Home/manaslu1.png",
      title: "Fresh Himalayan Trail",
      category: "newly-opened",
    },
    {
      id: 13,
      src: "../Images/Home/Background.png",
      title: "New Mountain Viewpoint",
      category: "newly-opened",
    },
  ];

  const filters = document.getElementById("galleryFilters");
  const grid = document.getElementById("galleryGrid");
  const title = document.getElementById("galleryTitle");
  const count = document.getElementById("galleryCount");
  const params = new URLSearchParams(window.location.search);
  const requestedRegion = params.get("region");
  let activeCategory = categories.some(function (category) {
    return category.value === requestedRegion;
  })
    ? requestedRegion
    : "all";

  function getCategoryLabel(categoryValue) {
    const category = categories.find(function (item) {
      return item.value === categoryValue;
    });

    return category ? category.label : "View All";
  }

  function renderFilters() {
    filters.innerHTML = categories
      .map(function (category) {
        const isActive = category.value === activeCategory;
        const activeClasses = isActive 
          ? "bg-[#122B55] text-white border-[#122B55]" 
          : "bg-white text-[#122B55] border-slate-300 hover:border-[#122B55]";
        return `
          <button
            type="button"
            class="gallery-filter shrink-0 rounded-md border px-4 py-2.5 text-sm font-bold transition-colors ${activeClasses}"
            data-category="${category.value}"
            role="tab"
            aria-selected="${isActive}"
          >
            ${category.label}
          </button>
        `;
      })
      .join("");
  }

  function renderGallery() {
    const visibleImages =
      activeCategory === "all"
        ? galleryImages
        : galleryImages.filter(function (image) {
            return image.category === activeCategory;
          });

    title.textContent = getCategoryLabel(activeCategory);
    count.textContent =
      visibleImages.length +
      (visibleImages.length === 1 ? " photo" : " photos");

    grid.innerHTML = visibleImages
      .map(function (image) {
        return `
          <article class="group overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-slate-200">
            <div class="aspect-[4/3] overflow-hidden bg-slate-200">
              <img
                src="${image.src}"
                alt="${image.title}"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="p-4">
              <p class="text-sm font-bold text-[#F58220]">
                ${getCategoryLabel(image.category)}
              </p>
              <h3 class="mt-1 text-lg font-extrabold text-[#122B55]">
                ${image.title}
              </h3>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function setActiveCategory(category) {
    activeCategory = category;
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("region", activeCategory);
    window.history.pushState({}, "", nextUrl);
    renderFilters();
    renderGallery();
  }

  filters.addEventListener("click", function (event) {
    const button = event.target.closest(".gallery-filter");

    if (!button) {
      return;
    }

    setActiveCategory(button.dataset.category);
  });

  window.addEventListener("popstate", function () {
    const nextRegion = new URLSearchParams(window.location.search).get(
      "region",
    );
    activeCategory = categories.some(function (category) {
      return category.value === nextRegion;
    })
      ? nextRegion
      : "all";
    renderFilters();
    renderGallery();
  });

  renderFilters();
  renderGallery();
});
