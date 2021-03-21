// Логирование поступающих сообщений в объекте log
// Задан массив сообщений и пустой объект log:
let messages = [
  "backspace",
  "enter",
  "shift",
  "control",
  "delete",
  "space",
  "subtract",
];

let log = {};

//Далее, есть функция, отправляющая сообщения в случайном порядке в случайное время:

let sendMessage = (message, callback) =>
  setTimeout(() => callback(message), Math.random() * 10000);

// Обратите внимание, что эта функция получает при вызове не только текст сообщения, но и колбэк-функцию,
// которой нужно передать это сообщение
// С помощью кода:

messages.forEach((message) => sendMessage(message, handler));

// инициируем отправку сообщений
// Ваша задача - напилить код функции handler,
// которая получает сообщение и заносит его в объект log
// в виде нового свойства,
// значение которого - текст поступившего сообщения,
// а ключ ( имя свойства ) - это время поступления сообщения ( в виде строки )
getKey = () => {
  var key = new Date().toLocaleString().split(", ")[1];
  return log[key] ? key + "[2]" : key;
};
let key = new Date().toLocaleTimeString();

function handler(message) {
  Object.assign(log, { [getKey()]: message });
}

// Допилите код конструктора User, дополнив его акцессорами приватного свойства presence так,
// чтобы после выполнения скрипта:

// в консоли было: "Ivan is absent"
// а после выполнения кода:

// в консоли было: "Ivan is present"

function User(name) {
  this.name = name;
  var presence = false;
  console.log(presence);
  Object.defineProperty(this, "presence", {
    get: () =>
      presence == false ? `${this.name} is absent` : `${this.name} is present`,
    set: (newVal) => (presence = newVal === "+"),
  });
}

let user = new User("Ivan");
console.info(user.presence);

user.presence = "+";
console.info(user.presence);
