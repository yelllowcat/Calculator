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
  const response = e.target.textContent;

  if (response == "0") {
    display.append(0);
  }
  if (response == "1") {
    display.append(1);
  }
  if (response == "2") {
    display.append(2);
  }
  if (response == "3") {
    display.append(3);
  }
  if (response == "4") {
    display.append(4);
  }
  if (response == "5") {
    display.append(5);
  }
  if (response == "6") {
    display.append(6);
  }
  if (response == "7") {
    display.append(7);
  }
  if (response == "8") {
    display.append(8);
  }
  if (response == "9") {
    display.append(9);
  }
  if (response == "-") {
    n1 = display.textContent;
    display.textContent = "";
  }
  if (response == "*") {
    n1 = display.textContent;
  }
  if (response == "/") {
    n1 = display.textContent;
  }

  if (response == "=") {
    operate(n1, "/", n2);
  }
}
