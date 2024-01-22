const ONE = new Audio("sounds/1.mp3");
const TWO = new Audio("sounds/2.mp3");
const THREE = new Audio("sounds/3.mp3");
const FOUR = new Audio("sounds/4.mp3");
const FIVE = new Audio("sounds/5.mp3");
const SIX = new Audio("sounds/6.mp3");
const SEVEN = new Audio("sounds/7.mp3");
const EIGHT = new Audio("sounds/8.mp3");
const NINE = new Audio("sounds/9.mp3");
const TEN = new Audio("sounds/10.mp3");
const ELEVEN = new Audio("sounds/11.mp3");
const TWELVE = new Audio("sounds/12.mp3");
const THIRTEEN = new Audio("sounds/13.mp3");
const FOURTEEN = new Audio("sounds/14.mp3");
const FIFTEEN = new Audio("sounds/15.mp3");
const SIXTEEN = new Audio("sounds/16.mp3");
const SEVENTEEN = new Audio("sounds/17.mp3");

const playSound = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.8), 400);
    setTimeout(() => (clone.volume = 0.6), 800);
    setTimeout(() => (clone.volume = 0.4), 1200);
    setTimeout(() => (clone.volume = 0.2), 1600);
    setTimeout(() => (clone.volume = 0), 2000);
};

// ONE = 2
const onekey = document.querySelector(".one_key");
const playone = () => {
    playSound(ONE);
    onekey.classList.add("active");
    setTimeout(() => onekey.classList.remove("active"), 200);
};
onekey.addEventListener("click", playone);

// TWO = 3
const twokey = document.querySelector(".two_key");
const playtwo = () => {
    playSound(TWO);
    twokey.classList.add("active");
    setTimeout(() => twokey.classList.remove("active"), 200);
};
twokey.addEventListener("click", playtwo);

// THREE = 4
const threekey = document.querySelector(".three_key");
const playthree = () => {
    playSound(THREE);
    threekey.classList.add("active");
    setTimeout(() => threekey.classList.remove("active"), 200);
};
threekey.addEventListener("click", playthree);

// FOUR = 5
const fourkey = document.querySelector(".four_key");
const playfour = () => {
    playSound(FOUR);
    fourkey.classList.add("active");
    setTimeout(() => fourkey.classList.remove("active"), 200);
};
fourkey.addEventListener("click", playfour);

// FIVE = 6
const fivekey = document.querySelector(".five_key");
const playfive = () => {
    playSound(FIVE);
    fivekey.classList.add("active");
    setTimeout(() => fivekey.classList.remove("active"), 200);
};
fivekey.addEventListener("click", playfive);

// SIX = 7
const sixkey = document.querySelector(".six_key");
const playsix = () => {
    playSound(SIX);
    sixkey.classList.add("active");
    setTimeout(() => sixkey.classList.remove("active"), 200);
};
sixkey.addEventListener("click", playsix);

// SEVEN = 8
const sevenkey = document.querySelector(".seven_key");
const playseven = () => {
    playSound(SEVEN);
    sevenkey.classList.add("active");
    setTimeout(() => sevenkey.classList.remove("active"), 200);
};
sevenkey.addEventListener("click", playseven);

// EIGHT = 9
const eightkey = document.querySelector(".eight_key");
const playeight = () => {
    playSound(EIGHT);
    eightkey.classList.add("active");
    setTimeout(() => eightkey.classList.remove("active"), 200);
};
eightkey.addEventListener("click", playeight);

// NINE = Q
const ninekey = document.querySelector(".nine_key");
const playnine = () => {
    playSound(NINE);
    ninekey.classList.add("active");
    setTimeout(() => ninekey.classList.remove("active"), 200);
};
ninekey.addEventListener("click", playnine);

// TEN = W
const tenkey = document.querySelector(".ten_key");
const playten = () => {
    playSound(TEN);
    tenkey.classList.add("active");
    setTimeout(() => tenkey.classList.remove("active"), 200);
};
tenkey.addEventListener("click", playten);

// ELEVEN = E
const elevenkey = document.querySelector(".eleven_key");
const playeleven = () => {
    playSound(ELEVEN);
    elevenkey.classList.add("active");
    setTimeout(() => elevenkey.classList.remove("active"), 200);
};
elevenkey.addEventListener("click", playeleven);

// TWELVE = R
const twelvekey = document.querySelector(".twelve_key");
const playtwelve = () => {
    playSound(TWELVE);
    twelvekey.classList.add("active");
    setTimeout(() => twelvekey.classList.remove("active"), 200);
};
twelvekey.addEventListener("click", playtwelve);

// THIRTEEN = T
const thirteenkey = document.querySelector(".thirteen_key");
const playthirteen = () => {
    playSound(THIRTEEN);
    thirteenkey.classList.add("active");
    setTimeout(() => thirteenkey.classList.remove("active"), 200);
};
thirteenkey.addEventListener("click", playthirteen);

// FOURTEEN = Y
const fourteenkey = document.querySelector(".fourteen_key");
const playfourteen = () => {
    playSound(FOURTEEN);
    fourteenkey.classList.add("active");
    setTimeout(() => fourteenkey.classList.remove("active"), 200);
};
fourteenkey.addEventListener("click", playfourteen);

// FIFTEEN = U
const fifteenkey = document.querySelector(".fifteen_key");
const playfifteen = () => {
    playSound(FIFTEEN);
    fifteenkey.classList.add("active");
    setTimeout(() => fifteenkey.classList.remove("active"), 200);
};
fifteenkey.addEventListener("click", playfifteen);

// SIXTEEN = I
const sixteenkey = document.querySelector(".sixteen_key");
const playsixteen = () => {
    playSound(SIXTEEN);
    sixteenkey.classList.add("active");
    setTimeout(() => sixteenkey.classList.remove("active"), 200);
};
sixteenkey.addEventListener("click", playsixteen);

// SEVENTEEN = O
const seventeenkey = document.querySelector(".seventeen_key");
const playseventeen = () => {
    playSound(SEVENTEEN);
    seventeenkey.classList.add("active");
    setTimeout(() => seventeenkey.classList.remove("active"), 200);
};
seventeenkey.addEventListener("click", playseventeen);

window.addEventListener("keydown", ({ keyCode }) => {
    // Press 2
    if (keyCode === 50) return playone();

    // Press 3
    if (keyCode === 51) return playtwo();

    // Press 4
    if (keyCode === 52) return playthree();

    // Press 5
    if (keyCode === 53) return playfour();
    
    // Press 6
    if (keyCode === 54) return playfive();

    // Press 7
    if (keyCode === 55) return playsix();

    // Press 8
    if (keyCode === 56) return playseven();

    // Press 9
    if (keyCode === 57) return playeight();

    // Press Q
    if (keyCode === 81) return playnine();

    // Press W
    if (keyCode === 87) return playten();

    // Press E
    if (keyCode === 69) return playeleven();

    // Press R
    if (keyCode === 82) return playtwelve();

    // Press T
    if (keyCode === 84) return playthirteen();

    // Press Y
    if (keyCode === 89) return playfourteen();

    // Press U
    if (keyCode === 85) return playfifteen();

    // Press I
    if (keyCode === 73) return playsixteen();

    // Press O
    if (keyCode === 79) return playseventeen();
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