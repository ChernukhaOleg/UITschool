/**
 * Создайте пустой массив letters
Создайте строку из нескольких слов, например "Backend As A Service"
Напилите код, который разбивает эту строку на массив слов и пушит в массив letters 
первый символ каждого слова
Выведите результат в консоль
Объедините все элементы массива letters в одну строку и выведите ее в консоль
 */
let letters = [];
let str = `Backend As A Service`;
console.log(str.split(" "));
letters = str.split(" ").map(function (item) {
  return item[0];
});
console.log(letters);
console.log(letters.join(""));
/**
  * Объявите функцию с одним формальным параметром, которая проверяет тип данных переданного аргумента и:
• если это число, возвращает текущую дату в формате "20.02.2019, 13:21:51"
• в противном случае возвращает строку "Неверный тип данных"
Вызовите функцию

  */
function checkDataType(data) {
  return typeof data === "number"
    ? new Date().toLocaleString()
    : "Неверный тип данных";
}

console.log(checkDataType(23));
console.log(checkDataType("hi"));
console.log(checkDataType(true));
console.log(checkDataType(234));
