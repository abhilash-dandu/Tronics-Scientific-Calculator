const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (err) {
    display.value = "Error";
  }
}
