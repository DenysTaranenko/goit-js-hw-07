// Отримуємо посилання на форму
const form = document.querySelector(".login-form");

// Додаємо прослуховувач події submit для форми
form.addEventListener("submit", handleSubmit);

// Функція, що обробляє подію submit форми
function handleSubmit(event) {
  // Запобігаємо перезавантаженню сторінки
  event.preventDefault();

  // Отримуємо значення елементів форми
  const emailValue = form.elements.email.value.trim();
  const passwordValue = form.elements.password.value.trim();

  // Перевіряємо, чи всі поля заповнені
  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }

  // Формуємо об'єкт з даними форми
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // Виводимо об'єкт з даними форми в консоль
  console.log(formData);

  // Очищаємо значення полів форми
  form.reset();
}
