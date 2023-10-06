// 1. Câu điều kiện: if()

// Nếu 1 + 1 == 2 Alert("Đúng")

// if (5 > 7) {
//   document.write("Đúng 1");
// } else if (6 < 3) {
//   document.write("Đúng 2");
// } else {
//   document.write("Sai");
// }

// Cú pháp:
/*
if (Điều kiện) {
    // statements true
} else {
    // statements false
}
*/

/* Ex1: Cho người dùng điền vào 1 ngẫu nhiên từ 1 đến 20, số 10 là đáp án. 
Nếu số đó trong khoảng từ
+ x < 10: Thông báo cho người dùng là nhập to hơn
+ 10: Thông báo là chính xác
+ x > 10: Thông báo cho người dùng điền số nhỏ hơn

Ex2: Cho người dùng điền mật khẩu bất kỳ
+ Nếu mật khẩu là Aa123: Thông báo là chính xác
+ Nếu để trống sẽ thông báo không được để trống
+ Còn lại thì sẽ thông báo sai
*/

// Bài 1:
// let numberInput = +prompt("Điền số bất kỳ"); // 11

// if (numberInput < 10) {
//   //   document.write("Số người dùng điền là:" + numberInput + " " + "Nhập số to hơn");
//   document.write(`Số người dùng điền là: ${numberInput} Nhập số to hơn`);
// } else if (numberInput == 10) {
//   document.write(` ${numberInput} Chính xác`);
// } else if (numberInput > 10) {
//   document.write(`Số người dùng điền là: ${numberInput} Nhập số nhỏ hơn`);
// } else {
//   document.write("Nhập lại");
// }

// if (numberInput < 11 && numberInput > 9) {
//   document.write("Chính xác");
// } else {
//   document.write("Nhập lại");
// }

// Ex2

// let passInput = prompt("Nhập mật khẩu");

// if (passInput === "Aa123") {
//   document.write("Chính xác !!!");
// } else if (passInput === "") {
//   document.write("Không được để trống !!!");
// } else {
//   document.write("password sai !!!");
// }

// let input = prompt("Nhập: "); // Hello

// switch (
//   input // Hello
// ) {
//   case "Hello":
//     document.write("Hello");
//     break;
//   case "Hi":
//     document.write("Hi");
//     break;

//   default:
//     document.write("Không có case tương ứng");
//     break;
// }

// => if else
// if (input === "Hello") {
//   document.write("Hello");
// } else if (input === "Hi") {
//   document.write("Hi");
// } else {
//   document.write("Không có case tương ứng");
// }

// 2. Câu lệnh lặp (for)

// Cú pháp:
/* for(điểm bắt đầu; điều kiện lặp; bước nhảy) */
// 0 1 2 3 4

// for (let i = 2; i < 10; i++) {
//   console.log(i);
//   console.log("Hello");
// }

/*
i = 0 => 0 < 5 => thực thi code => i++ 
i = 1 => 1 < 5 => thực thi code => i++ 
i = 2 => 2 < 5 => thực thi code => i++ 
i = 3 => 3 < 5 => thực thi code => i++ 
i = 4 => 4 < 5 => thực thi code => i++ 
i = 5 => 5 < 5

i = 2 => 2 < 5 => thực thi code
i = 4 => 4 < 5 => thực thi code
i = 6 => 6 < 5 
*/

// cú pháp
// white(Điều kiện) {
//     // Statement
// }

// while (x < 10) {
//   console.log("Hello");
// }

// do {
//   console.log("123123");
// } while (3 > 2);

// Câu lệnh break thoát khỏi switch case và vòng lặp gần nhất
// Câu lệnh continue: dừng vòng lặp tại đó và nhảy sang vòng lặp tiếp theo

// break & continue
// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i); // 0 1 2 4
// }

// ++i i++ (Tiền tố và hậu tố)

// let a = 5;

// console.log(a++ + ++a + a + ++a + a++ - a);
//              5   +  7  + 7 + 8  + 8 - 9
// 26
// 24
// 25
/* 
Tiền tố: Thực thi 2 việc
Việc 1: Lấy giá trị + 1
Việc 2: In ra ngoài màn hình

Hậu tố: Thực thi 3 việc
Việc 1: Tạo ra 1 bản copy => a1 = 5
Việc 2: Lấy giá trị + 1
Việc 3: In ra ngoài màn hình
*/

// for (let i = 0; i < 5; i++) {
//   console.log(i); // 0 1 2 4
// }

// bmi = weight / ( height * height  );
// Cho người dùng nhập vào Cân nặng: ..., Chiều cao: ...
// => Tính bmi => Thông báo cho người dùng

// Bài 1:
// let height = prompt("Nhập số chiều cao");
// let weight = prompt("Nhập số cân nặng");
// let bmi = weight / (height * height);

// if (bmi < 18.5) {
//   document.write("Gầy");
//   // } else if (bmi >= 18.5 && bmi <= 24.9) {
// } else if (bmi < 24.9) {
//   document.write("Trung bình");
// } else if (bmi < 29.9) {
//   document.write("Béooo");
// } else if (bmi < 34.9) {
//   document.write("Béooo Béoooo");
// } else if (bmi < 39.9) {
//   document.write("Béooo ục ịch");
// } else {
//   document.write("Béooo Béoooo Béoooo ục ịch");
// }

// Bài 2:

let month = +prompt("Nhập tháng bất kỳ:");

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    document.write(`Tháng ${month} có 31 ngày`);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    document.write(`Tháng ${month} có 30 ngày`);
    break;
  case 2:
    document.write(`Tháng ${month} có 28 hoặc 29 ngày`);
    break;

  default:
    document.write(`Tháng không hợp lệ`);
    break;
}
