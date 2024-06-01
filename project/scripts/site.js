document.addEventListener("DOMContentLoaded", function () {

    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImage.classList.add("loaded");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        let lazyLoad = function () {
            lazyImages.forEach(function (lazyImage) {
                if (lazyImage.getBoundingClientRect().top < window.innerHeight && lazyImage.getBoundingClientRect().bottom > 0 && getComputedStyle(lazyImage).display !== "none") {
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImage.classList.add("loaded");
                }
            });
        };

        lazyLoad();
        window.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationchange", lazyLoad);
    }

    // Show the home section by default
    showSection('home');
});


function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        if (section.id === sectionId + '-section') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    const menuButton = document.getElementById('menu-button');

    navMenu.classList.toggle('active');
    menuButton.classList.toggle('open');
}
const year = document.getElementById("year");
const today = new Date();
year.textContent = today.getFullYear();

const lastModif = document.getElementById("lastModif");
lastModif.textContent = document.lastModified;

year.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;
lastModif.innerHTML = new Date(document.lastModified);