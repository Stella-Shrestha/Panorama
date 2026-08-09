document.addEventListener("DOMContentLoaded", function () {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const blogPosts = [
    {
      key: "poon-hill",
      title: "Best Time for Poon Hill Trek",
      category: "Trekking Guides",
      author: "Panorama Trekking Team",
      meta: "Aug 05, 2026",
      image: "../Images/Home/annapurna.png",
      imagePosition: "center",
      body: [
        "The Poon Hill trek is one of Nepal's most rewarding short journeys, especially for travelers who want big mountain views without committing to a long expedition.",
        "Spring brings rhododendron forests and warmer days, while autumn usually offers the clearest skies. Winter can be quiet and crisp, but trekkers should prepare for cold mornings and possible snow at higher points.",
        "For most travelers, March to May and September to November offer the best balance of visibility, comfortable trail conditions, and village life along the route.",
      ],
      highlight:
        "Choose the season around what matters most to you: flowers, clear views, fewer crowds, or quieter trails.",
    },
    {
      key: "discover-nepal",
      title: "Discover the Enchanting Beauty of Nepal: A Trekker's Paradise",
      category: "Stories",
      author: "Panorama Trekking Team",
      meta: "Aug 02, 2026",
      image: "../Images/Home/Background.png",
      imagePosition: "center",
      body: [
        {
          text: "Nepal, nestled in the heart of the majestic Himalayas, stands as a testament to nature's grandeur and allure. For those seeking the ultimate adventure, Nepal's diverse landscapes, towering peaks, and rich cultural tapestry make it a heaven for trekking enthusiasts. Join us as we unveil the unparalleled beauty and elegance that make Nepal a trekker's paradise.",
        },
        {
          heading: "Embracing the Peaks: Everest Region",
          text: "Imagine standing beneath the world's highest peak, Mount Everest. The Everest region captivates with its awe-inspiring vistas and challenging trails. As you traverse through quaint Sherpa villages, each step brings you closer to the summit. The Khumbu Glacier, the Sherpa culture, and the vibrant prayer flags adorning the landscape create an atmosphere of unparalleled beauty and spiritual energy.",
        },
        {
          heading: "Annapurna Region: Where Tranquility Meets Majesty",
          text: "In the heart of Nepal lies the Annapurna region, a heaven for those seeking a harmonious blend of natural beauty and cultural richness. Towering peaks like Annapurna and Machapuchhre frame the horizon, while the diverse flora and fauna enchant every step of the journey. From terraced fields to rhododendron forests, the Annapurna region promises a trekking experience that is both breathtaking and rejuvenating.",
        },
        {
          heading: "Langtang Valley: A Symphony of Serenity",
          text: "For those yearning for a trek that combines alpine meadows, dense forests, and ancient monasteries, Langtang Valley beckons. The Langtang region is a sanctuary of tranquility, with its picturesque landscapes and the welcoming hospitality of the Tamang community. Each trail offers a glimpse into the unique culture and unparalleled beauty that defines the Langtang Valley.",
        },
        {
          heading: "Manaslu Circuit: The Hidden Gem",
          text: "Venture off the beaten path to the Manaslu Circuit, a hidden gem that offers a pristine trekking experience. Remote villages, panoramic mountain views, and the challenge of crossing the Larkya La pass make this trek an adventurer's dream. Discover the untamed beauty of Manaslu as you traverse through diverse landscapes and immerse yourself in the raw allure of the Himalayas.",
        },
        {
          heading: "Why Choose Panorama Himalaya Trekking & Expedition?",
          text: "In the world of trekking and expeditions, customer satisfaction is paramount. At Panorama treks, we take pride in our near-perfect track record, with almost zero negative feedback. Our experienced guides, personalized itineraries, and commitment to responsible tourism ensure that your trekking experience not only meets but exceeds expectations. Join us, and let the mountains of Nepal become the backdrop for memories that last a lifetime.",
        },
        {
          heading: "In Conclusion",
          text: "Nepal, with its diverse landscapes and majestic peaks, is a treasure trove for trekking enthusiasts. Whether you seek the challenge of Everest, the tranquility of Annapurna, the serenity of Langtang, or the hidden wonders of Manaslu, Nepal offers an adventure like no other. At Panorama treks, we invite you to embark on a journey that transcends the ordinary-a journey into the heart of the Himalayas.",
        },
      ],
      highlight: "Discover the Enchanting Beauty of Nepal: A Trekker's Paradise",
    },
    {
      key: "everest-cost",
      title: "Everest Base Camp Trek Cost",
      category: "Travel Tips",
      author: "Panorama Trekking Team",
      meta: "Jul 27, 2026",
      image: "../Images/Home/everest.png",
      imagePosition: "left top",
      body: [
        "The cost of an Everest Base Camp trek depends on the route, service level, guide support, domestic flights, permits, meals, and how many buffer days you include.",
        "Travelers should budget for Sagarmatha National Park entry, local permits, Lukla flights, guide and porter wages, accommodation, hot showers, charging, snacks, and emergency flexibility.",
        "A clear budget before departure helps avoid surprises on the trail and makes the trek feel calmer from Kathmandu to Base Camp and back.",
      ],
      highlight:
        "The best Everest budget is realistic, transparent, and leaves room for weather delays.",
    },
    {
      key: "manaslu-guide",
      title: "Manaslu Circuit Trek Guide",
      category: "Trekking Guides",
      author: "Panorama Trekking Team",
      meta: "Jul 21, 2026",
      image: "../Images/Home/manaslu1.png",
      imagePosition: "center",
      body: [
        "The Manaslu Circuit is a remote and dramatic route with deep river valleys, traditional villages, high passes, and views that feel far from the busier trekking corridors.",
        "Because Manaslu is a restricted region, trekkers need special permits and must travel with a licensed guide. Planning the itinerary carefully is important for acclimatization before Larkya La Pass.",
        "For trekkers who want culture, solitude, and a serious Himalayan crossing, Manaslu is one of Nepal's most complete adventures.",
      ],
      highlight:
        "Manaslu rewards careful preparation with quiet trails, strong culture, and unforgettable mountain scenery.",
    },
    {
      key: "upper-mustang",
      title: "Upper Mustang Travel Notes",
      category: "Culture",
      author: "Panorama Trekking Team",
      meta: "Jul 16, 2026",
      image: "../Images/Home/mustang.png",
      imagePosition: "center",
      body: [
        "Upper Mustang feels different from the green valleys many travelers imagine when they think of Nepal. Its dry cliffs, cave settlements, monasteries, and walled villages create a landscape shaped by history.",
        "The region requires a restricted-area permit, and the best months often include spring, autumn, and even monsoon, when much of Mustang stays in the rain shadow.",
        "A journey here is as much about culture as scenery, with Tibetan-influenced traditions, ancient routes, and quiet desert horizons.",
      ],
      highlight:
        "Upper Mustang is ideal for travelers who want history, culture, and a landscape unlike anywhere else in Nepal.",
    },
    {
      key: "altitude-training",
      title: "How to Train for High Altitude",
      category: "Travel Tips",
      author: "Panorama Trekking Team",
      meta: "Jul 09, 2026",
      image: "../Images/Aboutpage/whychoose.jpg",
      imagePosition: "center",
      body: [
        "Training for altitude is less about extreme fitness and more about steady endurance, strong legs, and learning how to move at a sustainable pace for several days in a row.",
        "Long walks, stair climbs, light strength training, and hiking with a daypack can prepare your body for the rhythm of trekking. Good hydration and rest habits matter just as much on the trail.",
        "Once in the mountains, the smartest trekkers go slowly, listen to their guide, eat well, and respect acclimatization days.",
      ],
      highlight:
        "The best altitude strategy is simple: arrive prepared, walk slowly, and give your body time to adapt.",
    },
  ];

  const blogPostModal = document.getElementById("blogPostModal");
  const blogPostModalClose = document.getElementById("blogPostModalClose");
  const blogCategorySelect = document.getElementById("blogCategory");
  const blogCards = document.querySelectorAll("[data-blog-category]");
  const blogReadMoreLinks = document.querySelectorAll(".blog-read-more");
  const blogModalFields = {
    image: document.getElementById("modalBlogImage"),
    title: document.getElementById("modalBlogTitle"),
    category: document.getElementById("modalBlogCategory"),
    avatar: document.getElementById("modalBlogAvatar"),
    author: document.getElementById("modalBlogAuthor"),
    meta: document.getElementById("modalBlogMeta"),
    rating: document.getElementById("modalBlogRating"),
    body: document.getElementById("modalBlogBody"),
    highlight: document.getElementById("modalBlogHighlight"),
  };

  function renderBlogPost(blogKey) {
    const post =
      blogPosts.find(function (blogPost) {
        return blogPost.key === blogKey;
      }) || blogPosts[0];

    if (blogModalFields.image) {
      blogModalFields.image.src = post.image;
      blogModalFields.image.alt = post.title;
      blogModalFields.image.style.objectPosition =
        post.imagePosition || "center";
    }
    if (blogModalFields.title) blogModalFields.title.textContent = post.title;
    if (blogModalFields.category) {
      blogModalFields.category.textContent = post.category;
    }
    if (blogModalFields.avatar) {
      blogModalFields.avatar.src = post.image;
      blogModalFields.avatar.alt = post.author;
      blogModalFields.avatar.style.objectPosition =
        post.imagePosition || "center";
    }
    if (blogModalFields.author) blogModalFields.author.textContent = post.author;
    if (blogModalFields.meta) blogModalFields.meta.textContent = post.meta;
    if (blogModalFields.rating) {
      blogModalFields.rating.textContent =
        post.key === "discover-nepal" ? "★★★★★" : "";
    }
    if (blogModalFields.body) {
      blogModalFields.body.innerHTML = post.body
        .map(function (entry) {
          if (typeof entry === "string") {
            return "<p>" + entry + "</p>";
          }

          const heading = entry.heading
            ? '<h4 class="mt-5 text-sm font-black leading-6 text-[#122B55] md:text-base">' +
              entry.heading +
              "</h4>"
            : "";

          return heading + "<p>" + entry.text + "</p>";
        })
        .join("");
    }
    if (blogModalFields.highlight) {
      blogModalFields.highlight.textContent = post.highlight;
      blogModalFields.highlight.classList.toggle("hidden", !post.highlight);
    }
  }

  function openBlogPostModal(blogKey) {
    if (!blogPostModal) {
      return;
    }

    renderBlogPost(blogKey);
    blogPostModal.classList.remove("hidden");
    blogPostModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("overflow-hidden");

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function closeBlogPostModal() {
    if (!blogPostModal) {
      return;
    }

    blogPostModal.classList.add("hidden");
    blogPostModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("overflow-hidden");
  }

  blogReadMoreLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      openBlogPostModal(link.dataset.blog);
    });
  });

  if (blogCategorySelect) {
    blogCategorySelect.addEventListener("change", function () {
      const selectedCategory = blogCategorySelect.value;

      blogCards.forEach(function (card) {
        const shouldShow =
          selectedCategory === "all" ||
          card.dataset.blogCategory === selectedCategory;

        card.classList.toggle("hidden", !shouldShow);
      });
    });
  }

  if (blogPostModalClose) {
    blogPostModalClose.addEventListener("click", closeBlogPostModal);
  }

  if (blogPostModal) {
    blogPostModal.addEventListener("click", function (event) {
      if (event.target === blogPostModal) {
        closeBlogPostModal();
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      blogPostModal &&
      !blogPostModal.classList.contains("hidden")
    ) {
      closeBlogPostModal();
    }
  });

  const counterSection = document.querySelector("[data-counter-section]");
  const counterValues = Array.from(
    document.querySelectorAll("[data-count-target]"),
  );

  if (!counterSection || !counterValues.length) {
    return;
  }

  let hasAnimated = false;

  function formatValue(value) {
    return new Intl.NumberFormat("en-US").format(value);
  }

  function animateCounter(element) {
    const target = Number(element.dataset.countTarget || "0");
    const suffix = element.dataset.countSuffix || "";
    const duration = 1400;
    const startTime = performance.now();

    function updateValue(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(target * easedProgress);

      element.textContent = formatValue(currentValue) + suffix;

      if (progress < 1) {
        window.requestAnimationFrame(updateValue);
        return;
      }

      element.textContent = formatValue(target) + suffix;
    }

    window.requestAnimationFrame(updateValue);
  }

  function startAnimation() {
    if (hasAnimated) {
      return;
    }

    hasAnimated = true;
    counterValues.forEach(animateCounter);
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(counterSection);
    return;
  }

  startAnimation();
});
