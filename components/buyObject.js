var itemsBought = 0;

function buyObject(obj) {
    if (opened == true) {
        if (obj == 0) {
            if (resources.metal >= 800 && resources.wood >= 400) {
                emittor = new Emittor();
                resources.metal -= 800;
                resources.wood -= 400;
                emittor.start();
                itemsBought++;
            } else {
                alert("Not enough materials!");
            }
        }

        if (obj == 1 && itemsBought == 1) {
            if (resources.metal >= 400 && resources.wood >= 200) {
                sword = new Sword();
                resources.metal -= 400;
                resources.wood -= 200;
                itemsBought++;
            } else {
                alert("Not enough materials!");
            }
        }
    }
}
