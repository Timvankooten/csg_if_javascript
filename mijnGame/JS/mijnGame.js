

function preload() {
   
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont("Monospace");
    textSize(40);
    textAlign(CENTER,CENTER);
    A1 = new Avatar();
    A1.teken();
    A1.beweeg();

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    A1.x = canvas.width / 2;
    A1.y = canvas.height / 2;
}

function draw() {
   background('blue');
    A1.teken();
    A1.beweeg();
    
}

