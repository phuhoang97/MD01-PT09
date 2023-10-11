// 1. Array - Mảng
/* Mảng là tập trung nhiều giá trị trong 1 biến duy nhất, trong mảng 
có thể chứa được nhiều kiểu dữ liệu khác nhau nhưng trong thực tế mảng sẽ
chứa các kiểu giá trị đồng nhất
*/

// Cú pháp

// let arrList = [1, "Hello", null, NaN, [3, 4, 5]];
// console.log(arrList);

// let arrNumber = [1, 2, 3, 4, 5]; // length: 5
// let arrNumber = new Array(1, 2, 3, 4, 5);
// index         0  1  2  3  4  length - 1
// value chính là các giá trị có trong array
// console.log(arrNumber);

// 2. Làm việc với mảng
// CRUD -
// C - Create (Thêm mới) || R - Read (Đọc) || U - Update (Cập nhật) || D - Delete (Xóa)

// R - Read one
// let arrNumber = [1, 2, 3, 4, 5];
// console.log(arrNumber[0]);
// console.log(arrNumber[1]);
// console.log(arrNumber[2]);
// console.log(arrNumber[3]);
// console.log(arrNumber[4]);

// R - Read All
// let arrNumber = [1, 2, 3, 4, 5];

// for (let i = 0; i < arrNumber.length; i++) {
//   console.log(i + " " + arrNumber[i]);
// }

// C - Create (Thêm mới)
// Thêm vào đầu mảng: unshift()
// let arrNumber = [1, 2, 3, 4, 5];
// arrNumber.unshift(6);
// console.log(arrNumber);

// Thêm vào cuối mảng: push()
// let arrNumber = [1, 2, 3, 4, 5];
// arrNumber.push(6);
// console.log(arrNumber);

// U - Update (Cập nhật)
// Update one:
// let arrNumber = [1, 2, 3, 4, 5];
// arrNumber[2] = 30;
// console.log(arrNumber);

// Update all
// let arrNumber = [1, 2, 3, 4, 5];
// // console.log(arrNumber.length); // 5
// for (let i = 0; i < arrNumber.length; i++) {
//   console.log(i);
//   // i = 0 => arrNumber[0] => 1 => 2
//   // i = 1 => arrNumber[1] => 2 => 4
//   // i = 2 => arrNumber[2] => 3 => 6
//   // i = 3 => arrNumber[3] => 4 => 8
//   // i = 4 => arrNumber[4] => 5 => 10
//   // i = 5 => 5 < 5 => end

//   //   arrNumber[i] = arrNumber[i] * 2;
//   arrNumber[i] *= 2;
// }

// console.log(arrNumber);

// D - Delete
// Xóa phần tử đầu tiên - shift()
// let arrNumber = [1, 2, 3, 4, 5];
// arrNumber.shift();
// console.log(arrNumber); // 2, 3, 4, 5

// Xóa phần tử cuối - pop()
// let arrNumber = [1, 2, 3, 4, 5];
// arrNumber.pop();
// console.log(arrNumber); // 1, 2, 3, 4

// Xóa phần tử tại vị trí index biết trước - splice
// splice(index, amountDelete)

// let arrNumber = [1, 2, 3, 4, 5];
// console.log(arrNumber);
// arrNumber.splice(1, 0, 8, 9);
// console.log(arrNumber);

// Join()
// let arrNumber = [1, 2, 3, 4, 5];
// let strNumber = arrNumber.join();
// console.log(strNumber);

// concat - nối mảng
// let arr1 = [3, 4];
// let arr2 = [5, 6];
// let arr3 = [];
// console.log(arr3.concat(arr1, arr2));

// reverse - Đảo thứ tự trong mảng
// let arrNumber = [1, 2, 3, 4, 5];
// arrNumber.reverse();
// console.log(arrNumber); // 5, 4, 3, 2, 1

// sort - Sắp xếp lại giá trị trong mảng
// let arrNumber = [5, 3, 4, 2, 1];
// arrNumber.sort();
// console.log(arrNumber); // 1, 2, 3, 4, 5

/* 

Bài 1: Cho người dùng nhập 1 giá trị bất kỳ. 
Tìm kiếm xem giá trị đó có trong mảng hay không
[3,4,5,7,9] 
=> 9 => true
=> 2 => false
input: 4 
output: true


Bài 2: Cho 1 mảng số bất kỳ tìm giá trị lớn nhất trong mảng
input: [5,3,8,9]
output: max là 9
*/

// Chữa bài
// Bài 1:

// let arrNumber = [3, 4, 5, 7, 9];
// let inputNumber = +prompt("Nhập số cần kiểm tra");
// let check = false;

// for (let i = 0; i < arrNumber.length; i++) {
//   if (arrNumber[i] === inputNumber) {
//     check = true;
//     break;
//   }
// }

// if (check) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Bài 2: Tìm giá trị lớn nhất
// let arr = [5, 3, 8, 9];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }

// console.log(` Số lớn nhất là: ${max}`);

// Bài 3: Tìm số nhỏ nhất
let arr = [5, 3, 8, 9];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}

console.log(` Số nhỏ nhất là: ${min}`);
/*
min = 5
i = 0 => 5 > arr[0] (5) => i++
i = 1 => 5 > arr[1] (3) => min = 3 => i++
i = 2 => 3 > arr[2] (8) => i++
i = 3 => 3 > arr[3] (9) => i++
i = 4 => End
in ra console.log()

*/
