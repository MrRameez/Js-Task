document.getElementById('converterForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let inputValue = parseFloat(document.getElementById('tempInput').value);
    let inputUnit = document.getElementById('inputUnit').value;
    let targetUnit = document.getElementById('targetUnit').value;

    let result;

    // Check if inputUnit and targetUnit are the same
    if (inputUnit === targetUnit) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${inputUnit} is already selected as both input and target unit!`,
        });
        return;
    }

    // Conversion logic
    if (inputUnit === 'Celsius' && targetUnit === 'Fahrenheit') {
        result = (inputValue * 9 / 5) + 32;
    } else if (inputUnit === 'Celsius' && targetUnit === 'Kelvin') {
        result = inputValue + 273.15;
    } else if (inputUnit === 'Fahrenheit' && targetUnit === 'Celsius') {
        result = (inputValue - 32) * 5 / 9;
    } else if (inputUnit === 'Fahrenheit' && targetUnit === 'Kelvin') {
        result = ((inputValue - 32) * 5 / 9) + 273.15;
    } else if (inputUnit === 'Kelvin' && targetUnit === 'Celsius') {
        result = inputValue - 273.15;
    } else if (inputUnit === 'Kelvin' && targetUnit === 'Fahrenheit') {
        result = ((inputValue - 273.15) * 9 / 5) + 32;
    }

    // Display the result
    document.getElementById('output').textContent = `${inputValue} ${inputUnit} = ${result.toFixed(2)} ${targetUnit}`;

    // Store the history
    let historyElement = document.getElementById('history');
    let historyItem = document.createElement('div');
    historyItem.textContent = `${inputValue} ${inputUnit} = ${result.toFixed(2)} ${targetUnit}`;
    historyElement.appendChild(historyItem);
});
