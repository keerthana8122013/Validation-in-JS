function clearScreen() {
    document.getElementById("result").value = "";
}
// appends the clicked button's value to the display
function setScreenValue(value) {
    const r = document.getElementById("result");
    if (r.value === "Enter an expression" || r.value === "invalid expression") 
        r.value = value;
    }
    //calculates and displayes the result
function calculateResult() {
    const resultElement = document.getElementById("result");
    const expression = resultElement.value.trim();
}
// Evaluate expression and handle errors
    try {
        resultElement.value = eval(expression);
    } catch (e) {
        resultElement.value = 'Invalid expression';
    }
