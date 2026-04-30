// Mountains Gallery Data - Premium Mountain Collection
const mountainsData = {
  mainImage:
    "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1200",
  title: "⛰️ Mountains · Call of the Wild",
  location: "Swiss Alps · Himalayas · Rockies · Andes · Dolomites",
  description:
    "Answer the call of the wild. Majestic peaks, crisp alpine air, and trails that lead to unforgettable vistas. Whether you're a seasoned climber or a peaceful hiker, mountains offer solitude, challenge, and breathtaking beauty at every elevation above the clouds.",
  highlights: [
    { icon: "fas fa-hiking", text: "Epic Treks" },
    { icon: "fas fa-snowflake", text: "Snow-Capped Peaks" },
    { icon: "fas fa-campground", text: "Alpine Camping" },
  ],
  stats: [
    {
      icon: "fas fa-chart-line",
      title: "Highest Peak",
      value: "Everest · 8,848m",
    },
    {
      icon: "fas fa-temperature-low",
      title: "Avg Temperature",
      value: "-5°C to 15°C",
    },
    {
      icon: "fas fa-route",
      title: "Famous Trails",
      value: "Tour du Mont Blanc",
    },
    {
      icon: "fas fa-tree",
      title: "Biodiversity",
      value: "Alpine Flora & Fauna",
    },
  ],
  insight:
    "Best climbing seasons: June-September for Alps, April-May & Sept-Oct for Himalayas. Always acclimatize properly, carry layers, and check weather before any trek. Sunrise at the summit is pure magic — start early! 🏔️",
};

// Premium mountain images collection with categories
const mountainsRelated = [
  {
    url: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Matterhorn at Golden Hour",
    location: "Swiss Alps, Switzerland",
    elevation: "4,478m",
    difficulty: "Advanced",
    category: "alps",
    description:
      "The iconic Matterhorn peak glowing at sunset. One of the most photographed mountains in the world.",
  },
  {
    url: "https://images.pexels.com/photos/979202/pexels-photo-979202.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Everest Base Camp Trek",
    location: "Nepal Himalayas",
    elevation: "5,364m (Base Camp)",
    difficulty: "Expert",
    category: "himalayas",
    description:
      "The legendary Everest Base Camp trek offers unparalleled views of the world's highest peak.",
  },
  {
    url: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Rocky Mountain Wilderness",
    location: "Colorado, USA",
    elevation: "4,401m (Mt. Elbert)",
    difficulty: "Moderate",
    category: "rockies",
    description:
      "Vast wilderness, alpine lakes, and abundant wildlife define the magnificent Rockies.",
  },
  {
    url: "https://images.pexels.com/photos/262405/pexels-photo-262405.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Andean Peaks at Dawn",
    location: "Patagonia, Andes",
    elevation: "6,961m (Aconcagua)",
    difficulty: "Advanced",
    category: "andes",
    description:
      "Dramatic peaks and glaciers of the Andes, the world's longest mountain range.",
  },
  {
    url: "https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Dolomites at Dusk",
    location: "Italian Alps",
    elevation: "3,343m (Marmolada)",
    difficulty: "Moderate",
    category: "alps",
    description:
      "UNESCO World Heritage site with dramatic limestone peaks and lush valleys.",
  },
  {
    url: "https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Norwegian Fjord Mountains",
    location: "Norwegian Fjords",
    elevation: "2,469m (Galdhøpiggen)",
    difficulty: "Moderate",
    category: "alps",
    description:
      "Where mountains meet the sea - spectacular fjord landscapes of northern Europe.",
  },
  {
    url: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Banff National Park",
    location: "Canadian Rockies",
    elevation: "2,500m+",
    difficulty: "Easy to Moderate",
    category: "rockies",
    description:
      "Turquoise lakes, towering peaks, and abundant wildlife in Canada's premier park.",
  },
  {
    url: "https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Carpathian Mountains",
    location: "Romania",
    elevation: "2,544m (Moldoveanu)",
    difficulty: "Moderate",
    category: "alps",
    description:
      "Wild and untamed peaks of Eastern Europe, home to brown bears and wolves.",
  },
  {
    url: "https://images.pexels.com/photos/3541881/pexels-photo-3541881.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Annapurna Range",
    location: "Nepal Himalayas",
    elevation: "8,091m",
    difficulty: "Expert",
    category: "himalayas",
    description:
      "One of the most dangerous yet beautiful mountain ranges in the world.",
  },
  {
    url: "https://images.pexels.com/photos/1166216/pexels-photo-1166216.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Mount Fuji",
    location: "Japan",
    elevation: "3,776m",
    difficulty: "Moderate",
    category: "himalayas",
    description:
      "Japan's iconic sacred mountain, perfectly symmetrical and culturally significant.",
  },
  {
    url: "https://images.pexels.com/photos/3274104/pexels-photo-3274104.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Torres del Paine",
    location: "Patagonian Andes",
    elevation: "2,500m+",
    difficulty: "Advanced",
    category: "andes",
    description:
      "Granite towers and electric blue glaciers in Chilean Patagonia.",
  },
  {
    url: "https://images.pexels.com/photos/1504739/pexels-photo-1504739.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Snowy Peak Sunrise",
    location: "French Alps",
    elevation: "4,808m (Mont Blanc)",
    difficulty: "Advanced",
    category: "alps",
    description:
      "First light hitting the highest peak in the Alps - a climber's dream.",
  },
];

