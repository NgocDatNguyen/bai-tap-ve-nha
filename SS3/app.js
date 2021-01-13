// var array = [5 , "hello", undefined, true, false, 2.5, NaN];
// console.log("================ Array mac dinh ================");
// console.log(array);
// console.log("So phan tu trong mang la: " + array.length); //Dem so ptu trong mang
// array.push("Dat");
// array.push(15);
// console.log(array);
// console.log(array[array.length - 1]);
// array.pop();
// console.log("================ Array sau khi pop ================");
// console.log(array);

// Bai tap:

// 1. Cho mot mang rong, nhat ho , ten dem, ten cua ban vao mang ("Nguyen", "Ngoc", "Dat")
// var array = [];
// array.push("Nguyen");
// array.push("Ngoc");
// array.push("Dat");
// console.log(array);

// // Lay nhung khong mat
// console.log(array[array.length - 1] + " Crush");
// // Lay nhung mat
// console.log(array.pop() + " Crush");

// // In ra Ho va Ten va thanh mang rong
// var Ho = array.pop(), Dem = array.pop(), Ten = array.pop();
// console.log(array);
// console.log(Ten + " " + Dem + " " + Ho);

// var fullNameOfUser = "";
// for (var index = 0; index < array.length; index ++) {
//     //console.log("Phan tu thu " + index + " cua mang la: " + array[index]);
//     fullNameOfUser = fullNameOfUser + array[index] + " ";
// }
// console.log(fullNameOfUser);

// // Sua
// array[1] = "Thanh";
// console.log(array);

// var number = [3, 4, 5, 7, 14, 16, 17];
// console.log(number);
// for (var index = 0; index <= number.length - 1; index ++) {
//     number[index] = number[index] + 5;
// }
// console.log(number);

// var index = 0;
// while(index < number.length) {
//     number[index] = number[index] + 5;
//     index ++;
// }
// console.log(number);

// 2. Dem so luong so chan trong mang
// var number = [3, 4, 5, 7, 14, 16, 17, 36];
// var demSoChan = 0;
// for(var index = 0; index <= number.length - 1; index ++) {
//     if(number[index] % 2 == 0){
//         console.log("number[" + index + "] = " + number[index]);
//         demSoChan = demSoChan + 1;
//         // demSoChan += 1;
//         // demSoChan ++;
//     }
// }
// console.log("So phan tu chan trong mang la: " + demSoChan);

