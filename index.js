// Select all necessary HTML elements
const homeScoreElement = document.getElementById("homeScore");
const guestScoreElement = document.getElementById("guestScore");

let homeScore = 0;
let guestScore = 0;

// Update the score on the scoreboard and UI
function updateScore(team, increment) {
    if (team === 'home') {
        homeScore += increment;
        homeScoreElement.innerText = homeScore;
    } else {
        guestScore += increment;
        guestScoreElement.innerText = guestScore;
    }
}

// Event listener for all buttons
document.querySelectorAll('.scoreButton').forEach(button => {
    button.addEventListener('click', () => {
        const team = button.dataset.team;
        const increment = parseInt(button.dataset.increment);
        updateScore(team, increment);
    });
});
