const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const noneButton = document.getElementById("none");
const totalSpan = document.getElementById("total");
const trueCountSpan = document.getElementById("true-count");
const deckInput = document.getElementById("deck");

let clickCount = 0;

addButton.addEventListener("click", function() {
  totalSpan.textContent = parseInt(totalSpan.textContent) + 1;
  updateTrueCount();
});

subtractButton.addEventListener("click", function() {
  totalSpan.textContent = parseInt(totalSpan.textContent) - 1;
  updateTrueCount();
});

noneButton.addEventListener("click", function() {
    totalSpan.textContent = parseInt(totalSpan.textContent) + 0;
    updateTrueCount();
  });

document.addEventListener("keydown", function(event) {
  if (event.code === "KeyA") {
    addButton.click();
  } else if (event.code === "KeyS") {
    subtractButton.click();
  }
  else if (event.code === "KeyD") {
    noneButton.click();
  }
});

function updateTrueCount() {
  clickCount++;

  if (clickCount % 1 === 0) {
    let deckTotal = parseFloat(deckInput.value) - 0.01923076923;
    trueCountSpan.textContent = parseInt(totalSpan.textContent) / deckTotal;
    deckInput.value = deckTotal;
  }
}

const input = document.querySelector('#deck');
const buttons = document.querySelectorAll('.button');

input.addEventListener('input', function () {
  if (input.value) {
    buttons.forEach(button => button.removeAttribute('disabled'));
  } else {
    buttons.forEach(button => button.setAttribute('disabled', true));
  }
});

buttons.forEach(button => button.setAttribute('disabled', true));