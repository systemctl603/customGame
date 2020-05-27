class Box {
    constructor(x, y) {
        this.sprite = createSprite(x, y);
        this.sprite.scale = 0.5;
        this.image = boxImg;
        this.sprite.depth = 1;
        this.sprite.addImage(this.image);
    }
}

class Emittor {
    constructor() {
        this.sprite = createSprite(600, gamesize.h - 50);
        this.sprite.depth = 1;
        this.sprite.addImage(emitImg);
    }

    start() {
        this.id = setInterval(() => {
            o2lvl++;
            document.querySelector("#o2lvl").innerHTML = `O2 Level: ${o2lvl}`;
        }, 500);
    }

    checkLevel() {
        if (o2lvl >= 100) {
            clearInterval(this.id);
            document.querySelector(
                "#o2lvl"
            ).innerHTML = `Atmosphere Terraformed`;
        }
    }
}

class Sword {
    constructor() {
        this.sprite = createSprite(player.x + 15, player.y);
        this.sprite.scale = 0.65;
        this.sprite.addImage(swordImg);
    }

    updatePos() {
        this.sprite.x = player.x + 25;
        this.sprite.y = player.y - 10;
    }
}

class Miner {
    constructor() {
        this.sprite = createSprite(900, gamesize.h - 50);
        this.sprite.depth = 1;
        this.sprite.addImage(emitImg);
        this.state = "created";
    }
}
