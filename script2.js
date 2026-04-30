// Flights Gallery Data - Complete information for aviation page
const flightsData = {
  mainImage:
    "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1000",
  title: "✈️ Flights · Window to the World",
  location: "Global Aviation · Above Clouds · Sunrise/Sunset Flights",
  description:
    "Experience the magic of flight — where horizons stretch endlessly and clouds become landscapes. From the thrill of takeoff to the serenity of cruising at 35,000 feet, aviation connects continents and offers perspectives you'll never forget. Every window seat tells a story, every cloud formation paints a masterpiece.",
  highlights: [
    { icon: "fas fa-cloud-sun", text: "Above the Clouds" },
    { icon: "fas fa-sun", text: "Golden Hour Skies" },
    { icon: "fas fa-city", text: "City Lights by Night" },
  ],
  stats: [
    {
      icon: "fas fa-fighter-jet",
      title: "Cruising Altitude",
      value: "35,000 - 42,000 feet",
    },
    {
      icon: "fas fa-tachometer-alt",
      title: "Avg Speed",
      value: "550-580 mph (cruise)",
    },
    {
      icon: "fas fa-chart-line",
      title: "Daily Flights",
      value: "100,000+ worldwide",
    },
    {
      icon: "fas fa-passport",
      title: "Destinations",
      value: "10,000+ airports",
    },
  ],
  insight:
    "For the best photos: choose window seats facing away from the sun (check flight direction!). Clean the window before shooting. Use manual focus. Sunset and sunrise flights offer dramatic colors. Book early for premium window seat selection! ✈️",
};

// Related images array with detailed flight/aviation information
const flightsRelated = [
  {
    url: "https://images.pexels.com/photos/626446/pexels-photo-626446.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Sunset over cloud sea",
    airline: "Commercial Aviation",
    altitude: "38,000 feet",
    bestTime: "Dusk flights",
    description:
      "Golden hour transforms clouds into a sea of fire. Perfect for dramatic photography.",
  },
  {
    url: "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Wing view through clouds",
    airline: "Long-haul carrier",
    altitude: "35,000 feet",
    bestTime: "Morning flights",
    description: "Soft clouds and gentle light create ethereal wing views.",
  },
  {
    url: "https://images.pexels.com/photos/221471/pexels-photo-221471.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Takeoff power",
    airline: "Various Airlines",
    altitude: "Climbing",
    bestTime: "Departure",
    description:
      "The thrilling moment when wheels leave the ground — pure adrenaline.",
  },
  {
    url: "https://images.pexels.com/photos/4413566/pexels-photo-4413566.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Night city lights",
    airline: "Global routes",
    altitude: "32,000 feet",
    bestTime: "Night flights",
    description:
      "Urban landscapes transform into sparkling constellations from above.",
  },
  {
    url: "https://images.pexels.com/photos/1157678/pexels-photo-1157678.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Mountain peaks from above",
    airline: "Alpine routes",
    altitude: "36,000 feet",
    bestTime: "Clear weather flights",
    description:
      "Snow-capped mountains look like miniature sculptures from cruising altitude.",
  },
  {
    url: "https://images.pexels.com/photos/159710/aircraft-airplane-clouds-flight-159710.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Above the storm",
    airline: "International flights",
    altitude: "41,000 feet",
    bestTime: "Stormy season",
    description:
      "Flying above thunderstorms offers spectacular views of nature's power.",
  },
  {
    url: "https://images.pexels.com/photos/398949/pexels-photo-398949.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Sunrise horizon",
    airline: "Red-eye flights",
    altitude: "37,000 feet",
    bestTime: "Early morning",
    description:
      "First light paints the horizon in pink and gold — unforgettable.",
  },
  {
    url: "https://images.pexels.com/photos/2996898/pexels-photo-2996898.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Coastal line from above",
    airline: "Coastal routes",
    altitude: "34,000 feet",
    bestTime: "Afternoon flights",
    description:
      "Where ocean meets land — stunning patterns visible only from the air.",
  },
  {
    url: "https://images.pexels.com/photos/459286/plane-sky-air-travel-459286.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Approach over runway",
    airline: "Regional carriers",
    altitude: "12,000 feet",
    bestTime: "Landing",
    description:
      "The runway comes into view as the aircraft descends through a tapestry of clouds.",
  },
  {
    url: "https://images.pexels.com/photos/1307597/pexels-photo-1307597.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Engine power shot",
    airline: "Modern fleet",
    altitude: "On the ground",
    bestTime: "Pre-flight",
    description:
      "A close-up of jet engine detail reminds you how much precision powers every flight.",
  },
  {
    url: "https://images.pexels.com/photos/2041625/pexels-photo-2041625.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Cloud-lit horizon",
    airline: "Transcontinental wings",
    altitude: "39,000 feet",
    bestTime: "Golden hour",
    description:
      "Layers of clouds glow in warm tones while the sun dips toward the horizon.",
  },
  {
    url: "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Sunset landing silhouette",
    airline: "Evening routes",
    altitude: "7,000 feet",
    bestTime: "Dusk",
    description:
      "Silhouetted aircraft descend under a richly-colored sky, a perfect end to the flight.",
  },
  {
    url: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Wingtip over clouds",
    airline: "International carriers",
    altitude: "36,000 feet",
    bestTime: "Afternoon",
    description:
      "A classic wingtip shot capturing the endless cloudscape and blue sky beyond.",
  },
  {
    url: "https://images.pexels.com/photos/245183/pexels-photo-245183.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "In-flight sunset glow",
    airline: "Sunset charters",
    altitude: "33,000 feet",
    bestTime: "Golden hour",
    description:
      "Warm orange and purple hues fill the cabin window as the sun drops toward the horizon.",
  },
  {
    url: "https://images.pexels.com/photos/71265/pexels-photo-71265.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Airport runway perspective",
    airline: "Airport approach",
    altitude: "3,000 feet",
    bestTime: "Landing approach",
    description:
      "The runway stretches ahead in crisp detail as the aircraft descends for touchdown.",
  },
  {
    url: "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Above clouds and city lights",
    airline: "Night connections",
    altitude: "32,000 feet",
    bestTime: "Evening",
    description:
      "A cityscape glitters below while the aircraft sails silently above the clouds.",
  },
];

