const bigOne = document.querySelector(".select_1");
const bigTwo = document.getElementById("mod");
const bigThree = document.getElementById("maq");

bigOne.addEventListener("click", () => {
  bigOne.classList.toggle("get-big");
});

bigTwo.addEventListener("click", () => {
  bigTwo.classList.toggle("get-big");
});
bigThree.addEventListener("click", () => {
  bigThree.classList.toggle("get-big");
});
