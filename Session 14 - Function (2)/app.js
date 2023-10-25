/*
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

// Bài 4: Kiểm tra số nguyên tố

// function checkSoNguyen() {
//   let input = +prompt("Nhập số cần kiểm tra");
//   let check = true;

//   if (input < 2) {
//     check = false;
//   } else {
//     for (let i = 2; i < input; i++) {
//       if (input % i === 0) {
//         check = false;
//         break;
//       }
//     }
//   }
//   if (check) {
//     console.log(` ${input} là số nguyên tố`);
//   } else {
//     console.log(` ${input} không phải số nguyên tố`);
//   }
// }

// checkSoNguyen();

// Bài 5 Kiểm tra chuỗi dài nhất

// function longest() {
//   //   let strInput = ["Black", "Pink", "Green", "Blue", "Yellow"];
//   let input = prompt("Nhập các chữ cách nhau bằng dấu ", ""); // string
//   let strInput = input.split(", ");
//   //   console.log(arr);
//   let max = strInput[0];

//   for (let i = 1; i < strInput.length; i++) {
//     if (strInput[i].length > max.length) {
//       max = strInput[i];
//     }
//   }
//   return max;
// }

// console.log(longest());

// Nếu trong mảng có 2 ký tự bằng nhau => cần hiển thị cả 2 ký tự đó

// Bài 6: Xây dựng hàm tính tổng các số chắn trong mảng

// let arr = [1, 2, 2, 3, 4, 5, 6, 6, 7];

// let input = prompt("Nhập các số cần tính ngăn cách nhau bằng `,`");
// let arr = input.split(", ");

// let sum = (e) => {
//   let total = 0;
//   for (let i = 0; i < e.length; i++) {
//     if (e[i] % 2 === 0) {
//       total += +e[i];
//     }
//   }
//   return total;
// };

// console.log(sum(arr));

// Bài 7: Cho người dùng nhập vào, xây dựng hàm tìm số lớn thứ 2 trong mảng
// 1,2,3,4 - 3 => length - 2
// function timSoLonThuHai(input) {
//   let numbers = input.split(",");
//   // -10 -20 -30
//   let soLonNhat = +numbers[0]; // -10
//   let soLonThuHai = +numbers[1]; // -20

//   for (let i = 2; i < numbers.length; i++) {
//     if (numbers[i] > soLonNhat) {
//       // -30 > -10
//       soLonThuHai = +soLonNhat;
//       soLonNhat = +numbers[i];
//     } else if (numbers[i] > soLonThuHai) {
//       // -30 > -20
//       soLonThuHai = numbers[i];
//       break;
//     }
//   }

//   return soLonThuHai;
// }
// let input = prompt("Nhập các số cách nhau bằng dấu ", " ");

// console.log(timSoLonThuHai(input));

// 3,5,7,9
/*
i = 0; 3 > 0
t2 = 0; t1 = 3

// 5,7,9,3
*/

// Bài 8: Cho người dùng nhập vào, tính trung bình cộng của các số đó

// function Average() {
//   let input = prompt("Nhập các số cách nhau bằng dấu ,");
//   let arr = input.split(",");
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += +arr[i];
//   }

//   return sum / arr.length;
// }
// console.log(Average());

/*
Bài 1: Cho người dùng nhập vào chuỗi số bất kì. Viết hàm sắp xếp chuỗi số đó từ bé đến lớn
input: 2,3,5,4,1
output: 1,2,3,4,5

Bài 2: Viết một hàm nhận một chuỗi làm đối số và trả về độ dài của chuỗi.
input: "Hello World"
output: 11

Bài 3: Viết một hàm nhận một mảng các chuỗi làm đối số và trả về mảng mới chứa các chuỗi viết hoa.
input: "thịnh"
output: "THỊNH"

Bài 4: Viết một hàm nhận một chuỗi làm đối số và trả về chuỗi mới với các từ đảo ngược thứ tự.
input: "Khanh"
output: "hnahK"

Bài 5: Viết một hàm nhận một mảng các số làm đối số và trả về mảng mới chỉ chứa các số nguyên tố.
input: 1,2,3,4,5,6,7,8
output: 2,3,5,7
*/

// let a = Math.floor(Math.random() * 10);
// let b = Math.floor(Math.random() * 10);
// let sum = a + b;
// console.log(sum);

// alert(`${a} + ${b} = `);
// let input = +prompt("Nhập số bất kỳ");

// if (sum === input) {
//   alert("Đúng");
// } else {
//   alert("Sai");
// }
