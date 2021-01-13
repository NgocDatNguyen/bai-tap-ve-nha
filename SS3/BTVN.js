// BAI TAP: 

var array = [2, 5, 4, 6, 9, 7, 8, "#", 44, 23, 16, 4, 32];
var sum1 = 0;
var sum2 = 0;

// 1. Cong tat ca so khi gap dau # thi dung lai
   for (var index = 0; index < array.length; index++) {
       if (array[index] == "#"){
           for(var i = 0; i <= index - 1; i++){
              sum1 = sum1 + array[i];
           }
       }
   }
   console.log("Tổng các số trước dấu #:", sum1);

// 2. Cong tat ca so sau khi gap dau #
   for (var index = 0; index < array.length; index++) {
       if (array[index] == "#") {
           for (var i = index + 1; i < array.length; i++) {
               sum2 = sum2 + array[i];
           } 
       }
   }
   console.log("Tổng các số sau dấu #:", sum2);