// Here we are going to use strict mode
// 'use strict';

// const { type } = require('os');

// const x = 23;
// if (x === 23) console.log(23);

// const calcAge = (birthyear) => 2023 - birthyear;

// console.log();
//This is a way to check the amplitude of temperatures and
//We can ignore strings in this taken or given array
//And amplitude is calculated as max - min of temperatures

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const temperature_ampli = function (temperature) {
//   let max = temperature[0];
//   let min = temperature[0];
//   for (let i = 0; i < temperature.length; i++) {
//     const cursor = temperature[i];
//     if (cursor === '') {
//       continue;
//     }
//     if (cursor > max) {
//       max = cursor;
//     }
//     if (cursor < min) {
//       min = cursor;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = console.log(temperature_ampli(temperatures));

// //Function 2:
// //Function should receive 2 arrays of temperatures

// //2) Understanding the problem
// // - With 2 arrays, should we implement functionality twice?
// //No! Just merge two arrays

// const temperatures2 = [-7, -5, -3, -1, 3, 4, 5, 6, 12];

// const total_temperatures = temperatures.concat(temperatures2);
// console.log(temperature_ampli(total_temperatures));

//Kelvin to celsius

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Enter the Degree celcius')),
//   };
//   const Kelvin = measurement.value + 273;
//   return Kelvin;
// };
// console.log(measureKelvin());

//Coding Challenge-1:
// const temperature1 = [17, 21, 23];
// const temperature2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str = '';
//   for (let days = 0; days < arr.length; days++) {
//     str += `${arr[days]}\u00B0C in ${days + 1} days...`;
//   }
//   console.log(str);
// };
// printForecast(temperature2);

//IF you want to see both the array you can merge them

// const all_temperatures = temperature1.concat(temperature2);
// printForecast(all_temperatures);
