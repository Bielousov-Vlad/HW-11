// Заданий масив
let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Знайти суму та кількість позитивних елементів
let sumPositive = 0;
let countPositive = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sumPositive += arr[i];
    countPositive++;
  }
}
document.write("Сума позитивних елементів: " + sumPositive + "<br>");
document.write("Кількість позитивних елементів: " + countPositive + "<br>");

// Знайти мінімальний елемент масиву та його порядковий номер
let minElement = arr[0];
let minIndex = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < minElement) {
    minElement = arr[i];
    minIndex = i;
  }
}
document.write("Мінімальний елемент масиву: " + minElement + "<br>");
document.write("Порядковий номер мінімального елементу: " + minIndex + "<br>");

// Знайти максимальний елемент масиву та його порядковий номер
let maxElement = arr[0];
let maxIndex = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxElement) {
    maxElement = arr[i];
    maxIndex = i;
  }
}
document.write("Максимальний елемент масиву: " + maxElement + "<br>");
document.write("Порядковий номер максимального елементу: " + maxIndex + "<br>");

// Визначити кількість негативних елементів
let countNegative = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    countNegative++;
  }
}
document.write("Кількість негативних елементів: " + countNegative + "<br>");

// Знайти кількість непарних позитивних елементів
let countOddPositive = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 !== 0) {
    countOddPositive++;
  }
}
document.write("Кількість непарних позитивних елементів: " + countOddPositive + "<br>");

// Знайти кількість парних позитивних елементів
let countEvenPositive = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 === 0) {
    countEvenPositive++;
  }
}
document.write("Кількість парних позитивних елементів: " + countEvenPositive + "<br>");

// Знайти суму парних позитивних елементів
let sumEvenPositive = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 === 0) {
    sumEvenPositive += arr[i];
  }
}
document.write("Сума парних позитивних елементів: " + sumEvenPositive + "<br>");

// Знайти суму непарних позитивних елементів
let sumOddPositive = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 !== 0) {
    sumOddPositive += arr[i];
  }
}
document.write("Сума непарних позитивних елементів: " + sumOddPositive + "<br>");

// Знайти добуток позитивних елементів
let productPositive = 1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    productPositive *= arr[i];
  }
}
document.write("Добуток позитивних елементів: " + productPositive + "<br>");

// Знайти найбільший серед елементів масиву, інші обнулити
let maxElement2 = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxElement) {
    maxElement = arr[i];
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== maxElement) {
    arr[i] = 0;
  }
}
document.write("Найбільший елемент масиву: " + maxElement2 + "<br>");
document.write("Масив після обнулення інших елементів: " + arr + "<br>");