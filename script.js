function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
function toggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('show');
}
