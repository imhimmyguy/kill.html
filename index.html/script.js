let score = 0;
let timeLeft = 10;
let gameInterval;
let button = document.getElementById('gameButton');
let scoreDisplay = document.getElementById('score');
let timeDisplay = document.getElementById('time');

// Function to start the game
function startGame() {
    score = 0;
    timeLeft = 10;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;

    // Set an interval to update the time left
    gameInterval = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            alert(`Game over! Your score is ${score}.`);
            button.removeEventListener('click', increaseScore);
        }
    }, 1000);

    button.addEventListener('click', increaseScore);
    moveButton();
}

// Function to handle button click
function increaseScore() {
    score++;
    scoreDisplay.textContent = score;
    moveButton();
}

// Function to move the button to a random position
function moveButton() {
    let container = document.querySelector('.game-container');
    let maxX = container.clientWidth - button.offsetWidth;
    let maxY = container.clientHeight - button.offsetHeight;
    
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

// Start the game when the page loads
window.onload = startGame;
