class Avatar{
    constructor() {
    this.X = 100;
    this.Y = 100;
    this.hoogte = 50;
    this.speed = 10;
    }
    teken() {
        fill("white");
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