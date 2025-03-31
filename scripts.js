function add(a, b) {
  const result = a + b;
  return result;
}

const subtract = function (a, b) {
  const result = a - b;
  return result;
};

const sum = function (arr) {
  let result = 0;
  arr.forEach((element) => {
    let r = element;
    result += r;
  });

  return result;
};

function multiply(arr) {
  let result = 1;
  arr.forEach((element) => {
    let r = element;
    result *= r;
  });

  return result;
}
function multiply(a, b) {
  result = a * b;

  return result;
}

const divide = function (a, b) {
  const result = a / b;
  return result;
};

let number1;
let operator;
let number2;

const buttons = document.querySelector(".buttons");
for (let i = 0; i < 16; i++) {
  const divs = document.createElement("button");
  divs.style.height = "100px";
  divs.style.width = "100px";
  divs.style.alignContent = "center";
  divs.style.textAlign = "center";
  divs.classList.add("divs");
  divs.style.borderRadius = "15px";

  divs.style.backgroundColor = "#109DFF";
  divs.addEventListener("click", toDisplay);
  buttons.append(divs);
}
const divs = document.querySelectorAll(".divs");
let cont = 0;
divs.forEach((element) => {
  element.style.color = "white";
  element.style.fontSize = "30px";
});
divs[0].textContent = "0";
divs[1].textContent = "1";
divs[4].textContent = "4";
divs[5].textContent = "5";
divs[6].textContent = "6";
divs[8].textContent = "7";
divs[9].textContent = "8";
divs[10].textContent = "9";

divs[12].textContent = "AC";
divs[13].textContent = "+/-";
divs[14].textContent = "%";

divs[2].textContent = ".";
divs[3].textContent = "=";
divs[7].textContent = "+";
divs[11].textContent = "-";
divs[15].textContent = "*";

function operate(n1 = 0, op = "+", n2 = 0) {
  let result = 0;
  if (op == "+") {
    result = add(n1, n2);
  }
  if (op == "-") {
    result = subtract(n1, n2);
  }
  if (op == "*") {
    result = multiply(n1, n2);
  }
  if (op == "/") {
    result = divide(n1, n2);
  }
  return result;
}

const display = document.querySelector(".display");

function toDisplay(e) {
  const text = e.target.textContent; // Get the text content of the clicked button
  console.log(e);
}
