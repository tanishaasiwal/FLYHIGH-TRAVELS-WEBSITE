// Flights Gallery Data - Premium Aviation Collection
const flightsData = {
  mainImage:
    "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1200",
  title: "✈️ Flights · Window to the World",
  location: "Global Aviation · Above Clouds · Sunrise/Sunset Flights",
  description:
    "Experience the magic of flight — where horizons stretch endlessly and clouds become landscapes. From the thrill of takeoff to the serenity of cruising at 35,000 feet, aviation connects continents and offers perspectives you'll never forget.",
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
    "For the best photos: choose window seats facing away from the sun! Clean the window before shooting. Use manual focus. Sunset and sunrise flights offer dramatic colors. Book early for premium window seat selection! ✈️",
};

// Premium aviation images collection with categories
const flightsRelated = [
  {
    url: "https://images.pexels.com/photos/626446/pexels-photo-626446.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Sunset Over Cloud Sea",
    airline: "Commercial Aviation",
    altitude: "38,000 feet",
    bestTime: "Dusk flights",
    category: "sunset",
    description:
      "Golden hour transforms clouds into a sea of fire. Perfect for dramatic photography with rich orange and purple hues.",
  },
  {
    url: "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Wing View Through Soft Clouds",
    airline: "Long-haul Carrier",
    altitude: "35,000 feet",
    bestTime: "Morning flights",
    category: "clouds",
    description:
      "Soft, pillowy clouds create an ethereal atmosphere. The gentle light makes every shot look dreamy.",
  },
  {
    url: "https://images.pexels.com/photos/221471/pexels-photo-221471.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Takeoff Power",
    airline: "Various Airlines",
    altitude: "Climbing",
    bestTime: "Departure",
    category: "clouds",
    description:
      "The thrilling moment when wheels leave the ground — pure adrenaline and anticipation captured perfectly.",
  },
  {
    url: "https://images.pexels.com/photos/4413566/pexels-photo-4413566.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "City Lights from Above",
    airline: "Global Routes",
    altitude: "32,000 feet",
    bestTime: "Night flights",
    category: "night",
    description:
      "Urban landscapes transform into sparkling constellations from above. A breathtaking view of civilization.",
  },
  {
    url: "https://images.pexels.com/photos/1157678/pexels-photo-1157678.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Mountain Peaks from Above",
    airline: "Alpine Routes",
    altitude: "36,000 feet",
    bestTime: "Clear weather",
    category: "sunrise",
    description:
      "Snow-capped mountains look like miniature sculptures from cruising altitude. Nature's grandeur from above.",
  },
  {
    url: "https://images.pexels.com/photos/159710/aircraft-airplane-clouds-flight-159710.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Above the Storm",
    airline: "International Flights",
    altitude: "41,000 feet",
    bestTime: "Storm season",
    category: "clouds",
    description:
      "Flying above thunderstorms offers spectacular views of nature's raw power and beauty.",
  },
  {
    url: "https://images.pexels.com/photos/398949/pexels-photo-398949.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Sunrise Horizon",
    airline: "Red-eye Flights",
    altitude: "37,000 feet",
    bestTime: "Early morning",
    category: "sunrise",
    description:
      "First light paints the horizon in pink and gold — an unforgettable reward for early travelers.",
  },
  {
    url: "https://images.pexels.com/photos/2996898/pexels-photo-2996898.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Coastal Paradise",
    airline: "Coastal Routes",
    altitude: "34,000 feet",
    bestTime: "Afternoon flights",
    category: "sunset",
    description:
      "Where ocean meets land — stunning patterns and turquoise waters visible only from the air.",
  },
  {
    url: "https://images.pexels.com/photos/2934426/pexels-photo-2934426.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Golden Hour Wing",
    airline: "Sunset Routes",
    altitude: "36,500 feet",
    bestTime: "Sunset flights",
    category: "sunset",
    description:
      "Sunlight reflecting off the wing creates magical golden hues across the entire cabin.",
  },
  {
    url: "https://images.pexels.com/photos/1161727/pexels-photo-1161727.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Cloud Surfing",
    airline: "Transatlantic",
    altitude: "39,000 feet",
    bestTime: "Mid-day flights",
    category: "clouds",
    description:
      "Fluffy white clouds stretch endlessly beneath the aircraft like a soft cotton carpet.",
  },
  {
    url: "https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Dusk Colors",
    airline: "Evening Routes",
    altitude: "35,000 feet",
    bestTime: "Evening flights",
    category: "sunset",
    description:
      "The transition from day to night creates an extraordinary palette of colors in the sky.",
  },
  {
    url: "https://images.pexels.com/photos/1529368/pexels-photo-1529368.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Starry Night Flight",
    airline: "Overnight Routes",
    altitude: "38,000 feet",
    bestTime: "Midnight",
    category: "night",
    description:
      "When the cabin lights dim, the stars become incredibly bright from above the clouds.",
  },
];

let currentFilter = "all";

