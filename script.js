// Function to calculate total calcium
function calculateTotalCalcium() {
    // Get input values for milk, cheese, and yogurt
    const milkAmount = parseFloat(document.getElementById('milk').value) || 0;
    const cheeseAmount = parseFloat(document.getElementById('cheese').value) || 0;
    const yogurtAmount = parseFloat(document.getElementById('yogurt').value) || 0;

    // Calculate total calcium
    const totalCalcium = milkAmount + cheeseAmount + yogurtAmount;

    // Update the total calcium display
    document.getElementById('calcium-amount').innerText = `${totalCalcium} mg`;
}

// You can add more functions or features as needed
