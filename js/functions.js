const checkStringLength = (inputString, maxLenght) => (inputString.length <= maxLenght);
checkStringLength('проверяемая строка', 20); // true
checkStringLength('проверяемая строка', 18); // true
checkStringLength('проверяемая строка', 10); // false

const isPalindrome = (inputString) => {
  const normalizeString = inputString.replaceAll(' ', '').toLowerCase();
  let reverseString = '';

  for (let i = normalizeString.length - 1; i >= 0; i--) {
    reverseString += normalizeString[i];
  }

  return normalizeString === reverseString;
};

isPalindrome('топот'); // true
isPalindrome('ДовОд'); // true
isPalindrome('Кекс'); // false
isPalindrome('Лёша на полке клопа нашёл '); // true

const extractDigits = (input) => {
  const inputString = input.toString();
  let result = '';

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] >= '0' && inputString[i] <= '9') {
      result += inputString[i];
    }
  }

  return result ? parseInt(result, 10) : NaN;
};

extractDigits('2023 год'); // 2023
extractDigits('ECMAScript 2022'); // 2022
extractDigits('1 кефир, 0.5 батона'); // 105
extractDigits('агент 007'); // 7
extractDigits('а я томат'); // NaN

extractDigits(2023); // 2023
extractDigits(-1); // 1
extractDigits(1.5); // 15

