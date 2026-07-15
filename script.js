// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Appointment Form
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const date = form.querySelector('input[type="date"]').value;
    const service = form.querySelector("select").value;

    if (
        name === "" ||
        phone === "" ||
        date === "" ||
        service === "Select a Service"
    ) {
        alert("Please complete all required fields.");
        return;
    }

    alert(
        "Thank you, " +
        name +
        "! Your appointment request has been submitted successfully.\n\nWe will contact you shortly to confirm your booking."
    );

    form.reset();
});

// Fade-in animation on scroll
const sections = document.querySelectorAll("section");

function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
}

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);