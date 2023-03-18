export class Tokens {
  constructor(game) {
    this.game = game;
    this.width = 150;
    this.height = 149;
    this.SpawnGridPositions = [
      [50, 50],
      [250, 50],
      [50, 250],
      [250, 250],
    ];
  }
  update() {}
  draw() {
    context.drawImage(this.image, this.x, this.y);
  }
}

export class Arthur extends Tokens {
  constructor(game) {
    super(game);
    this.name = "Arthur";
    this.speedX = 2;
    this.speedY = 0;
    this.health = 10;
    this.attack = 0;
    this.image = document.getElementById("Arthur");
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y);
  }
}

export class Merlin extends Tokens {
  constructor(game) {
    super(game);
    this.name = "Merlin";
    this.speedX = 2;
    this.speedY = 0;
    this.health = 5;
    this.attack = 5;
    this.image = document.getElementById("Merlin");
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y);
  }
}

export class Gareth extends Tokens {
  constructor(game) {
    super(game);
    this.name = "Gareth"
    this.speedX = 2;
    this.speedY = 0;
    this.health = 8;
    this.attack = 4;
    this.image = document.getElementById("Gareth");
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y);
  }
}

export class Pellinor extends Tokens {
  constructor(game) {
    super(game);
    this.name = "Pellinor"
    this.speedX = 2;
    this.speedY = 0;
    this.health = 15;
    this.attack = 1;
    this.image = document.getElementById("Pellinor");
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y);
  }
}
