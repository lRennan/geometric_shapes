// JavaScript for calculating the area (calculator.js)
function calculatePolygonArea() {
    const numSides = parseInt(document.getElementById("numSides").value, 10);
    const sideLength = parseFloat(document.getElementById("sideLength").value);
    if (!isNaN(numSides) && !isNaN(sideLength)) {
        const area = calculateRegularPolygonArea(numSides, sideLength);
        displayResult(area.toFixed(2));
    } else {
        displayResult("Please enter valid numbers.");
    }
}

function calculateRegularPolygonArea(numSides, sideLength) {
    const apothem = sideLength / (2 * Math.tan(Math.PI / numSides));
    const perimeter = numSides * sideLength;
    const area = (perimeter * apothem) / 2;
    return area;
}

function displayResult(area) {
    const resultElement = document.getElementById("area-result");
    resultElement.textContent = `Area: ${area}`;
}
