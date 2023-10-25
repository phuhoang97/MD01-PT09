// 1. DOM
// console.log(document);

// 2. Selector (Bộ chọn trong DOM)
// ID, Class, Tagname

// ID
// let idDiv = document.getElementById("app");
// console.log(idDiv);

// // Class
// let classDiv = document.getElementsByClassName("content");
// console.log(classDiv);
// // console.log(classDiv[3]);

// // Tagname
// let tagName = document.getElementsByTagName("div");
// console.log(tagName);

// // querySelector
// // Lấy thẻ đó ra dựa trên id, class và tagname
// // id - "#nameID" ; class - ".className"; tagname - "tagname"

// let queryClass = document.querySelector(".about");
// let queryId = document.querySelector("#idAbout");
// let queryTag = document.querySelector("p");
// console.log(queryClass);
// console.log(queryId);
// console.log(queryTag);

// // querySelectorAll
// let queryAll = document.querySelectorAll("div");
// console.log(queryAll);

// 3. Thuộc tính (Properties)
// Text & Content
// innerHTML: giúp lấy toàn bộ nội dung là HTML có trong thẻ đó

// let p = document.getElementsByTagName("p");
// p[0].innerHTML = "Hello World";
// console.log(p[0]);

// let aboutPage = document.getElementById("idAbout");
// console.log(aboutPage.innerHTML);

// innerText và textContent: Chỉ lấy nội dung là chữ trong thẻ

// let idDiv = document.getElementsByTagName("div");
// console.log(idDiv[0].textContent);

// 4. Value
// let input = document.getElementById("inputUser");
// console.log(input.value);

// 5. Style
// Khi sử dụng style trong js => sẽ viết theo camelCase
// background-color => backgroundColor

// let idDiv = document.getElementById("app");
// idDiv.style.color = "white";
// idDiv.style.backgroundColor = "pink";

// 6. Children and ParentElement

// let ul = document.getElementById("ulList");
// console.log(ul.children[1]); // Truy cập từ cha vào con
// console.log(ul.children[2].parentElement); // Truy cập từ con lên cha

// 7. ClassList và Id
// id: Lấy thuộc tính id có trong thẻ
// let ul = document.getElementById("ulList");
// ul.id = "idNew";
// console.log(ul.id);

// class: lấy class có trong thẻ
// let li = document.getElementsByClassName("liCl");
// console.log(li[0].classList[0]);

// 8. Thêm và xóa classList

// Thêm classList
// let ul = document.getElementById("ulList");
// ul.classList.add("ClNew");
// console.log(ul);

// Xóa classList: - remove
// ul.classList.remove("ulCl");
// console.log(ul);

// 9. createElement và appendChild
// let li = document.createElement("li");
// li.innerHTML = "Học bài";
// // console.log(li);
// let ul = document.getElementById("ulList");

// ul.appendChild(li);

// 10. Event

// Cách 1
// function eventClick() {
//   alert("Hellooo");
// }

// Cách 2:
// let button = document.getElementById("clickMe");

// button.onclick = () => {
//   alert("Hellooo");
// };

// cách 3:

let button = document.getElementById("clickMe");

button.addEventListener("dblclick", () => {
  alert("Hellooo");
});

// on => Sự kiện
// addEventListener => bỏ từ on ở đầu
