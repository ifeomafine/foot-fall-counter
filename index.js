
// document.getElementById().innerText '(IS THE GENESIS OF THIS CODE)'

let counter = document.getElementById("counter")

let count = 0
// giving a function to the attribute 'increment' given to the INCREMENT BUTTON in "index.html" file
function increment() {
  count = count + 1
  counter.innerText = count
}
