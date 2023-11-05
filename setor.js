// JavaScript for calculating the area (calculator.js)
function calculateSectorArea() {
    const radius = parseFloat(document.getElementById("radius").value);
    const angle = parseFloat(document.getElementById("angle").value);

    if (!isNaN(radius) && !isNaN(angle)) {
        const area = calculateCircularSectorArea(radius, angle);
        displayResult(area.toFixed(2));
    } else {
        displayResult("Please enter valid numbers for radius and angle.");
    }
}

function calculateCircularSectorArea(radius, angle) {
    // Convert the angle from degrees to radians
    const angleInRadians = (angle * Math.PI) / 180;
    
    // Calculate the area of the circular sector
    const sectorArea = (1/2) * radius * radius * angleInRadians;
    
    // Calculate the area of the triangle formed by the radius
    const triangleArea = (1/2) * radius * radius * Math.sin(angleInRadians);
    
    // Calculate the total area by subtracting the triangle area from the sector area
    const totalArea = sectorArea - triangleArea;
    
    return totalArea;
}

function displayResult(area) {
    const areaResult = document.getElementById("areaResult");
    areaResult.textContent = `Area: ${area}`;
}
