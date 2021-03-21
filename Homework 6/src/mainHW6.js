/**
 * Создайте массив tags с именами валидных тегов HTML5
Теперь создайте массив classes с именами классов
( число элементов в массиве classes должно быть не меньше, чем число элементов массива tags )
Создайте элемент style и вставьте его в head документа
Добавьте контент элемента style с описанием классов, имена которых находятся в массиве classes
Итерируйте массив tags, создавая соответствующие элементы и вставляя их на страницу, добавляя 
каждому элементу класс из массива classes

 */

let tags = ["div", "p", "input", "button"];
let classes = ["container", "paragr", "data", "click"];

const domElems = tags.map((tag, ind) => {
  let elem = document.createElement(tag);
  elem.classList.add(classes[ind]);
  console.log(elem);
  return elem;
});

domElems.forEach((domElem) => {
  document.body.appendChild(domElem);
});

/**
 * Напилить код, который выбирает все элементы-потомки body (  кроме элементов script ) 
 * и добавляет им класc:
.redBack {
    background-color: red!important;
}
Альтернативный вариант - выбрать все заранее заданные элементы:
Запустить код в консоли любой страницы
Подсказка: используйте методы объекта classList
 */
let style = document.head.appendChild(document.createElement("style"));
style.textContent = `
    .redBack {
        background-color: red!important;
    }
`;

let tags = ["header", "footer", "main", "div", "p"];

let elem = tags
  .map((tag) => document.querySelector(tag))[0]
  .classList.add("redBack");
