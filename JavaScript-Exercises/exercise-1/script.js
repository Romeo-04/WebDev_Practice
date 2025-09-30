let calculation = "";
let answer = "";
let d
function calculate(n){
    calculation += n;
    document.getElementById("display-input").innerText = calculation;
}

function clearCalculation(){
    calculation = "";
    document.getElementById("display-input").innerText = calculation;
}

function finalCalculate(){
    calculation = eval(calculation);
    document.getElementById("display-input").innerText = calculation;
}

function deleteLastEntry(){
    calculation = calculation.slice(0, -1);
    document.getElementById("display-input").innerText = calculation;
}