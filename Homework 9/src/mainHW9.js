/**
 Напилите код, выводящий на страницу текущее время в течение 100 секунд
 */

let p = document.body.appendChild(document.createElement('p'))
let i = 0

function outputSeconds() {
    p.innerText = new Date().toLocaleTimeString()
    if (i != 10) {
        setTimeout(outputSeconds, 1000);
        i++
    } else {
        p.innerText = `end ${new Date().toLocaleTimeString()}`
    }
}
outputSeconds()

/**
 Завершите код рекурсивной функции typeMessage так, 
 чтобы при ее вызове на страницу выводился один символ в секунду
 */
var typeMessage = (function (velocity) {
    const container =
        document.body.appendChild(
            document.createElement("h4")
        )
    let index = 0
    return function (message) {
        let step = setTimeout(() => {
            index += 1;
            typeMessage(message)
            container.textContent = message.substr(0, index)
        }
            , 1000 * velocity)
        message.length !== index ? step : null
    }

})(1)

typeMessage(`Welcome to the hell`)

/**
 Нужно сделать так, чтобы у всех экзепляров, созданных конструктором User, 
 был унаследованный метод counter(), который считает созданные конструктором экземпляры
Каждый вызов конструктора увеличивает счетчик экземпляров на 1 и помещать новое значение 
счетчика в свойство id созданного экземпляра:
 */

function User ( name ) {
    this.name = name
    this.id = this.counter()
}
User.prototype.counter = (function(){
    let count = 0;
    return function(){
        return this.id ? this.id : count++
    
    }
})()
console.log(User.prototype);

var users = [
    new User ( "Семен" ),
    new User ( "Антон" ),
    new User ( "Демьян" ),
    new User ( "Василий" )
]
console.log(users[0].counter());
console.log(users[1].counter());
console.log(users[0].id);
console.log(users[3].counter());
console.log(users[2].id);