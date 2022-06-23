var firstNum = prompt("Please enter the first number: ");
var operator = prompt("Enter the operator:\n (+, -, /, *, %)");
var secondNum = prompt("Please enter the second number: ");

if (operator === "+") {
    var solution = Number(firstNum) + Number(secondNum);
    solution = solution.toFixed(3);
    alert(firstNum + "+" + secondNum + "=" + solution);
}
else if (operator === "-") {
    var solution = Number(firstNum) - Number(secondNum);
    solution = solution.toFixed(3);
    alert(firstNum + "-" + secondNum + "=" + solution);
}
else if (operator === "/") {
    var solution = Number(firstNum) / Number(secondNum);
    solution = solution.toFixed(3);
    alert(firstNum + "/" + secondNum + "=" + solution);
}
else if (operator === "*") {
    var solution = Number(firstNum) * Number(secondNum);
    solution = solution.toFixed(3);
    alert(firstNum + "*" + secondNum + "=" + solution);
}
else if (operator === "%") {
    var solution = Number(firstNum) % Number(secondNum);
    solution = solution.toFixed(3);
    alert(firstNum + "%" + secondNum + "=" + solution);
}