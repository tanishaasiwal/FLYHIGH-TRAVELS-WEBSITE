// ========================================
// MOBILE MENU TOGGLE - WORKING FIXED
// ========================================

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelector(".nav-links");

  // Create mobile menu button
  let menuBtn = document.querySelector(".mobile-menu-btn");

  if (!menuBtn && navbar) {
    menuBtn = document.createElement("button");
    menuBtn.className = "mobile-menu-btn";
    menuBtn.innerHTML = "☰";
    menuBtn.setAttribute("aria-label", "Menu");
    navbar.insertBefore(menuBtn, navLinks);
  }

  // Function to open menu
  function openMenu() {
    if (navLinks) {
      navLinks.classList.add("active");
      if (menuBtn) menuBtn.innerHTML = "✕";
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }
  }

  // Function to close menu
  function closeMenu() {
    if (navLinks) {
      navLinks.classList.remove("active");
      if (menuBtn) menuBtn.innerHTML = "☰";
      document.body.style.overflow = ""; // Allow background scroll
    }
  }

  // Function to toggle menu
  function toggleMenu() {
    if (navLinks && navLinks.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Add click event to menu button
  if (menuBtn) {
    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleMenu();
    });
  }

  // Close menu when clicking on any nav link
  if (navLinks) {
    const allLinks = navLinks.querySelectorAll("a");
    allLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        closeMenu(); // Close menu on link click
      });
    });
  }

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (navLinks && navLinks.classList.contains("active")) {
      // Check if click is outside navbar
      if (!navbar.contains(event.target)) {
        closeMenu();
      }
    }
  });

  // Close menu on window resize (if screen becomes large)
  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });

  // Handle screen size for mobile/desktop view
  function handleScreenSize() {
    if (window.innerWidth <= 900) {
      // Mobile view
      if (menuBtn) menuBtn.style.display = "block";
      // Don't auto-close, just ensure styles are correct
    } else {
      // Desktop view - ensure menu is closed
      closeMenu();
      if (menuBtn) menuBtn.style.display = "none";
    }
  }

  // Initial check
  handleScreenSize();

  // Listen for resize
  window.addEventListener("resize", handleScreenSize);

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  // Typing animation
  const typingText = document.getElementById("typing-text");
  if (typingText) {
    const texts = [
      "Flyhigh Travels",
      "Explore the World",
      "Book Your Dream Trip",
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentText = texts[textIndex];

      if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeEffect, 500);
        return;
      }

      setTimeout(typeEffect, isDeleting ? 100 : 150);
    }

    typeEffect();
  }

  // Booking Modal JavaScript
  const modal = document.getElementById("bookingModal");
  const bookNowBtn = document.getElementById("bookNowBtn");
  const closeModalBtn = document.querySelector(".close-modal");
  const bookingForm = document.getElementById("bookingForm");
  const submitBtn = document.getElementById("submitBtn");
  const toast = document.getElementById("bookingToast");
  const searchTripsBtn = document.getElementById("searchTripsBtn");
  const searchDestinationInput = document.getElementById(
    "searchDestinationInput",
  );
  const searchCheckInInput = document.getElementById("searchCheckInInput");
  const searchResultsSection = document.getElementById("searchResults");
  const resultsGrid = document.getElementById("resultsGrid");

  const recommendedTrips = [
    {
      title: "Dubai Luxury Tour",
      destination: "dubai",
      summary: "5 nights of shopping, desert safari, and Burj Khalifa views.",
      duration: "5 Nights",
      price: "₹52,999",
    },
    {
      title: "Goa Beach Escape",
      destination: "goa",
      summary: "Relax on golden sands, enjoy watersports and beach parties.",
      duration: "4 Nights",
      price: "₹28,499",
    },
    {
      title: "Bali Wellness Retreat",
      destination: "bali",
      summary: "Spa days, rice terraces, and sunset temples in tropical Bali.",
      duration: "6 Nights",
      price: "₹61,900",
    },
    {
      title: "Paris Romantic Getaway",
      destination: "paris",
      summary: "Iconic city strolls, river cruises, and gourmet dining.",
      duration: "5 Nights",
      price: "₹74,300",
    },
    {
      title: "Maldives Overwater Escape",
      destination: "maldives",
      summary:
        "Overwater villa luxury, private beach dinners, and sunset cruises.",
      duration: "6 Nights",
      price: "₹89,500",
    },
    {
      title: "Switzerland Alpine Retreat",
      destination: "switzerland",
      summary:
        "Snowy peaks, mountain rail journeys, and scenic lakeside stays.",
      duration: "5 Nights",
      price: "₹78,200",
    },
  ];

  // Traveler counters
  let adults = 2,
    children = 0,
    infants = 0;

  function updateTravelerDisplay() {
    const adultsSpan = document.getElementById("adultsCount");
    const childrenSpan = document.getElementById("childrenCount");
    const infantsSpan = document.getElementById("infantsCount");
    const travelersValue = document.getElementById("travelersValue");

    if (adultsSpan) adultsSpan.textContent = adults;
    if (childrenSpan) childrenSpan.textContent = children;
    if (infantsSpan) infantsSpan.textContent = infants;
    if (travelersValue) {
      travelersValue.value = `${adults} Adults, ${children} Children, ${infants} Infants`;
    }
  }

  // Setup counter buttons
  function setupCounters() {
    const minusBtns = document.querySelectorAll(".counter-btn.minus");
    const plusBtns = document.querySelectorAll(".counter-btn.plus");

    minusBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const type = this.getAttribute("data-type");
        if (type === "adults" && adults > 1) adults--;
        if (type === "children" && children > 0) children--;
        if (type === "infants" && infants > 0) infants--;
        updateTravelerDisplay();
      });
    });

    plusBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const type = this.getAttribute("data-type");
        if (type === "adults") adults++;
        if (type === "children") children++;
        if (type === "infants" && infants < adults) infants++;
        updateTravelerDisplay();
      });
    });
  }

  // Set date limits
  function setDateLimits() {
    const today = new Date().toISOString().split("T")[0];
    const travelDate = document.getElementById("travelDate");
    const returnDate = document.getElementById("returnDate");

    if (travelDate) {
      travelDate.min = today;
      travelDate.addEventListener("change", function () {
        if (returnDate) returnDate.min = this.value;
      });
    }
  }

  function createTripCard(trip) {
    const card = document.createElement("div");
    card.className = "trip-card";
    card.innerHTML = `
      <h4>${trip.title}</h4>
      <p>${trip.summary}</p>
      <div class="trip-meta">
        <span>${trip.duration}</span>
        <span>${trip.price}</span>
      </div>
      <button type="button" data-destination="${trip.destination}">Book Now</button>
    `;

    const button = card.querySelector("button");
    button.addEventListener("click", function () {
      const destinationSelect = document.getElementById("destination");
      if (destinationSelect) {
        destinationSelect.value = trip.destination;
      }
      const travelDate = document.getElementById("travelDate");
      const returnDate = document.getElementById("returnDate");
      if (searchCheckInInput && travelDate && searchCheckInInput.value) {
        travelDate.value = searchCheckInInput.value;
        if (returnDate) {
          returnDate.min = travelDate.value;
        }
      }
      openModal();
    });

    return card;
  }

  function renderSearchResults(trips) {
    if (!searchResultsSection || !resultsGrid) return;

    resultsGrid.innerHTML = "";

    if (!trips.length) {
      resultsGrid.innerHTML =
        '<div class="no-results">No packages match your search. Try another destination.</div>';
      searchResultsSection.style.display = "block";
      return;
    }

    trips.forEach((trip) => {
      resultsGrid.appendChild(createTripCard(trip));
    });

    searchResultsSection.style.display = "block";
  }

  function handleSearchTrips(event) {
    event.preventDefault();
    const searchValue =
      searchDestinationInput?.value.trim().toLowerCase() || "";

    const filtered = recommendedTrips.filter((trip) =>
      searchValue
        ? trip.destination.includes(searchValue) ||
          trip.title.toLowerCase().includes(searchValue)
        : true,
    );

    renderSearchResults(filtered);
  }

  // Show toast
  function showToast(message, isSuccess = true) {
    if (!toast) return;

    const toastContent = toast.querySelector(".toast-content");
    const icon = toastContent?.querySelector("i");
    const title = toastContent?.querySelector("h4");
    const desc = toastContent?.querySelector("p");

    if (isSuccess) {
      if (icon) icon.className = "fas fa-check-circle";
      if (title) title.textContent = "Booking Request Sent!";
      if (desc)
        desc.textContent =
          message || "We'll contact you within 24 hours to confirm your trip.";
    } else {
      if (icon) icon.className = "fas fa-exclamation-circle";
      if (title) title.textContent = "Booking Failed!";
      if (desc) desc.textContent = message || "Please try again later.";
    }

    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  }

  // Show loading state
  function showLoading() {
    if (!submitBtn) return;
    const normalSpan = submitBtn.querySelector(".btn-normal");
    const loadingSpan = submitBtn.querySelector(".btn-loading");
    const successSpan = submitBtn.querySelector(".btn-success");

    if (normalSpan) normalSpan.style.display = "none";
    if (loadingSpan) loadingSpan.style.display = "flex";
    if (successSpan) successSpan.style.display = "none";
    submitBtn.classList.add("disabled");
  }

  // Show success state
  function showSuccess() {
    if (!submitBtn) return;
    const normalSpan = submitBtn.querySelector(".btn-normal");
    const loadingSpan = submitBtn.querySelector(".btn-loading");
    const successSpan = submitBtn.querySelector(".btn-success");

    if (normalSpan) normalSpan.style.display = "none";
    if (loadingSpan) loadingSpan.style.display = "none";
    if (successSpan) successSpan.style.display = "flex";
    submitBtn.classList.add("disabled");
  }

  // Reset button
  function resetButton() {
    if (!submitBtn) return;
    const normalSpan = submitBtn.querySelector(".btn-normal");
    const loadingSpan = submitBtn.querySelector(".btn-loading");
    const successSpan = submitBtn.querySelector(".btn-success");

    if (normalSpan) normalSpan.style.display = "flex";
    if (loadingSpan) loadingSpan.style.display = "none";
    if (successSpan) successSpan.style.display = "none";
    submitBtn.classList.remove("disabled");
  }

  // Close modal
  function closeModal() {
    if (modal) {
      modal.classList.add("closing");
      setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("closing");
        document.body.style.overflow = "auto";
        resetButton();
      }, 300);
    }
  }

  // Open modal
  function openModal() {
    if (modal) {
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
      resetButton();
      setDateLimits();
    }
  }

  // Reset form
  function resetForm() {
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const destination = document.getElementById("destination");
    const travelDate = document.getElementById("travelDate");
    const returnDate = document.getElementById("returnDate");
    const packageType = document.getElementById("packageType");
    const specialRequests = document.getElementById("specialRequests");
    const newsletter = document.getElementById("newsletter");

    if (fullName) fullName.value = "";
    if (email) email.value = "";
    if (phone) phone.value = "";
    if (destination) destination.value = "";
    if (travelDate) travelDate.value = "";
    if (returnDate) returnDate.value = "";
    if (packageType) packageType.value = "standard";
    if (specialRequests) specialRequests.value = "";
    if (newsletter) newsletter.checked = true;

    adults = 2;
    children = 0;
    infants = 0;
    updateTravelerDisplay();
    setDateLimits();
  }

  // Validate form
  function validateForm() {
    const name = document.getElementById("fullName")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const phone = document.getElementById("phone")?.value.trim();
    const destination = document.getElementById("destination")?.value;
    const travelDate = document.getElementById("travelDate")?.value;

    if (!name) {
      showToast("Please enter your full name", false);
      return false;
    }
    if (!email || !email.includes("@")) {
      showToast("Please enter a valid email address", false);
      return false;
    }
    if (!phone) {
      showToast("Please enter your phone number", false);
      return false;
    }
    if (!destination) {
      showToast("Please select a destination", false);
      return false;
    }
    if (!travelDate) {
      showToast("Please select your travel date", false);
      return false;
    }
    return true;
  }

  // Submit booking
  async function submitBooking(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    showLoading();

    const destinationSelect = document.getElementById("destination");
    const destinationName =
      destinationSelect?.options[destinationSelect.selectedIndex]?.text || "";
    const packageSelect = document.getElementById("packageType");
    const packageName =
      packageSelect?.options[packageSelect.selectedIndex]?.text || "";

    const bookingData = {
      bookingId: "PNJ" + Date.now(),
      fullName: document.getElementById("fullName")?.value.trim(),
      email: document.getElementById("email")?.value.trim(),
      phone: document.getElementById("phone")?.value.trim(),
      destination: destinationName,
      travelDate: document.getElementById("travelDate")?.value,
      returnDate:
        document.getElementById("returnDate")?.value || "Not specified",
      travelers: document.getElementById("travelersValue")?.value,
      packageType: packageName,
      specialRequests:
        document.getElementById("specialRequests")?.value || "None",
      newsletter: document.getElementById("newsletter")?.checked,
      bookingDate: new Date().toLocaleString(),
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      let bookings = JSON.parse(localStorage.getItem("pnj_bookings") || "[]");
      bookings.push(bookingData);
      localStorage.setItem("pnj_bookings", JSON.stringify(bookings));

      console.log("Booking Successful:", bookingData);

      showSuccess();
      showToast(
        `Thank you ${bookingData.fullName}! Your trip to ${bookingData.destination} has been booked.`,
      );

      setTimeout(() => {
        resetForm();
        closeModal();
      }, 1500);
    } catch (error) {
      console.error("Booking Error:", error);
      showToast("Something went wrong. Please try again.", false);
      resetButton();
    }
  }

  // Event listeners for modal
  if (bookNowBtn) {
    bookNowBtn.addEventListener("click", function (e) {
      e.preventDefault();
      openModal();
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
  }

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal && modal.style.display === "block") {
      closeModal();
    }
  });

  if (bookingForm) {
    bookingForm.addEventListener("submit", submitBooking);
  }

  if (searchTripsBtn) {
    searchTripsBtn.addEventListener("click", handleSearchTrips);
  }

  // Initialize counters and date limits
  setupCounters();
  updateTravelerDisplay();
  setDateLimits();

  // Package card book buttons
  const bookBtns = document.querySelectorAll(".book-btn");
  bookBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const card = this.closest(".package-card");
      const packageName = card?.querySelector("h3")?.innerText || "";
      const packagePrice = card?.querySelector(".price")?.innerText || "";
      const packageDuration = card?.querySelector(".duration")?.innerText || "";

      // Auto-fill destination in modal based on package name
      const destinationSelect = document.getElementById("destination");
      if (destinationSelect && packageName) {
        // Create mapping for package names to destination values
        const packageToDestination = {
          "Dubai Luxury Tour": "dubai",
          "Goa Beach Package": "goa",
          "Manali Snow Trip": "manali",
        };

        const destinationValue = packageToDestination[packageName];
        if (destinationValue) {
          destinationSelect.value = destinationValue;
        } else {
          // Fallback: try to match first word
          for (let i = 0; i < destinationSelect.options.length; i++) {
            if (
              destinationSelect.options[i].text
                .toLowerCase()
                .includes(packageName.split(" ")[0].toLowerCase())
            ) {
              destinationSelect.selectedIndex = i;
              break;
            }
          }
        }
      }

      openModal();
    });
  });

  console.log("All systems ready! ✅");
});
