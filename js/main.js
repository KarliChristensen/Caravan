import { Tokens } from "./tokens.js";
import { Arthur } from "./tokens.js";
import { Merlin } from "./tokens.js";
import { Gareth } from "./tokens.js";
import { Pellinor } from "./tokens.js";
import { Goblin1 } from "./enemies.js";
import { Goblin2 } from "./enemies.js";
import { Goblin3 } from "./enemies.js";
import { Goblin4 } from "./enemies.js";

window.addEventListener(`load`, function () {
  const canvas = document.getElementById(`canvas1`);
  const popUp = document.getElementById("popUp");
  const ctx = canvas.getContext(`2d`);
  canvas.width = 1800;
  canvas.height = 1000;

  let gameStarted = false;

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.arthur = new Arthur(this);
      this.tokensOnCanvasArr = [];
      this.enemiesOnCanvasArr = [];
      this.SpawnGridPositions = [
        [50, 50],
        [250, 50],
      ];
    }

    update() {
      if (gameStarted) {
        for (let i = 0; i < this.tokensOnCanvasArr.length; i++) {
          this.tokensOnCanvasArr[i].update();
        }
        for (let i = 0; i < this.tokensOnCanvasArr.length; i++) {
          this.enemiesOnCanvasArr[i].update();
        }
      }
    }

    draw(context) {
      context.clearRect(0, 0, this.width, this.height);
      for (let i = 0; i < this.tokensOnCanvasArr.length; i++) {
        this.tokensOnCanvasArr[i].draw(context);
      }
      for (let i = 0; i < this.enemiesOnCanvasArr.length; i++) {
        this.enemiesOnCanvasArr[i].draw(context);
      }
    }

    addToken(token) {
      if (this.tokensOnCanvasArr.length < 2) {
        token.x = this.SpawnGridPositions[this.tokensOnCanvasArr.length][0];
        token.y = this.SpawnGridPositions[this.tokensOnCanvasArr.length][1];
        this.tokensOnCanvasArr.push(token);
        return true;
      } else {
        rosterFullAlert();
        return false;
      }
    }

    removeToken(token) {
      const index = this.tokensOnCanvasArr.indexOf(token);
      if (index !== -1) {
        this.tokensOnCanvasArr.splice(index, 1);
        return true;
      }
      return false;
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
  }

  document.getElementById("charBtn1").addEventListener("click", char1ToArr);
  document.getElementById("charBtn2").addEventListener("click", char2ToArr);
  document.getElementById("charBtn3").addEventListener("click", char3ToArr);
  document.getElementById("charBtn4").addEventListener("click", char4ToArr);

  function char1ToArr() {
    const arthur = new Arthur(game);
    const index = game.tokensOnCanvasArr.findIndex(
      (token) => token instanceof Arthur
    );
    if (index === -1) {
      if (game.addToken(arthur)) {
        console.log("Added Arthur to game");
      } else {
        console.log("Cannot add more than 2 characters");
        rosterFullAlert();
      }
    } else {
      game.removeToken(game.tokensOnCanvasArr[index]);
      console.log("Removed Arthur from game");
    }
  }

  function char2ToArr() {
    const merlin = new Merlin(game);
    const index = game.tokensOnCanvasArr.findIndex(
      (token) => token instanceof Merlin
    );
    if (index === -1) {
      if (game.addToken(merlin)) {
        console.log("Added Merlin to game");
      } else {
        console.log("Cannot add more than 2 characters");
        rosterFullAlert();
      }
    } else {
      game.removeToken(game.tokensOnCanvasArr[index]);
      console.log("Removed Merlin from game");
    }
  }

  function char3ToArr() {
    const gareth = new Gareth(game);
    const index = game.tokensOnCanvasArr.findIndex(
      (token) => token instanceof Gareth
    );
    if (index === -1) {
      if (game.addToken(gareth)) {
        console.log("Added Gareth to game");
      } else {
        console.log("Cannot add more than 2 characters");
        rosterFullAlert();
      }
    } else {
      game.removeToken(game.tokensOnCanvasArr[index]);
      console.log("Removed Gareth from game");
    }
  }

  function char4ToArr() {
    const pellinor = new Pellinor(game);
    const index = game.tokensOnCanvasArr.findIndex(
      (token) => token instanceof Pellinor
    );
    if (index === -1) {
      if (game.addToken(pellinor)) {
        console.log("Added Pellinor to game");
      } else {
        console.log("Cannot add more than 2 characters");
        rosterFullAlert();
      }
    } else {
      game.removeToken(game.tokensOnCanvasArr[index]);
      console.log("Removed Pellinor from game");
    }
  }

  document.getElementById("popUpBtn").addEventListener("click", hideCharBar); // Add automatic hide function when charArr is full and pop-up function when the game is over or restarting.

  function hideCharBar() {
    let pop = popUp.style.display;
    popUp.style.display = pop === "none" ? "block" : "none";
  }

  function rosterFullAlert() {
    let secondPopUp = document.getElementById("secondPopUp");
    secondPopUp.style.display =
      secondPopUp.style.display === "none" ? "block" : "none";
  }

  document
    .getElementById("secondPopUpBtn")
    .addEventListener("click", rosterFullAlert);

  document.getElementById("start").addEventListener("click", function () {
    gameStarted = true;
  });

  const game = new Game(canvas.width, canvas.height);
  console.log(game);

  let goblinArr = [
    new Goblin1(game),
    new Goblin2(game),
    new Goblin3(game),
    new Goblin4(game),
  ];

  function spawnGoblins(goblinArr) {
    const spawnPositions = [
      [100, 100],
      [300, 100],
      [100, 300],
      [300, 300],
    ];

    // Shuffle the goblin array to randomize the selection
    const shuffledGoblins = goblinArr.sort(() => Math.random() - 0.5);

    // Add the first two goblins from the shuffled array to the canvas
    for (let i = 0; i < 2; i++) {
      const goblin = shuffledGoblins[i];
      goblin.x = spawnPositions[i][0];
      goblin.y = spawnPositions[i][1];
      game.enemiesOnCanvasArr.push(goblin);
    }
  }
  spawnGoblins(goblinArr);
  animate();
});
