window.addEventListener('load', init);

// Global variables
let time = 5;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'horchata',
  'river',
  'lucky',
  'broke',
  'statue',
  'generate',
  'stubborn',
  'langoustine',
  'cocktail',
  'arduous',
  'runaway',
  'joker',
  'choppy',
  'developer',
  'whatever',
  'establishment',
  'heroic',
  'javascript',
  'nutrition',
  'jambalaya',
  'revolver',
  'echolocation',
  'jumpy',
  'xylophone',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'fraught',
  'laughter',
  'magical',
  'mastery',
  'ridiculous',
  'space',
  'definition'
];

// Initialize Game
function init() {
  // Load random word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch)
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = 6; // Account for 1-second page reload
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randomIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randomIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrease the timeout
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!';
    score = -1;
  }
}
