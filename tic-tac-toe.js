    const HUMAN = "X";
    const COMPUTER = "O";
    const WINNING_COMBINATIONS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    let board = Array(9).fill("");
    let gameOver = false;

    const boardElement = document.getElementById("board2");
    const statusElement = document.getElementById("status2");
    const resetBtn = document.getElementById("resetBtn2");

    function initGame() {
      board = Array(9).fill("");
      gameOver = false;
      statusElement.textContent = "Your turn (X)";
      renderBoard();
    }

    function renderBoard() {
      boardElement.innerHTML = "";

      board.forEach((value, index) => {
        const cell = document.createElement("div");
        cell.className = "cell2";

        if (value) {
          cell.textContent = value;
          cell.classList.add(value.toLowerCase());
        }

        cell.addEventListener("click", () => humanMove(index));
        boardElement.appendChild(cell);
      });
    }

    function humanMove(index) {
      if (gameOver || board[index] !== "") return;

      board[index] = HUMAN;
      renderBoard();

      if (checkWinner(HUMAN)) {
        statusElement.textContent = "You win!";
        gameOver = true;
        return;
      }

      if (isBoardFull()) {
        statusElement.textContent = "It's a draw!";
        gameOver = true;
        return;
      }

      statusElement.textContent = "C!Eli is thinking...";
      setTimeout(computerMove, 500);
    }

    function computerMove() {
      if (gameOver) return;

      const emptyCells = board
        .map((value, index) => (value === "" ? index : null))
        .filter(index => index !== null);

        
      for (const index of emptyCells) {
        board[index] = COMPUTER;
        if (checkWinner(COMPUTER)) {
          finishComputerMove(index);
          return;
        }
        board[index] = "";
      }

      
      for (const index of emptyCells) {
        board[index] = HUMAN;
        if (checkWinner(HUMAN)) {
          board[index] = COMPUTER;
          finishComputerMove(index);
          return;
        }
        board[index] = "";
      }

      
      const preferredMoves = [4, 0, 2, 6, 8, 1, 3, 5, 7];
      const move = preferredMoves.find(index => board[index] === "");

      if (move !== undefined) {
        board[move] = COMPUTER;
        finishComputerMove(move);
      }
    }

    function finishComputerMove() {
      renderBoard();

      if (checkWinner(COMPUTER)) {
        statusElement.textContent = "C!Eli wins!";
        gameOver = true;
        return;
      }

      if (isBoardFull()) {
        statusElement.textContent = "It's a draw!";
        gameOver = true;
        return;
      }

      statusElement.textContent = "Your turn (X)";
    }

    function checkWinner(player) {
      return WINNING_COMBINATIONS.some(combo =>
        combo.every(index => board[index] === player)
      );
    }

    function isBoardFull() {
      return board.every(cell => cell !== "");
    }

    resetBtn.addEventListener("click", initGame);

    initGame();