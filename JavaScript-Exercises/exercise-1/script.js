let calculation = "";

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
    calculation = "";
}
