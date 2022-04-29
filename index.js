import { products } from "./products.js";

const wrapper = document.querySelector(".slider-wrapper");
const menuItems = document.querySelectorAll(".menu-item");

let chosenProduct = products[0];
const currentProductImg = document.querySelector(".product-img");
const currentProductTitle = document.querySelector(".product-title");
const currentProductPrice = document.querySelector(".product-price");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    chosenProduct = products[index];

    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = chosenProduct.price + " RSD";
    currentProductImg.src = chosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".product-btn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

const logIn = document.querySelector(".log-in");
const logInBox = document.querySelector(".log-in-box");
const closeLogInBox = document.querySelector(".close-log-in");

logIn.addEventListener("click", () => {
  logInBox.style.display = "flex";
});

closeLogInBox.addEventListener("click", () => {
  logInBox.style.display = "none";
});

const sendBtn = document.querySelector(".f-button");
const newsInput = document.getElementById("news-input");
const msg = document.querySelector(".msg");

sendBtn.addEventListener("click", () => {
  if (newsInput.value != "") {
    msg.innerHTML = "Uspešno ste se prijavili na naš newsletter.";
    msg.style.color = "green";
  } else {
    msg.innerHTML = "Neispravan unos!";
    msg.style.color = "red";
  }
});
