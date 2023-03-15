export class Tokens {
  constructor(game) {
    this.game = game;
    this.width = 150;
    this.height = 149;
    this.SpawnGridPositions = [[50, 50], [250, 50], [50, 250], [250, 250]];
  }
  update() {
  }
  draw() {
    context.drawImage(this.image, this.x, this.y);
  }
}

export class Arthur extends Tokens {
  constructor(game) {
    super(game);

    this.speedX = 2;
    this.speedY = 0;
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
    this.speedX = 2;
    this.speedY = 0;
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
    this.speedX = 2;
    this.speedY = 0;
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
    this.speedX = 2;
    this.speedY = 0;
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
