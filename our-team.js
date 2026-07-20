document.addEventListener("DOMContentLoaded", function () {
  const members = {
    pasang: {
      name: "Pasang Sherpa",
      role: "President & Mountain Guide",
      position: "Chairman",
      image: "./Images/Home/team.png",
      years: "20+",
      tagline:
        "Experienced mountain leader, company president and passionate local guide.",
      bio: "Mr. Pasang Sherpa is President of Panorama Himalaya Trekking Agency. He started his career as a carrier in the 2000s and later founded the agency with his brother Kusang Sherpa. His calm leadership and mountain experience help travelers feel supported from the first conversation to the final trail day.",
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
      role: "Co-founder & Trip Designer",
      position: "Co-founder",
      image: "./Images/Home/adventure.png",
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
      role: "Mountain and Trekking Guide",
      position: "Senior Mountain Guide",
      image: "./Images/Home/everest.png",
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
      role: "Senior Trek Leader",
      position: "Trek Leader",
      image: "./Images/Home/manaslu.png",
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
      role: "Culture and Trek Guide",
      position: "Trekking Guide",
      image: "./Images/Home/annapurna.png",
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
      role: "High Mountain Assistant",
      position: "Mountain Support",
      image: "./Images/Home/mustang.png",
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
      role: "Operations Coordinator",
      position: "Operations",
      image: "./Images/Home/manaslu1.png",
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
      role: "Guest Care Specialist",
      position: "Guest Support",
      image: "./Images/Home/details/bg.jpeg",
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
  const profileButtons = document.querySelectorAll(".team-profile-button");
  const fields = {
    image: document.getElementById("modalMemberImage"),
    tagline: document.getElementById("modalMemberTagline"),
    years: document.getElementById("modalMemberYears"),
    role: document.getElementById("modalMemberRole"),
    name: document.getElementById("modalMemberName"),
    bio: document.getElementById("modalMemberBio"),
    highlights: document.getElementById("modalMemberHighlights"),
    experience: document.getElementById("modalMemberExperience"),
    specialization: document.getElementById("modalMemberSpecialization"),
    languages: document.getElementById("modalMemberLanguages"),
    position: document.getElementById("modalMemberPosition"),
  };

  function renderHighlights(highlights) {
    fields.highlights.innerHTML = highlights
      .map(function (highlight) {
        return (
          '<span class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-black text-[#10233f]">' +
          '<i data-lucide="check-circle" class="h-4 w-4 text-[#F58220]"></i>' +
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

    fields.image.src = member.image;
    fields.image.alt = member.name;
    fields.tagline.textContent = member.tagline;
    fields.years.textContent = member.years;
    fields.role.textContent = member.role;
    fields.name.textContent = member.name;
    fields.bio.textContent = member.bio;
    fields.experience.textContent = member.experience;
    fields.specialization.textContent = member.specialization;
    fields.languages.textContent = member.languages;
    fields.position.textContent = member.position;
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

  profileButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      openModal(button.dataset.member);
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
