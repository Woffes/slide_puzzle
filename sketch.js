let tiles = [];
let images = [];

function preload() {
  for (let i = 0; i < 15; i++) {
    let image = loadImage("assets/img" + i + ".png");
    tiles.push(new Tile(10 * i, 10 * i, random(images), windowWidth / 4, windowHeight / 4))
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  for (let tile of tiles) {
    tile.display();
  }
}
