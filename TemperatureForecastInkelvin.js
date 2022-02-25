//Temperature forecast in kelvin
const kelvin = 3;
//Temperature forecast in celsius
let celsius = kelvin - 273;
//Temperature forecast in fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//Rounds down the temperature to the lowest whole integer.
Math.floor(fahrenheit)
//Prints temperature to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);