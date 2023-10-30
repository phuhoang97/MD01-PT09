// Các phương thức trong localStorage

// 1. Thêm mới dữ liệu vào localStorage - setItem(key, value)

// Kiểu dữ liệu nguyên thủy
// localStorage.setItem("number", 10);
// localStorage.setItem("string", "Hello world");

// // Kiểu dữ liệu tham chiếu: Array, Object (JSON.stringify) (Stack - Heap)
// localStorage.setItem("array", JSON.stringify([3, 5, 7, 9]));
// localStorage.setItem(
//   "arrayObject",
//   JSON.stringify([
//     { id: 1, name: "Thịnh" },
//     { id: 2, name: "Khang" },
//   ])
// );

// 2. Lấy dữ liệu từ localStorage ra - getItem(key)
// Kiểu dữ liệu nguyên thủy
// let getLocal = localStorage.getItem("number");
// console.log(getLocal);

// Kiểu dữ liệu tham chiếu - JSON.parse

// let getArrLocal = JSON.parse(localStorage.getItem("arrayObject"));
// console.log(getArrLocal);

// 3. Xóa 1 dữ liệu trong local - removeItem(key)
// localStorage.removeItem("string");

// 4. Xóa tất cả local - clear()
// localStorage.clear();

// sessionStorage

// 1. Thêm vào sessionStorage - setItem(key, value)
// sessionStorage.setItem("numberSession", 100);

// 2. Lấy dữ liệu từ sessionStorage - getItem(key)
// let getSession = sessionStorage.getItem("numberSession");
// console.log(getSession);

// 3. Xóa 1 dữ liệu trong sessionStorage
// sessionStorage.removeItem("numberSession");

// 4. Xóa tất cả trong sessionStorage
// sessionStorage.clear();

localStorage.setItem(
  "arrayObject",
  JSON.stringify([
    { id: 1, name: "Thịnh" },
    { id: 2, name: "Khang" },
  ])
);

let getData = JSON.parse(localStorage.getItem("arrayObject"));

console.log(getData);

for (let i = 0; i < getData.length; i++) {
    
    
}
