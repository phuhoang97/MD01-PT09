// 1. Hàm là gì?

// 2. Cách khai báo hàm

// function nameFunction() {
// Statement
// }

// Ví dụ
// function sum(a, b) { // a, b là tham số
//   // Logic
// }

// sum() // Gọi hàm

// Tính chất
// Hàm không thực thi khi định nghĩa
// Hàm chỉ thực thi khi được gọi
// debugger;
// function sum(a, b) {
//   // a,b parameters (Tham số)
//   console.log(a + b);
//   //   var greeting = "Hello";
// }
// // console.log(greeting);

// sum(10, 20); // Gọi hàm
// Argumer (Đối số) (10, 20)
// sum(90, 10);
// sum(800, 10);

// Các cách định nghĩa hàm
// Cách 1: Function Expression - Biểu thức hàm
// let upCount = function () {
//   console.log("Function Expression");
// };

// upCount();

// Cách 2: IIFE
// (function f(a, b) {
//   console.log(a + b);
// })("Rikkei", "Academy");

// Cách 3: Arrow Function
// let downCount = () => {
//   console.log("Hello Tùng non !!!!");
// };

// downCount();

// 3. Rest Parameters
// function sum() {
//   // Tính tổng của các tham số được truyền vào
//   // arguments => Là ám chỉ tất cả đối số được truyền lên
//   let result = 0;
//   //   console.log(arguments);
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// }

// console.log(sum(3, 5, 7, 8, 9, 7, 9, 7, 1));

// Tìm hiểu từ khóa return

// function f() {
//   console.log("a");
//   console.log("b");
//   return console.log("c");
// }
// f();

// Closures
// function count() {
//   function upCount() {
//     console.log(50);
//   }
//   upCount();
// }

// count();

/* Bài 1: Cho người dùng nhập vào số tuổi, 
+ nếu tuổi >= 18: Thông báo: Oke !!!
+ nếu tuổi < 18: Thông báo: Stop !!!
*/

// Chữa bài:

// let inputUser = +prompt("Nhập số: ");

// function message(num) { // num => Tham số
//   if (num >= 18) {
//     alert("Oke !!!");
//   } else {
//     alert("Stop !!!");
//   }
// }

// message(inputUser); // Gọi hàm truyền đối số

/* 
Bài 2: Xây dựng 1 hàm chuyển đổi độ F sang độ C
C = (F - 32)/1.8
input: 62
output: 16.67

Bài 3: Cho người dùng nhập vào 1 số bất kỳ, xây dựng hàm tính giai 
thừa của số đó?
input: 5
output: 120 =>

Bài 4: Cho người dùng nhập vào 1 số bất kỳ. Kiểm tra xem số đó có phải số
nguyên tố hay không?
input: 13
output: true

Bài 5: Xây dựng hàm, kiểm tra chuỗi nào dài nhất
input: ["Black", "Pink", "Green", "Blue", "Yellow"]
output: Yellow

// Nâng cao: Cho người dùng nhập vào cách nhau bằng dấu ","
input: black, pink, green, blue, yellow
output: yellow

// Gợi ý: sử dụng .length để kiểm tra độ dài. black.length = 5

Bài 6: Xây dựng hàm, tính tổng các số chẵn trong mảng
input: [1,2,2,3,4,5,6,6,7]
output: 20

Bài 7: Cho người dùng nhập vào, xây dựng hàm tìm số lớn thứ 2 trong mảng
input: 3,5,7,6,4,8,20,55
ouput: 20

Bài 8: Cho người dùng nhập vào, tính trung bình cộng của các số đó
input: 8,9,7,4,8
output: 7.2
*/

// Bài 2:

// let doF = prompt("Nhập độ F");

// let doC = () => {
//   let tinhToan = (doF - 32) / 1.8;
//   return tinhToan;
// };

// console.log(doC());

// Bài 3: Tính giai thừa
// 5! => 5*4*3*2*1

// let inputUser = +prompt("Nhập giá trị bất kỳ");

function giaiThua(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    // number = 5. i => 1,2,3,4,5
    result *= i;
  }
  return result;
}
console.log(giaiThua(5));
