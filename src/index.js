
import Game from "./scripts/game";
import Grass from "./scripts/grass";

window.addEventListener('DOMContentLoaded', (event) => {
  console.log(`Yay, it's Dragon Time!`);

  const canvas1 = document.getElementsByClassName('top-layer')[0]
  const ctx1 = canvas1.getContext('2d');
  const canvas2 = document.getElementsByClassName('bottom-layer')[0];
  const ctx2 = canvas2.getContext('2d');
  const canvas3 = document.getElementsByClassName('very-bottom-layer')[0];
  const ctx3 = canvas3.getContext('2d');

  const backgroundMusic = new Audio("assets/sounds/Celebration+-+320bit.mp3");
  const soundOn = document.getElementById("sound-on");
  const soundOff = document.getElementById("sound-off");
  const newGameButton = document.getElementById("new-game-button");
  const points = document.getElementsByClassName("points-wrapper")[0];
  const upperNav = document.getElementsByClassName("upper-nav")[0];
  const splashPage = document.getElementById("opening-page");
  const xButton = document.getElementsByClassName("x")[0];
  const startSound = new Audio("./assets/sounds/Button-click-sound.mp3");
  const soundBtnSound = new Audio("./assets/sounds/mixkit-select-click-1109.wav");
  const myPages = document.getElementsByClassName("my-pages")[0];
  let game;
  
  newGameButton.addEventListener("click", e => {
    e.preventDefault();
    startSound.play();
    splashPage.style.display = "none";
    myPages.style.display = "none";
    canvas3.style.display = "block";
    canvas2.style.display = "block";
    canvas1.style.display = "block";
    soundOn.style.display = "block";
    points.style.display = "flex";
    upperNav.style.display = "flex";
    backgroundMusic.play();
    game = new Game(ctx1, ctx2, ctx3);
    window.game = game;
    game.startGame();
  });
  
  xButton.addEventListener("click", e => {
    e.preventDefault();
    splashPage.style.display = "flex";
    myPages.style.display = "flex";
    canvas3.style.display = "none";
    canvas2.style.display = "none";
    canvas1.style.display = "none";
    soundOn.style.display = "none";
    soundOff.style.display = "none";
    points.style.display = "none";
    upperNav.style.display = "none";
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    game.resetGameOver();
  });
  
  soundOn.addEventListener("click", e => {
    soundOn.style.display = "none";
    soundOff.style.display = "block";
    soundBtnSound.play();
    backgroundMusic.muted = true;
  });
  
  soundOff.addEventListener("click", e => {
    soundOff.style.display = "none";
    soundOn.style.display = "block";
    soundBtnSound.play();
    backgroundMusic.muted = false;
  });

  const modal = document.getElementsByClassName("modal")[0];
  const instructionsBtn = document.getElementById("instructions");
  const modalBack = document.getElementsByClassName("modal")[0];

  const toggleModal = () => {
    modal.classList.toggle("show-modal");
  }

  instructionsBtn.addEventListener("click", toggleModal);
  modalBack.addEventListener("click", toggleModal);

  let moveLeft = false;
  let moveRight = false;
  
  document.addEventListener('keydown', e => {
    if (e.code === 'ArrowLeft'){
      moveLeft = true;
      game.moveHoriz(moveLeft, moveRight);
    } else if (e.code === 'ArrowRight'){
      moveRight = true;
      game.moveHoriz(moveLeft, moveRight);
    }
  });
  
  document.addEventListener('keyup', e => {
    if (e.code === 'ArrowLeft') {
      moveLeft = false;
      game.moveHoriz(moveLeft, moveRight);
    } else if (e.code === 'ArrowRight') {
      moveRight = false;
      game.moveHoriz(moveLeft, moveRight);
    }
  });
  
  let moveUp = false;
  let moveDown = false;

  document.addEventListener('keydown', e => {
    if (e.code === 'ArrowUp'){
      moveUp = true;
      game.moveVert(moveUp, moveDown);
    } else if (e.code === 'ArrowDown'){
      moveDown = true;
      game.moveVert(moveUp, moveDown);
    }
  });

  document.addEventListener('keyup', e => {
    if (e.code === 'ArrowUp') {
      moveUp = false;
      game.moveVert(moveUp, moveDown);
    } else if (e.code === 'ArrowDown') {
      moveDown = false;
      game.moveVert(moveUp, moveDown);
    }
  });
  
});