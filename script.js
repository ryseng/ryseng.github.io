function calculatePlates(weight) {
    fourtyFive = 0;
    twentyFive = 0;
    ten = 0;
    five = 0;
    twoFive = 0;

    if (weight >= 45) {
        fourtyFive = Math.floor(weight / 45);
        weight = weight - (fourtyFive * 45);
    }

    if (weight >= 25) {
        twentyFive = Math.floor(weight / 25);
        weight = weight - (twentyFive * 25);
    }

    if (weight >= 10) {
        ten = Math.floor(weight / 10);
        weight = weight - (ten * 10);
    }

    if (weight >= 5) {
        five = Math.floor(weight / 5);
        weight = weight - (five * 5);
    }

    if (weight >= 2.5) {
        twoFive = Math.floor(weight / 2.5);
        weight = weight - (twoFive * 2.5);
    }

    if (fourtyFive > 0) {
        console.log('45 x ' + fourtyFive);
    }

    if (twentyFive > 0) {
        console.log('25 x ' + twentyFive);
    }

    if (ten > 0) {
        console.log('10 x ' + ten);
    }

    if (five > 0) {
        console.log('5 x ' + ten);
    }

    if (twoFive > 0) {
        console.log('2.5 x ' + twoFive);
    }

}

function calculateWorkingSet() {
    num1 = document.getElementById("oneRepMax").value;
    num2 = document.getElementById("setPercent").value;
    weight = (((num1 * (num2 * .01)) - 45) / 2);
    document.getElementById("result").innerHTML = weight;
    document.getElementById("plates").innerHTML = calculatePlates(weight);

}
