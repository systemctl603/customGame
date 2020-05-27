var player, playerImg;
var playerLeft, playerRight;
var bgImage, planetImg, boxImg, compImg, swordImg;
var showSprites = true;
var bgstate = 1;
var box1, box2, box3, box4, box5;
var resources = { metal: 10000, wood: 10000, gold: 10000 };
var gamesize = {};
var emittor, sword;
var inJungle = false;
var opened = false;
var emitImg;
var o2lvl = 0;

function preload() {
    playerImg = loadImage("images/astronaut/astronaut-still.png");
    bgImage = loadImage("images/rocketBackground.png");
    instructionImage = loadImage("images/first.png");
    planetImg = loadImage("images/marsBackground.jpeg");
    boxImg = loadImage("images/box.png");
    playerLeft = loadAnimation(
        "images/astronaut/walkLeft1.png",
        "images/astronaut/walkLeft2.png"
    );
    playerRight = loadAnimation(
        "images/astronaut/walkRight1.png",
        "images/astronaut/walkRight2.png"
    );
    compImg = loadImage("images/comp.png");
    emitImg = loadImage("images/emittor.png");
    swordImg = loadImage("images/sword.png");
}

function setup() {
    gamesize.w = windowWidth;
    gamesize.h = windowHeight - 100;

    var cnv = createCanvas(gamesize.w, gamesize.h);
    player = createSprite(100, gamesize.h - 75, 32, 64);
    player.addImage("still", playerImg);
    player.addAnimation("playerLeft", playerLeft);
    player.addAnimation("playerRight", playerRight);
    player.scale = 1;
    box1 = new Box(300, gamesize.h - 50);
}

function draw() {
    if (player.overlap(box1.sprite) && opened == false) {
        setInterval(() => {
            resources.metal += 8;
            resources.wood += 10;
        }, 500);
        box1.sprite.addImage("comp", compImg);
        box1.sprite.changeImage("comp");
        opened = true;
    }
    showResources(resources);
    bg();
    if (keyIsDown(LEFT_ARROW)) {
        player.changeAnimation("playerLeft");
        player.x -= 10;
    } else if (keyIsDown(RIGHT_ARROW)) {
        player.changeAnimation("playerRight");
        player.x += 10;
    } else {
        player.changeImage("still");
    }

    updateAll();
    drawSprites();
}

function bg() {
    if (bgstate == 1) {
        background(planetImg);
    } else if (bgstate == 2) {
        background(bgImage);
    }
}

function updateAll() {
    if (emittor && sword) {
        sword.updatePos();
        emittor.sprite.visible = !inJungle;
        sword.sprite.visible = !inJungle;
    }
}

function showResources({ metal, wood, gold }) {
    document.querySelector(
        "#resource"
    ).innerHTML = `Metal: ${metal}, Wood: ${wood}, Gold: ${gold}`;
}

function switchArea() {
    if (!isJungle) {
        bgstate == 2;
        isJungle = true;
    } else {
        bgstate == 1;
        isJungle = false;
    }
}
