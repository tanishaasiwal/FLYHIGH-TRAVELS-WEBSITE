// Resorts Gallery Data - Premium Luxury Collection
const resortsData = {
  mainImage:
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200",
  title: "🏨 Resorts · Paradise Found",
  location: "Maldives · Bali · Caribbean · Santorini · Phuket",
  description:
    "Escape to world-class luxury resorts where every detail is designed for your comfort. Infinity pools, overwater villas, private beaches, and world-class spas await. Whether you seek romance, adventure, or pure relaxation, these destinations redefine paradise.",
  highlights: [
    { icon: "fas fa-swimming-pool", text: "Infinity Pools" },
    { icon: "fas fa-spa", text: "World-Class Spas" },
    { icon: "fas fa-cocktail", text: "Beachfront Dining" },
  ],
  stats: [
    {
      icon: "fas fa-hotel",
      title: "Luxury Resorts",
      value: "500+ 5-Star Properties",
    },
    {
      icon: "fas fa-water",
      title: "Overwater Villas",
      value: "200+ Worldwide",
    },
    { icon: "fas fa-spa", title: "Premium Spas", value: "Award Winning" },
    { icon: "fas fa-globe", title: "Destinations", value: "30+ Countries" },
  ],
  insight:
    "Best times: Maldives (Nov-Apr), Bali (Apr-Oct), Caribbean (Dec-Apr). Book 3-6 months ahead for best rates. Consider all-inclusive packages for maximum value. Don't miss sunset cocktails and spa treatments! 🏨",
};

// Premium resort images collection with categories
const resortsRelated = [
  {
    url: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Overwater Bungalow Paradise",
    location: "Maldives",
    price: "$800+/night",
    category: "overwater",
    description:
      "Stay in luxurious overwater villas with direct access to crystal clear lagoons and stunning ocean views.",
  },
  {
    url: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Beachfront Luxury Escape",
    location: "Bali, Indonesia",
    price: "$350+/night",
    category: "beachfront",
    description:
      "Wake up to the sound of waves in these stunning beachfront villas surrounded by tropical gardens.",
  },
  {
    url: "https://images.pexels.com/photos/271620/pexels-photo-271620.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Infinity Pool Sunset",
    location: "Santorini, Greece",
    price: "$500+/night",
    category: "infinity",
    description:
      "Iconic infinity pools overlooking the caldera. Perfect for sunset viewing and romantic getaways.",
  },
  {
    url: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Cliffside Retreat",
    location: "Phuket, Thailand",
    price: "$300+/night",
    category: "cliffside",
    description:
      "Dramatic cliffside resorts offering panoramic ocean views and complete privacy.",
  },
  {
    url: "https://images.pexels.com/photos/1645959/pexels-photo-1645959.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Tropical Beach Resort",
    location: "Fiji",
    price: "$450+/night",
    category: "beachfront",
    description:
      "White sand beaches, turquoise waters, and traditional Fijian hospitality at its finest.",
  },
  {
    url: "https://images.pexels.com/photos/1458450/pexels-photo-1458450.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Modern Overwater Villa",
    location: "Bora Bora",
    price: "$1200+/night",
    category: "overwater",
    description:
      "Contemporary overwater villas with glass floor panels and private plunge pools.",
  },
  {
    url: "https://images.pexels.com/photos/1294941/pexels-photo-1294941.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Jungle Pool Villa",
    location: "Ubud, Bali",
    price: "$280+/night",
    category: "infinity",
    description:
      "Nestled in the jungle, these villas feature private infinity pools overlooking rice terraces.",
  },
  {
    url: "https://images.pexels.com/photos/2505910/pexels-photo-2505910.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Caribbean Beachfront",
    location: "Bahamas",
    price: "$600+/night",
    category: "beachfront",
    description:
      "Pink sand beaches and turquoise waters make this Caribbean paradise unforgettable.",
  },
  {
    url: "https://images.pexels.com/photos/2797469/pexels-photo-2797469.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Cliffside Infinity Edge",
    location: "Santorini, Greece",
    price: "$750+/night",
    category: "cliffside",
    description:
      "Perched on volcanic cliffs, these suites offer unmatched caldera and sunset views.",
  },
  {
    url: "https://images.pexels.com/photos/8448766/pexels-photo-8448766.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Maldives Overwater Suite",
    location: "Maldives",
    price: "$1500+/night",
    category: "overwater",
    description:
      "Ultra-luxury overwater suites with private butler service and underwater restaurants.",
  },
  {
    url: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Sunset Beach Resort",
    location: "Mauritius",
    price: "$400+/night",
    category: "beachfront",
    description:
      "Golden hour at this beachfront resort is pure magic with stunning Indian Ocean views.",
  },
  {
    url: "https://images.pexels.com/photos/2412567/pexels-photo-2412567.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Rainforest Infinity Pool",
    location: "Costa Rica",
    price: "$350+/night",
    category: "infinity",
    description:
      "Surrounded by lush rainforest, this infinity pool merges with the horizon.",
  },
];

