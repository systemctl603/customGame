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
                document.querySelector("#emit").style.display = "none";
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
                areaB.style.display = "inline";
                swordB.style.display = "none";
            } else {
                alert("Not enough materials!");
            }
        }

        if (obj == 2 && itemsBought == 2) {
            if (resources.metal >= 600 && resources.wood >= 300) {
                miner = new Miner();
                resources.metal -= 600;
                resources.wood -= 300;
                itemsBought++;
                minerB.style.display = "none";
                basesB.style.display = "inline";
            } else {
                alert("Not enough materials!");
            }
        }

        if (obj == 3 && itemsBought == 3) {
            if (
                resources.metal >= 100 &&
                resources.wood >= 50 &&
                resources.gold >= 10 &&
                bases.length < 10
            ) {
                bases.push("base");
                resources.metal -= 100;
                resources.wood -= 50;
                resources.gold -= 10;
                if (bases.length == 10) {
                    basesB.style.display = "none";
                }
                basesB.innerHTML = `Buy Base ${
                    bases.length < 10 ? bases.length + 1 : 10
                }`;
            } else if (bases.length == 10) {
                basesB.innerHTML = `Buy Base 10`;
                alert("All bases bought!");
            } else {
                alert("Not enough materials!");
            }
        }
    }
}