// Function to render related flights grid
function renderRelatedFlights() {
  const container = document.getElementById("flightsRelatedGrid");
  if (!container) return;

  container.innerHTML = "";

  flightsRelated.forEach((flight, index) => {
    const card = document.createElement("div");
    card.className = "related-card";
    card.setAttribute("data-index", index);
    card.setAttribute("data-altitude", flight.altitude);
    card.setAttribute("data-airline", flight.airline);

    card.innerHTML = `
            <img src="${flight.url}" alt="flight scene - ${flight.caption}" loading="lazy">
            <div class="card-caption">
                <i class="fas fa-camera"></i> ${flight.caption}
                <small>
                    <i class="fas fa-cloud"></i> ${flight.altitude} • ${flight.bestTime}
                </small>
            </div>
        `;

    // Add click event to show detailed flight information
    card.addEventListener("click", () => {
      showFlightDetails(flight);
    });

    container.appendChild(card);
  });
}

// Function to show modal with detailed flight/aviation information
function showFlightDetails(flight) {
  // Create modal overlay
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  modal.style.zIndex = "9999";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";
  modal.style.cursor = "pointer";

  // Modal content
  const modalContent = document.createElement("div");
  modalContent.style.maxWidth = "90%";
  modalContent.style.maxHeight = "90%";
  modalContent.style.backgroundColor = "#fff";
  modalContent.style.borderRadius = "24px";
  modalContent.style.overflow = "auto";
  modalContent.style.padding = "20px";
  modalContent.style.textAlign = "center";
  modalContent.style.cursor = "default";

  modalContent.innerHTML = `
        <div style="position: relative;">
            <button style="position: absolute; top: 10px; right: 20px; background: #1e4a6e; color: white; border: none; border-radius: 50%; width: 40px; height: 40px; font-size: 20px; cursor: pointer; z-index: 10; transition: background 0.2s;">&times;</button>
            <img src="${flight.url}" alt="${flight.caption}" style="max-width: 100%; max-height: 55vh; border-radius: 16px; margin-bottom: 20px; object-fit: cover;">
            <h2 style="color: #1e4a6e; margin-bottom: 10px; font-family: 'Playfair Display', serif;">${flight.caption}</h2>
            <div style="display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; margin-bottom: 20px;">
                <span style="background: #e3edf5; padding: 5px 12px; border-radius: 20px;"><i class="fas fa-chart-line"></i> Altitude: ${flight.altitude}</span>
                <span style="background: #e3edf5; padding: 5px 12px; border-radius: 20px;"><i class="fas fa-clock"></i> Best for: ${flight.bestTime}</span>
                <span style="background: #e3edf5; padding: 5px 12px; border-radius: 20px;"><i class="fas fa-plane"></i> ${flight.airline}</span>
            </div>
            <p style="color: #4a6a8a; line-height: 1.6; margin-bottom: 15px;">
                ${flight.description}
            </p>
            <hr style="margin: 15px 0;">
            <div style="background: #f0f6fc; padding: 12px; border-radius: 20px; text-align: left;">
                <p style="font-size: 0.9rem; color: #2c6e96;"><i class="fas fa-camera"></i> <strong>Photography Tip:</strong> For shots like this, use a fast shutter speed (1/1000+) to avoid motion blur. Clean window is key!</p>
            </div>
            <p style="font-size: 0.85rem; color: #c97e3e; margin-top: 15px;"><i class="fas fa-star"></i> Featured in our aviation collection</p>
        </div>
    `;

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Close button functionality
  const closeBtn = modalContent.querySelector("button");
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    modal.remove();
  });

  // Close on background click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  // Hover effect for close button
  closeBtn.addEventListener("mouseenter", () => {
    closeBtn.style.background = "#2c6e96";
  });
  closeBtn.addEventListener("mouseleave", () => {
    closeBtn.style.background = "#1e4a6e";
  });
}

