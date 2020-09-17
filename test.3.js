var piraat = {
    x: 50,
    y: 50,
    breedte: 50,
    stapGrootte: 5,

    beweeg() {
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.stapGrootte;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.stapGrootte;
        }
        if (keyIsDown(UP_ARROW)) {
            this.y -= this.stapGrootte;
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.y += this.stapGrootte;
        }

        //this.x = constrain(this.x, 0, canvas.width - this.zijde);
        //this.y = constrain(this.y, 0, canvas.height - this.zijde);
    },

    teken() { 
       
        fill('brown');
        ellipse(this.x, this.y, this.breedte);
    }
}


var eiland = {
    x: 400,
    y: 320,
    breedte: 150,
       benGeraakt: false,

    wordJeGeraakt(vijand) {
        if (dist(this.x,this.y,piraat.x,piraat.y)<=this.breedte/2 + piraat.breedte/2) {
            this.benGeraakt = true;
        }
        else{
             this.benGeraakt = false;
        }
    },

    teken() {
        if (this.benGeraakt) {
            fill('yellow');
        }
        else {
            fill('green');
        }
        ellipse(this.x, this.y, this.breedte);
    }
}


function setup() {
    canvas = createCanvas(600, 600);
    canvas.parent('processing');
    noStroke();
    frameRate(50);
}

function draw() {
    background('blue');
    piraat.beweeg();
    eiland.wordJeGeraakt(piraat);
    eiland.teken();
    piraat.teken();
}