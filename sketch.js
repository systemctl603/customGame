var player, playerImg;
var playerLeft, playerRight;
var bgImage, planetImg, boxImg;
var showSprites = true;
var bgstate = 1;
var box1, box2, box3, box4, box5;

function preload() {
    playerImg = loadImage('images/astronaut/astronaut-still.png');
    bgImage = loadImage('images/rocketBackground.png');
    instructionImage = loadImage('images/first.png');
    planetImg = loadImage('images/marsBackground.jpeg');
    boxImg = loadImage('images/box.png');
    playerLeft = loadAnimation('images/astronaut/walkLeft1.png', 'images/astronaut/walkLeft2.png')
    playerRight = loadAnimation('images/astronaut/walkRight1.png', 'images/astronaut/walkRight2.png')
}

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    player = createSprite(100, windowHeight - 75, 32, 64);
    player.addImage('still', playerImg);
    player.addAnimation('playerLeft', playerLeft);
    player.addAnimation('playerRight', playerRight);
    player.scale = 1;
    box1 = new Box(300, windowHeight - 50, () => {

    })
}

function draw() {
    bg();
    if (keyIsDown(LEFT_ARROW)) {
        player.changeAnimation('playerLeft');
        player.x -= 10;
    } else if (keyIsDown(RIGHT_ARROW)) {
        player.changeAnimation('playerRight');
        player.x += 10;
    } else {
        player.changeImage('still');
    }
    if (player.collide(box1.sprite)) {

    }
    if (showSprites == true) { drawSprites(); }
}

function bg() {
    if (bgstate == 1) {
        background(planetImg);
    } else if (bgstate == 2) {
        background(bgImage);
    }
}

class Box {
    constructor(x, y, callback) {
        this.sprite = createSprite(x, y);
        this.sprite.scale = 0.5;
        this.image = boxImg;
        this.sprite.addImage(this.image);
    }

    execAction(callback) {
        callback();
    }
}