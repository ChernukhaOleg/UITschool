/**
 * Предварительная подготовка:
Создать файл с данными в формате JSON
Это должен быть массив объектов с двумя свойствами: title и ref
 title - название картинки
 ref - ссылка на картинку
 Задание:
• Загрузить данные из JSON-файла
• Распарсить данные в массив
• Вывести на страницу картинки и подписи к ним
 */
let url = 'mainHW9 AJAX.Promise1.json';
let main = document.body.appendChild(document.createElement('main'));

function insertImg(par) {
    let html = `
      <div>
        <img src="${par.ref}">
        <p>"${par.title}"</p>
      </div>
    `
    let main = document.body.appendChild(document.createElement('main'));
    main.innerHTML = html;
}


// let promise = new Promise((resolve, reject) => {
//     let request = new XMLHttpRequest();
//     request.open('GET', url);
//     request.send()
//     request.onload = function (event) {
//         resolve(this.response)
//     }
// })

// promise.then(respons => {
//     let obj = JSON.parse(respons)
//     console.log(obj);
//     insertImg(obj)

// })



/**
 * Задача: напилить код, который вызывает функцию sendMessage для каждого элемента массива messages 
 * и логирует полученные сообщения в объекте log следующим образом:
log
{
    22:25:57: "backspace"
    22:25:58: "shift"
    22:25:59: "subtract"
    22:25:59[2]: "enter"
    22:25:59[3]: "delete"
    22:26:01: "control"
    22:26:01[2]: "space"
}
 */

var messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]


let log = {};

var sendMessage = message => new Promise (
  resolve => setTimeout (
      () => resolve ( message ),
      Math.random () * 7000
  )
)

messages.keyObj =()=>{
  let key = new Date().toLocaleString().split(", ")[1];
  return log[ key ] ? log[ key + "[2]" ] ? key + "[3]" : key + "[2]" : key
}

console.log(new Date().toLocaleString()[1]);

messages.forEach((item,ind,arr)=>sendMessage(item).then(resp=>Object.assign ( log,
  {  [arr.keyObj()] : resp })))

