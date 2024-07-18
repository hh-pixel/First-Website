let boxeslist = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Array to track game board state (0: empty, 1: Player 1, 2: Player 2)
let playerturn = 1;  // Current player (1: Player 1, 2: Player 2)

// Winning conditions (all possible combinations)
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Player indicator (optional, can be implemented with UI elements)
function displayPlayerTurn() {
  let textelement = document.getElementById("CurrentPlayer");
  textelement.innerHTML = "Current Player: " + playerturn;
}

// Stopping the game when it ends
function stopGame() {
  // Disable click events on boxes to prevent further moves
  boxes.forEach(box => box.removeEventListener('click', handleClick));
  console.log("Game Over!"); // Placeholder for now (e.g., display a message)
  let textelement = document.getElementById("CurrentPlayer");
  textelement.innerHTML = "It's a TIE";
}

// Check for a winner
function checkForWin() {
  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const [a, b, c] = condition;
    if (boxeslist[a] === boxeslist[b] && boxeslist[b] === boxeslist[c] && boxeslist[a] !== 0) {
      stopGame();
      let textelement = document.getElementById("CurrentPlayer");
      textelement.innerHTML = "Player " + playerturn + " wins";
      return true; // Indicate a winner has been found
    }
  }

  // Check for a tie (all cells filled but no winner)
  if (!boxeslist.includes(0)) {
    stopGame();
    console.log("It's a Tie!"); // Display tie message
    return true;
  }

  return false; // No winner or tie yet
}

// Handle clicks on boxes
function handleClick(event) {
  const box = event.currentTarget;
  const boxIndex = parseInt(box.id) - 1; // Convert box ID to index

  if (boxeslist[boxIndex] === 0) { // Check if box is empty
    boxeslist[boxIndex] = playerturn;  // Update game board state

    // Add appropriate image based on player turn
    const image = document.createElement("img");
    image.src = playerturn === 1 ? "images/ximage.png" : "images/tickimage.png";
    image.alt = playerturn === 1 ? "Player 1's Mark" : "Player 2's Mark";
    box.appendChild(image);

    const winner = checkForWin();
    if (!winner) {
      switchingTurn();
      displayPlayerTurn();
      box.addEventListener('click', handleClick); // Re-enable click events
    }
  } else {
    console.log("Box already occupied!");  // Optional message for invalid clicks
  }
}

// Switch turns
function switchingTurn() {
  playerturn = playerturn === 1 ? 2 : 1;
}

// Add click event listeners to boxes
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => box.addEventListener('click', handleClick));

displayPlayerTurn(); // Display initial player turn (optional)

// Reset button functionality
const button = document.querySelector(".reset-button");

button.addEventListener("click", function() {
  boxeslist = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  playerturn = 1;

  boxes.forEach(box => {
    box.innerHTML = "";
    box.addEventListener('click', handleClick); // Re-enable click events
  });
  displayPlayerTurn();
});