let currentFilter = "all";

// Render resorts grid with filter
function renderResortsGrid() {
  const container = document.getElementById("resortsRelatedGrid");
  if (!container) return;

  const filtered =
    currentFilter === "all"
      ? resortsRelated
      : resortsRelated.filter((resort) => resort.category === currentFilter);

  container.innerHTML = "";

  filtered.forEach((resort, index) => {
    const card = document.createElement("div");
    card.className = "related-card";
    card.setAttribute("data-category", resort.category);

    const categoryIcon = {
      overwater: "fas fa-water",
      beachfront: "fas fa-umbrella-beach",
      infinity: "fas fa-swimming-pool",
      cliffside: "fas fa-mountain",
    };

    card.innerHTML = `
            <img src="${resort.url}" alt="${resort.caption}" loading="lazy" onerror="this.src='https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800'">
            <div class="card-caption">
                <i class="${categoryIcon[resort.category] || "fas fa-hotel"}"></i> ${resort.caption}
                <small>
                    <i class="fas fa-map-pin"></i> ${resort.location} • ${resort.price}
                </small>
            </div>
        `;

    card.addEventListener("click", () => {
      showResortDetails(resort);
    });

    container.appendChild(card);
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem; color:#8aae9a;">No resorts found in this category</div>`;
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
      renderResortsGrid();
    });
  });
}

// Modal for resort details
function showResortDetails(resort) {
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
    overwater: "🏝️ Overwater Villa",
    beachfront: "🏖️ Beachfront Paradise",
    infinity: "🏊 Infinity Pool",
    cliffside: "⛰️ Cliffside Retreat",
  };

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
        <button style="position: absolute; top: 18px; right: 22px; background: #2d6a4f; color: white; border: none; border-radius: 50%; width: 42px; height: 42px; font-size: 24px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: center;">&times;</button>
        <img src="${resort.url}" alt="${resort.caption}" style="width: 100%; max-height: 380px; border-radius: 24px; margin-bottom: 20px; object-fit: cover;">
        <span style="display: inline-block; background: #2d6a4f; color: white; padding: 4px 14px; border-radius: 30px; font-size: 0.7rem; font-weight: 600; margin-bottom: 12px;">${categoryNames[resort.category] || "Luxury Resort"}</span>
        <h2 style="color: #2d6a4f; margin-bottom: 15px; font-family: 'Playfair Display', serif; font-size: 1.8rem;">${resort.caption}</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-bottom: 20px;">
            <span style="background: #e3f0e8; padding: 6px 14px; border-radius: 25px;"><i class="fas fa-map-pin"></i> ${resort.location}</span>
            <span style="background: #e3f0e8; padding: 6px 14px; border-radius: 25px;"><i class="fas fa-tag"></i> ${resort.price}</span>
        </div>
        <p style="color: #4a6a5a; line-height: 1.6; margin-bottom: 20px; font-size: 1rem;">
            ${resort.description}
        </p>
        <hr style="margin: 20px 0 15px;">
        <div style="background: linear-gradient(135deg, #e3f0e8, #f0f7f0); padding: 16px; border-radius: 24px;">
            <p style="font-size: 0.9rem; color: #2d6a4f;"><i class="fas fa-star"></i> <strong>Luxury Tip:</strong> Book sunrise yoga sessions and sunset dinner reservations in advance for the best experience!</p>
        </div>
        <p style="font-size: 0.8rem; color: #c97e3e; margin-top: 18px;"><i class="fas fa-crown"></i> Premium Resort Collection</p>
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
    () => (closeBtn.style.background = "#40916c"),
  );
  closeBtn.addEventListener(
    "mouseleave",
    () => (closeBtn.style.background = "#2d6a4f"),
  );
}

function updateHeroSection() {
  const heroImage = document.getElementById("mainHeroImg");
  const locationSpan = document.getElementById("locationText");
  const descriptionPara = document.getElementById("mainDescription");
  const insightPara = document.getElementById("insightText");

  if (heroImage) heroImage.src = resortsData.mainImage;
  if (locationSpan) locationSpan.textContent = resortsData.location;
  if (descriptionPara) descriptionPara.textContent = resortsData.description;
  if (insightPara) insightPara.textContent = resortsData.insight;
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
  renderResortsGrid();
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
    "🏨 Luxury Resorts Gallery Loaded - 12 Premium Resorts with Filters",
  );
});
