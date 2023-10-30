const mainForm = document.getElementById("main-form");

function renderProduct() {
  const setItem = JSON.parse(localStorage.getItem("Product"));
  // Lấy thẻ ul
  const ulList = document.getElementById("list-product");
  ulList.innerHTML = ``;

  // Duyệt qua các phần tử trong local (setItem)
  for (let i = 0; i < setItem.length; i++) {
    // console.log(setItem[i]);
    // Lưu các đối tượng vào product
    let product = setItem[i];
    // Tạo ra thẻ li
    const li = document.createElement("li");
    // Thêm nội dung vào li
    li.innerHTML += `
          ID: ${product.id} <br/>
          Name: ${product.name} <br/>
          Price: ${product.price} <br/>
          Category: ${product.category} <br/>
          <button>Edit</button>
          <button onclick="deleteProduct(${i})">Delete</button>
      `;
    // Thêm li vào ul
    ulList.appendChild(li);
  }
}

mainForm.addEventListener("submit", (e) => {
  // Chặn sự kiện mặc định thẻ form
  e.preventDefault();

  // Lấy các giá trị trong ô input
  const idProduct = document.getElementById("id-product").value;
  const nameProduct = document.getElementById("name-product").value;
  const priceProduct = document.getElementById("price-product").value;
  const categoryProduct = document.getElementById("category-product").value;

  // Tạo đối tượng mới để thêm vào giá trị ban đầu
  const newProduct = {
    id: idProduct,
    name: nameProduct,
    price: priceProduct,
    category: categoryProduct,
  };

  // lấy trong local nếu chưa có sẽ set vào []
  const setItem = JSON.parse(localStorage.getItem("Product")) || [];
  setItem.push(newProduct);

  //   console.log("newProduct", newProduct);
  // set vào localStorage

  localStorage.setItem("Product", JSON.stringify(setItem));
  renderProduct();
  mainForm.reset();
});

renderProduct();

function deleteProduct(index) {
  // Lấy dữ liệu trên local
  const product = JSON.parse(localStorage.getItem("Product"));
  console.log(product[index]);

  // Sử dụng splice khi biết vị trí index của phần tử
  product.splice(index, 1);
  // Sau khi xóa xong cập nhật lại giá trị trên local
  localStorage.setItem("Product", JSON.stringify(product));
  // Gọi hàm renderProduct để load lại
  renderProduct();
}

// BTVN: Đọc và xem lại phần dom và localStorage
// Làm lại bài và hoàn thành nốt phần edit
