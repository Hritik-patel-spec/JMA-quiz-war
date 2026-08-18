// Background Music
const bgMusic = new Audio("kbc-theme.mp3");
bgMusic.loop = false;
bgMusic.volume = 0.5;

// Sound Effects
const correctSound = new Audio("correct.wav");
const wrongSound = new Audio("wrong.mp3");
const timerSound = new Audio("timer.MP3");
const audienceSound = new Audio("audience.mp3");

// Start background music on first click
document.addEventListener("click", () => {
    bgMusic.play();
}, { once: true });

// Functions
function playCorrectSound() {
    correctSound.currentTime = 0;
    correctSound.play();
}

function playWrongSound() {
    wrongSound.currentTime = 0;
    wrongSound.play();
}

function playTimerSound() {
    timerSound.currentTime = 0;
    timerSound.play();
}

// FIX: Instant Audio Stopping Functions
function stopTimerSound() {
    timerSound.pause();
    timerSound.currentTime = 0; // Immediate Reset to Start
}

function stopBgMusic() {
    bgMusic.pause();
    bgMusic.currentTime = 0;
}