let currentFilter = "all";

// Render mountains grid with filter
function renderMountainsGrid() {
  const container = document.getElementById("mountainsRelatedGrid");
  if (!container) return;

  const filtered =
    currentFilter === "all"
      ? mountainsRelated
      : mountainsRelated.filter(
          (mountain) => mountain.category === currentFilter,
        );

  container.innerHTML = "";

  filtered.forEach((mountain, index) => {
    const card = document.createElement("div");
    card.className = "related-card";
    card.setAttribute("data-category", mountain.category);

    const difficultyColor =
      mountain.difficulty === "Expert"
        ? "#c0392b"
        : mountain.difficulty === "Advanced"
          ? "#e67e22"
          : "#27ae60";

    card.innerHTML = `
            <img src="${mountain.url}" alt="${mountain.caption}" loading="lazy" onerror="this.src='https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800'">
            <div class="card-caption">
                <i class="fas fa-mountain"></i> ${mountain.caption}
                <small>
                    <i class="fas fa-map-pin"></i> ${mountain.location} • 🏔️ ${mountain.elevation}
                </small>
            </div>
        `;

    card.addEventListener("click", () => {
      showMountainDetails(mountain);
    });

    container.appendChild(card);
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem; color:#8aae9a;">No mountains found in this category</div>`;
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
      renderMountainsGrid();
    });
  });
}

// Modal for mountain details
function showMountainDetails(mountain) {
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

  const categoryNames = {
    himalayas: "🏔️ Himalayan Range",
    alps: "⛰️ The Alps",
    rockies: "🌲 Rocky Mountains",
    andes: "🗻 Andes Mountains",
  };

  const difficultyColor =
    mountain.difficulty === "Expert"
      ? "#c0392b"
      : mountain.difficulty === "Advanced"
        ? "#e67e22"
        : "#27ae60";

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

  modalContent.innerHTML = `
        <button style="position: absolute; top: 18px; right: 22px; background: #2c5a4a; color: white; border: none; border-radius: 50%; width: 42px; height: 42px; font-size: 24px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center;">&times;</button>
        <img src="${mountain.url}" alt="${mountain.caption}" style="width: 100%; max-height: 380px; border-radius: 24px; margin-bottom: 20px; object-fit: cover;">
        <span style="display: inline-block; background: #2c5a4a; color: white; padding: 4px 14px; border-radius: 30px; font-size: 0.7rem; font-weight: 600; margin-bottom: 12px;">${categoryNames[mountain.category] || "Mountain Peak"}</span>
        <h2 style="color: #2c5a4a; margin-bottom: 15px; font-family: 'Playfair Display', serif; font-size: 1.8rem;">${mountain.caption}</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-bottom: 20px;">
            <span style="background: #e3ede8; padding: 6px 14px; border-radius: 25px;"><i class="fas fa-map-pin"></i> ${mountain.location}</span>
            <span style="background: #e3ede8; padding: 6px 14px; border-radius: 25px;"><i class="fas fa-chart-line"></i> Elevation: ${mountain.elevation}</span>
            <span style="background: ${difficultyColor}20; padding: 6px 14px; border-radius: 25px; color: ${difficultyColor};"><i class="fas fa-signal"></i> Difficulty: ${mountain.difficulty}</span>
        </div>
        <p style="color: #4a6a5a; line-height: 1.6; margin-bottom: 20px; font-size: 1rem;">
            ${mountain.description}
        </p>
        <hr style="margin: 20px 0 15px;">
        <div style="background: linear-gradient(135deg, #e3ede8, #f0f7f0); padding: 16px; border-radius: 24px;">
            <p style="font-size: 0.9rem; color: #2c5a4a;"><i class="fas fa-hiking"></i> <strong>Hiking Tip:</strong> Start early, stay hydrated, and always check weather conditions before attempting this trek!</p>
        </div>
        <p style="font-size: 0.8rem; color: #8b6b3d; margin-top: 18px;"><i class="fas fa-star"></i> Featured in our Premium Mountain Collection</p>
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
    () => (closeBtn.style.background = "#3d7a63"),
  );
  closeBtn.addEventListener(
    "mouseleave",
    () => (closeBtn.style.background = "#2c5a4a"),
  );
}

function updateHeroSection() {
  const heroImage = document.getElementById("mainHeroImg");
  const locationSpan = document.getElementById("locationText");
  const descriptionPara = document.getElementById("mainDescription");
  const insightPara = document.getElementById("insightText");

  if (heroImage) heroImage.src = mountainsData.mainImage;
  if (locationSpan) locationSpan.textContent = mountainsData.location;
  if (descriptionPara) descriptionPara.textContent = mountainsData.description;
  if (insightPara) insightPara.textContent = mountainsData.insight;
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
  renderMountainsGrid();
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
    "🏔️ Majestic Mountains Gallery Loaded - 12 Premium Mountain Images with Filters",
  );
});
