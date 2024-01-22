const ONE = new Audio("sounds/1.mp3");
const TWO = new Audio("sounds/2.mp3");
const THREE = new Audio("sounds/3.mp3");
const FOUR = new Audio("sounds/4.mp3");
const FIVE = new Audio("sounds/5.mp3");
const SIX = new Audio("sounds/6.mp3");
const SEVEN = new Audio("sounds/7.mp3");
const EIGHT = new Audio("sounds/8.mp3");
const NINE = new Audio("sounds/9.mp3");
const TEN = new Audio("sounds/0.mp3");

const playSound = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.8), 400);
    setTimeout(() => (clone.volume = 0.6), 800);
    setTimeout(() => (clone.volume = 0.4), 1200);
    setTimeout(() => (clone.volume = 0.2), 1600);
    setTimeout(() => (clone.volume = 0), 2000);
};

// ONE
const onekey = document.querySelector(".one_key");
const playone = () => {
    playSound(ONE);
    onekey.classList.add("active");
    setTimeout(() => onekey.classList.remove("active"), 200);
};
onekey.addEventListener("click", playone);

// TWO
const twokey = document.querySelector(".two_key");
const playtwo = () => {
    playSound(TWO);
    twokey.classList.add("active");
    setTimeout(() => twokey.classList.remove("active"), 200);
};
twokey.addEventListener("click", playtwo);

// THREE
const threekey = document.querySelector(".three_key");
const playthree = () => {
    playSound(THREE);
    threekey.classList.add("active");
    setTimeout(() => threekey.classList.remove("active"), 200);
};
threekey.addEventListener("click", playthree);

// FOUR
const fourkey = document.querySelector(".four_key");
const playfour = () => {
    playSound(FOUR);
    fourkey.classList.add("active");
    setTimeout(() => fourkey.classList.remove("active"), 200);
};
fourkey.addEventListener("click", playfour);

// FIVE
const fivekey = document.querySelector(".five_key");
const playfive = () => {
    playSound(FIVE);
    fivekey.classList.add("active");
    setTimeout(() => fivekey.classList.remove("active"), 200);
};
fivekey.addEventListener("click", playfive);

// SIX
const sixkey = document.querySelector(".six_key");
const playsix = () => {
    playSound(SIX);
    sixkey.classList.add("active");
    setTimeout(() => sixkey.classList.remove("active"), 200);
};
sixkey.addEventListener("click", playsix);

// SEVEN
const sevenkey = document.querySelector(".seven_key");
const playseven = () => {
    playSound(SEVEN);
    sevenkey.classList.add("active");
    setTimeout(() => sevenkey.classList.remove("active"), 200);
};
sevenkey.addEventListener("click", playseven);

// EIGHT
const eightkey = document.querySelector(".eight_key");
const playeight = () => {
    playSound(EIGHT);
    eightkey.classList.add("active");
    setTimeout(() => eightkey.classList.remove("active"), 200);
};
eightkey.addEventListener("click", playeight);

// NINE
const ninekey = document.querySelector(".nine_key");
const playnine = () => {
    playSound(NINE);
    ninekey.classList.add("active");
    setTimeout(() => ninekey.classList.remove("active"), 200);
};
ninekey.addEventListener("click", playnine);

// TEN
const tenkey = document.querySelector(".ten_key");
const playten = () => {
    playSound(TEN);
    tenkey.classList.add("active");
    setTimeout(() => tenkey.classList.remove("active"), 200);
};
tenkey.addEventListener("click", playten);

window.addEventListener("keydown", ({ keyCode }) => {
    // Press 1
    if (keyCode === 49) return playone();

    // Press 2
    if (keyCode === 50) return playtwo();

    // Press 3
    if (keyCode === 51) return playthree();

    // Press 4
    if (keyCode === 52) return playfour();
    
    // Press 5
    if (keyCode === 53) return playfive();

    // Press 6
    if (keyCode === 54) return playsix();

    // Press 7
    if (keyCode === 55) return playseven();

    // Press 8
    if (keyCode === 56) return playeight();

    // Press 9
    if (keyCode === 57) return playnine();

    // Press 0
    if (keyCode === 48) return playten();
});

// Add a function to toggle the class
const toggleKeyLettersVisibility = () => {
    const keyLetterButtons = document.querySelectorAll('.key-letter');
    const showKeysCheckbox = document.getElementById('show-keys-checkbox');
  
    keyLetterButtons.forEach(button => {
      if (showKeysCheckbox.checked) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    });
};
  
// Add an event listener to the checkbox
document.getElementById('show-keys-checkbox').addEventListener('change', toggleKeyLettersVisibility);