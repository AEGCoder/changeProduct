const container = document.querySelector(".container");

const crop1 = document.querySelector(".crop-1");
const crop2 = document.querySelector(".crop-2");
const crop3 = document.querySelector(".crop-3");
const crop4 = document.querySelector(".crop-4");
const crop5 = document.querySelector(".crop-5");
const crop6 = document.querySelector(".crop-6");
const crop7 = document.querySelector(".crop-7");
const crop8 = document.querySelector(".crop-8");
const crop9 = document.querySelector(".crop-9");
const crop10 = document.querySelector(".crop-10");
const crop11 = document.querySelector(".crop-11");
const crop12 = document.querySelector(".crop-12");

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");
const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");
const b4 = document.querySelector(".b4");
const b5 = document.querySelector(".b5");
const b6 = document.querySelector(".b6");
const b7 = document.querySelector(".b7");

const Fimg = document.querySelector(".Fimg");

const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");

// burada usd ve fiyatı aldım   cropların altında işlem yapıyorum

const price = document.querySelector(".price");
const usd = document.querySelector("#usd");
const money = document.querySelector("#money");

// burada usd ve fiyatı aldım   cropların altında işlem yapıyorum

crop1.addEventListener("click", function () {
  img1.classList.add("change");
  img1.classList.remove("op0");
  Fimg.classList.add("op0");
  img2.classList.add("op0");
  img3.classList.add("op0");
  img4.classList.add("op0");
  img5.classList.add("op0");
  b1.classList.add("op0");
  b2.classList.add("op0");
  b3.classList.add("op0");
  b4.classList.add("op0");
  b5.classList.add("op0");
  b6.classList.add("op0");
  b7.classList.add("op0");

  usd.textContent = "USD";
  money.textContent = "678,00";
});

crop2.addEventListener("click", function () {
  img2.classList.add("change");
  img2.classList.remove("op0");
  img1.classList.add("op0");
  img3.classList.add("op0");
  img4.classList.add("op0");
  img5.classList.add("op0");
  Fimg.classList.add("op0");
  b1.classList.add("op0");
  b2.classList.add("op0");
  b3.classList.add("op0");
  b4.classList.add("op0");
  b5.classList.add("op0");
  b6.classList.add("op0");
  b7.classList.add("op0");

  usd.textContent = "USD";
  money.textContent = "542,00";
});

crop3.addEventListener("click", function () {
  img3.classList.add("change");
  img3.classList.remove("op0");
  img1.classList.add("op0");
  img2.classList.add("op0");
  img4.classList.add("op0");
  img5.classList.add("op0");
  Fimg.classList.add("op0");
  b1.classList.add("op0");
  b2.classList.add("op0");
  b3.classList.add("op0");
  b4.classList.add("op0");
  b5.classList.add("op0");
  b6.classList.add("op0");
  b7.classList.add("op0");

  usd.textContent = "USD";
  money.textContent = "162,00";
});

crop4.addEventListener("click", function () {
  img4.classList.add("change");
  img4.classList.remove("op0");
  img3.classList.add("op0");
  img1.classList.add("op0");
  img2.classList.add("op0");
  img5.classList.add("op0");
  Fimg.classList.add("op0");
  b1.classList.add("op0");
  b2.classList.add("op0");
  b3.classList.add("op0");
  b4.classList.add("op0");
  b5.classList.add("op0");
  b6.classList.add("op0");
  b7.classList.add("op0");

  usd.textContent = "USD";
  money.textContent = "195,00";
});

crop5.addEventListener("click", function () {
  img5.classList.add("change");
  img5.classList.remove("op0");
  img4.classList.add("op0");
  img1.classList.add("op0");
  img2.classList.add("op0");
  img3.classList.add("op0");
  Fimg.classList.add("op0");
  b1.classList.add("op0");
  b2.classList.add("op0");
  b3.classList.add("op0");
  b4.classList.add("op0");
  b5.classList.add("op0");
  b6.classList.add("op0");
  b7.classList.add("op0");

  usd.textContent = "USD";
  money.textContent = "925,00";
});

