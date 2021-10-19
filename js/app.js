const elTrafficLight = document.querySelector(".traffic-light");
const red = document.querySelector(".red--light");
const yellow = document.querySelector(".yellow--light");
const green = document.querySelector(".green--light");
const image = document.querySelector(".bg-img");

function goTrafficLight() {
  setTimeout(() => {
    red.style.backgroundColor = "red";
    image.classList.remove("bg-img--go");
  }, 1000);

  setTimeout(() => {
    yellow.style.backgroundColor = "yellow";
  }, 2000);

  setTimeout(() => {
    green.style.backgroundColor = "green";
  }, 3000);

  setTimeout(() => {
    image.classList.add("bg-img--go");
  }, 3500);
}
goTrafficLight();
