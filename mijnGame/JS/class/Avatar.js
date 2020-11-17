class Avatar {
    constructor() {

        this.schermhoogte = 900;
        this.schermbreete = 1600;
        this.X = 100;
        this.Y = 100;
        this.hoogte = 100;
        this.breedte = 50;
        this.speed = 9;
    }
    teken() {
        fill("white");
        rect(this.X, this.Y, this.breedte, this.hoogte);
        this.X = constrain(this.X, 0, this.schermbreete - this.breedte);
        this.Y = constrain(this.Y, 0 , this.schermhoogte - this.hoogte);
        
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
