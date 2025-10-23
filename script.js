// Генеруємо випадкове число від 1 до 100
let randomNumber;

function generateRandomNumber(min, max) {
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("Згенероване випадкове число:", randomNumber);
}

generateRandomNumber(1, 100);

// Посилання на елементи
let resultMessage = document.getElementById("resultMessage");
let guessField = document.getElementById("guessField");
let checkBtn = document.getElementById("checkBtn");

// Лічильник спроб
let attempts = 0;

// Функція перевірки введеного числа
function checkGuess() {
  let guess = parseInt(guessField.value);
  attempts++;

  if (isNaN(guess)) {
    resultMessage.textContent = "Будь ласка, введіть число!";
    resultMessage.style.color = "orange";
    return;
  }

  if (guess === randomNumber) {
    resultMessage.textContent = `🎉 Вітаємо! Ви вгадали число з ${attempts} спроб!`;
    resultMessage.style.color = "green";
    guessField.disabled = true;
    checkBtn.disabled = true; // Вимикаємо кнопку "Спробувати"
  } else if (guess < randomNumber) {
    resultMessage.textContent = "Замало! Спробуйте більше число.";
    resultMessage.style.color = "blue";
  } else if (guess > randomNumber) {
    resultMessage.textContent = "Забагато! Спробуйте менше число.";
    resultMessage.style.color = "red";
  }
}

// Функція для перезапуску гри
function restartGame() {
  attempts = 0;
  generateRandomNumber(1, 100);
  guessField.value = '';
  guessField.disabled = false;
  checkBtn.disabled = false; // Знову вмикаємо кнопку
  resultMessage.textContent = '';
}

// Подія кліку по кнопці "Знову грати"
document.getElementById("restartBtn").addEventListener("click", restartGame);
