function allClear() {
    document.getElementById("answer").innerHTML = "0";
    console.log("Cleared");
    numOne = [];
    numTwo = [];
    selectionValidator = false;
    calculatedValidator = false;
}

let numOne = [];
let numTwo = [];
let selectionValidator = false;
let option;
let operator;
let choice;
let variableSwitch = false;
let calculatedValidator = false;
let operatorSign;
function addition() {
    if (selectionValidator == true) {
        console.log("Error, please complete current operation first.");
        return;
    } else {
        selectionValidator = true;
    }
    choice = "addition";
    variableSwitch = true;
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
    variableSwitch = true;
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
    variableSwitch = true;
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
    variableSwitch = true;
    console.log("division chosen");





    return choice;
}



function calculateTotal(choice) {

    switch (choice) {


        case "addition":
            if (calculatedValidator == false){
            result = parseInt(numOne) + parseInt(numTwo);
            console.log(result);
            document.getElementById("answer").innerHTML = result;
            numOne=[];
            numTwo=[];
            selectionValidator = false;
            calculatedValidator = true;}
            else if (calculatedValidator == true){
                selectionValidator = false;
                result = parseInt(numOne) + parseInt(result);
                console.log(result);
                document.getElementById("answer").innerHTML = result;
            }
            break;
        case "subtraction":
            
            result = numOne - numTwo;
            console.log(result);
            document.getElementById("answer").innerHTML = result;
            numOne=[];
            numTwo=[];
            selectionValidator = false;
            calculatedValidator = true;
            break;


        case "multiplication":
            result = numOne * numTwo;
            console.log(result);
            document.getElementById("answer").innerHTML = result;
            numOne=[];
            numTwo=[];
            selectionValidator = false;
            calculatedValidator = true;
            break;

        case "division":
            result = numOne / numTwo;
            console.log(result);
            document.getElementById("answer").innerHTML = result;
            numOne=[];
            numTwo=[];
            selectionValidator = false;
            calculatedValidator = true;
            break;


        default:
            result = 0;
    }

}



function getNum(clicked){

    if (selectionValidator == false){
        console.log("numOne selection: " +clicked);
        numOne = numOne.concat(+clicked);

        numOne = numOne.toString();
        document.getElementById("answer").innerHTML = numOne;
        console.log(numOne);
        

    }else if (selectionValidator == true){
        console.log("numTwo selection: " +clicked);
        numTwo = numTwo.concat(+clicked);
        numTwo = numTwo.toString();
        console.log(numTwo);
    }

    



   
}


