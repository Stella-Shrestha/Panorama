document.addEventListener("DOMContentLoaded", function () {
  const members = {
    pasang: {
      name: "Pasang Sherpa",
      designation: "Leadership",
      role: "President & Mountain Guide",
      position: "Chairman",
      image: "../Images/Team/chairman.jpg",
      imagePosition: "center top",
      years: "20+",
      tagline:
        "Experienced mountain leader, company president and passionate local guide.",
      bio: "Mr. Pasang Sherpa is President of Panorama Himalaya Trekking Agency. He started his career as a carrier in the 2000s and decided to found his own agency ten years later with his brother Kusang Sherpa. Today, Pasang is one of the most experienced guides in our team. He has already crossed many summits such as Mera, Island Peak, Lobuche, Yala, Saribung, Tharpuchuli, Pisand. Jovial and rigorous, he likes to satisfy his clients’ needs as much as possible. Finally, he is fluent in Italian, English and has a basic knowledge of French, Hindi and Japanese.",
      experience: "More than 20 years",
      specialization: "Trekking and peak climbing",
      languages: "Italian, English, French, Hindi, Japanese",
      highlights: [
        "Experienced mountain guide",
        "Multilingual",
        "Client-focused leadership",
      ],
    },
    kusang: {
      name: "Kusang Sherpa",
      designation: "Leadership",
      role: "Co-founder & Trip Designer",
      position: "Co-founder",
      image: "../Images/Home/adventure.png",
      imagePosition: "center top",
      years: "18+",
      tagline: "Thoughtful journey designer with deep roots in Nepali hospitality.",
      bio: "Kusang helps design and manage authentic journeys with a strong focus on communication, personal care and local cultural connection. He works closely with travelers before arrival so each itinerary feels realistic, safe and meaningful.",
      experience: "More than 18 years",
      specialization: "Trip planning and guest operations",
      languages: "French, English, Nepali, Hindi",
      highlights: ["Personalized itineraries", "Guest care", "Cultural insight"],
    },
    pemba: {
      name: "Pemba Chhiring Sherpa",
      designation: "Mountain Guide",
      role: "Mountain and Trekking Guide",
      position: "Senior Mountain Guide",
      image: "../Images/Home/everest.png",
      imagePosition: "center top",
      years: "16+",
      tagline: "Steady mountain guide for high-altitude trails and remote routes.",
      bio: "Pemba is an experienced mountain professional who supports travelers through challenging terrain with patience, confidence and local knowledge. His guidance is especially valued on high-altitude days and long trekking stages.",
      experience: "More than 16 years",
      specialization: "High-altitude guidance and safety",
      languages: "French, English, Tibetan, Hindi, Nepali",
      highlights: ["High-altitude safety", "Route knowledge", "Calm guidance"],
    },
    dawa: {
      name: "Dawa Sherpa",
      designation: "Guide",
      role: "Senior Trek Leader",
      position: "Trek Leader",
      image: "../Images/Home/manaslu.png",
      imagePosition: "center top",
      years: "14+",
      tagline: "Reliable leader for classic Himalayan routes across Nepal.",
      bio: "Dawa leads classic Himalayan routes with calm decision-making, strong logistics and warm guest support. He is known for pacing trips carefully and keeping groups comfortable throughout changing mountain conditions.",
      experience: "More than 14 years",
      specialization: "Everest and Annapurna region treks",
      languages: "Nepali, English, Hindi",
      highlights: ["Group leadership", "Trail logistics", "Guest comfort"],
    },
    mingma: {
      name: "Mingma Sherpa",
      designation: "Guide",
      role: "Culture and Trek Guide",
      position: "Trekking Guide",
      image: "../Images/Home/annapurna.png",
      imagePosition: "center top",
      years: "12+",
      tagline: "A warm guide connecting travelers with landscapes and culture.",
      bio: "Mingma connects travelers with landscapes, villages and traditions through patient and thoughtful guiding. His approach is especially helpful for families, first-time trekkers and culturally curious travelers.",
      experience: "More than 12 years",
      specialization: "Cultural visits and family treks",
      languages: "Nepali, French, English",
      highlights: ["Family treks", "Cultural exchange", "Village routes"],
    },
    nima: {
      name: "Nima Sherpa",
      designation: "Guide",
      role: "High Mountain Assistant",
      position: "Mountain Support",
      image: "../Images/Home/mustang.png",
      imagePosition: "center top",
      years: "10+",
      tagline: "Careful mountain support for safe expedition days.",
      bio: "Nima supports expedition days, acclimatization routines and mountain safety with steady attention. He helps keep camp movement, supplies and day-to-day trail support organized.",
      experience: "More than 10 years",
      specialization: "Camps, logistics and safety",
      languages: "Nepali, English, Hindi",
      highlights: ["Expedition support", "Camp logistics", "Safety routines"],
    },
    lhakpa: {
      name: "Lhakpa Sherpa",
      designation: "Support",
      role: "Operations Coordinator",
      position: "Operations",
      image: "../Images/Home/manaslu1.png",
      imagePosition: "center top",
      years: "9+",
      tagline: "Behind-the-scenes coordinator keeping each trip moving smoothly.",
      bio: "Lhakpa coordinates permits, local teams, transport and daily details so trips run smoothly. His work supports the guides and helps travelers move confidently through each stage of the itinerary.",
      experience: "More than 9 years",
      specialization: "Permits, logistics and coordination",
      languages: "Nepali, English",
      highlights: ["Permit coordination", "Transport planning", "Local teams"],
    },
    maya: {
      name: "Maya Gurung",
      designation: "Support",
      role: "Guest Care Specialist",
      position: "Guest Support",
      image: "../Images/Home/details/bg.jpeg",
      imagePosition: "center top",
      years: "8+",
      tagline: "Helpful guest care from first inquiry to the journey home.",
      bio: "Maya helps travelers prepare before arrival and stays close to each detail from inquiry to return. She supports packing questions, arrival logistics and communication between travelers and the local team.",
      experience: "More than 8 years",
      specialization: "Guest support and trip preparation",
      languages: "Nepali, English, French",
      highlights: ["Pre-trip support", "Arrival care", "Traveler communication"],
    },
  };

  const modal = document.getElementById("teamProfileModal");
  const closeButton = document.getElementById("teamModalClose");
  const filterButtons = document.querySelectorAll("[data-team-filter]");
  const teamCards = document.querySelectorAll("[data-team-category]");
  const fields = {
    image: document.getElementById("modalMemberImage"),
    imageRole: document.getElementById("modalImageRole"),
    tagline: document.getElementById("modalMemberTagline"),
    years: document.getElementById("modalMemberYears"),
    role: document.getElementById("modalMemberRole"),
    name: document.getElementById("modalMemberName"),
    aboutTitle: document.getElementById("modalAboutTitle"),
    bio: document.getElementById("modalMemberBio"),
    highlights: document.getElementById("modalMemberHighlights"),
    experience: document.getElementById("modalMemberExperience"),
    specialization: document.getElementById("modalMemberSpecialization"),
    languages: document.getElementById("modalMemberLanguages"),
    position: document.getElementById("modalMemberPosition"),
  };

  function renderHighlights(highlights) {
    const icons = ["map", "hand-heart", "landmark"];

    if (!fields.highlights) {
      return;
    }

    fields.highlights.innerHTML = highlights
      .map(function (highlight, index) {
        return (
          '<span class="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-slate-50 px-5 py-3 text-sm font-black text-[#10233f] shadow-sm">' +
          '<i data-lucide="' +
          icons[index % icons.length] +
          '" class="h-6 w-6 shrink-0 text-[#F58220]"></i>' +
          highlight +
          "</span>"
        );
      })
      .join("");
  }

  function openModal(memberKey) {
    const member = members[memberKey];

    if (!member || !modal) {
      return;
    }

    if (fields.image) {
      fields.image.src = member.image;
      fields.image.alt = member.name;
      fields.image.style.objectPosition = member.imagePosition || "center";
    }

    if (fields.imageRole) fields.imageRole.textContent = member.designation;
    if (fields.tagline) fields.tagline.textContent = member.tagline;
    if (fields.years) fields.years.textContent = member.years;
    if (fields.role) fields.role.textContent = member.designation;
    if (fields.name) fields.name.textContent = member.name;
    if (fields.aboutTitle) {
      fields.aboutTitle.textContent = "About " + member.name.split(" ")[0];
    }
    if (fields.bio) fields.bio.textContent = member.bio;
    if (fields.experience) fields.experience.textContent = member.experience;
    if (fields.specialization) {
      fields.specialization.textContent = member.specialization;
    }
    if (fields.languages) fields.languages.textContent = member.languages;
    if (fields.position) fields.position.textContent = member.position;
    renderHighlights(member.highlights);

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

  function filterTeamCards(category) {
    teamCards.forEach(function (card) {
      const shouldShow =
        category === "all" || card.dataset.teamCategory === category;

      card.classList.toggle("hidden", !shouldShow);
    });
  }

  document.addEventListener("click", function (event) {
    const profileButton = event.target.closest(".team-profile-button");

    if (!profileButton) {
      return;
    }

    event.preventDefault();
    openModal(profileButton.dataset.member);
  });

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setActiveFilter(button);
      filterTeamCards(button.dataset.teamFilter);
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
