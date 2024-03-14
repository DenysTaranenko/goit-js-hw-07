const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

// Додаємо прослуховувачі подій
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

// Функція для створення колекції елементів
function createBoxes() {
  const amount = Number(input.value); // Отримуємо кількість елементів
  if (amount < 1 || amount > 100) {
    return; // Якщо значення виходить за межі допустимого діапазону, нічого не робимо
  }

  boxesDiv.innerHTML = ""; // Очищаємо попередні елементи

  // Генеруємо елементи та додаємо їх у контейнер
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(div);
  }

  input.value = ""; // Очищаємо значення input
}

// Функція для очищення колекції елементів
function destroyBoxes() {
  boxesDiv.innerHTML = ""; // Очищаємо всі елементи у контейнері
}

// Функція для отримання випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
