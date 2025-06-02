const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.textContent.toLowerCase();
        const targetSection = document.getElementById(targetId);
        const currentSection = document.querySelector(".section.active");

        if (targetSection && targetSection !== currentSection) {
          // Remove active from all links
          links.forEach(l => l.classList.remove("active"));
          this.classList.add("active");

          // Animate current section out
          currentSection.classList.remove("active");
          currentSection.classList.add("slide-out");

          // After animation, hide current and show new
          setTimeout(() => {
            currentSection.classList.remove("slide-out");
            targetSection.classList.add("active");
          }, 500); // match CSS transition duration
        }
   });
});