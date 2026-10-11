const menuToggle=document.getElementById('menuToggle');
const mainMenu=document.getElementById('mainMenu');
menuToggle.addEventListener('click',()=>{const open=mainMenu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open?'true':'false');});
document.querySelectorAll('#mainMenu a').forEach(a=>a.addEventListener('click',()=>{mainMenu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
const sections=document.querySelectorAll('main section[id]'),links=document.querySelectorAll('.menu a');
window.addEventListener('scroll',()=>{let current='accueil';sections.forEach(s=>{if(scrollY>=s.offsetTop-150)current=s.id});links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));});

/* =========================================================
   GALERIE FBI INTERNATIONAL PRO-X
   5 photos × 6 secondes = 30 secondes
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const sliders = document.querySelectorAll(".gallery-slider");

    sliders.forEach(function (slider) {

        const slides = slider.querySelectorAll(".gallery-slide");

        if (slides.length <= 1) {
            return;
        }

        let current = 0;

        /*
         * 5 photos :
         * 6 secondes par photo
         * = 30 secondes pour un cycle complet
         */
        const interval = 6000;

        setInterval(function () {

            slides[current].classList.remove("active");

            current++;

            if (current >= slides.length) {
                current = 0;
            }

            slides[current].classList.add("active");

        }, interval);

    });

});

/* ==========================================
   MODALE — PRÉSENTATION DU MAÎTRE
========================================== */

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("masterModal");
    const openButton = document.getElementById("openMasterModal");

    if (!modal || !openButton) {
        return;
    }

    const modalContent = modal.querySelector(".master-modal-content");
    const closeButton = document.getElementById("closeMasterModal");
    const closeElements = modal.querySelectorAll("[data-close-master]");

    let previousFocus = null;

    function openMasterModal() {
        previousFocus = document.activeElement;

        modal.hidden = false;
        document.body.classList.add("master-modal-open");

        if (closeButton) {
            closeButton.focus();
        } else if (modalContent) {
            modalContent.focus();
        }
    }

    function closeMasterModal() {
        if (modal.hidden) {
            return;
        }

        modal.hidden = true;
        document.body.classList.remove("master-modal-open");

        if (previousFocus && typeof previousFocus.focus === "function") {
            previousFocus.focus();
        } else {
            openButton.focus();
        }
    }

    openButton.addEventListener("click", openMasterModal);

    if (closeButton) {
        closeButton.addEventListener("click", closeMasterModal);
    }

    closeElements.forEach(function (element) {
        element.addEventListener("click", closeMasterModal);
    });

    document.addEventListener("keydown", function (event) {
        if (modal.hidden) {
            return;
        }

        if (event.key === "Escape") {
            closeMasterModal();
            return;
        }

        /* Maintient la navigation clavier dans la boîte */
        if (event.key === "Tab") {
            const focusableElements = modal.querySelectorAll(
                'a[href], button:not([disabled]), ' +
                'input:not([disabled]), [tabindex="0"]'
            );

            const focusable = Array.from(focusableElements).filter(
                function (element) {
                    return element.getClientRects().length > 0;
                }
            );

            if (focusable.length === 0) {
                event.preventDefault();
                modalContent.focus();
                return;
            }

            const firstElement = focusable[0];
            const lastElement = focusable[focusable.length - 1];

            if (event.shiftKey &&
                document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (!event.shiftKey &&
                       document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    });
});
