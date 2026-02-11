 // Mobile Menu Toggle (safe checks)
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu?.classList.toggle('hidden');
            });
        }

        if (mobileMenu) {
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
            });
        }

        // Back to Top, Navbar shadow, and unified scroll handling
        const backToTop = document.getElementById('backToTop');
        const nav = document.querySelector('nav');

        window.addEventListener('scroll', () => {
            const sc = window.scrollY || 0;

            if (backToTop) {
                if (sc > 500) {
                    backToTop.classList.add('opacity-100', 'visible');
                    backToTop.classList.remove('opacity-0', 'invisible');
                } else {
                    backToTop.classList.remove('opacity-100', 'visible');
                    backToTop.classList.add('opacity-0', 'invisible');
                }
            }

            if (nav) {
                if (sc > 50) nav.classList.add('shadow-sm'); else nav.classList.remove('shadow-sm');
            }
        });

        backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

        // Scroll Animation Observer
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// EmailJS Integration
(function() {
    emailjs.init('quR_4mzj1CSc0pur_');
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("formStatus").textContent = "Sending...";

    emailjs.send(
    "service_cdv3574",
    "template_yk2vmva",
    {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    ).then(function() {
        document.getElementById("formStatus").textContent = "Message sent successfully!";
        document.getElementById("contactForm").reset();
    }, function(error) {
        document.getElementById("formStatus").textContent = "Failed to send message. Please try again.";
        console.error("EmailJS Error:", error);
    });
});

document.addEventListener("DOMContentLoaded", () => {
            const filterButtons = document.querySelectorAll(".filter-btn");
            const projectCards = document.querySelectorAll(".project-card");

            filterButtons.forEach(button => {
                button.addEventListener("click", () => {
                    // 1. Remove active styling from all buttons
                    filterButtons.forEach(btn => {
                        btn.classList.remove("bg-gray-900", "text-white");
                        btn.classList.add("bg-gray-100", "text-gray-600");
                    });

                    // 2. Add active styling to the clicked button
                    button.classList.remove("bg-gray-100", "text-gray-600");
                    button.classList.add("bg-gray-900", "text-white");

                    // 3. Filter the projects
                    const filterValue = button.getAttribute("data-filter");

                    projectCards.forEach(card => {
                        if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                            card.style.display = "block";
                        } else {
                            card.style.display = "none";
                        }
                    });
                });
            });
        });