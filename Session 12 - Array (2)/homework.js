/* Bài tập 1: Tính tổng các phần tử trong mảng
+ Cho mảng ban đầu. Tính tổng các phẩn tử trong mảng. Ví dụ:
Input: [1,2,3]
Ouput: 6

Bài tập 2: Tìm phần tử lớn nhất trong mảng
+ Cho mảng ban đầu. Tìm phần tử lớn nhất. ví dụ:
Input: [1,2,3]
Output: 3

Bài tập 3: Tìm phần tử nhỏ nhất trong mảng
+ Cho mảng ban đầu. Tìm phần tử nhỏ nhất. ví dụ:
Input: [10,8,2,6]
Output: 2

Bài tập 4: Kiểm tra xem phần tử có tồn tại trong mảng hay không
Cho mảng ban đầu, làm theo 2 cách:
+ Cách 1: Không sử dụng hàm có sẵn
+ Cách 2: Sử dụng hàm có sẵn
Input: [1, 2, 3, 4, 5];
Output: true/false

Bài tập 5: Đảo ngược giá trị trong mảng
Input: [1, 2, 3, 4, 5]
Ouput: [5, 4, 3, 2, 1]

Bài tập 6: Lọc các phần tử chẵn trong mảng:
Input: [1, 2, 3, 4, 5]
Ouput: [2, 4]

Bài tập 7: Tìm số lần xuất hiện của một phần tử trong mảng
+ Cho mảng ban đầu và cho người dùng nhập 1 giá trị bất kỳ. Nếu có giá trị trong mảng thì sẽ báo số lần phần tử xuất hiện trong mảng
Input: [1, 2, 3, 2, 4, 2, 5] => người dùng nhập 2
Output: 3

Bài tập 8: Sắp xếp lại mảng theo giá trị tăng dần
Input: [4, 2, 9, 5, 1]
Output: [1, 2, 4, 5, 9]

*/

// Bài 1
// let arr = [1, 2, 3];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);

// Bài tập 4

// Cách 1:

/* 
includes <=>
let arrNumber = [1, 2, 3, 4, 5];
let inputNumber = +prompt("Nhập số cần kiểm tra");
let check = false;

for (let i = 0; i < arrNumber.length; i++) {
  if (arrNumber[i] === inputNumber) {
    check = true;
    break;
  }
}

if (check) {
  console.log(true);
} else {
  console.log(false);
}
*/

// Dùng hàm có sẵn - includes

// let arrNumber = [1, 2, 3, 4, 5];
// let input = +prompt("Nhập giá trị");
// let checkNumber = arrNumber.includes(input);
// console.log(checkNumber);

// Bài tập 5

// Cách 1: Hàm có sẵn - reverse
// let arrNumber = [1, 2, 3, 4, 5];
// arrNumber.reverse();
// console.log(arrNumber);

// Cách 2: không sử dụng hàm có sẵn
// let arrNumber = [1, 2, 3, 4, 5];
// let arrReverse = [];

// for (let i = arrNumber.length - 1; i >= 0; i--) {
//   arrReverse.push(arrNumber[i]);
// }

// console.log(arrReverse);

// Cách 3: không sử dụng hàm có sẵn
// let arrNumber = [1, 2, 3, 4, 5];
// let arrReverse = [];
// for (let i = 0; i < arrNumber.length; i++) {
//   arrReverse.unshift(arrNumber[i]); // 1 // 2 // 3
// }
// console.log(arrReverse);

// [3, 2, 1]

// Bài tập 6: Lọc các phần tử chẵn trong mảng
// let arrNumber = [1, 2, 3, 4, 5];
// let evenNumber = [];

// for (let i = 0; i < arrNumber.length; i++) {
//   if (arrNumber[i] % 2 === 0) {
//     evenNumber.push(arrNumber[i]);
//   }
// }

// console.log(evenNumber); // 2, 4

// Bài tập 7: Tìm số lần xuất hiện của một phần tử trong mảng
// let arrNumber = [1, 2, 3, 2, 4, 2, 5];
// let check = false;
// let count = 0;
// let input = +prompt("Nhập số cần tìm");

