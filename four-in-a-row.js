const ROWS = 6;
const COLS = 7;
const EMPTY = null;

const HUMAN = "yellow";
const COMPUTER = "red";

let board = [];
let currentPlayer = HUMAN;
let gameOver = false;

const boardElement = document.getElementById("board");
const statusElement = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");

function initGame() {
  board = Array.from({ length: ROWS }, () =>
    Array(COLS).fill(EMPTY)
  );

  currentPlayer = HUMAN;
  gameOver = false;

  statusElement.textContent = "Your turn (Yellow)";
  renderBoard();
}

function renderBoard() {
  boardElement.innerHTML = "";

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      if (board[row][col]) {
        cell.classList.add(board[row][col]);
      }

      
      cell.addEventListener("click", () => {
        if (currentPlayer === HUMAN && !gameOver) {
          handleMove(col);
        }
      });

      boardElement.appendChild(cell);
    }
  }
}

function handleMove(col) {
  if (gameOver) return;

  const row = getAvailableRow(col);

  
  if (row === -1) return;

  
  board[row][col] = currentPlayer;
  renderBoard();

  
  if (checkWinner(row, col)) {
    if (currentPlayer === HUMAN) {
      statusElement.textContent = "You win!";
    } else {
      statusElement.textContent = "C!Desca wins!";
    }
    gameOver = true;
    return;
  }

  
  if (isBoardFull()) {
    statusElement.textContent = "It's a draw!";
    gameOver = true;
    return;
  }

  
  currentPlayer = currentPlayer === HUMAN ? COMPUTER : HUMAN;

  
  if (currentPlayer === COMPUTER) {
    statusElement.textContent = "C!Desca is thinking...";
    setTimeout(computerMove, 600);
  } else {
    statusElement.textContent = "Your turn (Yellow)";
  }
}

function computerMove() {
  if (gameOver) return;

  const validColumns = [];

  for (let col = 0; col < COLS; col++) {
    if (getAvailableRow(col) !== -1) {
      validColumns.push(col);
    }
  }

  if (validColumns.length === 0) return;

  
  const randomIndex = Math.floor(Math.random() * validColumns.length);
  const chosenColumn = validColumns[randomIndex];

  handleMove(chosenColumn);
}

function getAvailableRow(col) {
  for (let row = ROWS - 1; row >= 0; row--) {
    if (board[row][col] === EMPTY) {
      return row;
    }
  }
  return -1;
}

function isBoardFull() {
  return board.every(row =>
    row.every(cell => cell !== EMPTY)
  );
}

function checkWinner(row, col) {
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1]
  ];

  for (const [dr, dc] of directions) {
    let count = 1;

    count += countDirection(row, col, dr, dc);
    count += countDirection(row, col, -dr, -dc);

    if (count >= 4) {
      return true;
    }
  }

  return false;
}

function countDirection(row, col, dr, dc) {
  let count = 0;
  let r = row + dr;
  let c = col + dc;

  while (
    r >= 0 &&
    r < ROWS &&
    c >= 0 &&
    c < COLS &&
    board[r][c] === currentPlayer
  ) {
    count++;
    r += dr;
    c += dc;
  }

  return count;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

resetBtn.addEventListener("click", initGame);


initGame();