crop6.addEventListener("click", function () {
  b1.classList.add("change");
  b1.classList.remove("op0");
  img4.classList.add("op0");
  img1.classList.add("op0");
  img2.classList.add("op0");
  img3.classList.add("op0");
  img5.classList.add("op0");
  Fimg.classList.add("op0");
  b2.classList.add("op0");
  b3.classList.add("op0");
  b4.classList.add("op0");
  b5.classList.add("op0");
  b6.classList.add("op0");
  b7.classList.add("op0");

  usd.textContent = "USD";
  money.textContent = "825,00";
});

crop7.addEventListener("click", function () {
  b2.classList.add("change");
  b2.classList.remove("op0");
  img4.classList.add("op0");
  img1.classList.add("op0");
  img2.classList.add("op0");
  img3.classList.add("op0");
  img5.classList.add("op0");
  Fimg.classList.add("op0");
  b1.classList.add("op0");
  b3.classList.add("op0");
  b4.classList.add("op0");
  b5.classList.add("op0");
  b6.classList.add("op0");
  b7.classList.add("op0");

  usd.textContent = "USD";
  money.textContent = "725,00";
});

crop8.addEventListener("click", function () {
  b3.classList.add("change");
  b3.classList.remove("op0");
  img4.classList.add("op0");
  img1.classList.add("op0");
  img2.classList.add("op0");
  img3.classList.add("op0");
  img5.classList.add("op0");
  Fimg.classList.add("op0");
  b1.classList.add("op0");
  b2.classList.add("op0");
  b4.classList.add("op0");
  b5.classList.add("op0");
  b6.classList.add("op0");
  b7.classList.add("op0");

  usd.textContent = "USD";
  money.textContent = "625,00";
});

crop9.addEventListener("click", function () {
  b4.classList.add("change");
  b4.classList.remove("op0");
  img4.classList.add("op0");
  img1.classList.add("op0");
  img2.classList.add("op0");
  img3.classList.add("op0");
  img5.classList.add("op0");
  Fimg.classList.add("op0");
  b1.classList.add("op0");
  b2.classList.add("op0");
  b3.classList.add("op0");
  b5.classList.add("op0");
  b6.classList.add("op0");
  b7.classList.add("op0");
  b8.classList.add("op0");

  usd.textContent = "USD";
  money.textContent = "525,00";
});

crop10.addEventListener("click", function () {
  b5.classList.add("change");
  b5.classList.remove("op0");
  img4.classList.add("op0");
  img1.classList.add("op0");
  img2.classList.add("op0");
  img3.classList.add("op0");
  img5.classList.add("op0");
  Fimg.classList.add("op0");
  b1.classList.add("op0");
  b2.classList.add("op0");
  b3.classList.add("op0");
  b4.classList.add("op0");
  b6.classList.add("op0");
  b7.classList.add("op0");
  b8.classList.add("op0");

  usd.textContent = "USD";
  money.textContent = "425,00";
});

crop11.addEventListener("click", function () {
  b6.classList.add("change");
  b6.classList.remove("op0");
  img4.classList.add("op0");
  img1.classList.add("op0");
  img2.classList.add("op0");
  img3.classList.add("op0");
  img5.classList.add("op0");
  Fimg.classList.add("op0");
  b1.classList.add("op0");
  b2.classList.add("op0");
  b3.classList.add("op0");
  b4.classList.add("op0");
  b5.classList.add("op0");
  b7.classList.add("op0");
  b8.classList.add("op0");

  usd.textContent = "USD";
  money.textContent = "325,00";
});

crop12.addEventListener("click", function () {
  b7.classList.add("change");
  b7.classList.remove("op0");
  img4.classList.add("op0");
  img1.classList.add("op0");
  img2.classList.add("op0");
  img3.classList.add("op0");
  img5.classList.add("op0");
  Fimg.classList.add("op0");
  b1.classList.add("op0");
  b2.classList.add("op0");
  b3.classList.add("op0");
  b4.classList.add("op0");
  b5.classList.add("op0");
  b6.classList.add("op0");
  b8.classList.add("op0");

  usd.textContent = "USD";
  money.textContent = "225,00";
});

color1.addEventListener("click", function () {
  container.classList.add("black");
  container.classList.remove("white");
});

color2.addEventListener("click", function () {
  container.classList.add("white");
  container.classList.remove("black");
});
