// JavaScript for calculating the area (calculator.js)
document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateRectangleArea);
});

function calculateRectangleArea() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);

    if (!isNaN(length) && !isNaN(width)) {
        const area = calculateArea(length, width);
        displayResult(area.toFixed(2));
    } else {
        displayResult("Please enter valid numbers for length and width.");
    }
}

function calculateArea(length, width) {
    return length * width; // Area of a rectangle: length * width
}

function displayResult(area) {
    const areaResult = document.getElementById("areaResult");
    areaResult.textContent = `Area: ${area}`;
}
