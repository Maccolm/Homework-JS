//1.Вводимо необхідні дані
let a = parseInt(prompt('Введіть a', '0'));
let b = parseInt(prompt('Введіть a', '0'));

//2. Знаходимо результат
let s = a + 12 + b;

//3.Виводимо результат
document.write(`<h1>S1= ${s.toFixed(2)}</h1>`);
document.write(`<h2>Введені числа: ${a}, ${b} </h2>`);