// for (let i = 0; i < arrNumber.length; i++) {
//   if (input === arrNumber[i]) {
//     check = true;
//     count += 1;
//   }
// }

// if (check) {
//   console.log(` Số lần xuất hiện của ${input} là ${count}`);
// } else {
//   console.log(` Phần tử ${input} không có trong mảng`);
// }

// 5 > 2 => true or false

// Bài tập 8: Sắp xếp theo giá trị tăng dần
// Cách 1: Dùng hàm có sẵn - sort (alphabet) A-Z 0-9 a-z
// let arrNumber = [4, 200000, 9, 5, 1, 10];
// let arrNumber = ["A", "B", "D", "C", "E"];
// arrNumber.sort();
// console.log(arrNumber);

// Cách 2: Không sử dụng hàm có sẵn
// debugger;
// let arrNumber = [4, 2, 9, 5, 1];

// for (let i = 0; i < arrNumber.length; i++) {
//   // i = 0 => 4
//   // i = 1 => 4
//   // i = 2 => 4
//   // i = 3 => 9

//   for (let j = i + 1; j < arrNumber.length; j++) {
//     // j = 1 => 2
//     // j = 2 => 9
//     // j = 3 => 5
//     // j = 4 => 1
//     // --------------------
//     // j = 2 => 2
//     // j = 3 => 9
//     // j = 4 => 5

//     // ----------------------
//     // j = 3 => 9
//     // j = 4 => 5

//     // ----------------------
//     // j = 4 => 5

//     if (arrNumber[i] > arrNumber[j]) {
//       // 2 > 9 || 0 || 2 > 1 || 4 > 2 || 4 > 9 || 4 > 5 || 4 > 9 || 4 > 5 || 9 > 5
//       let temp = arrNumber[i]; // 4 || 9
//       arrNumber[i] = arrNumber[j]; // 4 => 2
//       arrNumber[j] = temp; // 4 || 9
//     }
//   }
// }

// console.log(arrNumber); // 1 2 4 5 9

// Bài tập trên lớp

/* Bài 1: 
myColor = ["Red", "Green", "White", "Black"];
Đầu ra mong đợi:
"Red, Green, White, Black"
"Red + Green + White + Black"
*/

// chữa bài
// let myColor = ["Red", "Green", "White", "Black"];

// Lưu ý: Để ép kiểu dữ liệu từ array => string : join

// let newColor = myColor.join(" + ");
// console.log(newColor);

/* 
Bài 2: Viết chương trình JavaScript chấp nhận một số làm đầu vào và chèn dấu gạch
ngang (-) vào giữa hai số chẵn. Ví dụ: nếu bạn chấp nhận 025468, đầu ra phải là
0-254-6-8.
*/

// Chữa bài
// let strInput = "025468";
// let arrNumber = [];

// for (let i = 0; i < strInput.length; i++) {
//   if (strInput[i] % 2 === 0 && strInput[i + 1] % 2 === 0) {
//     arrNumber.push(strInput[i] + "-"); // 0-254-6-
//   } else {
//     arrNumber.push(strInput[i]); // 0-254-6-8
//   }
// }

// console.log(arrNumber.join(""));

/*
Bài 3: Viết một chương trình JavaScript chấp nhận một chuỗi làm đầu vào và hoán
đổi trường hợp của mỗi ký tự. Ví dụ: nếu bạn nhập 'The Quick Brown Fox', đầu ra phải
là 'tHE qUICK bROWN fOX'.
*/

// Hàm in thường => toLowerCase
// Hàm in hoa => toUpperCase

// let greeting = "HELLO";
// console.log(greeting.toLowerCase());

// Chữa bài
let strInput = "The Quick Brown Fox";
let result = "";

for (let i = 0; i < strInput.length; i++) {
  let arr = strInput[i];
  if (arr === arr.toLowerCase()) {
    // arr[3] =
    // "" === "".toLowerCase()
    result += arr.toUpperCase();
  } else {
    result += arr.toLowerCase();
  }
}

console.log(result);