// Render related flights grid with filter
function renderRelatedFlights() {
  const container = document.getElementById("flightsRelatedGrid");
  if (!container) return;

  const filtered =
    currentFilter === "all"
      ? flightsRelated
      : flightsRelated.filter((flight) => flight.category === currentFilter);

  container.innerHTML = "";

  filtered.forEach((flight, index) => {
    const card = document.createElement("div");
    card.className = "related-card";
    card.setAttribute("data-category", flight.category);

    card.innerHTML = `
            <img src="${flight.url}" alt="${flight.caption}" loading="lazy" onerror="this.src='https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800'">
            <div class="card-caption">
                <i class="fas fa-camera"></i> ${flight.caption}
                <small>
                    <i class="fas fa-cloud"></i> ${flight.altitude} • <i class="fas fa-clock"></i> ${flight.bestTime}
                </small>
            </div>
        `;

    card.addEventListener("click", () => {
      showFlightDetails(flight);
    });

    container.appendChild(card);
  });

  // show message if no results
  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem; color:#8aaec4;">No images found in this category</div>`;
  }
}

// Setup filter tabs
function setupFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderRelatedFlights();
    });
  });
}

// Modal for flight details
function showFlightDetails(flight) {
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.92)";
  modal.style.zIndex = "9999";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";
  modal.style.cursor = "pointer";
  modal.style.backdropFilter = "blur(5px)";

  const modalContent = document.createElement("div");
  modalContent.style.maxWidth = "90%";
  modalContent.style.maxHeight = "90%";
  modalContent.style.backgroundColor = "#fff";
  modalContent.style.borderRadius = "32px";
  modalContent.style.overflow = "auto";
  modalContent.style.padding = "28px";
  modalContent.style.textAlign = "center";
  modalContent.style.cursor = "default";
  modalContent.style.position = "relative";
  modalContent.style.maxWidth = "680px";

  const categoryNames = {
    sunset: "🌅 Golden Hour",
    sunrise: "🌄 Dawn Magic",
    night: "🌙 Night Flight",
    clouds: "☁️ Cloudscape",
  };

  modalContent.innerHTML = `
        <button style="position: absolute; top: 18px; right: 22px; background: #1e4a6e; color: white; border: none; border-radius: 50%; width: 42px; height: 42px; font-size: 24px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center;">&times;</button>
        <img src="${flight.url}" alt="${flight.caption}" style="width: 100%; max-height: 380px; border-radius: 24px; margin-bottom: 20px; object-fit: cover;">
        <span style="display: inline-block; background: ${flight.category === "sunset" ? "#e67e22" : flight.category === "sunrise" ? "#f39c12" : flight.category === "night" ? "#2c3e50" : "#3498db"}; color: white; padding: 4px 14px; border-radius: 30px; font-size: 0.7rem; font-weight: 600; margin-bottom: 12px;">${categoryNames[flight.category] || "Aviation"}</span>
        <h2 style="color: #1e4a6e; margin-bottom: 15px; font-family: 'Playfair Display', serif; font-size: 1.8rem;">${flight.caption}</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-bottom: 20px;">
            <span style="background: #e3edf5; padding: 6px 14px; border-radius: 25px;"><i class="fas fa-chart-line"></i> ${flight.altitude}</span>
            <span style="background: #e3edf5; padding: 6px 14px; border-radius: 25px;"><i class="fas fa-clock"></i> ${flight.bestTime}</span>
            <span style="background: #e3edf5; padding: 6px 14px; border-radius: 25px;"><i class="fas fa-plane"></i> ${flight.airline}</span>
        </div>
        <p style="color: #4a6a8a; line-height: 1.6; margin-bottom: 20px; font-size: 1rem;">
            ${flight.description}
        </p>
        <hr style="margin: 20px 0 15px;">
        <div style="background: linear-gradient(135deg, #f0f6fc, #e8f0f7); padding: 16px; border-radius: 24px;">
            <p style="font-size: 0.9rem; color: #2c6e96;"><i class="fas fa-camera"></i> <strong>Photography Tip:</strong> Use fast shutter speed (1/1000+), clean the window, and shoot in RAW for best results!</p>
        </div>
        <p style="font-size: 0.8rem; color: #c97e3e; margin-top: 18px;"><i class="fas fa-star"></i> Premium Aviation Collection</p>
    `;

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  const closeBtn = modalContent.querySelector("button");
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    modal.remove();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });

  closeBtn.addEventListener(
    "mouseenter",
    () => (closeBtn.style.background = "#2c6e96"),
  );
  closeBtn.addEventListener(
    "mouseleave",
    () => (closeBtn.style.background = "#1e4a6e"),
  );
}

function updateHeroSection() {
  const heroImage = document.getElementById("mainHeroImg");
  const locationSpan = document.getElementById("locationText");
  const descriptionPara = document.getElementById("mainDescription");
  const insightPara = document.getElementById("insightText");

  if (heroImage) heroImage.src = flightsData.mainImage;
  if (locationSpan) locationSpan.textContent = flightsData.location;
  if (descriptionPara) descriptionPara.textContent = flightsData.description;
  if (insightPara) insightPara.textContent = flightsData.insight;
}

function setupBackButton() {
  const backBtn = document.getElementById("backBtn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      if (window.history.length > 1) window.history.back();
      else window.location.href = "./gallery.html";
    });
  }
}

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
    card.style.transform = "translateY(25px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateHeroSection();
  renderRelatedFlights();
  setupFilters();
  setupBackButton();
  addScrollAnimations();

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const modal = document.querySelector(
        'div[style*="position: fixed"][style*="z-index: 9999"]',
      );
      if (modal) modal.remove();
    }
  });

  console.log(
    "✈️ SkyVista Aviation Gallery Loaded - 12 Premium Images with Filters",
  );
});
