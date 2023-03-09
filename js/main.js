import { Tokens } from "./tokens.js";
import { Arthur } from "./tokens.js";

window.addEventListener(`load`, function () {
  const canvas = document.getElementById(`canvas1`);
  const popUp = document.getElementById("popUp");
  const ctx = canvas.getContext(`2d`);
  canvas.width = 1200;
  canvas.height = 700;

  let charArr = [];

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    update() {}
    draw() {}
  }
  const game = new Game(canvas.width, canvas.height);

  document.getElementById("popUpBtn").addEventListener("click", hideCharBar); // Add automatic hide function when charArr is full and pop-up function when the game is over or restarting.

  function hideCharBar() {
    let pop = popUp.style.display;
    popUp.style.display = pop === "none" ? "block" : "none";
  }

  document.getElementById("secondPopUpBtn").addEventListener("click", rosterFullAlert); 

  function rosterFullAlert() {
    let secondPopUp = document.getElementById("secondPopUp");
    secondPopUp.style.display = secondPopUp.style.display === "none" ? "block" : "none";
  }

  document.getElementById("charBtn1").addEventListener("click", char1ToArr);

  function char1ToArr() {
    if (charArr.length < 4) {
      const arthur = new Arthur();
      charArr.push(arthur);
      console.log(charArr);
    } else {
      // Display message
    }
  }
});
