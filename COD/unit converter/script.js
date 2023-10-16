
function convert() {
    const input = parseFloat(document.getElementById('input').value);
    const fromUnit = document.getElementById('from').value;
    const toUnit = document.getElementById('to').value;
    let convertedValue;

    // Conversion factors for various units
    const conversionFactors = {
        mm: 0.001,  // Millimeter to Meter
        cm: 0.01,   // Centimeter to Meter
        m: 1,       // Meter to Meter (no conversion needed)
        km: 1000    // Kilometer to Meter
    };

    // Perform the conversion
    if (fromUnit in conversionFactors && toUnit in conversionFactors) {
        convertedValue = input * (conversionFactors[toUnit] / conversionFactors[fromUnit]);
    } else {
        // Handle unsupported conversions or show an error message
        convertedValue = "Conversion not supported";
    }

    document.getElementById('output').value = convertedValue;
}
