// Отримуємо посилання на кнопку і span
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

// Додаємо прослуховувач події клік на кнопку
button.addEventListener("click", changeBackgroundColor);

// Функція, що змінює колір фону та текстовий вміст span
function changeBackgroundColor() {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();

  // Задаємо фон <body> та текстовий вміст span
  document.body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
}

// Функція для отримання випадкового кольору в hex-форматі
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
