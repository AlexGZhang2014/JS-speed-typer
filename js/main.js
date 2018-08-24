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
  console.log('init');
}
