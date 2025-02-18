document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    setupProfileDropdown();
    setupIssueForm();
});

function setupNavigation() {
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Hide all sections
            document.querySelectorAll(".section").forEach(section => section.style.display = "none");
            
            // Show selected section
            document.getElementById(link.dataset.target).style.display = "block";
            
            // Remove 'active' class from all links and add to the clicked one
            document.querySelectorAll(".nav-link").forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });
}

function setupProfileDropdown() {
    const profileIcon = document.getElementById("profile-icon");
    const dropdown = document.getElementById("profile-dropdown");

    profileIcon.addEventListener("click", (event) => {
        event.stopPropagation();
        dropdown.classList.toggle("show");
    });

    document.addEventListener("click", (event) => {
        if (!profileIcon.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });
}

function setupIssueForm() {
    document.getElementById("issueForm").addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Issue reported successfully!");
    });
}

