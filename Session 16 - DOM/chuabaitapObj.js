let products = [
  {
    id: 1,
    name: "Xiaomi portable charger 20000mah",
    Brand: "Xiaomi",
    Price: "428",
    Color: "White",
    Category: "Charger",
  },
  {
    id: 2,
    name: "VSmart Active 1",
    Brand: "VSmart",
    Price: "5487",
    Color: "Black",
    Category: "Phone",
  },
  {
    id: 3,
    name: "IPhone X",
    Brand: "Apple",
    Price: "21490",
    Color: "Gray",
    Category: "Phone",
  },
  {
    id: 4,
    name: "Samsung Galaxy A9",
    Brand: "Samsung",
    Price: "8490",
    Color: "Blue",
    Category: "Phone",
  },
];

// 1.1. In name and price
// for (let i = 0; i < products.length; i++) {
//   console.log(`------------------------------
//   Name: ${products[i].name}
//   Price: ${products[i].Price}`);
// }

// 1.2. In sản phẩm dựa theo Id
// for (let i = 0; i < products.length; i++) {
//   console.log(`
//     #${products[i].id} Name: ${products[i].name}
//     Price: ${products[i].Price}`);
// }

// let inputId = +prompt("Nhập ID sản phẩm");

// for (let j = 0; j < products.length; j++) {
//   if (inputId === products[j].id) {
//     console.clear();
//     console.log(`
//     name: ${products[j].name},
//     Brand: ${products[j].Brand},
//     Price: ${products[j].Price},
//     Color: ${products[j].Color},
//     Category: ${products[j].Category}`);
//   }
// }

// 1.3. In ra dựa theo category
// for (let i = 0; i < products.length; i++) {
//   console.log(`
//       #${products[i].id} Name: ${products[i].name}
//       Price: ${products[i].Price}`);
// }

// let inputCategory = prompt("Nhập thể loại sản phẩm");

// let strCategory = "";

// for (let j = 0; j < products.length; j++) {
//   if (inputCategory === products[j].Category) {
//     console.clear();
//     strCategory += `
//     name: ${products[j].name},
//     Price: ${products[j].Price},
//     `;
//     console.log(strCategory);
//   }
// }

// 1.4. Thêm thuộc tính provider vào trong product
for (let i = 0; i < products.length; i++) {
  if (i === 0) {
    products[0].Provider = "PhukienzeroDientuccc";
  } else {
    products[i].Provider = "Tgdd";
  }

  console.log(`
          #${products[i].id} Name: ${products[i].name}
          Price: ${products[i].Price}
          Provider: ${products[i].Provider}`);
}
