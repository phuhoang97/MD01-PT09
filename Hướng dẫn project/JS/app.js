const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const body = document.querySelector("body");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "Cơm gà",
    price: 32000,
    image: "1.PNG",
  },
  {
    id: 2,
    name: "Cánh gà rán",
    price: 62000,
    image: "2.PNG",
  },
  {
    id: 3,
    name: "Salat cá hồi",
    price: 40000,
    image: "3.PNG",
  },
  {
    id: 4,
    name: "Súp bí đỏ",
    price: 35000,
    image: "4.PNG",
  },
  {
    id: 5,
    name: "Salat rau",
    price: 25000,
    image: "5.PNG",
  },
  {
    id: 6,
    name: "Pizza",
    price: 60000,
    image: "6.PNG",
  },
];

// Format tiền
let VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

// console.log(VND.format(32000));

const listCarts = JSON.parse(localStorage.getItem("listCarts")) || [];

// Viết hàm hiển thị dữ liệu ra cho người dùng
function renderItem() {
  for (let i = 0; i < products.length; i++) {
    let value = products[i];
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
    <img src=./image/${value.image} />
    <div class="title">${value.name}</div>
    <div class="price">${VND.format(value.price)}</div>
    <button onclick="addToCart(${i})">Add to cart</button>
    `;
    list.appendChild(newDiv);
  }
}
renderItem();

function addToCart(index) {
  //   console.log(index);
  if (listCarts[index] == null) {
    // spread
    listCarts[index] = { ...products[index], quantity: 1 };
  } else {
    listCarts[index].quantity += 1;
    localStorage.setItem("listCarts", JSON.stringify(listCarts));
  }
}

function reloadCard() {
  listCard.innerHTML = ``;
  let totalPrice = 0;
  for (let i = 0; i < listCarts.length; i++) {
    let value = listCarts[i];
    if (value !== null) {
      let newLi = document.createElement("li");
      newLi.innerHTML = `
        <div>
            <img src="image/${value.image}" />
            <div>${value.name}</div>
            <div>${VND.format(value.price)}</div>
            <button onclick="changleQuantity(${i}, ${
        value.quantity - 1
      })">-</button>
            <div>${value.quantity}</div>
            <button onclick="changleQuantity(${i}, ${
        value.quantity + 1
      })">+</button>
        </div>
        `;
      listCard.appendChild(newLi);
      totalPrice += value.price * value.quantity;
    }
  }
  total.innerText = VND.format(totalPrice);
}
reloadCard();

function changleQuantity(index, newQuantity) {
  if (newQuantity <= 0) {
    delete listCarts[index];
  } else {
    listCarts[index].quantity = newQuantity;
  }

  localStorage.setItem("listCarts", JSON.stringify(listCarts));
  reloadCard();
}
