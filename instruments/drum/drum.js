const CRASH = new Audio("sounds/crash.mp3");
const TOM1 = new Audio("sounds/tom1.mp3");
const TOM2 = new Audio("sounds/tom2.mp3");
const RIDE = new Audio("sounds/ride.mp3");
const HITHAT = new Audio("sounds/hithat.mp3");
const SNARE = new Audio("sounds/snare.mp3");
const BASS = new Audio("sounds/bass.mp3");
const FLOOR = new Audio("sounds/floor.mp3");

const playSound = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};

// CRASH
const crashkey = document.querySelector(".crash_key");
const playcrash = () => {
    playSound(CRASH);
    crashkey.classList.add("active");
    setTimeout(() => crashkey.classList.remove("active"), 200);
};
crashkey.addEventListener("click", playcrash);

// TOM 1
const tom1key = document.querySelector(".tom1_key");
const playtom1 = () => {
    playSound(TOM1);
    tom1key.classList.add("active");
    setTimeout(() => tom1key.classList.remove("active"), 200);
};
tom1key.addEventListener("click", playtom1);

// TOM 2
const tom2key = document.querySelector(".tom2_key");
const playtom2 = () => {
    playSound(TOM2);
    tom2key.classList.add("active");
    setTimeout(() => tom2key.classList.remove("active"), 200);
};
tom2key.addEventListener("click", playtom2);

// RIDE
const ridekey = document.querySelector(".ride_key");
const playride = () => {
    playSound(RIDE);
    ridekey.classList.add("active");
    setTimeout(() => ridekey.classList.remove("active"), 200);
};
ridekey.addEventListener("click", playride);

// HITHAT
const hithatkey = document.querySelector(".hihat_key");
const playhithat = () => {
    playSound(HITHAT);
    hithatkey.classList.add("active");
    setTimeout(() => hithatkey.classList.remove("active"), 200);
};
hithatkey.addEventListener("click", playhithat);

// SNARE
const snarekey = document.querySelector(".snare_key");
const playsnare = () => {
    playSound(SNARE);
    snarekey.classList.add("active");
    setTimeout(() => snarekey.classList.remove("active"), 200);
};
snarekey.addEventListener("click", playsnare);

// BASS
const basskey = document.querySelector(".bass_key");
const playbass = () => {
    playSound(BASS);
    basskey.classList.add("active");
    setTimeout(() => basskey.classList.remove("active"), 200);
};
basskey.addEventListener("click", playbass);

// FLOOR
const floorkey = document.querySelector(".floor_key");
const playfloor = () => {
    playSound(FLOOR);
    floorkey.classList.add("active");
    setTimeout(() => floorkey.classList.remove("active"), 200);
};
floorkey.addEventListener("click", playfloor);

window.addEventListener("keydown", ({ keyCode }) => {
  // Press W
  if (keyCode === 87) return playcrash();

  // Press w
  if (keyCode === 119) return playcrash();

  // Press A
  if (keyCode === 65) return playtom1();

  // Press a
  if (keyCode === 97) return playtom1();

  // Press S
  if (keyCode === 83) return playtom2();
  
  // Press s
  if (keyCode === 115) return playtom2();

  // Press D
  if (keyCode === 68) return playride();

  // Press d
  if (keyCode === 100) return playride();

  // Press I
  if (keyCode === 73) return playhithat();

  // Press i
  if (keyCode === 105) return playhithat();

  // Press J
  if (keyCode === 74) return playsnare();

  // Press j
  if (keyCode === 106) return playsnare();

  // Press K
  if (keyCode === 75) return playbass();

  // Press k
  if (keyCode === 107) return playbass();

  // Press L
  if (keyCode === 76) return playfloor();

  // Press l
  if (keyCode === 108) return playfloor();
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