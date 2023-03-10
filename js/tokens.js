export class Tokens {
  constructor(game) {
    this.game = game;
    this.width = 400;
    this.height = 398;
    this.x = 0; // Adjust to arr
    this.y = 0; // Adjust to arr
  }
  update() {
    // movement
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height);
    /*context.drawImage(
      this.image,
      this.x,
      this.y,
      //adjust to arr
      this.width,
      this.height
    );*/
  }
}

export class Arthur extends Tokens {
  constructor(game) {
    super(game);
    this.game = game;
    this.x = 0; //fix
    this.y = 0; //fix
    this.speedX = 2;
    this.speedX = 0;
    this.image = document.getElementById(`token_arthur`);
    // Add combat values
  }
}

class Merlin extends Tokens {
  constructor() {
    super();
  }
}

class Gareth extends Tokens {
  constructor() {
    super();
  }
}
