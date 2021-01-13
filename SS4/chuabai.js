// var inputTest = [5, 4, 5, 9, 4, "#", 45, 5, 6, 8, 9];
// viTriDauT = 0;
// for (var index = 0; index < inputTest.length; index ++) {
//     if (inputTest[index] == "#") {
//         viTriDauT = index;
//         break;
//     }
// }
// var KHOBAU1 = 0;
// for (var index = 0; index < viTriDauT; index ++) {
//     KHOBAU1 += inputTest[index];
// }
// console.log(KHOBAU1);

// var KHOBAU2 = 0;
// for (var index = viTriDauT + 1; index < inputTest.length; index ++) {
//     KHOBAU2 += inputTest[index];
// }
// console.log(KHOBAU2);

var inputTest = [5, 4, 5, 9, 4, "#", 45, 5, 6, 8, 9];

console.log(inputTest.shift());
inputTest.unshift(15);
console.log(inputTest);

var viTriDauT = inputTest.indexOf("#");
console.log(viTriDauT);
