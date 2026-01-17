document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
        start: "top",
        end: "bottom",
        toggleClass: {targets: '.js-header', className: 'header-collapsed'},
    });
});