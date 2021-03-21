/**
 Задача: проверить парность и правильность расстановки скобок
( для упрощения задачи будем считать, что в тестируемой строке только скобки и пробелы )
Например, валидация строки "({})[([])]" должна пройти нормально ( вернуть true )
а валидация строки "({(})[([)])]" должна вернуть false
*/

function validation(str) {
  const base = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let opened = [];
  str.split("").forEach((item) => {
    base[item]
      ? opened.push(item)
      : base[opened[opened.length - 1]] === item
      ? opened.pop()
      : null;
  });
  return str.length % 2 === 0 && !opened.length;
}
console.log(validation("({})[([])]"));
console.log(validation("({(})[([)])]"));
console.log(validation("({})[([])])"));

/**
 Завершите код функции typeMessage так, чтобы на страницу выводился один символ в секунду
 */
function typeMessage(message, velocity) {
  let container = document.getElementById("demo")
    ? document.getElementById("demo")
    : document.body.appendChild(document.createElement("h3"));
  container.style = `color: magenta;`;
  message
    .split("")
    .forEach((letter, inde) =>
      setTimeout(
        () => (container.textContent += letter),
        1000 * inde * velocity
      )
    );
}

typeMessage(`Welcome to the hell`, 1);

/**
 Напилите код методов setUserPresent, showPresent и showAbsent
 */
var users = (function (list) {
  var users = [];
  for (var user of list)
    users.push({
      name: user,
      present: false,
    });
  console.log(users);

  return {
    setUserPresent(userName, present) {
      users.filter((user) => user.name === userName)[0].present = true;
    },
    showPresent() {
      users.filter((user) => user.present).forEach((user) => console.log(user));
    },
    showAbsent() {
      users
        .filter((user) => !user.present)
        .forEach((user) => console.log(user));
    },
  };
})(["Иван", "Дмитрий", "Степан", "Михаил"]);

users.showAbsent();

users.setUserPresent("Иван", "+");
users.setUserPresent("Михаил", "присутствовал");
users.setUserPresent("Степан", true);

users.showPresent();

/**
 * Допилите код функции changeClass, которая парсит все стили страницы в поисках заданного класса,
 * а затем меняет атрибуты стиля этого класса
 */
let changeClass = (classname, styleString) =>
  Array.from(document.styleSheets)
    .filter((sheet) => !sheet.href)
    .map((sheet) =>
      Array.from(sheet.cssRules).filter(
        (rule) => rule.selectorText === `.${classname}`
      )
    )
    .filter((item) => item.length > 0)
    .map((item) => item[0].cssText.split("}").join(`${styleString}}`)).length >
  0
    ? console.log("found")
    : (document.head.appendChild(
        document.createElement("style")
      ).textContent = `.${classname} {${styleString}}`);

changeClass("second-level-menu", "background-color: red!important;");
