// TODO: write your code here

// Get all the td elements for each player
const player1Cells = document.querySelectorAll('#player1-race td');
const player2Cells = document.querySelectorAll('#player2-race td');

// Initialize the current index for each player
let player1Index = 0;
let player2Index = 0;

let gameOver = false;

// Winner Announcement
const winnerAnnouncement = document.querySelector('#winner-announcement');

// button to restart the game
const restartButton = document.querySelector('.text-center #restart-button');

// Event listener for keydown events
document.addEventListener('keyup', (event) => {
  if (gameOver) return;

  if (event.key === 'ArrowRight') {
    // Remove the active class from the current cell of player 1
    player1Cells[player1Index].classList.remove('active');
    player1Index += 1;

    if (player1Index < player1Cells.length - 1) {
      player1Cells[player1Index].classList.add('active');
    } else {
      const carDisplay1 = document.querySelector('#player1-race .finish-container .car-placeholder .car-image');
      carDisplay1.classList.add('finish');
      carDisplay1.style.display = 'block';
      winnerAnnouncement.innerText = 'Player 1 wins the race!';
      gameOver = true;
      restartButton.classList.remove('hidden');
    }
  } else if (event.key === 'ArrowLeft') {
    // Remove the active class from the current cell of player 2
    player2Cells[player2Index].classList.remove('active');
    player2Index += 1;

    if (player2Index < player2Cells.length - 1) {
      player2Cells[player2Index].classList.add('active');
    } else {
      const carDisplay2 = document.querySelector('#player2-race .finish-container .car-placeholder .car-image');
      carDisplay2.classList.add('finish');
      carDisplay2.style.display = 'block';
      winnerAnnouncement.innerText = 'Player 2 wins the race!';
      gameOver = true;
      restartButton.classList.remove('hidden');
    }
  }
});

restartButton.addEventListener('click', () => {
  player1Index = 0;
  player2Index = 0;

  // remove active class from all cells
  player1Cells.forEach(cell => cell.classList.remove('active'));
  player2Cells.forEach(cell => cell.classList.remove('active'));

  // hide car images
  const cars = document.querySelectorAll('.car-image');
  cars.forEach((car) => {
    car.style.display = 'none';
    car.classList.remove('finish');
  });

  // add active class to the starting cells
  player1Cells[player1Index].classList.add('active');
  player2Cells[player2Index].classList.add('active');

  // clear the winner announcement
  winnerAnnouncement.innerText = '';

  gameOver = false;

  restartButton.classList.add('hidden');
});
