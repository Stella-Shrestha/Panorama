document.addEventListener("DOMContentLoaded", function () {
  const reviews = [
    {
      key: "everest-base",
      route: "Everest Base Camp Trek · Everest Region",
      category: "everest",
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
      category: "annapurna",
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
      category: "manaslu",
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
      category: "everest",
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
      category: "annapurna",
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
      category: "manaslu",
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
    {
      key: "gokyo-lakes",
      route: "Gokyo Lakes Trek · Everest Region",
      category: "everest",
      title: "Crystal turquoise lakes surrounded by giant peaks",
      name: "Sophia Alva",
      initials: "So",
      meta: "Germany · September 2025",
      image: "../Images/Home/everest.png",
      imagePosition: "center top",
      body: [
        "Trekking to Gokyo Lakes was a dream come true. Climbing Gokyo Ri before dawn provided breathtaking vistas of Mount Everest, Lhotse, and Cho Oyu.",
        "The clear blue high-altitude lakes were unlike anything I had seen before. Panorama arranged every tea house stay seamlessly.",
        "Our guide made sure we acclimatized safely and comfortably at every step.",
      ],
      highlight:
        "Standing at Gokyo Ri watching sunrise over four 8,000m peaks was unforgettable.",
    },
    {
      key: "mardi-himal-review",
      route: "Mardi Himal Trek · Annapurna Region",
      category: "annapurna",
      title: "Pristine ridge trail right up to Fishtail mountain",
      name: "Liam Vance",
      initials: "Li",
      meta: "Australia · November 2025",
      image: "../Images/Home/annapurna.png",
      imagePosition: "center top",
      body: [
        "The Mardi Himal ridge trail felt like a hidden paradise. Walking along narrow mountain ridges surrounded by rhododendron trees and close views of Machapuchhre was spectacular.",
        "The tea houses were warm and cozy, and our guide felt like a friend showing us his home mountains.",
        "A short trek with big views. Highly recommended for any nature lover.",
      ],
      highlight:
        "Walking high on the ridge with Fishtail mountain right in front of us was magical.",
    },
    {
      key: "langtang-review",
      route: "Langtang Valley Trek · Everest Region",
      category: "everest",
      title: "Welcoming Tamang culture and serene valley views",
      name: "Hannah Weber",
      initials: "Ha",
      meta: "Austria · October 2025",
      image: "../Images/Home/langtang.png",
      imagePosition: "center top",
      body: [
        "Langtang Valley surprised us with its serene peace, incredible cheese factory in Kyanjin Gompa, and warm mountain hospitality from every tea house owner.",
        "The climb to Kyanjin Ri gave us 360-degree panorama views of Langtang Lirung and surrounding glaciers.",
        "The Panorama team handled permits and logistics effortlessly.",
      ],
      highlight:
        "The peace and authentic valley culture made Langtang a truly special journey.",
    },
    {
      key: "poon-hill-review",
      route: "Ghorepani Poon Hill Trek · Annapurna Region",
      category: "annapurna",
      title: "Golden sunrise over Annapurna and Dhaulagiri",
      name: "Carlos Mendez",
      initials: "Ca",
      meta: "Spain · April 2025",
      image: "../Images/Aboutpage/whychoose.jpg",
      imagePosition: "center top",
      body: [
        "Watching the morning sun illuminate Dhaulagiri and Annapurna from Poon Hill was a highlight of my trip to Nepal. Our guide kept us warm and excited throughout.",
        "The rhododendron blooms in April created vibrant pink and red forest paths along the trail.",
        "A wonderful family-friendly trek that everyone should experience.",
      ],
      highlight:
        "The sunrise over the snow-capped Dhaulagiri range left us completely speechless.",
    },
    {
      key: "island-peak",
      route: "Island Peak Expedition · Everest Region",
      category: "everest",
      title: "An unforgettable summit adventure in Khumbu",
      name: "David Miller",
      initials: "Da",
      meta: "UK · November 2025",
      image: "../Images/Aboutpage/m1.jpg",
      imagePosition: "center top",
      body: [
        "Climbing Island Peak combined scenic trekking with true Himalayan mountaineering. The climbing guide ensured maximum safety with fixed ropes and gear checks.",
        "Standing at 6,189 meters looking across to Lhotse south face was an emotional milestone.",
        "Professional climbing guides and top tier logistics from Panorama made it all possible.",
      ],
      highlight:
        "Safety and professional climbing guidance made our 6,000m summit attempt a success.",
    },
    {
      key: "upper-mustang-review",
      route: "Upper Mustang Trek · Manaslu Region",
      category: "manaslu",
      title: "Exploring the ancient walled kingdom of Lo Manthang",
      name: "Olivia Chen",
      initials: "Ol",
      meta: "Singapore · September 2025",
      image: "../Images/Home/mustang.png",
      imagePosition: "center top",
      body: [
        "Upper Mustang felt like traveling back in time. Deep red canyon walls, ancient cliff caves, and traditional Buddhist monasteries made this a unique adventure.",
        "Our guide explained the Mustang royal history and brought local Tibetan culture alive at every village.",
        "A serene desert landscape unlike anywhere else in Nepal.",
      ],
      highlight:
        "Stepping into the ancient walled city of Lo Manthang felt like entering a living history museum.",
    },
    {
      key: "gosaikunda-review",
      route: "Gosaikunda Lake Trek · Everest Region",
      category: "everest",
      title: "Holy alpine lakes hidden in high mountain passes",
      name: "James Wilson",
      initials: "Ja",
      meta: "USA · May 2025",
      image: "../Images/Home/Background.png",
      imagePosition: "center top",
      body: [
        "The sacred Gosaikunda lakes were breathtaking. The trail climbing past pine forests up to frozen alpine lakes was peaceful and deeply spiritual.",
        "Our guide ensured proper acclimatization so we enjoyed every step without altitude headaches.",
        "Highly recommended for those seeking nature and Himalayan spiritual heritage.",
      ],
      highlight:
        "The alpine lake scenery at 4,380m surrounded by jagged peaks was unforgettable.",
    },
    {
      key: "tilicho-lake",
      route: "Tilicho Lake & Annapurna Circuit · Annapurna Region",
      category: "annapurna",
      title: "Reaching one of the highest lakes in the world",
      name: "Emma Watson",
      initials: "Em",
      meta: "New Zealand · October 2025",
      image: "../Images/Home/annapurna.png",
      imagePosition: "center top",
      body: [
        "Tilicho Lake at 4,919 meters is mindblowing. Surrounded by massive snow walls, the turquoise water looked otherworldly, and our guides looked after us at every step.",
        "The side trip to Tilicho added a thrilling high altitude challenge to our Annapurna Circuit.",
        "Panorama's team ensured top safety across landslides and high altitude passes.",
      ],
      highlight:
        "Standing beside the turquoise waters of high altitude Tilicho Lake was a lifelong memory.",
    },
    {
      key: "khumbu-express",
      route: "Everest Base Camp Helicopter Trek · Everest Region",
      category: "everest",
      title: "Flawless helicopter trek return from Base Camp",
      name: "Arthur Pendelton",
      initials: "Ar",
      meta: "UK · March 2025",
      image: "../Images/Home/everest.png",
      imagePosition: "center top",
      body: [
        "Trekking up to Everest Base Camp and flying back to Kathmandu by helicopter saved time while giving us the most incredible aerial views of Everest.",
        "The organization was flawless. The helicopter ride over Gokyo and Khumbu icefall was a bucket-list finish.",
        "Outstanding service from Panorama team from day one.",
      ],
      highlight:
        "The helicopter flight over the Himalayas was the ultimate finale to a great trek.",
    },
    {
      key: "larkya-pass",
      route: "Manaslu Larkya La Pass · Manaslu Region",
      category: "manaslu",
      title: "Crossing the high Larkya La pass with confidence",
      name: "Lucas Meyer",
      initials: "Lu",
      meta: "Germany · November 2025",
      image: "../Images/Home/manaslu1.png",
      imagePosition: "center top",
      body: [
        "Crossing Larkya La at 5,106m was challenging, but our guide paced us so well that we felt strong and confident all the way to the top.",
        "The views of Manaslu, Himlung Himal, and Cheo Himal from the pass summit were spectacular.",
        "An incredible wilderness trek executed flawlessly by Panorama.",
      ],
      highlight:
        "The sense of achievement at the top of Larkya La pass made every step worth it.",
    },
  ];

  const modal = document.getElementById("reviewModal");
  const closeButton = document.getElementById("reviewModalClose");
  const previousButton = document.getElementById("reviewPrevious");
  const nextButton = document.getElementById("reviewNext");
  const filterButtons = document.querySelectorAll("[data-review-filter]");
  const reviewCards = Array.from(document.querySelectorAll("[data-review-category]"));
  const testimonialPagination = document.getElementById("testimonialPagination");

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

  const itemsPerPage = 6;
  let currentPage = 1;
  let activeIndex = 0;
  let currentCategory = "all";

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
      filterButton.classList.toggle("bg-[#122B55]", isActive);
      filterButton.classList.toggle("text-white", isActive);
      filterButton.classList.toggle("bg-white", !isActive);
      filterButton.classList.toggle("text-slate-600", !isActive);
    });
  }

  function getMatchingCards() {
    const matching = [];
    reviewCards.forEach(function (card) {
      if (currentCategory === "all" || card.dataset.reviewCategory === currentCategory) {
        matching.push(card);
      }
    });
    return matching;
  }

  function renderPagination(totalPages) {
    if (!testimonialPagination) return;
    if (totalPages <= 1) {
      testimonialPagination.innerHTML = "";
      return;
    }

    let html = "";

    // Previous Button
    const prevDisabled = currentPage === 1;
    html += '<button type="button" class="testimonial-page-prev flex h-10 items-center justify-center rounded-lg border px-4 text-xs font-bold transition-all duration-200 ' +
      (prevDisabled ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50' : 'border-slate-200 text-[#122B55] hover:border-[#F58220] hover:text-[#F58220] bg-white shadow-sm') +
      '" ' + (prevDisabled ? 'disabled' : '') + '>Previous</button>';

    // Page Number Buttons
    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === currentPage;
      html += '<button type="button" data-page="' + i + '" class="testimonial-page-btn flex h-10 w-10 items-center justify-center rounded-lg border text-xs font-bold transition-all duration-200 ' +
        (isActive ? 'border-[#F58220] bg-[#F58220] text-white shadow-sm' : 'border-slate-200 bg-white text-[#122B55] hover:border-[#F58220] hover:text-[#F58220] shadow-sm') +
        '">' + i + '</button>';
    }

    // Next Button
    const nextDisabled = currentPage === totalPages;
    html += '<button type="button" class="testimonial-page-next flex h-10 items-center justify-center rounded-lg border px-4 text-xs font-bold transition-all duration-200 ' +
      (nextDisabled ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50' : 'border-slate-200 text-[#122B55] hover:border-[#F58220] hover:text-[#F58220] bg-white shadow-sm') +
      '" ' + (nextDisabled ? 'disabled' : '') + '>Next</button>';

    testimonialPagination.innerHTML = html;

    // Event Listeners
    const prevBtn = testimonialPagination.querySelector(".testimonial-page-prev");
    if (prevBtn && !prevDisabled) {
      prevBtn.addEventListener("click", function () {
        if (currentPage > 1) {
          currentPage--;
          updateTestimonialDisplay(true);
        }
      });
    }

    const nextBtn = testimonialPagination.querySelector(".testimonial-page-next");
    if (nextBtn && !nextDisabled) {
      nextBtn.addEventListener("click", function () {
        if (currentPage < totalPages) {
          currentPage++;
          updateTestimonialDisplay(true);
        }
      });
    }

    const pageBtns = testimonialPagination.querySelectorAll(".testimonial-page-btn");
    pageBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const pageNum = parseInt(btn.dataset.page, 10);
        if (pageNum !== currentPage) {
          currentPage = pageNum;
          updateTestimonialDisplay(true);
        }
      });
    });
  }

  function updateTestimonialDisplay(shouldScroll) {
    const matching = getMatchingCards();
    const totalPages = Math.ceil(matching.length / itemsPerPage);

    if (currentPage > totalPages && totalPages > 0) {
      currentPage = totalPages;
    }
    if (currentPage < 1) {
      currentPage = 1;
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Hide all cards first
    reviewCards.forEach(function (card) {
      card.classList.add("hidden");
    });

    // Show matching cards for current page range
    matching.forEach(function (card, index) {
      if (index >= startIndex && index < endIndex) {
        card.classList.remove("hidden");
      }
    });

    renderPagination(totalPages);

    if (shouldScroll) {
      const reviewsSection = document.getElementById("reviews");
      if (reviewsSection) {
        reviewsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
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
      currentCategory = button.dataset.reviewFilter;
      currentPage = 1;
      updateTestimonialDisplay(false);
    });
  });

  // Initial display call
  updateTestimonialDisplay(false);

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
