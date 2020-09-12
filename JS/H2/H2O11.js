var animatie = [];
var aantalBeeldjes = 6;
var nummer = 0;
var breedte,hoogte;

function preload() {
  for (var b = 0;b < aantalBeeldjes;b++) {
    nieuw_beeldje = loadImage("images/sprites/wizard/opdracht_11B/"+ b +".png");
    animatie.push(nieuw_beeldje);
  }
}

function setup() {
  canvas = createCanvas(400,300);
  canvas.parent('processing');
  noStroke();
  frameRate(1);
  textFont("Georgia");
  textSize(18);
  breedte = animatie[0].width;
  hoogte = animatie[0].height;
}

function draw() {
  background('lavender');

    nummer = frameCount % aantalBeeldjes;
  image(animatie[nummer],150,0,6*breedte,6*hoogte);


  if (nummer == aantalBeeldjes) {
    nummer = 0;
  }

  text("frameCount=" + frameCount,5,40);
  text("nummer=" + nummer,5,70);
}