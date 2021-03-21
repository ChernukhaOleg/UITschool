/**
 * Создайте объект, свойства которого описывают содержимое дамской сумочки
• Создайте метод объекта, позволяющий удалить что-то из сумочки
• Создайте метод объекта, позволяющий положить что-то в сумочку
 */
function Bag() {
  let content = [
    "Паспорт",
    "Водительские права",
    "Диплом ВУЗа",
    "Ключи",
    "Билеты в кино",
    "Лекарство",
  ];
  this.showBag = function () {
    console.log(`у меня в сумке есть такой хлам: ${content}`);
    console.log(content);
  };

  this.addBag = function (trash) {
    return content.find((item, index, arr) => {
      if (item === trash) {
        console.log("такое есть в сумке");
        return arr;
      } else {
        arr.push(trash);
        console.log(`добавили в сумку: ${trash}`);
        return arr;
      }
    });
  };
  this.delBag = function (trash) {
    content.find((item, index, arr) => {
      trash === item
        ? console.log(`убрали с сумки: ${arr.splice(index, 1)}`)
        : null;
    });
  };
}

let myCase = new Bag("petr");
myCase.showBag();
myCase.addBag(12);
myCase.showBag();
myCase.delBag(12);
myCase.showBag();
/**
* Объявить конструктор LibraryBook, с помощью которого можно создавать и редактировать объекты, 
хранящие информацию о книгах в библиотеке
 приватные свойства:
 • title ( название книги ),
 • year ( год издания ),
 • author ( автор ),
 • readerName ( кому выдана ),
 • readerData ( когда выдана )

 приватный метод giveTheBook(client)
 внесение изменений в свойства:
 • readerName / client /
 • readerData / текущая дата /

  публичные методы:
  • getBookInfo() - посмотреть информацию о наличии книги
( вывести в консоль readerData )
• getTheBook( client ) - получить книгу:
проверка, что книга не выдана на руки
( приватное свойство readerName должно быть пустой строкой )
если выдана - вернуть null
если не выдана, то вызвать приватный метод giveTheBook ( client ) и вернуть bookTitle
• returnBook() - вернуть книгу:
сбросить значения приватных свойств readerName, readerData

Создайте экземпляр книги
Запросите экземпляр от имени ... ( любое имя )
*/
function LibraryBook(title, year, author) {
  let bookInfo = {
    title,
    year,
    author,
  };
  let readerName = null;
  let readerData = null;

  function giveTheBook(name, date) {
    readerName = name;
    readerData = date;
  }

  this.getBookInfo = function () {
    if (readerName === null) {
      console.log(`Книга ${title} доступна`);
    } else {
      console.log(`Книга ${title} взята ${readerData}`);
    }
  };

  this.getTheBook = function (name, date) {
    if (readerName === null) {
      giveTheBook(name, date);
    } else {
      console.log("no");
    }
  };

  this.returnBook = function () {
    readerName = null;
    readerData = null;
  };
}
let libraryBook = new LibraryBook("Роботы и Империя", 1985, "Айзек Азимов");
let libraryBook1 = new LibraryBook("Винo из одуванчиков", 1957, "Рэй Брэдбери");
libraryBook.getBookInfo();
libraryBook.getTheBook("ivan", "12.01.2020");
libraryBook.getBookInfo();
libraryBook.returnBook();
libraryBook.getBookInfo();
/**
 * Объявите конструктор, который создает экземпляры с унаследованным методом addProperty
Метод addProperty должен принимать два аргумента:
• имя свойства
• значение свойства
и добавлять экземпляру новое свойство с указанным именем и значением
 */
function Sample() {
  Sample.prototype.setNewProperty = function (propName, propValue) {
    this[propName] = propValue;
  };
}

let obj = new Sample();
let objj = new Sample();
obj.setNewProperty("name", "ivan");
console.log(obj);
console.log(objj);

function Sample1() {
  this.setNewProperty1 = function (propName, propValue) {
    this[propName] = propValue;
  };
}

let obj1 = new Sample1();
obj1.setNewProperty1("age", 20);
console.log(obj1);

// function A () {
//   this.x = function () {console.log('A'); };
//   this.updateX = function( value ) {
//     this.x = function() {console.log( value ); }
//   };
// };

function A() {
  A.prototype.x = function () {
    console.log("A");
  };
  A.prototype.updateX = function (value) {
    A.prototype.x = function () {
      console.log(value);
    };
  };
}

let a1 = new A();
let a2 = new A();
a1.x(); // Displays 'A'
a2.x(); // Also displays 'A'
a1.updateX("Z");
a1.x(); // Displays 'Z'
a2.x(); // Still displays 'A'

/**
 * Как уже говорилось в первой версии, использование "this" приводит к тому, что каждый
 * экземпляр класса A имеет свою собственную независимую копию метода функции "x". Тогда
 * как использование "prototype" будет означать, что каждый экземпляр класса A будет использовать
 * одну и ту же копию метода "x".
 */

/**
 * В области видимости унаследованной функции ссылка this указывает на наследующий объект
 * (на наследника), а не на прототип, в котором данная функция является собственным свойством.
 *
 * Итак, мы уже поняли, что любая функция в JS является конструктором по своей сути, поскольку
 * имеет контейнер для "наследства" - свойство prototype
Но что еще мы знаем о функциях JS ?
Мы знаем, что в момент вызова у них появляется ссылка на контекст вызова - this

Другими словами, когда один из наследников вызывает унаследованный метод, то контекстом вызова
этого метода будет данный конкретный наследник
Кто вызвал - на того и покажет this внутри метода

 */
