const scrollToSection = (sectionId) => {
    if (!sectionId) return;
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // window.history.pushState(null, "", `#${sectionId}`);
    }
};

export { scrollToSection };
