// Tìm min
//var number = [-1, -100, 0, 4, 2, 1, 54];
// var min = number[0];
// for (var index = 1; index < number.length; index++) {
//     if (min > number[index]) {
//         min = number[index];
//     }
// }
// console.log(min);

// // Tim max
// var max = number[0];
// for (var index = 1; index < number.length; index++) {
//     if (max < number[index]) {
//         max = number[index];
//     }
// }
// console.log(max);

// Loop nested (vong lap long nhau)

// var hinhTamGiac = "";
// for (var i = 0; i < 10; i++) {
//     var hangNgang = "";
//     for (var j = 0; j < i + 1; j++) {
//         hangNgang += "$";
//     }
//     hinhTamGiac += hangNgang + "\n";
// }
// console.log(hinhTamGiac);

//Cho 1 mang [4, 5, 6, 7, 8, 99]
// var number = [4, 5, 6, 7, 8, 99];
// for (var index = 0; index < number.length; index++) {
//     var total = 0; 
//     for (var j = 0; j < number.length; j++) {
//         if (index != j) {
//             total += number[j];
//         }
//     }
//     console.log(total);
// }

var number = [4, 5, 6, 9, 8, 99];

for (var i = 0; i < number.length; i++) {
    for (let j = 0; j < number.length; j++) {
        if (number[j] > number[j + 1]) {
            var temp = number[j];
            number[j] = number[j + 1];
            number[j + 1] = temp;
        }
    }
}
console.log(number);