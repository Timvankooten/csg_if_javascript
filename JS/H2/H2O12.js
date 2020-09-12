var animatie = [];
var aantalBeeldjes = 6;
var nummer = 5;
var mouseX;
var mouseY;


function preload() {
    for (var b = 0; b < aantalBeeldjes; b++) {
        nieuw_beeldje = loadImage("images/sprites/Jos_losse_beeldjes/Jos-" + b + ".png");
        animatie.push(nieuw_beeldje);
    }
}

function setup() {
    canvas = createCanvas(460, 460);
    canvas.parent('processing');
    noStroke();
    frameRate(50);
}

function draw() {
    background('lavender');
    background('white');
    image(animatie[nummer], 0, 0);

    // straal van de neus is 180
    if (mouseX < 140) {
        nummer = 3
    }
    if (mouseX > 320) {
        nummer = 4
    }
    if (mouseY < 140 && mouseX < 320 && mouseX > 140) {
        nummer = 1
    }
    if (mouseY > 320 && mouseX < 320 && mouseX > 140) {
        nummer = 2
    }
    if (mouseY < 320 && mouseY > 140 && mouseX < 320 && mouseX > 140) {
        nummer = 5
    }

}