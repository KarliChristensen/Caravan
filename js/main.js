import { Tokens } from "./tokens.js";
import { Arthur } from "./tokens.js";

window.addEventListener(`load`, function () {
  const canvas = document.getElementById(`canvas1`);
  const popUp = document.getElementById("popUp");
  const ctx = canvas.getContext(`2d`);
  canvas.width = 1200;
  canvas.height = 700;

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.tokens = [];
    }
  
    update() {
      for (let i = 0; i < this.tokens.length; i++) {
        this.tokens[i].update();
      }
    }
  
    draw(context) {
      context.clearRect(0, 0, this.width, this.height);
      for (let i = 0; i < this.tokens.length; i++) {
        this.tokens[i].draw(context);
      }
    }
  
    addToken(token) {
      if (this.tokens.length < 4) {
        this.tokens.push(token);
        return true;
      } else {
        return false;
      }
    }
  }
  
  function animate() {
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
  }
  
  document.getElementById("charBtn1").addEventListener("click", char1ToArr);
  
  function char1ToArr() {
    const arthur = new Arthur(game);
    if (game.addToken(arthur)) {
      console.log("Added Arthur to game");
    } else {
      console.log("Cannot add more than 4 characters");
    }
  }
  
  const game = new Game(canvas.width, canvas.height);
  console.log(game);
  
  animate();

  document.getElementById("popUpBtn").addEventListener("click", hideCharBar); // Add automatic hide function when charArr is full and pop-up function when the game is over or restarting.

  function hideCharBar() {
    let pop = popUp.style.display;
    popUp.style.display = pop === "none" ? "block" : "none";
  }

  document
    .getElementById("secondPopUpBtn")
    .addEventListener("click", rosterFullAlert);

  function rosterFullAlert() {
    let secondPopUp = document.getElementById("secondPopUp");
    secondPopUp.style.display =
      secondPopUp.style.display === "none" ? "block" : "none";
  }
});
