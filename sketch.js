let tiles = [];
let images = [];

function preload() {
  for (let i = 0; i < 15; i++) {
    let image = loadImage("assets/img" + i + ".png");
    images.push(image)
    tiles.push(new tile(images[i]))
    }
    tiles.push(image)
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);

  let x=0
  let y=0
  for (let tile of tiles) {
    print(x,y)
    image(tile.image,x,y,200-5,200-5)
    y+=800/4
    if(y>=800){
      y=0
      x+=800/4
    }
  }
}
