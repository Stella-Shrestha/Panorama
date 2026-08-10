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
        "The Poon Hill trek is one of Nepal's most rewarding short journeys, especially for travelers who want big mountain views without committing to a long expedition. Spring brings rhododendron forests and warmer days, while autumn usually offers the clearest skies.",
        "Winter can be quiet and crisp, but trekkers should prepare for cold mornings and possible snow at higher points.",
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
        "The cost of an Everest Base Camp trek depends on the route, service level, guide support, domestic flights, permits, meals, and how many buffer days you include. Budgeting properly for Sagarmatha National Park entry and Lukla flights ensures a smooth journey.",
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
        "The Manaslu Circuit is a remote and dramatic route with deep river valleys, traditional villages, high passes, and views that feel far from the busier trekking corridors. Because Manaslu is a restricted region, trekkers need special permits and a licensed guide.",
        "Planning the itinerary carefully is important for acclimatization before Larkya La Pass.",
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
        "Upper Mustang feels different from the green valleys many travelers imagine when they think of Nepal. Its dry cliffs, cave settlements, monasteries, and walled villages create a landscape shaped by history, Tibetan culture, and peaceful Himalayan desert scenery.",
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
        "Training for altitude is less about extreme fitness and more about steady endurance, strong legs, and learning how to move at a sustainable pace for several days in a row. Long walks, stair climbs, and hiking with a daypack best prepare your body for the trail.",
        "Light strength training and hiking with a daypack can prepare your body for the rhythm of trekking. Good hydration and rest habits matter just as much on the trail.",
        "Once in the mountains, the smartest trekkers go slowly, listen to their guide, eat well, and respect acclimatization days.",
      ],
      highlight:
        "The best altitude strategy is simple: arrive prepared, walk slowly, and give your body time to adapt.",
    },
    {
      key: "langtang-experience",
      title: "Langtang Valley Trekking Experience",
      category: "Trekking Guides",
      author: "Panorama Trekking Team",
      meta: "Jun 28, 2026",
      image: "../Images/Home/langtang.png",
      imagePosition: "center",
      body: [
        "The Langtang Valley trek brings you close to snow-capped peaks and glaciers just north of Kathmandu, passing through Tamang heritage villages and lush rhododendron forests. It is ideal for travelers seeking a quieter valley experience rich in local culture.",
        "Trekkers can visit Kyanjin Gompa, climb Kyanjin Ri or Tsergo Ri for breathtaking 360-degree mountain views, and experience local cheese factories.",
        "It is ideal for travelers seeking a quieter Himalayan valley experience rich in culture and mountain vistas.",
      ],
      highlight: "Experience the serenity of Tamang culture and high alpine glaciers in Langtang.",
    },
    {
      key: "annapurna-photo",
      title: "Annapurna Base Camp Photography Guide",
      category: "Culture",
      author: "Panorama Trekking Team",
      meta: "Jun 15, 2026",
      image: "../Images/Home/adventure.png",
      imagePosition: "center",
      body: [
        "Photographing the Annapurna Sanctuary requires planning for early morning light when the sun hits the sheer walls of Annapurna I and Machapuchhre. Keep batteries warm inside your sleeping bag, use circular polarizers, and capture local tea house life.",
        "Use circular polarizers for deep blue skies, and capture the human element of prayer flags and local tea house life.",
        "The amphitheater of mountains at base camp offers sunset and sunrise compositions that rank among the world's finest.",
      ],
      highlight: "Golden hour at Annapurna Base Camp creates memories and photographs that last a lifetime.",
    },
    {
      key: "packing-list",
      title: "Packing List for Nepal Trekking",
      category: "Travel Tips",
      author: "Panorama Trekking Team",
      meta: "Jun 02, 2026",
      image: "../Images/Home/details/bg.jpeg",
      imagePosition: "center",
      body: [
        "Packing smart means focusing on layering: moisture-wicking base layers, insulating fleece, and windproof or waterproof outer shells. Good broken-in hiking boots, quality wool socks, and a sleeping bag rated for -10°C are essential items for any Himalayan trek.",
        "Good broken-in hiking boots, quality wool socks, a sleeping bag rated for -10°C to -15°C, water purification tablets, and a reliable headlamp are essential items.",
        "Keep your duffel weight under 15kg to respect porter guidelines and keep your daypack lightweight and comfortable.",
      ],
      highlight: "Pack light, pack warm, and prioritize proper footwear and layering.",
    },
    {
      key: "poon-hill-sunrise",
      title: "Ghorepani Poon Hill Sunrise Views",
      category: "Stories",
      author: "Panorama Trekking Team",
      meta: "May 24, 2026",
      image: "../Images/Home/team.png",
      imagePosition: "center",
      body: [
        "Waking up before dawn at Ghorepani and climbing the stone steps to Poon Hill is a classic Himalayan ritual. As the first rays of sun touch Dhaulagiri, Annapurna South, and Machapuchhre, the mountain panorama lights up in brilliant shades of gold and amber.",
        "Sharing hot tea with fellow travelers while watching the Himalayan range wake up is an unforgettable story.",
      ],
      highlight: "Poon Hill sunrise is a golden moment every mountain lover should experience.",
    },
    {
      key: "mardi-himal",
      title: "Mardi Himal: Nepal's Best Hidden Ridge Trek",
      category: "Trekking Guides",
      author: "Panorama Trekking Team",
      meta: "May 11, 2026",
      image: "../Images/Home/manaslu.png",
      imagePosition: "center",
      body: [
        "Mardi Himal is a short ridge trek that climbs high above the Modi Khola valley, offering intimate views of Fishtail Mountain. The trail passes through quiet oak and rhododendron forests before opening up onto high alpine ridges at Forest Camp, Low Camp, and High Camp.",
        "Reaching Mardi Himal Base Camp at 4,500 meters puts you face-to-face with the towering wall of Annapurna South.",
      ],
      highlight: "A hidden gem trail with pristine ridge walking and spectacular mountain proximity.",
    },
    {
      key: "sherpa-culture",
      title: "Sherpa Culture and Himalayan Traditions",
      category: "Culture",
      author: "Panorama Trekking Team",
      meta: "Apr 29, 2026",
      image: "../Images/Team/chairman.jpg",
      imagePosition: "top",
      body: [
        "The Sherpa people have lived in the high valleys of Khumbu for centuries, developing a rich culture rooted in Tibetan Buddhism and deep respect for the mountains. Visiting ancient monasteries like Tengboche reveals intricate thangka paintings and sacred traditions.",
        "Learning about mani walls, prayer flags, and local festivals adds deep spiritual meaning to every step of your trek.",
      ],
      highlight: "Respecting local traditions turns a mountain hike into a meaningful cultural journey.",
    },
    {
      key: "gosaikunda-lake",
      title: "Gosaikunda Sacred Lake Trek Guide",
      category: "Stories",
      author: "Panorama Trekking Team",
      meta: "Apr 18, 2026",
      image: "../Images/Home/Background.png",
      imagePosition: "center",
      body: [
        "Gosaikunda is an alpine lake at 4,380 meters, revered by Hindus and Buddhists as a sacred pilgrimage site created by Lord Shiva. The trail climbs steadily through pine forests and ridges, rewarding trekkers with dramatic views of Ganesh Himal and Langtang Lirung.",
        "The serene blue waters of the lake reflecting snow-capped cliffs create a peaceful atmosphere.",
      ],
      highlight: "A sacred high-altitude sanctuary combining spiritual reverence and mountain wildness.",
    },
    {
      key: "travel-insurance",
      title: "Travel Insurance for High Altitude Trekking",
      category: "Travel Tips",
      author: "Panorama Trekking Team",
      meta: "Apr 05, 2026",
      image: "../Images/Aboutpage/whychoose.jpg",
      imagePosition: "center",
      body: [
        "High-altitude trekking requires specialized travel insurance that explicitly covers hiking up to 5,000 or 6,000 meters. Ensure your policy includes emergency medical evacuation by helicopter, hospital coverage in Kathmandu, and flexible trip cancellation options.",
        "Keep digital and printed copies of your policy number and emergency hotline accessible throughout your trip.",
      ],
      highlight: "Comprehensive high-altitude insurance is your most important safety net in the Himalayas.",
    },
    {
      key: "three-passes",
      title: "Three Passes Trek: The Ultimate Everest Adventure",
      category: "Trekking Guides",
      author: "Panorama Trekking Team",
      meta: "Mar 22, 2026",
      image: "../Images/Home/everest.png",
      imagePosition: "center",
      body: [
        "The Three Passes Trek crosses Kongma La (5,535m), Cho La (5,420m), and Renjo La (5,360m), linking the high valleys of Khumbu, Gokyo, and Thame. This ultimate loop includes Gokyo Lakes, Kala Patthar, Everest Base Camp, and remote high mountain passes.",
        "It demands strong fitness and acclimatization, rewarding experienced trekkers with the most complete Everest circuit possible.",
      ],
      highlight: "The grand master circuit of the Everest region for experienced trekkers.",
    },
    {
      key: "kathmandu-tours",
      title: "Kathmandu Valley Cultural Day Tours",
      category: "Culture",
      author: "Panorama Trekking Team",
      meta: "Mar 10, 2026",
      image: "../Images/Aboutpage/m1.jpg",
      imagePosition: "center",
      body: [
        "Kathmandu is a living museum of UNESCO World Heritage Sites, from ancient Durbar Squares to sacred stupas like Swayambhunath and Boudhanath. Exploring Patan and Bhaktapur reveals exquisite Newari woodcarvings, pottery squares, and centuries-old architecture.",
        "A cultural day tour in the valley is the perfect prelude or finale to any Himalayan trek.",
      ],
      highlight: "Discover ancient art, architecture, and spiritual heritage in the heart of Kathmandu.",
    },
  ];

  const blogPostModal = document.getElementById("blogPostModal");
  const blogPostModalClose = document.getElementById("blogPostModalClose");
  const blogCategorySelect = document.getElementById("blogCategory");
  const blogCards = Array.from(document.querySelectorAll("[data-blog-category]"));
  const blogReadMoreLinks = document.querySelectorAll(".blog-read-more");
  const blogPagination = document.getElementById("blogPagination");

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

  const itemsPerPage = 6;
  let currentPage = 1;

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

  function getMatchingCards() {
    const selectedCategory = blogCategorySelect ? blogCategorySelect.value : "all";
    const matching = [];
    blogCards.forEach(function (card) {
      if (selectedCategory === "all" || card.dataset.blogCategory === selectedCategory) {
        matching.push(card);
      }
    });
    return matching;
  }

  function renderPagination(totalPages) {
    if (!blogPagination) return;
    if (totalPages <= 1) {
      blogPagination.innerHTML = "";
      return;
    }

    let html = "";

    // Previous button
    const prevDisabled = currentPage === 1;
    html += '<button type="button" class="blog-page-prev flex h-10 items-center justify-center rounded-lg border px-4 text-xs font-bold transition-all duration-200 ' +
      (prevDisabled ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50' : 'border-slate-200 text-[#122B55] hover:border-[#F58220] hover:text-[#F58220] bg-white shadow-sm') +
      '" ' + (prevDisabled ? 'disabled' : '') + '>Previous</button>';

    // Page number buttons
    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === currentPage;
      html += '<button type="button" data-page="' + i + '" class="blog-page-btn flex h-10 w-10 items-center justify-center rounded-lg border text-xs font-bold transition-all duration-200 ' +
        (isActive ? 'border-[#F58220] bg-[#F58220] text-white shadow-sm' : 'border-slate-200 bg-white text-[#122B55] hover:border-[#F58220] hover:text-[#F58220] shadow-sm') +
        '">' + i + '</button>';
    }

    // Next button
    const nextDisabled = currentPage === totalPages;
    html += '<button type="button" class="blog-page-next flex h-10 items-center justify-center rounded-lg border px-4 text-xs font-bold transition-all duration-200 ' +
      (nextDisabled ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-slate-50' : 'border-slate-200 text-[#122B55] hover:border-[#F58220] hover:text-[#F58220] bg-white shadow-sm') +
      '" ' + (nextDisabled ? 'disabled' : '') + '>Next</button>';

    blogPagination.innerHTML = html;

    // Event handlers for pagination controls
    const prevBtn = blogPagination.querySelector(".blog-page-prev");
    if (prevBtn && !prevDisabled) {
      prevBtn.addEventListener("click", function () {
        if (currentPage > 1) {
          currentPage--;
          updateBlogDisplay(true);
        }
      });
    }

    const nextBtn = blogPagination.querySelector(".blog-page-next");
    if (nextBtn && !nextDisabled) {
      nextBtn.addEventListener("click", function () {
        if (currentPage < totalPages) {
          currentPage++;
          updateBlogDisplay(true);
        }
      });
    }

    const pageBtns = blogPagination.querySelectorAll(".blog-page-btn");
    pageBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const pageNum = parseInt(btn.dataset.page, 10);
        if (pageNum !== currentPage) {
          currentPage = pageNum;
          updateBlogDisplay(true);
        }
      });
    });
  }

  function updateBlogDisplay(shouldScroll) {
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
    blogCards.forEach(function (card) {
      card.classList.add("hidden");
    });

    // Show matching cards for the current page range
    matching.forEach(function (card, index) {
      if (index >= startIndex && index < endIndex) {
        card.classList.remove("hidden");
      }
    });

    renderPagination(totalPages);

    if (shouldScroll) {
      const allBlogsSection = document.getElementById("all-blogs");
      if (allBlogsSection) {
        allBlogsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  if (blogCategorySelect) {
    blogCategorySelect.addEventListener("change", function () {
      currentPage = 1;
      updateBlogDisplay(false);
    });
  }

  // Initial render
  updateBlogDisplay(false);

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
