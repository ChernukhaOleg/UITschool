/**
 * Объявите функцию без формальных параметров, которая выводит в консоль сама себя и все 
 * переданные ей аргументы
Вызовите эту функцию с аргументами 10, false, "google"
 */
function showHerself() {
  for (arg of arguments) {
    console.log(arg);
  }
  console.log(arguments.callee.name);
}
showHerself(10, false, "google");
/**
 * Объявите функцию userInfo, которая выводит в консоль:
свойство "Дата регистрации: " + свойство data контекста вызова, если свойство registered имеет значение true
сообщение "Незарегистрированный пользователь: " + свойство name в противном случае
( используйте переменные в литералах )
Создайте два объекта с одинаковым набором свойств:
name ( строка )
registered ( логическое значение )
data ( дата в формате "дд.мм.гг" )
Добавьте каждому объекту метод getInfo, который будет ссылкой на функцию userInfo
Вызовите каждый метод
 */
function userInfo() {
  return this.registred === true
    ? `Дата регистрации: ${this.data}`
    : `Незарегистрированный пользователь: ${this.name}`;
}

let user1 = {
  name: "Ivan",
  registred: true,
  data: "22.12.2020",
  getInfo: userInfo,
};
let user2 = {
  name: "Petr",
  registred: false,
  data: "15.12.2015",
  getInfo: userInfo,
};

console.log(user1.getInfo());
console.log(user2.getInfo());

/**
 * Есть три объекта: users, posts и comments
( готовые объекты уже ждут вас по  ссылке )
Написать код функции getPostComments ( postId ),
которая возвращает массив всех комментариев к посту с идентификатором postId
( с именем автора комментария и текстом комментария )
Result:
 */

let users = {
  14587: {
    name: "Ivan",
    email: "ivan78@gmail.com",
  },
  28419: {
    name: "Georg",
    email: "georg.klep@gmail.com",
  },
  41457: {
    name: "Stephan",
    email: "stephan.borg@gmail.com",
  },
};
let posts = {
  7891451: {
    author: 14587,
    text:
      "Imagine we can encapsulate these secondary responsibilities in functions",
  },
  7891452: {
    author: 28419,
    text: `В конструкторе ключевое слово super используется как функция, вызывающая родительский конструктор. 
                    Её необходимо вызвать до первого обращения к ключевому слову this в теле конструктора. 
                    Ключевое слово super также может быть использовано для вызова функций родительского объекта`,
  },
  7891453: {
    author: 28419,
    text: `DOM не обрабатывает или не вынуждает проверять пространство имен как таковое. 
                    Префикс пространства имен, когда он связан с конкретным узлом, не может быть изменен`,
  },
  7891454: {
    author: 14587,
    text:
      "Ключевое слово super используется для вызова функций, принадлежащих родителю объекта",
  },
};
let comments = {
  91078454: {
    postId: 7891451,
    author: 28419,
    text: `The static String.fromCharCode() method returns a string created 
                    from the specified sequence of UTF-16 code units`,
  },
  91078455: {
    postId: 7891451,
    author: 41457,
    text: `HTML элемент <template> — это механизм для отложенного рендера клиентского контента, 
                    который не отображается во время загрузки, но может быть инициализирован при помощи JavaScript`,
  },
  91078457: {
    postId: 7891452,
    author: 41457,
    text:
      "Глобальный объект String является конструктором строк, или, последовательностей символов",
  },
  91078458: {
    postId: 7891452,
    author: 14587,
    text: `The Element.namespaceURI read-only property returns the namespace URI of the element, 
                    or null if the element is not in a namespace`,
  },
};

function getCurrentPostComments(postId) {
  let res = [];

  for (key in comments) {
    if (comments[key].postId === postId) {
      let autorName = comments[key].author;
      res.push({
        author: users[autorName].name,
        text: comments[key].text,
      });
    }
  }
  return res;
}

console.log(getCurrentPostComments(7891451));

var Bag = function (cash, pincode) {
  var money = cash || 3000;
  var pin = pincode || "0000";

  var testPin = (__pin) => {
    console.log(pin === __pin ? "OK" : "Нет доступа");
    return pin === __pin;
  };
  var documents = ["Паспорт", "Водительские права", "Диплом ВУЗа"];
  var accessories = ["Ключи", "Билеты в кино", "Лекарство"];

  function getMoney(sum) {
    money -= sum;
    console.info(`Осталось денег в кошельке: ${money} грн`);
    return `Уплачено: ${sum} грн`;
  }

  this.pay = function (sum, pincode) {
    if (!testPin(pincode)) return;
    if (sum > money) {
      console.log("Не хватает денег");
      return;
    }
    console.log(getMoney(sum));
  };

  this.rummage = function (pincode) {
    if (!testPin(pincode)) return null;
    var content = [documents, accessories, money];
    console.log("Протокол обыска. Содержимое сумочки: \n", content);
    return content;
  };
};

var myCase = new Bag();
