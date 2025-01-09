// Отримуємо елементи з DOM
const passwordInput = document.getElementById('password');
const copyButton = document.getElementById('copy-btn');
const generateButton = document.getElementById('generate-btn');
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');

// Функція для генерації випадкового символу
function getRandomChar(characters) {
  return characters[Math.floor(Math.random() * characters.length)];
}

// Функція для генерації пароля
function generatePassword() {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+{}:"<>?[];\',./`~';

  let allowedChars = lowercaseChars;
  if (uppercaseCheckbox.checked) allowedChars += uppercaseChars;
  if (numbersCheckbox.checked) allowedChars += numberChars;
  if (symbolsCheckbox.checked) allowedChars += symbolChars;

  let password = '';
  const length = parseInt(lengthInput.value);

  for (let i = 0; i < length; i++) {
    password += getRandomChar(allowedChars);
  }

  return password;
}

// Обробник події для кнопки "Згенерувати пароль"
generateButton.addEventListener('click', () => {
  passwordInput.value = generatePassword();
});

// Обробник події для кнопки "Копіювати"
copyButton.addEventListener('click', () => {
  passwordInput.select();
  document.execCommand('copy');
  alert('Пароль скопійовано!');
});
