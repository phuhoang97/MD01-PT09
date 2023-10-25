// Bước 1: Lấy giá trị người dùng nhập trong ô input

// Bước 2: Tạo thẻ li và gắn cho bằng value người dùng nhập

// Bước 3: append thẻ li vào ul

// Lưu ý: Khi sử dụng thẻ form sẽ có sự kiện là onSubmit và button cần có type là submit
// trong thẻ form sẽ có sự kiện mặc định load lại trang
// => preventDefaul(): Để chặn sự kiện load lại trang

const form = document.getElementById("main-form"); // Thẻ form
const todoList = document.getElementById("todo-list"); // Thẻ ul
const input = document.getElementById("todo-input"); // Thẻ input

// cách viết 1
// form.onsubmit = function () {};

// cách viết 2
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Chặn sự kiện mặc định của thẻ form
  // Bước 1: Lấy giá trị người dùng nhập trong ô input
  let inputValue = input.value;
  // console.log(inputValue);

  // Bước 2: Tạo thẻ li và gắn cho bằng value người dùng nhập
  const li = document.createElement("li");

  // 2.1. Thêm classList để làm chức năng hoàn thành (complate)
  // và Cho thẻ li bằng giá trị của người dùng nhập
  li.classList.add("list-item");
  li.innerText = inputValue;
  // 2.2. Thêm button Delete để làm chức năng delete
  const btnDelete = document.createElement("button");
  btnDelete.innerText = "Delete";
  btnDelete.classList.add("btn");
  btnDelete.classList.add("btn-danger");
  //   console.log(btnDelete);

  // 2.3. appendChild btn delete vào li
  li.appendChild(btnDelete);
  //   console.log(li);

  // Bước 3: Append li vào làm con của thẻ ul
  todoList.appendChild(li);

  input.value = "";
  //   btnDelete.onclick = () => {
  //     li.remove();
  //   };
});

todoList.addEventListener("click", (e) => {
  //   console.log(e.target); // Ủy quyền sự kiện
  if (e.target.classList.contains("btn-danger")) {
    // console.log(e.target.parentElement);
    e.target.parentElement.remove();
  }

  // Dựa vào chức năng delete làm chức năng complate
  // Dựa vào class => thêm style => text-decoration: line-through
});
