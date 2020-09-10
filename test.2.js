var diameter = 175
var groot = 1500
var snelheid1 = 15
var snelheid2 = 17
var kleur = "blue"

var ball = {
    x: groot * 0.75,
    y: groot * 0.75,
    beweeg() {
        if (keyIsDown(LEFT_ARROW)) { this.x -= snelheid1; }
        if (keyIsDown(RIGHT_ARROW)) { this.x += snelheid1; }
        if (keyIsDown(UP_ARROW)) { this.y -= snelheid1; }
        if (keyIsDown(DOWN_ARROW)) { this.y += snelheid1; }
    },

    teken() {
        fill("red");
        ellipse(ball['x'], ball['y'], diameter);
    }
}


var ball2 = {
    x: groot / 4,
    y: groot / 4,
    beweeg() {
        if (keyIsDown(65)) { this.x -= snelheid2; }
        if (keyIsDown(68)) { this.x += snelheid2; }
        if (keyIsDown(87)) { this.y -= snelheid2; }
        if (keyIsDown(83)) { this.y += snelheid2; }
    },
    teken() {
        fill(kleur);
        ellipse(ball2['x'], ball2['y'], diameter);

    }

}


function setup() {
    canvas = createCanvas(groot, groot);
    canvas.parent('processing');
    noStroke();


}

function draw() {
    background('silver');
    ball.beweeg();
    ball.teken();
    ball2.beweeg();
    ball2.teken();

    ball['y'] = constrain(ball['y'], diameter / 2, groot - diameter / 2);
    ball['x'] = constrain(ball['x'], diameter / 2, groot - diameter / 2);

    ball2['y'] = constrain(ball2['y'], diameter / 2, groot - diameter / 2);
    ball2['x'] = constrain(ball2['x'], diameter / 2, groot - diameter / 2);

    if (dist(ball["x"], ball["y"], ball2["x"], ball2["y"]) < diameter / 2) {
        kleur = "green";
    }

}





