function showSection(sectionId) {
    // Hide all sections
    let sections = document.getElementsByTagName("section");
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }

    let selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = "block";
}

function redirectToLogin() {
    window.location.href = "login.html";
}
