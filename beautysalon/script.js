// Dark mode pārslēgšana
const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger and the menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
  
    // Add a click event listener to toggle the "show" class
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  });
  
// Pagaidām uzgaidām, līdz lapa ir pilnībā ielādēta
document.addEventListener("DOMContentLoaded", () => {
    // Correct modal IDs
    const modalFrizetava = document.getElementById("modalFrizetava");
    const modalManikirs = document.getElementById("modalManikirs");
    const modalKosmetologija = document.getElementById("modalKosmetologija");

    const buttons = document.querySelectorAll(".card button"); // Get all "Uzzināt vairāk" buttons

    // Check if buttons are found
    if (buttons.length < 3) {
        console.error("Nepietiekamu pogu skaits.");
        return;
    }

    const closeFrizetava = document.getElementById("closeFrizetava");
    const closeManikirs = document.getElementById("closeManikirs");
    const closeKosmetoloģija = document.getElementById("closeKosmetoloģija");

    // Open modals
    buttons[0].onclick = function() {
        modalFrizetava.style.display = "block";
    }

    closeFrizetava.onclick = function() {
        modalFrizetava.style.display = "none";
    }

    buttons[1].onclick = function() {
        modalManikirs.style.display = "block";
    }

    closeManikirs.onclick = function() {
        modalManikirs.style.display = "none";
    }

    buttons[2].onclick = function() {
        modalKosmetologija.style.display = "block";
    }

    closeKosmetoloģija.onclick = function() {
        modalKosmetologija.style.display = "none";
    }

    // Close modals when clicking outside
    window.onclick = function(event) {
        if (event.target === modalFrizetava) {
            modalFrizetava.style.display = "none";
        } else if (event.target === modalManikirs) {
            modalManikirs.style.display = "none";
        } else if (event.target === modalKosmetologija) {
            modalKosmetologija.style.display = "none";
        }
    }
});
