// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const warnText = document.querySelector('.warn');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    warnText.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
        warnText.classList.remove('active');
    }
});

// Filter Tabs
const filterTabs = document.querySelectorAll('.filter-tab');
const filterableCards = document.querySelectorAll('.nft-card-browse');

// Initialize - show only cards matching the active filter on page load
window.addEventListener('DOMContentLoaded', () => {
    const activeTab = document.querySelector('.filter-tab.active');
    if (activeTab) {
        const initialFilter = activeTab.getAttribute('data-filter');
        filterableCards.forEach(card => {
            const cardFilter = card.getAttribute('data-filter');
            if (cardFilter === initialFilter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        filterTabs.forEach(t => t.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // Get filter value
        const filter = tab.getAttribute('data-filter');

        // Filter cards
        filterableCards.forEach(card => {
            const cardFilter = card.getAttribute('data-filter');

            if (cardFilter === filter) {
                card.style.display = 'block';
                // Add fade-in animation
                card.style.animation = 'fadeIn 0.5s ease-in';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});


// Age verification modal
const ageModal = document.getElementById("ageModal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

window.addEventListener("load", () => {
    if (localStorage.getItem("ageConfirmed") != "true") {
        ageModal.style.display = "flex";
    } else {
        ageModal.style.display = "none";
    }
});

yesBtn.addEventListener("click", () => {
    localStorage.setItem("ageConfirmed", "true");
    ageModal.style.display = "none";
});

noBtn.addEventListener("click", () => {
    alert("Acceso denegado. Solo para mayores de 18 años.");
    window.close();
    window.location.href = "https://www.google.com";
});

// Hide the top warning when the page is scrolled
const warn = document.querySelector(".warn");
if (warn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            warn.style.display = "none";
        } else {
            warn.style.display = "";
        }
    });
}


const city = document.getElementById("city");
const cont = document.querySelectorAll(".foot-cont-three a");
city.addEventListener("click", toggleCont);
function toggleCont() {
    const isActive = city.classList.toggle("active");
    city.textContent = isActive ? "Ver menos" : "Ver más";
    Array.from(cont).forEach((el) => {
        el.style.display = el.style.display === "block" ? "none" : "block";
    });
}

const yearSpan = document.querySelector('#year');
if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
}
