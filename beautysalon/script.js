// Dark mode pārslēgšana
const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// JavaScript modālajam logam
const modal = document.getElementById("modal");
const btn = document.querySelector(".card button"); // Poga "Uzzināt vairāk"
const span1 = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName('close')[1];
console.log(document.getElementsByClassName('close'));




// btn.onclick = function() {
//     modal.style.display = "block";
// }

// span1.onclick = function() {
//     modal.style.display = "none";
// }

// span2.onclick = function() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target === modal) {
//         modal.style.display = "none";
//     }
// }

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const btn = document.querySelector(".card button"); // Poga "Uzzināt vairāk" par frizētavu
    const closeFrizetava = document.getElementById("closeFrizetava");

    const manicureModal = document.getElementById("manicureModal");
    const manicureBtn = document.querySelectorAll(".card")[1].querySelector("button"); // Poga "Uzzināt vairāk" par manikīru
    const closeManikirs = document.getElementById("closeManikirs");

    // Atver modālo logu par frizētavu
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Aizver modālo logu par frizētavu
    closeFrizetava.onclick = function() {
        modal.style.display = "none";
    }

    // Atver modālo logu par manikīru
    manicureBtn.onclick = function() {
        manicureModal.style.display = "block";
    }

    // Aizver modālo logu par manikīru
    closeManikirs.onclick = function() {
        manicureModal.style.display = "none";
    }

    // Aizver modālos logus, ja noklikšķini ārpus tiem
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        } else if (event.target === manicureModal) {
            manicureModal.style.display = "none";
        }
    }
    });
    

