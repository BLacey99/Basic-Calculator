function allClear() {
    document.getElementById("answer").innerHTML = "0";
    console.log("Cleared");
    numOne = 3;
    numTwo = 2;
    selectionValidator = false;
}

let numOne = 2;
let numTwo = 3;
let selectionValidator = false;
let option;
let operator;
let choice;



function addition() {
    if (selectionValidator == true) {
        console.log("Error, please complete current operation first.");
        return;
    } else {
        selectionValidator = true;
    }
    choice = "addition";

    console.log("addition chosen");




    return choice;
}

function subtraction() {

    if (selectionValidator == true) {
        console.log("Error, please complete current operation first.");
        return;
    } else {
        selectionValidator = true;
    }
    choice = "subtraction";

    console.log("subtraction chosen");





    return choice;
}

function multiplication() {
    if (selectionValidator == true) {
        console.log("Error, please complete current operation first.");
        return;
    } else {
        selectionValidator = true;
    }
    choice = "multiplication";
    console.log("multiplication chosen");




    return choice;
}

function division() {
    if (selectionValidator == true) {
        console.log("Error, please complete current operation first.");
        return;
    } else {
        selectionValidator = true;
    }
    choice = "division";

    console.log("division chosen");





    return choice;
}



function calculateTotal(choice) {

    switch (choice) {


        case "addition":
            operation = "addition";

            result = numOne + numTwo;
            console.log(result);
            document.getElementById("answer").innerHTML = result;
            break;


        case "subtraction":

            result = numOne - numTwo;
            console.log(result);
            document.getElementById("answer").innerHTML = result;
            break;


        case "multiplication":

            result = numOne * numTwo;
            console.log(result);
            document.getElementById("answer").innerHTML = result;
            break;

        case "division":

            result = numOne / numTwo;
            console.log(result);
            document.getElementById("answer").innerHTML = result;
            break;


        default:
            result = 0;
    }

}






