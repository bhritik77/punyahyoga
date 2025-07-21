const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navBar = document.querySelector(".nav-bar");
const menuIcon = document.querySelector(".menu-icon");
const navLink = document.querySelectorAll(".nav-link");


menuBtn.addEventListener('click', () => {
    console.log("menu button is clicked");

    navLinks.classList.toggle("hidden");
    navLinks.classList.toggle("z-20");
    navLinks.classList.toggle("bg-gray-100");
    navBar.classList.toggle("relative")
    navLinks.classList.toggle("absolute");
    navLinks.classList.toggle("top-full");
    navLinks.classList.toggle("left-0");
    navLinks.classList.toggle("w-full");
    navLinks.classList.toggle("h-full");
    navLinks.classList.toggle("text-center");
    navLinks.classList.toggle("p-5");
    navLinks.classList.toggle("flex");
    navLinks.classList.toggle("flex-col");
    navLinks.classList.toggle("gap-3");
    navLink.forEach(link => {
    link.classList.toggle("w-[88%]");
    link.classList.toggle("border-b-2");
    link.classList.toggle("pb-2");
    });



})

 // Mobile dropdown for Our Courses
const coursesBtn = document.getElementById("coursesBtn");
const dropdown = document.getElementById("coursesDropdown");

coursesBtn?.addEventListener("click", (e) => {
  // Prevent default <a> or button behavior
  e.preventDefault();

  // Toggle dropdown for mobile
  if (window.innerWidth < 768) {
    dropdown.classList.toggle("hidden");
  }
});



// NAVBAR ENDS 

 const slider = document.getElementById("slider");
    const slides = slider.children;
    const total = slides.length;
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let index = 1;
    const size = 100; // % per slide

    // Initial position
    slider.style.transform = `translateX(-${size * index}%)`;

    // Move to next slide
    function moveToNext() {
      if (index >= total - 1) return;
      index++;
      slider.style.transition = "transform 0.8s ease-in-out";
      slider.style.transform = `translateX(-${size * index}%)`;
    }

    // Move to previous slide
    function moveToPrev() {
      if (index <= 0) return;
      index--;
      slider.style.transition = "transform 0.8s ease-in-out";
      slider.style.transform = `translateX(-${size * index}%)`;
    }

    // Loop logic after transition
    slider.addEventListener("transitionend", () => {
      // If on cloned last (index 0) → jump to real last
      if (index === 0) {
        slider.style.transition = "none";
        index = total - 2;
        slider.style.transform = `translateX(-${size * index}%)`;
      }

      // If on cloned first (index total-1) → jump to real first
      if (index === total - 1) {
        slider.style.transition = "none";
        index = 1;
        slider.style.transform = `translateX(-${size * index}%)`;
      }
    });

    // Auto Slide
    function autoSlide() {
      moveToNext();
    }
    let slideInterval = setInterval(autoSlide, 4000);

    // Manual Controls

    prevBtn.addEventListener("click", () => {
      moveToPrev();
      resetTimer();
    });

    // Reset auto slide timer on manual click
    function resetTimer() {
      clearInterval(slideInterval);
      slideInterval = setInterval(autoSlide, 4000);
    }

   

    