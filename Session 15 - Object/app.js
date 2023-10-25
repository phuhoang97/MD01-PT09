// Chữa bài tập về nhà

/* 
Bài 5: Viết một hàm nhận một mảng các số làm đối số và trả về mảng mới chỉ chứa các số nguyên tố.
input: 1,2,3,4,5,6,7,8
output: 2,3,5,7
*/

// Chữa bài:
// let str = prompt("Nhập các số để kiểm tra số nguyên tố");
// let arr = str.split(",");
// function checkPrime(arrInput) {
//   let newArr = [];

//   for (let i = 0; i < arrInput.length; i++) {
//     if (arrInput[i] >= 2) {
//       let check = true;
//       for (let j = 2; j < arrInput[i]; j++) {
//         if (arrInput[i] % j === 0) {
//           check = false;
//         }
//       }

//       if (check) {
//         newArr.push(arrInput[i]);
//       }
//     }
//   }

//   return newArr;
// }

// console.log(checkPrime(arr));

// Object (Đối tượng)
// Khái niệm: Object là 1 khái niệm trựu tượng dùng để áp chỉ 1 vật, 1 sự việc, ... cụ thể

// Ví dụ:
/*
Đối tượng : Con mèo
Lồng dài, kêu meowmeow, màu trắng, ...
*/

// Cú pháp

// [Từ khóa khai báo] [Tên Object] = {key1: value1, key2: value2, ... keyN: valueN }

// let student = {
//   name: "Thịnh",
//   age: 20,
//   address: "Lạng Sơn",
//   gender: "Nữ",
//   //   arrList: [3, 4, 5],
// };

// console.log(student);
// console.table(student);

// 2. CRUD - Create / Read / Update / Delete

// 2.1. Create - Thêm mới

// Thêm mới key động (dynamic)
// let phone = "phone";
// let phoneNumber = "032615465";

// let student = {
//   name: "Thịnh",
//   age: 20,
//   address: "Lạng Sơn",
//   // ES06
//   [phone]: phoneNumber,
// };

// student.gender = "Nữ";

// console.log(student);

// 2.2. Read
// Read one
// console.log(student.address);

// Read all
// forin
// for (const key in student) {
//   console.log(key); // Các key có trong object
//   console.log(student[key]); // các value có trong object
// }

// 2.3. Update
// student.name = "Khánh";
// console.log(student);

// 2.4. Delete
// delete student.age;
// console.log(student);

/*
Bài tập Object

EX1: Tạo đối tượng person bao gồm: tên, tuổi, địa chỉ, sđt => in tất cả thông tin
input: object person: name, age, address, phone
output: "Thông tin người dùng là:
tên: ... - age: ... - địa chỉ: ... - sđt: ...

EX2: Tạo đối tượng employee bao gồm: tên, lương (12000), chức vụ
input: object employee: name, salary, department
output: "Thông tin nhân viên là:
Tên NV: ... - Lương NV: 24000 VNĐ - Chức vụ: ...

EX3: Cho người dùng nhập vào 5 chữ cái C/R/U/D/E:

- C: Cho người dùng nhập thêm vào đối tượng đó
Và in ra để kiểm tra dưới dạng table

- R: In ra toàn bộ phần tử trong obj dưới dạng table

- U: Cho người dùng nhập vào key muốn update:
  + Nếu có: cho người dùng nhập giá trị muốn thay đổi, và in ra màn hình dưới dạng table
  + Nếu không: In ra không tồn tại

- D:  Cho người dùng nhập vào key muốn xóa
  + Nếu có:	Xóa key-value trong đối tượng đó
  + Nếu không:	Không tìm thấy

+ E: Dừng chương trình và thông báo Not found

*/

// [{student1}, {student2}, {student3}]

// Bài 1:
// let person = {
//   name: "Khang",
//   age: 20,
//   address: "Hà Nam",
//   phone: "039456852",
// };

// console.log(`
// Tên: ${person.name}
// Tuổi: ${person.age}
// Địa chỉ: ${person.address}
// Số điện thoại: ${person.phone}
// `);

// console.table(person);

// Bài 2:

// let employee = {
//   name: "Dũng",
//   salary: 1200,
//   department: "DEV",
// };
// console.log(employee);

// employee.salary = 2400;

// console.log(employee);

// let person = {
//   name: "Khang",
//   age: 20,
//   address: "Hà Nam",
//   phone: "039456852",
// };

// let inputUser = prompt("Nhập C/R/U/D");

// if (inputUser === "C") {
//   let inputKey = prompt("Nhập key");
//   let inputValue = prompt("Nhập value");
//   person[inputKey] = inputValue;
//   console.table(person);
// } else if (inputUser === "R") {
//   console.table(person);
// } else if (inputUser === "U") {
//   let keyObj = prompt("Nhập key muốn update");
//   let check = false;
//   for (const key in person) {
//     if (keyObj == key) {
//       let newValue = prompt("Nhập value mới");
//       check = true;
//       person[key] = newValue;
//     }
//   }

//   if (check) {
//     console.table(person);
//   } else {
//     alert("Không tìm thấy");
//   }
// } else if (inputUser === "D") {
//   let deleteKey = prompt("Nhập key muốn xóa");
//   delete person[deleteKey];
//   console.table(person);
// } else {
//   alert("Not found");
// }

// let products = [
//   {
//     id: 1,
//     name: "Xiaomi portable charger 20000mah",
//     Brand: "Xiaomi",
//     Price: "428",
//     Color: "White",
//     Category: "Charger",
//   },
//   {
//     id: 2,
//     name: "VSmart Active 1",
//     Brand: "VSmart",
//     Price: "5487",
//     Color: "Black",
//     Category: "Phone",
//   },
//   {
//     id: 3,
//     name: "IPhone X",
//     Brand: "Apple",
//     Price: "21490",
//     Color: "Gray",
//     Category: "Phone",
//   },
//   {
//     id: 4,
//     name: "Samsung Galaxy A9",
//     Brand: "Samsung",
//     Price: "8490",
//     Color: "Blue",
//     Category: "Phone",
//   },
// ];
