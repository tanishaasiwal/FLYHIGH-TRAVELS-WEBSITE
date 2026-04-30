// Beach Gallery Data - Complete information for beaches page
const beachData = {
  mainImage:
    "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1000",
  title: "🌊 Beaches · Eternal Summer",
  location: "Maldives · Bora Bora · Seychelles · Phi Phi · Caribbean",
  description:
    "Step into a world of powder-soft sands, crystal-clear lagoons, and golden sunsets. Whether you seek adrenaline-pumping water sports or peaceful seaside yoga, beaches offer a sanctuary for every soul. Let the rhythm of waves wash over you and discover why coastline magic is unmatched.",
  highlights: [
    { icon: "fas fa-sun", text: "Year-round sunshine" },
    { icon: "fas fa-fish", text: "Rich marine life" },
    { icon: "fas fa-cocktail", text: "Beachfront bliss" },
  ],
  stats: [
    {
      icon: "fas fa-water",
      title: "Crystal Clarity",
      value: "Visibility up to 40m in Maldives",
    },
    {
      icon: "fas fa-temperature-high",
      title: "Perfect Climate",
      value: "Avg 28°C · gentle breeze",
    },
    {
      icon: "fas fa-camera-retro",
      title: "Photo Spots",
      value: "Iconic overwater bungalows & palms",
    },
    {
      icon: "fas fa-umbrella-beach",
      title: "Hidden Coves",
      value: "Secret beaches & untouched bays",
    },
  ],
  insight:
    "From November to April, the beaches sparkle with dry season magic. Don't miss the bioluminescent plankton nights in the Maldives — a surreal experience. Pack reef-safe sunscreen and try local coconut delicacies.",
};

// Related images array with detailed information
const beachRelated = [
  {
    url: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Pristine white sands & azure waves",
    location: "Seychelles",
    bestTime: "April-May",
  },
  {
    url: "https://images.pexels.com/photos/2606897/pexels-photo-2606897.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Sunset silhouette over Indian Ocean",
    location: "Maldives",
    bestTime: "December-March",
  },
  {
    url: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Turquoise lagoon & overwater bungalows",
    location: "Bora Bora",
    bestTime: "May-October",
  },
  {
    url: "https://images.pexels.com/photos/3611042/pexels-photo-3611042.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Hidden cove · perfect serenity",
    location: "Phi Phi Islands",
    bestTime: "November-April",
  },
  {
    url: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Golden hour · beach bliss",
    location: "Caribbean",
    bestTime: "December-April",
  },
  {
    url: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Palm trees & gentle tides",
    location: "Fiji",
    bestTime: "July-September",
  },
  {
    url: "https://images.pexels.com/photos/2166927/pexels-photo-2166927.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Crystal clear snorkeling paradise",
    location: "Great Barrier Reef",
    bestTime: "June-October",
  },
  {
    url: "https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=700",
    caption: "Luxury beachfront retreat",
    location: "Maldives",
    bestTime: "January-April",
  },
];

// Function to render related images grid
function renderRelatedImages() {
  const container = document.getElementById("beachRelatedGrid");
  if (!container) return;

  container.innerHTML = "";

  beachRelated.forEach((img, index) => {
    const card = document.createElement("div");
    card.className = "related-card";
    card.setAttribute("data-index", index);
    card.setAttribute("data-location", img.location);
    card.setAttribute("data-caption", img.caption);
    card.setAttribute("data-besttime", img.bestTime);

    card.innerHTML = `
            <img src="${img.url}" alt="beach scene - ${img.caption}" loading="lazy">
            <div class="card-caption">
                <i class="fas fa-camera"></i> ${img.caption}
                <small style="display: block; font-size: 0.7rem; color: #b87a3a; margin-top: 5px;">
                    <i class="fas fa-map-pin"></i> ${img.location}
                </small>
            </div>
        `;

    // Add click event to show detailed information about the beach image
    card.addEventListener("click", () => {
      showBeachDetails(img);
    });

    container.appendChild(card);
  });
}

// Function to show modal/detailed information when clicking on related image
function showBeachDetails(beachImage) {
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
            <button style="position: absolute; top: 10px; right: 20px; background: #c97e3e; color: white; border: none; border-radius: 50%; width: 40px; height: 40px; font-size: 20px; cursor: pointer; z-index: 10;">&times;</button>
            <img src="${beachImage.url}" alt="${beachImage.caption}" style="max-width: 100%; max-height: 60vh; border-radius: 16px; margin-bottom: 20px;">
            <h3 style="color: #1e3c42; margin-bottom: 10px;">${beachImage.caption}</h3>
            <p style="color: #b5641a; margin-bottom: 10px;"><i class="fas fa-map-marker-alt"></i> ${beachImage.location}</p>
            <p style="color: #4a6572; margin-bottom: 10px;"><i class="fas fa-calendar-alt"></i> Best time to visit: ${beachImage.bestTime}</p>
            <p style="color: #2c3e44;">This stunning beach destination offers crystal clear waters, soft sands, and unforgettable sunsets. Perfect for swimming, photography, and relaxation.</p>
            <hr style="margin: 15px 0;">
            <p style="font-size: 0.9rem; color: #7a5a3a;"><i class="fas fa-star"></i> Featured in our coastal collection</p>
        </div>
    `;

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Close modal on background click or close button
  const closeBtn = modalContent.querySelector("button");
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    modal.remove();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}

// Function to update hero section with dynamic data
function updateHeroSection() {
  const heroImage = document.getElementById("mainHeroImg");
  const locationSpan = document.getElementById("locationText");
  const descriptionPara = document.getElementById("mainDescription");
  const insightPara = document.getElementById("insightText");

  if (heroImage) heroImage.src = beachData.mainImage;
  if (locationSpan) locationSpan.textContent = beachData.location;
  if (descriptionPara) descriptionPara.textContent = beachData.description;
  if (insightPara) insightPara.textContent = beachData.insight;

  // Update stats row
  const statsRow = document.querySelector(".stats-row");
  if (statsRow && beachData.stats) {
    statsRow.innerHTML = "";
    beachData.stats.forEach((stat) => {
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
  if (highlightsContainer && beachData.highlights) {
    highlightsContainer.innerHTML = "";
    beachData.highlights.forEach((highlight) => {
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
      // Check if there's history to go back to, otherwise go to main gallery
      if (window.history.length > 1) {
        window.history.back();
      } else {
        // If no history, provide a fallback - you can redirect to main gallery page
        const confirmRedirect = confirm(
          "No gallery history found. Do you want to return to the Main Gallery page?",
        );
        if (confirmRedirect) {
          // You can change this URL to your main gallery page
          window.location.href = "./gallery.html";
        }
      }
    });
  }
}

// Add scroll animations and interactions
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

// Initialize the page when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  updateHeroSection();
  renderRelatedImages();
  setupBackButton();
  addScrollAnimations();

  // Add smooth hover effects for stat cards (already in CSS, but ensure dynamic ones work)
  console.log("Beach Gallery Page Loaded Successfully!");

  // Optional: Add keyboard navigation for modal
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
window.beachGallery = {
  updateHeroSection,
  renderRelatedImages,
  showBeachDetails,
};
