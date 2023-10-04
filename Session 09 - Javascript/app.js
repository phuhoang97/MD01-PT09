// console.log("Hello");

// Từ khóa khai báo biến
// var || let || const
// Cú pháp : [Từ khóa khai báo biến] [Tên biến] = [giá trị]

// var a = 10;
// // Khai báo lại
// // var a = "Hello";

// // Gắn lại
// a = 50;
// console.log(a);

// let a = 10;
// // Khai báo lại
// // let a = 50;

// // Gắn lại
// a = 60;
// console.log(a);

// const a = 10;
// // Khai báo lại
// // const a = 20;

// // Gắn lại
// // a = 30;
// console.log(a);

// Phạm vi

// Global
// debugger;
// let a = 30;
// console.log(a);

// Block scope: {}

// debugger;

// {
//   const a = 30;
// }
// console.log(a);
// a
// console.log(a); // undefined
// var a = 10;
// console.log(a); // 10

// Kiểu dữ liệu

// let a = "Hello";
// console.log(a);

// console.log(10 == 12);
// let a = undefined;
// console.log(a);

// alert("Chúc các bạn học tập tốt !!!");

// let a = confirm("Bạn đã đủ 18 tuổi chưa ?");
// console.log(a);

// let a = prompt("Điền số bạn thích");
// console.log(a);
// let a = 10;
// // a = a - 5;
// a %= 5;
// console.log(a);

// == ===
// So sánh value không quan tâm đến kiểu dữ liệu
// console.log(10 === "10"); // false

// console.log(10 > 5 && 10 < 6);
// true && false => false

// console.log(10 > 5 || 10 < 6);
// true || false => true

// console.log(!false);

// console.log(10 + 10 * (2 + 3));

// 10 + 10 * 5

// let a = "Hello";
// document.write(a);

// Bài 1: Cho người nhập vào giá trị bất kỳ và in ra màn hình cho người dùng
// document.write()

// input: Hello world
// output: Hello world

// let input = prompt("Điền giá trị bất kỳ: ");
// document.write(input);

// Bài 2: Cho người dùng điền 2 số. Tính tổng 2 số đó
// input: 10 20
// output: 30

// let input1 = prompt("Nhập số đầu tiên");
// console.log(typeof input1); // string => number

// console.log("10" + "20"); //1020

// let input1 = +prompt("Nhập số đầu tiên");
// let input2 = +prompt("Nhập số thứ 2");

// document.write(input1 + input2);
// Javascript là ngôn ngữ không chặt chẽ

// console.log(10 - "20"); // 200
// Ngoài trừ phép cộng (nối chuỗi)
// còn lại các toán tử khác sẽ tự động ép kiểu dữ liệu

/*

Bài 1: Viết chương trình nhập điểm của một sinh viên cho các môn: 
Vật lý, Hóa học, và Sinh học. Sau đó hiển thị điểm trung bình và 
tổng của những điểm này.
input: 8 6 8
output: 8 + 6 + 8 = 7.33
*/

// Viết tên biến theo kiểu camelCase
// Chữa bài

// let vatLy = Number(prompt("Nhập điểm môn vật lý: "));
// let hoaHoc = Number(prompt("Nhập điểm môn hóa học: "));
// let sinhHoc = Number(prompt("Nhập điểm môn hóa học: "));
// let average = (vatLy + hoaHoc + sinhHoc) / 3;
// document.write(`${vatLy} + ${hoaHoc} + ${sinhHoc} = ${average.toFixed(2)}`);

/*
Bài 2: Viết chương trình nhập một giá trị là độ 0C (Celsius) 
và chuyển nó sang độ 0F (Fahrenheit). 
[Hướng dẫn: 
    Độ C = (Độ F – 32)/1.8
    Độ F = Độ C x 1.8 + 32
].
input: 1 độ C
output: 33,8 độ F
*/

// Chữa bài:
let celsius = prompt("Nhập giá trị độ C");
let fahrenheit = celsius * 1.8 + 32;
document.write(fahrenheit);
