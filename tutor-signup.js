let AboutMe = document.getElementById("AboutMe");
let CharLimit = document.getElementById("CharLimit");

AboutMe.addEventListener("input", function() {
    let textLength = AboutMe.value.length
    CharLimit.textContent = "Characters: " + textLength +"/200";
    })

const SATscore = document.getElementById("SATscore");
const sat = document.getElementById("sat");

sat.addEventListener('change', function() {
    if (this.checked) {
        SATscore.style.display = "block";
    } else {
        SATscore.style.display = "none";
    }
});
