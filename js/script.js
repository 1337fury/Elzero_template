let progress = document.querySelectorAll('.skills .right .skill .progress span');
let skills_section = document.querySelector('section.skills');
let backToTop = document.querySelector(".back_to_top");

window.onscroll = function () {
   if(window.scrollY >= skills_section.offsetTop) {
        progress.forEach(span => {
            span.style.width = span.getAttribute("data-width") + "%";
        });
   };
   if(window.scrollY >= 1000) {
        backToTop.style.display = "flex";
   } else {
    backToTop.style.display = "none";
   }
};

backToTop.onclick = function () {
    window.scrollTo(0, 0);
};
