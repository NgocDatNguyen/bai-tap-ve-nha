// Bai 1
var soNghichDao = 0;
var number = prompt("Hãy nhập số của bạn: ");
 while(number > 0){
     soNghichDao = soNghichDao * 10 + number % 10;
     number = parseInt(number /10);
 }
 console.log("Kết quả của bạn là:", soNghichDao);

// Bai 2
var quangDuong = prompt("Hãy nhập vào số kilomet: ");
if(quangDuong <= 50){
    console.log("Số tiền bạn phải trả là:", quangDuong * 1, "$");
} else if(quangDuong > 50 && quangDuong <= 100){
    console.log("Số tiền bạn phải trả là: ", quangDuong * 1.5, "$");
} else{
    console.log("Số tiền bạn phải trả là: ", quangDuong * 2, "$");
}

// Bai 2(chua)
var userOfKilometer = prompt("So kilomet ma ban da di: ");
userOfKilometer = parseFloat(userOfKilometer);
var money = 0;
console.log(userOfKilometer);
if(userOfKilometer > 0) {
    if(userOfKilometer <= 50) {
        console.log("So tien phai tra cho " + userOfKilometer + "la: " + userOfKilometer * 1 + "$");
    }
    else if(userOfKilometer > 50 && userOfKilometer <= 100) {
        money = 50 * 1 + (userOfKilometer -50) * 1.5;
        console.log("So tien phai tra cho " + userOfKilometer + "la: " + money + "$");
    }
    else {
        money = 50 * 1 * + 50 * 1.5 + (userOfKilometer - 100) / 2;
        console.log("So tien phai tra cho " + userOfKilometer + "la: " + money * 1 + "$")
    }
}
else {
    console.log("Dinh an gian a ?");
}


 // Bai 3
 var year = prompt("Nhập vào năm sinh của cô gái: ");
 var khangcachTuoi = year - 1999;
 if ((((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0)) &&  khangcachTuoi > -5) {
     console.log("Hợp tuổi quá. Đặt tên con đi em");
 }
 else{
    console.log("Hy vọng em tìm được tình yêu mới");
 }

 
