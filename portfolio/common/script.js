/* ============================================================
   Portfolio interactions
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    if (menuVisible) {
        nav.classList.remove("responsive");
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}

/* Header scrolled state + scroll progress bar */
function onScroll() {
    const header = document.querySelector(".contenedor-header");
    if (header) {
        if (window.scrollY > 20) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
    }

    const progress = document.querySelector(".scroll-progress");
    if (progress) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
        progress.style.width = scrolled + "%";
    }
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("load", onScroll);

/* Reveal on scroll via IntersectionObserver */
function initReveal() {
    const targets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || targets.length === 0) {
        targets.forEach(t => t.classList.add("is-visible"));
        return;
    }
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(t => io.observe(t));
}

document.addEventListener("DOMContentLoaded", initReveal);

/* Contact form */
function sendEmail() {
    const nameEl = document.getElementById("name");
    const phoneEl = document.getElementById("phone");
    const emailEl = document.getElementById("email");
    const messageEl = document.getElementById("message");
    const statusEl = document.getElementById("form-status");

    const name = nameEl?.value.trim() || "";
    const phone = phoneEl?.value.trim() || "";
    const email = emailEl?.value.trim() || "";
    const message = messageEl?.value.trim() || "";

    const setStatus = (text, kind) => {
        if (!statusEl) return;
        statusEl.textContent = text;
        statusEl.classList.remove("success", "error");
        if (kind) statusEl.classList.add(kind);
    };

    if (!name || !email || !message) {
        setStatus(
            document.documentElement.lang === "es"
                ? "Por favor, completa nombre, email y mensaje."
                : "Please fill in name, email and message.",
            "error"
        );
        return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
        setStatus(
            document.documentElement.lang === "es"
                ? "Introduce un email válido."
                : "Please enter a valid email.",
            "error"
        );
        return;
    }

    setStatus(
        document.documentElement.lang === "es" ? "Enviando..." : "Sending...",
        null
    );

    if (typeof emailjs === "undefined") {
        setStatus(
            document.documentElement.lang === "es"
                ? "Servicio de email no disponible."
                : "Email service unavailable.",
            "error"
        );
        return;
    }

    emailjs.send("service_wdu94ob", "template_c0e1ax9", {
        name, phone, email, message,
    }, "4xLglJ5VmPf4PajbD")
        .then(function (response) {
            setStatus(
                document.documentElement.lang === "es"
                    ? "¡Mensaje enviado! Te responderé pronto."
                    : "Message sent! I will reply soon.",
                "success"
            );
            [nameEl, phoneEl, emailEl, messageEl].forEach(el => { if (el) el.value = ""; });
        })
        .catch(function (error) {
            console.error("Email could not be sent:", error);
            setStatus(
                document.documentElement.lang === "es"
                    ? "No se pudo enviar. Inténtalo de nuevo."
                    : "Could not send. Please try again.",
                "error"
            );
        });
}

function cambiarIdioma() {
    const idiomaSeleccionado = document.getElementById('language-select').value;
    switch (idiomaSeleccionado) {
        case 'es':
            window.location.href = "/portfolio/es";
            break;
        case 'en':
            window.location.href = "/portfolio/en";
            break;
        default:
            break;
    }
}
