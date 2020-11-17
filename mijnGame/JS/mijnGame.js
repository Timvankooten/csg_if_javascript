
var v = 0;
var aantal = 30;
var indiane = [];
var gepakt = true;
var spelloopt = false;
var nieuwspel = true;
var afstand;
//var achtergrondlvl1;



function preload() {

    //  achtergrondlvl1 = loadImage('mijnGame/images/pixil-frame-0.png');
}



function setup() {
    createCanvas(1600, 900);
    textFont("Monospace");
    textSize(40);
    textAlign(CENTER, CENTER);
    frameRate(50);
    A1 = new Avatar();
    A1.teken();
    A1.beweeg();


    for (var v = 0; v <= aantal; v++) {
        indiane.push(new Indiaan())
    }
}



function draw() {

    if (nieuwspel == true) {

        background('green');
        textSize(140);
        text("Indiana Jones", 0, 0, canvas.width, canvas.height * 2 / 3);
        textSize(32);
        text("het aanvondtuur begint. Haal de overkant. Ontwijk de Indianen. \n\n Druk op enter om te beginen\n", 0, canvas.height * 1 / 2, canvas.width, canvas.height * 1 / 3);
        if (keyIsDown(ENTER)) {
            nieuwspel = false;
        }

    } else {

        if (gepakt == true) {
            background('green');
            textSize(140);
            fill(0, 0, 0, 1);
            text("loser", 0, 0, canvas.width, canvas.height * 2 / 3);
        }
        else {
            background('green');
            A1.teken();
            A1.beweeg();
        }
        for (v = 0; v < aantal; v++) {
            indiane[v].teken();
            indiane[v].beweeg();
            indiane[v].gepakt();

        }
    }
}


