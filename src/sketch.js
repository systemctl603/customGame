var player, playerImg;
var playerLeft, playerRight;
var planetImg, boxImg, compImg, swordImg, jungleImg;
var showSprites = true;
var bgstate = 1;
var resources = { metal: 10000, wood: 10000, gold: 10000, platinum: 10000 };
var gamesize = {};
var box1, emittor, sword, miner;
var inJungle = false;
var opened = false;
var emitImg;
var o2lvl = 0;
var bases = [];
var emitB = document.querySelector("#emit");
var swordB = document.querySelector("#sword");
var areaB = document.querySelector("#area");
var minerB = document.querySelector("#miner");
var basesB = document.querySelector("#bases");

function preload() {
    playerImg = loadImage("images/astronaut/astronaut-still.png");
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
    jungleImg = loadImage("images/junglebg.png");
}

function setup() {
    gamesize.w = windowWidth;
    gamesize.h = windowHeight - 100;

    areaB.style.display = "none";
    basesB.style.display = "none";

    var cnv = createCanvas(gamesize.w, gamesize.h);
    player = createSprite(100, gamesize.h - 60, 32, 64);
    player.depth = 2;
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
            if (miner.state == "created") 
                resources.gold += 5;
                
            if () {}
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
        console.log(bgstate);
        background(planetImg);
    } else if (bgstate == 2) {
        console.log(bgstate);
        background(jungleImg);
    }
}

function updateAll() {
    if (emittor && box1.sprite) {
        emittor.checkLevel();
        emittor.sprite.visible = !inJungle;
        box1.sprite.visible = !inJungle;
        if (miner) miner.sprite.visible = inJungle;
    }
    if (sword) {
        sword.updatePos();
    }
}

function showResources({ metal, wood, gold }) {
    document.querySelector(
        "#resource"
    ).innerHTML = `Metal: ${metal}, Wood: ${wood}, Gold: ${gold}`;
}

function switchArea() {
    if (!inJungle) {
        bgstate = 2;
        inJungle = true;
    } else {
        bgstate = 1;
        inJungle = false;
    }
}