// Function to update hero section with dynamic data
function updateHeroSection() {
  const heroImage = document.getElementById("mainHeroImg");
  const locationSpan = document.getElementById("locationText");
  const descriptionPara = document.getElementById("mainDescription");
  const insightPara = document.getElementById("insightText");

  if (heroImage) heroImage.src = flightsData.mainImage;
  if (locationSpan) locationSpan.textContent = flightsData.location;
  if (descriptionPara) descriptionPara.textContent = flightsData.description;
  if (insightPara) insightPara.textContent = flightsData.insight;

  // Update stats row
  const statsRow = document.querySelector(".stats-row");
  if (statsRow && flightsData.stats) {
    statsRow.innerHTML = "";
    flightsData.stats.forEach((stat) => {
      const statCard = document.createElement("div");
      statCard.className = "stat-card";
      statCard.innerHTML = `
                <i class="${stat.icon}"></i>
                <h4>${stat.title}</h4>
                <p>${stat.value}</p>
            `;
      statsRow.appendChild(statCard);
    });
  }

  // Update highlights if needed
  const highlightsContainer = document.querySelector(".highlights");
  if (highlightsContainer && flightsData.highlights) {
    highlightsContainer.innerHTML = "";
    flightsData.highlights.forEach((highlight) => {
      const span = document.createElement("span");
      span.className = "highlight-item";
      span.innerHTML = `<i class="${highlight.icon}"></i> ${highlight.text}`;
      highlightsContainer.appendChild(span);
    });
  }
}

// Function to handle back button navigation
function setupBackButton() {
  const backBtn = document.getElementById("backBtn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        const confirmRedirect = confirm(
          "No gallery history found. Do you want to return to the Main Gallery page?",
        );
        if (confirmRedirect) {
          window.location.href = "./gallery.html";
        }
      }
    });
  }
}

// Add scroll animations for flight cards
function addScrollAnimations() {
  const cards = document.querySelectorAll(".stat-card, .related-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 },
  );

  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(card);
  });
}

// Parallax-like effect for hero image
function addHeroParallax() {
  const heroImage = document.querySelector(".hero-image");
  if (heroImage) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.2;
      heroImage.style.transform = `translateY(${rate * 0.05}px)`;
    });
  }
}

// Simulate flight path animation for stats on load
function addStatsAnimation() {
  const statCards = document.querySelectorAll(".stat-card");
  statCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);
  });
}

// Initialize the page when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  updateHeroSection();
  renderRelatedFlights();
  setupBackButton();
  addScrollAnimations();
  addHeroParallax();

  console.log("Flights Gallery Page Loaded Successfully! ✈️");
  console.log(
    "Page features: Aviation gallery, interactive modals, flight data",
  );

  // Keyboard navigation for modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const modal = document.querySelector(
        'div[style*="position: fixed"][style*="z-index: 9999"]',
      );
      if (modal) modal.remove();
    }
  });
});

// Export functions for external use (if needed)
window.flightsGallery = {
  updateHeroSection,
  renderRelatedFlights,
  showFlightDetails,
};
