var kerverx= 0
var kervery= 0

function preload(){
    pl= loadImage("../images/sprites/kever.png");
}

function setup() {
 canvas = createCanvas(450,450);
 background('silver');
 textSize(30);
 canvas.parent('processing');
}

function draw() {
    
    for (var t =0; t < 9; t++){
translate(0,50);
    for (var nr =0; nr < 9; nr++){
  image(pl,kerverx,0,50,50);
  translate(50,0);
    }
    translate(0,50);
}

}