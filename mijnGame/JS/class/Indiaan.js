class Indiaan{
    constructor() {
    this.X = random(100,windowWidth);
    this.Y = random(100, windowHeight);
    this.hoogte = 50;
    this.speed = 10;
    }
    teken() {
        fill("Red");
        ellipse(this.X, this.Y, this.hoogte);
        constrain(this.X, 0 + this.hoogte, windowWidth - this.hoogte);
        constrain(this.Y, 0 + this.hoogte, windowHeight - this.hoogte);
    }
    beweeg() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.X += this.speed;
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.X += -this.speed;
        }
        if (keyIsDown(UP_ARROW)) {
            this.Y += -this.speed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.Y += this.speed;
        }
    }
}