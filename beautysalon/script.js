
// Dark Mode parslēgšana
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode"); // Enable dark mode if saved
}

// Toggle Dark Mode on button click
darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save the preference in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
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

    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();  
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const procedure = document.getElementById('procedure').value;
        const date = document.getElementById('date').value;

        console.log('User Info:', { name, email, procedure, date });
    });
});

 // Get form elements
 const form = document.getElementById("registrationForm");
 const successModal = document.getElementById("successModal");
 const closeModal = document.getElementById("closeModal");
 
 // Function to display the modal
 function showModal() {
     successModal.style.display = "block";
 }
 
 // Close modal when "x" is clicked
 closeModal.addEventListener("click", () => {
     successModal.style.display = "none";
 });
 
 // Close modal when clicking outside the modal content
 window.onclick = function(event) {
     if (event.target === successModal) {
         successModal.style.display = "none";
     }
 }
 
 // Form submission event listener
 form.addEventListener("submit", function(event) {
     event.preventDefault(); // Prevent the default form submission
 
     // Check if all fields are valid
     if (form.checkValidity()) {
         showModal(); // Show the modal if the form is valid
     } else {
         alert("Lūdzu, aizpildiet visus laukus!");
     }
 });

 