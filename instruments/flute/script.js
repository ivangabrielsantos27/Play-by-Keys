// Create audio elements
const notes = {
  C: new Audio("sounds/C.mp3"),
  D: new Audio("sounds/D.mp3"),
  E: new Audio("sounds/E.mp3"),
  F: new Audio("sounds/F.mp3"),
  G: new Audio("sounds/G.mp3"),
  A: new Audio("sounds/A.mp3"),
  B: new Audio("sounds/B.mp3"),
  C2: new Audio("sounds/C2.mp3"),
  // Add audio elements for other notes (E, F, G, A, B, C2)
};

// Function to play a note
const playNote = (note) => {
  const audio = notes[note];
  if (audio) {
    const clone = audio.cloneNode();
    clone.play();
    clone.addEventListener('ended', () => {
      clone.remove();
    });
  }
};

// Add event listeners to buttons
document.querySelectorAll('button').forEach((button, index) => {
  button.addEventListener('click', () => {
    const note = button.querySelector('.key-letter').textContent;
    playNote(note);
    button.classList.add("active");
    setTimeout(() => button.classList.remove("active"), 200);
  });
});

// Function to toggle the visibility of key letters
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