document.addEventListener("DOMContentLoaded", function () {
  const reviews = [
    {
      key: "everest-base",
      route: "Everest Base Camp Trek · Everest Region",
      title: "A journey that exceeded every expectation",
      name: "Emilie Laurent",
      initials: "Em",
      meta: "France · October 2025",
      image: "../Images/Home/everest.png",
      imagePosition: "center top",
      body: [
        "From the moment we arrived in Kathmandu, the organization was smooth and reassuring. The airport transfer, hotel arrangements and trek briefing were all handled professionally. The team answered every question clearly and helped us prepare before leaving for Lukla.",
        "During the trek, our guide paid close attention to our walking pace, appetite and altitude response. He never rushed us and always explained what to expect the following day. His knowledge of Sherpa culture, local villages and mountain history added real depth to the journey.",
        "Reaching Everest Base Camp was emotional, but the entire route was equally memorable. The support of our guide and porter made the challenge manageable and enjoyable. I returned home feeling proud, grateful and deeply connected to Nepal.",
      ],
      highlight:
        "The strongest part of the journey was the personal care shown by the guide throughout the trek.",
    },
    {
      key: "annapurna-circuit",
      route: "Annapurna Circuit Trek · Annapurna Region",
      title: "Beautiful landscapes and excellent organization",
      name: "Thomas Bernard",
      initials: "Th",
      meta: "Belgium · April 2025",
      image: "../Images/Home/annapurna.png",
      imagePosition: "center top",
      body: [
        "From our arrival in Kathmandu to the final day of the trek, every transfer, lodge and meal was carefully arranged. The changing scenery from green valleys to high mountain landscapes was unforgettable.",
        "Our guide helped us understand the rhythm of the route and made sure we had enough time to acclimatize. We always felt informed and supported without losing the sense of adventure.",
        "The Annapurna Circuit was more than a trek for us. It was a complete cultural and mountain experience, and Panorama made it feel personal.",
      ],
      highlight:
        "The organization gave us freedom to enjoy the mountains without worrying about the details.",
    },
    {
      key: "manaslu-circuit",
      route: "Manaslu Circuit Trek · Manaslu Region",
      title: "A remote trek with exceptional local support",
      name: "Isabelle Martin",
      initials: "Is",
      meta: "Switzerland · November 2025",
      image: "../Images/Home/manaslu1.png",
      imagePosition: "center top",
      body: [
        "Manaslu felt authentic, peaceful and far from crowded trails. The route passed through villages and valleys that felt deeply connected to local life.",
        "Our guide's understanding of the route, mountain conditions and communities made the experience very special. He knew when to slow down, when to encourage us and how to keep the group comfortable.",
        "This trek was remote, but we never felt alone. The support team was careful, kind and professional from start to finish.",
      ],
      highlight:
        "The local knowledge transformed a remote trek into a safe and meaningful journey.",
    },
    {
      key: "three-passes",
      route: "Everest Three Passes Trek · Everest Region",
      title: "Challenging, safe and incredibly rewarding",
      name: "Daniel Moreau",
      initials: "Da",
      meta: "Canada · October 2024",
      image: "../Images/Home/Background.png",
      imagePosition: "center top",
      body: [
        "The Three Passes route was physically demanding, but our guide managed the pace and acclimatization perfectly. Every long day felt achievable because the plan was realistic.",
        "We crossed high passes, visited quiet villages and saw some of the most dramatic views I have ever experienced. The team checked on us constantly and kept morale high.",
        "I would recommend this route with Panorama to anyone who wants a real challenge with careful support.",
      ],
      highlight:
        "The team balanced challenge and safety better than any expedition I have joined.",
    },
    {
      key: "annapurna-base",
      route: "Annapurna Base Camp Trek · Annapurna Region",
      title: "The perfect first trekking experience",
      name: "Claire Dubois",
      initials: "Cl",
      meta: "France · March 2025",
      image: "../Images/Home/mustang.png",
      imagePosition: "center top",
      body: [
        "This was my first multi-day trek, and the team made everything feel simple and comfortable. I was nervous before arriving, but the preparation and briefing helped a lot.",
        "The route, food and accommodation were better than expected. Our guide was patient and gave us confidence on every uphill section.",
        "Annapurna Base Camp was breathtaking, and I am already thinking about returning for another trek.",
      ],
      highlight:
        "For a first trek, I could not have asked for better care or a better route.",
    },
    {
      key: "tsum-valley",
      route: "Tsum Valley Trek · Manaslu Region",
      title: "Culture, mountains and genuine hospitality",
      name: "Marco Rossi",
      initials: "Ma",
      meta: "Italy · May 2025",
      image: "../Images/Home/manaslu.png",
      imagePosition: "center top",
      body: [
        "The Tsum Valley journey offered much more than beautiful scenery. We met local families, visited monasteries and learned about traditions along the route.",
        "The team introduced us respectfully to communities and explained the cultural background with patience. The experience felt genuine and never rushed.",
        "This trek gave me a deeper appreciation for Nepal and for the people who live in the mountains.",
      ],
      highlight:
        "The hospitality and cultural connection stayed with me long after the trek ended.",
    },
  ];

  const modal = document.getElementById("reviewModal");
  const closeButton = document.getElementById("reviewModalClose");
  const previousButton = document.getElementById("reviewPrevious");
  const nextButton = document.getElementById("reviewNext");
  const reviewButtons = document.querySelectorAll(".review-button");
  const filterButtons = document.querySelectorAll("[data-review-filter]");
  const reviewCards = document.querySelectorAll("[data-review-category]");
  const fields = {
    image: document.getElementById("modalReviewImage"),
    route: document.getElementById("modalReviewRoute"),
    title: document.getElementById("modalReviewTitle"),
    avatar: document.getElementById("modalReviewAvatar"),
    name: document.getElementById("modalReviewName"),
    meta: document.getElementById("modalReviewMeta"),
    body: document.getElementById("modalReviewBody"),
    highlight: document.getElementById("modalReviewHighlight"),
    counter: document.getElementById("reviewCounter"),
  };
  let activeIndex = 0;

  function renderReview(index) {
    const review = reviews[index];
    activeIndex = index;

    if (fields.image) {
      fields.image.src = review.image;
      fields.image.alt = review.route;
      fields.image.style.objectPosition = review.imagePosition || "center top";
    }
    if (fields.route) fields.route.textContent = review.route;
    if (fields.title) fields.title.textContent = review.title;
    if (fields.avatar) {
      fields.avatar.src = review.image;
      fields.avatar.alt = review.name + " review";
      fields.avatar.style.objectPosition = review.imagePosition || "center top";
    }
    if (fields.name) fields.name.textContent = review.name;
    if (fields.meta) fields.meta.textContent = review.meta;
    if (fields.body) {
      fields.body.innerHTML = review.body
        .map(function (paragraph) {
          return "<p>" + paragraph + "</p>";
        })
        .join("");
    }
    if (fields.highlight) fields.highlight.textContent = review.highlight;
    if (fields.counter) {
      fields.counter.textContent =
        "Review " + (index + 1) + " of " + reviews.length;
    }
  }

  function openModal(reviewKey) {
    const index = reviews.findIndex(function (review) {
      return review.key === reviewKey;
    });

    if (!modal) {
      return;
    }

    renderReview(index >= 0 ? index : 0);
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

  function setActiveFilter(button) {
    filterButtons.forEach(function (filterButton) {
      const isActive = filterButton === button;

      filterButton.setAttribute("aria-pressed", String(isActive));
    });
  }

  function filterReviews(category) {
    reviewCards.forEach(function (card) {
      const shouldShow =
        category === "all" || card.dataset.reviewCategory === category;

      card.classList.toggle("hidden", !shouldShow);
    });
  }

  document.addEventListener("click", function (event) {
    const reviewButton = event.target.closest(".review-button");

    if (!reviewButton) {
      return;
    }

    event.preventDefault();
    openModal(reviewButton.dataset.review);
  });

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setActiveFilter(button);
      filterReviews(button.dataset.reviewFilter);
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  if (previousButton) {
    previousButton.addEventListener("click", function () {
      renderReview((activeIndex - 1 + reviews.length) % reviews.length);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", function () {
      renderReview((activeIndex + 1) % reviews.length);
    });
  }

  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
});
