const count = document.querySelector("#count");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");

incrementBtn.addEventListener("click", function() {
  count.textContent = parseInt(count.textContent) + 1;
});

decrementBtn.addEventListener("click", function() {
  count.textContent = parseInt(count.textContent) - 1;
});
