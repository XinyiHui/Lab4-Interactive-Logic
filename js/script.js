let hunger = "";
let craving = "";

function chooseHunger(choice) {

    hunger = choice;

    document.getElementById("hungerQuestion").style.display = "none";
    document.getElementById("cravingQuestion").style.display = "block";

}

function chooseCraving(choice) {

    craving = choice;

    let food = "";
    let image = "";


    if (hunger === "little" && craving === "fresh") {
        food = "Salad";
        image = "img/IMG_1329.PNG";
    }

    else if (hunger === "little" && craving === "sweet") {
        food = "Fruit Yogurt Bowl";
        image = "img/IMG_1330.PNG";
    }

    else if (hunger === "medium" && craving === "fresh") {
        food = "Sushi";
        image = "img/IMG_1331.PNG";
    }

    else if (hunger === "medium" && craving === "sweet") {
        food = "Crumbl Cookies";
        image = "img/IMG_1332.PNG";
    }

    else if (hunger === "very" && craving === "fresh") {
        food = "Japanese Ramen";
        image = "img/IMG_1333.PNG";
    }

    else if (hunger === "very" && craving === "sweet") {
        food = "Cheesecake";
        image = "img/IMG_1334.PNG";
    }

    document.getElementById("cravingQuestion").style.display = "none";
    document.getElementById("result").style.display = "block";

    document.getElementById("foodName").textContent = food;
    document.getElementById("foodImage").src = image;

}
function tryAgain() {

    hunger = "";
    craving = "";

    document.getElementById("result").style.display = "none";
    document.getElementById("hungerQuestion").style.display = "block";

}
