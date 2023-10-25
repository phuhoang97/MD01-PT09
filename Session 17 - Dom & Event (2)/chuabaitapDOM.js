// Bài 1: Tạo 1 button thay đổi màu nền, khi click sẽ thay đổi màu nền của trang web
// Chữa bài: rgb(0 - 255)

function colorRGB() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}
// console.log(colorRGB());

const btnChangeColor = document.getElementById("btn-change-color");

// Cách viết 1
// btnChangeColor.addEventListener("click", () => {
//   document.body.style.backgroundColor = colorRGB();
// });

// Cách viết 2
btnChangeColor.onclick = function () {
  document.body.style.backgroundColor = colorRGB();
};

// Bài 2: Thay đổi đoạn văn bản khi click vào button

const btnChangeText = document.getElementById("btn-change-text");

// btnChangeText.addEventListener("click", () => {
//   let pText = document.getElementById("text");
//   pText.innerText = "Hello world !!!";
// });

// Toggle text
let check = false;

btnChangeText.addEventListener("click", () => {
  let pText = document.getElementById("text");

  if (check) {
    pText.innerHTML = "Đoạn văn bản ban đầu";
  } else {
    pText.innerHTML = "Hello world !!!";
  }
  check = !check;
});

/* Bài 3: Trong html có 1 đoạn văn bản và 2 button phóng to và thu nhỏ
 Sử dụng js khi ng dùng click vào button sẽ phóng to or thu nhỏ đoạn văn bản */

let currentText = 16; // 16px

const textQuestion = document.getElementById("text-question");
const zoomOut = document.getElementById("zoom-out");
const zoomIn = document.getElementById("zoom-in");

zoomOut.addEventListener("click", () => {
  currentText -= 2;
  textQuestion.style.fontSize = currentText + "px";
});

zoomIn.addEventListener("click", () => {
  currentText += 2;
  textQuestion.style.fontSize = currentText + "px";
});

/* Bài 4: Trong html có 1 ô input và 1 button, khi người dùng click vào button
sẽ hiển thị giá trị trong ô input ra
*/

const input = document.getElementById("input-text");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", () => {
  const inputValue = input.value;
  //   console.log(inputValue);
  alert("Giá trị người dùng nhập là:" + inputValue);
});

/* Bài 5: Ở html sẽ có 1 button và thẻ div có nội dung bất kỳ
Khi người dùng click vào button sẽ ẩn hiện khối div đó
*/

// Cách 1

// let show = false;
// const btnToggle = document.getElementById("toggle-div");
// const div = document.getElementById("content");

// btnToggle.addEventListener("click", () => {
//   if (show) {
//     btnToggle.innerText = "Ẩn khối";
//     div.style.display = "none";
//   } else {
//     btnToggle.innerText = "Hiển khối";
//     div.style.display = "block";
//   }
//   show = !show;
// });

// Cách 2

// sử dụng: contains => kiểm tra xem class có tồn tại hay không

const btnToggle = document.getElementById("toggle-div");
const div = document.getElementById("content");

// console.log(div.classList.contains("test"));

btnToggle.addEventListener("click", () => {
  if (!div.classList.contains("toggle")) {
    div.classList.add("toggle");
  } else {
    div.classList.remove("toggle");
  }
});

