"use strict";

const numberNtfctn = document.querySelector(".number__ntfctn");
const newName = document.querySelector(".new__name");
const color = document.querySelector(".color");
const newSign = document.querySelector(".new__sign");
const notificationNew = document.querySelector(".notification__new");
const notificationAngela = document.querySelector(".notification__angela");
const notificationJacob = document.querySelector(".notification__jacob");
const angela = document.querySelector(".angela");
const angelaName = document.querySelector(".angela__name");
const jacobName = document.querySelector(".jacob__name");
const jacob = document.querySelector(".jacob");

const whenClickedMark = function () {
  newSign.classList.add("hidden");
};

const whenClickedAngela = function () {
  angela.classList.add("hidden");
};

const whenClickedJacob = function () {
  jacob.classList.add("hidden");
};

let stockQuantity = 3;

function purchaseItem() {
  // Decrease stock quantity by 1
  stockQuantity--;
  numberNtfctn.textContent = stockQuantity;
}

const nameone = newName.addEventListener(
  "click",
  function () {
    whenClickedMark();
    notificationNew.style.backgroundColor = "white";

    purchaseItem();
    if (stockQuantity < 0) {
      numberNtfctn.textContent = 0;
    }
  },
  { once: true }
);

angelaName.addEventListener(
  "click",
  function () {
    whenClickedAngela();
    notificationAngela.style.backgroundColor = "white";

    purchaseItem();
    if (stockQuantity < 0) {
      numberNtfctn.textContent = 0;
    }
  },
  { once: true }
);

jacobName.addEventListener(
  "click",
  function () {
    whenClickedJacob();
    notificationJacob.style.backgroundColor = "white";
    purchaseItem();

    if (stockQuantity < 0) {
      numberNtfctn.textContent = 0;
    }
  },
  { once: true }
);
