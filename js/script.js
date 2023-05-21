/*for the nav bar toggle */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
  navToggler.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
}
/*close nav when click on item */
document.addEventListener("click", function (e) {
  if (e.target.closest(".nav-item")) {
    /*The closest() method searches up the DOM tree for the closest element which matches a specified CSS selector. It starts at the element itself, then tests the parent, grandparent, and so on until a match is found. If a match is not found, this method returns null. */
    toggleNav();
  }
});

/*sticky header - when we scroll down*/
window.addEventListener("scroll", function () {
  if (this.pageYOffset > 60) {
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.querySelector(".header").classList.remove("sticky");
  }
});

/*SKILLS TABS */
const skillsTabs = document.querySelector(".skills-tabs");
skillsTabs.addEventListener("click", function (e) {
  /*object which will be passed to event handlers. */
  if (
    e.target.classList.contains("skills-tab-item") &&
    !e.target.classList.contains("active")
  ) {
    const target = e.target.getAttribute("data-target"); /*a little bootstrap */
    /*when we click on a tab it will take the ID of the tab */
    skillsTabs.querySelector(".active").classList.remove("active");
    /*remove active class from the tabs that is not active */
    e.target.classList.add("active");
    /*then add it to the target("the selected tab") */
    const skillsSection = document.querySelector(".skills-section");
    skillsSection
      .querySelector(".skills-tab-content.active")
      .classList.remove("active");
    /*from the skills section we remove the items that are not equal to the same tab */
    skillsSection.querySelector(target).classList.add("active");
    /*then we add it to the items that are from this menu */

    AOS.init();
  }
});

/*ANIMATION ON SCROLL */
window.addEventListener("load", function () {
  AOS.init();
});
