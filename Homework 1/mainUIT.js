
//----------------------------self work--------------------------------------
/**
 * Создать массив group, элементы которого будут объектами, содержащими данные каждого студента группы
Какие данные - на ваше усмотрение ( например, имя, фамилия, возраст, наличие ноутбука и т.д. )

Создать функцию, которая итерирует массив group, выводя в консоль данные каждого студента одной строкой
( предварительно преобразовав объект в строку, не забудьте сивол-разделитель )
function getStudentsList ( arrayOfStudents ) {
    ...
}
Можно вернуть новый массив ( массив строк, а не объектов ) и вывести его в консоль
 */

let group = [
  {
    name: "Ivan",
    lastName: "Ivanov",
    age: 30,
    notebook: false,
  },
  {
    name: "Petr",
    lastName: "Petrov",
    age: 35,
    notebook: true,
  },
  {
    name: "Sidor",
    lastName: "Sidorov",
    age: 38,
    notebook: false,
  },
];

function getStudentsList(arrayOfStudents) {
  let studentListStr = [];
  for (key of arrayOfStudents) {
    studentListStr.push(`name: ${key.name}, age: ${key.age}, notebook: ${key.notebook}`)
  }
  return studentListStr
}
console.log(getStudentsList(group))

/**
 Работа с предыдущим массивом group
Объявить функцию, которая добавляет нового студента в массив group
Формальные параметры - данные студента

Вызвать функцию addNewStudent, передав ей фактические данные нового студента
После этого вызвать предыдущую функцию ( getStudentsList ), чтобы убедиться, 
что студент добавлен в группу
 */
function addNewStudent (arr, name,lastName, age, notebook) {
  let stud = {
    name,
    lastName,
    age,
    notebook
  }
  return arr.push(stud)
}

addNewStudent(group, 'Alexandr', 'Alexandrov', 25, true);
console.log(getStudentsList(group));

/**
Объявить функцию, которая получает в качестве аргумента строку и удаляет из нее символы, 
код которых больше 1103 или меньше 1040
Функция должна вернуть новую строку
Применить эту функцию к строке
"Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик"
 */
let stringa = "Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик"
let newStr = '';

 for (let i = 0; i<stringa.length; i++){
   
 if (!(stringa.charCodeAt(i)> 1103 || stringa.charCodeAt(i)<1040)){
  a = stringa.slice(i, i+1);
  newStr+=a
      
 }
}
console.log(newStr);

/**
 * Написать функцию сортировки массива
 Не использовать метод sort()
 Использовать оператор цикла while
 Использовать методы работы с массивами и строками
 */

 /**
  * Есть два массива, в первом - имена, во втором - фамилии
Нужно создать массив, элементы которого будут содержать имя и фамилию одной строкой
names [ i ] ="Сергей",
lastNames [ i ] = "Коломенцев"
Результат:
newArray [ i ] = "Сергей Коломенцев"
  */
 let name2 = ['ivan', 'petr', 'sidor'];
 let lastname2 = ['ivanov', 'petrov', 'sidorov'];

 function createNewArr (name, lastname){
  let newArr = name.map(function(item, index){
       return item +' '+  lastname[index]
     })
     return newArr
 }
 console.log(createNewArr(name2, lastname2));