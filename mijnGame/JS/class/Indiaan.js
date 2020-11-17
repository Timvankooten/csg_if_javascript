class Indiaan {
    constructor() {
        this.schermhoogte = 900;
        this.schermbreete = 1600;
        this.X = random(150, this.schermbreete);
        this.Y = random(150, this.schermhoogte);
        this.hoogte = 100;
        this.breedte = 50;
        this.speed = 10;
        this.afstand;
        this.variabel5 = 0;
    }
    teken() {
        fill("Red");
        rect(this.X, this.Y, this.breedte, this.hoogte);
        this.X = constrain(this.X, 0, this.schermbreete - this.breedte);
        this.Y = constrain(this.Y, 0, this.schermhoogte - this.hoogte);

    }
    beweeg() {
        if (this.variabel5 == 0) {
            this.variabel1 = random(-8, 0);
            this.variabel2 = random(0, 8);
            this.variabel3 = random(-15, 0);
            this.variabel4 = random(0, 15);
        }
        this.X += random(this.variabel1, this.variabel2);
        this.Y += random(this.variabel3, this.variabel4);

        this.variabel5++;
        if (this.variabel5 == 20) { this.variabel5 = 0; }
    }

    /*gepakt() {

        if (
            ((this.X + this.breedte > A1.X && this.X + this.breedte < A1.X + A1.breedte)
                || (this.X > A1.X && this.X < A1.X + A1.breedte))
            && (
                (this.Y + this.hoogte > A1.Y && this.Y + this.hoogte < A1.Y + A1.hoogte)
                || (this.Y > A1.Y && this.Y < A1.Y + A1.hoogte))) {
            gepakt = true;
        }
        else {
            gepakt = false;
        }
    }*/

    gepakt() {
        this.afstand = dist(A1.X, A1.Y, this.X, this.Y);
        if (this.afstand <= 100) {
            gepakt = true;
        }
        else {
            gepakt = false;
        }
    }
