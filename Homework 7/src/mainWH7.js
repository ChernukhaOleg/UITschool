/**
 * Создайте коллекцию вложенных друг в друга html-элементов с обработчиками событий 
 * click, mouseover, mouseout
 * Установите атрибуты стиля width и height такие, чтобы вложенные элементы были меньше размером,
 *  чем родитель
Установите значение #ff00ff50 атрибута background-color каждому элементу
Установите значение dotted 1px yellow; атрибута border каждому элементу
При наступлении события mouseover значение атрибута background-color должно меняться на #ffff0050
При наступлении события mouseout атрибуту background-color должно устанавливаться исходное значение
При наступлении события click элемент должен быть удален
При наведении мышки на элемент должна появляться подсказка с его именем ( "first", "second", "third", 
"fourth" )

 */
var collection = [];

function enter_or_leave(event) {
  event.target.style.backgroundColor =
    event.type === "mouseover" ? "#ffff0050" : "#ff00ff50";
}

function clickHandler(event) {
  event.target.removeEventListener("mouseover", enter_or_leave);
  event.target.removeEventListener("mouseout", enter_or_leave);
  event.target.remove();
}

["first", "second", "third", "fourth"].forEach(function (tag, index, arr) {
  var elem = (collection.length === 0
    ? document.body
    : collection[collection.length - 1]
  ).appendChild(document.createElement("div"));
  collection.push(elem);
  elem.style = `
             width:  ${(arr.length - index) * 50}px;
             height: ${(arr.length - index) * 50}px;
             background-color: #ff00ff50;
         `;
  elem.title = tag;
  elem.addEventListener("mouseover", enter_or_leave);
  elem.addEventListener("mouseout", enter_or_leave);
  elem.onclick = clickHandler;
});

/**
 * Условия предыдущего задания изменить так:
 * при удалении элемента его потомки должны оставаться
 */
var collection = [];

function enter_or_leave(event) {
  event.target.style.backgroundColor =
    event.type === "mouseover" ? "#ffff0050" : "#ff00ff50";
}

function clickHandler(event) {
  event.stopPropagation();
  event.target.removeEventListener("mouseover", enter_or_leave);
  event.target.removeEventListener("mouseout", enter_or_leave);
  event.target.outerHTML = event.target.innerHTML;
}

[1, 2, 3, 4, 5, 6, 7].forEach(function (tag, index, arr) {
  var elem = (collection.length === 0
    ? document.body
    : collection[collection.length - 1]
  ).appendChild(document.createElement("div"));
  collection.push(elem);
  elem.style = `
              width:  ${(arr.length - index) * 50}px;
              height: ${(arr.length - index) * 50}px;
              background-color: #ff00ff50;
              border: dotted 1px yellow;
          `;
  elem.title = tag;
  elem.addEventListener("mouseover", enter_or_leave);
  elem.addEventListener("mouseout", enter_or_leave);
  elem.onclick = clickHandler;
});
