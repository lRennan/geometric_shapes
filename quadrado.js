// JavaScript for calculating the area (calculator.js)
document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateSquareArea);
});

function calculateSquareArea() {
    const sideLength = parseFloat(document.getElementById("sideLength").value);
    if (!isNaN(sideLength)) {
        const area = calculateArea(sideLength);
        displayResult(area.toFixed(2));
    } else {
        displayResult("Please enter a valid number for the side length.");
    }
}

function calculateArea(sideLength) {
    return sideLength * sideLength; // Area of a square: side * side
}

function displayResult(area) {
    const areaResult = document.getElementById("areaResult");
    areaResult.textContent = `Area: ${area}`;
}
