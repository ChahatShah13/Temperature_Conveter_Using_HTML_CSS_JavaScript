function convert(type) {
    if (type === 'C') {
        const celsiusInput = document.getElementById('celsius');
        const fahrenheitInput = document.getElementById('fahrenheit');
        const kelvinInput = document.getElementById('kelvin');

        if (celsiusInput.value === '') {
            fahrenheitInput.value = '';
            kelvinInput.value = '';
            return;
        }

        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9 / 5) + 32;
        const kelvin = celsius + 273.15;

        fahrenheitInput.value = fahrenheit.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);
    } else if (type === 'F') {
        const celsiusInput = document.getElementById('celsius');
        const fahrenheitInput = document.getElementById('fahrenheit');
        const kelvinInput = document.getElementById('kelvin');

        if (fahrenheitInput.value === '') {
            celsiusInput.value = '';
            kelvinInput.value = '';
            return;
        }

        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) * 5 / 9;
        const kelvin = (fahrenheit + 459.67) * 5 / 9;

        celsiusInput.value = celsius.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);
    } else if (type === 'K') {
        const celsiusInput = document.getElementById('celsius');
        const fahrenheitInput = document.getElementById('fahrenheit');
        const kelvinInput = document.getElementById('kelvin');

        if (kelvinInput.value === '') {
            celsiusInput.value = '';
            fahrenheitInput.value = '';
            return;
        }

        const kelvin = parseFloat(kelvinInput.value);
        const celsius = kelvin - 273.15;
        const fahrenheit = (kelvin * 9 / 5) - 459.67;

        celsiusInput.value = celsius.toFixed(2);
        fahrenheitInput.value = fahrenheit.toFixed(2);
    }
}
