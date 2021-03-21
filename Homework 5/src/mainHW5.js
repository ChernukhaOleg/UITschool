//Напилить код функции modificator, такой, чтобы в результате работы кода:

// function sampleFunc(){
//     console.log(`${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}`)
// }
// function modificator(func){
//     return function(){
//         return func('test', 'sample')
//     }
// }

// testFunc = modificator( sampleFunc )

// testFunc()
//sampleFunc.bind(modificator, 'test', 'sample')()

//--------------------------------------------------------------------------------------------------
//Напилить код функции modificator, такой, чтобы в результате работы кода:
function sampleFunc() {
  console.info(`Symbols in my code: ${arguments.callee + 0}`);
}

function modificator(func) {
  func.valueOf = function () {
    return this.toString().length;
  };
}

modificator(sampleFunc);

//--------------------------------------------------------------------------------------------------
/**
 * Напилите код функции generateError, такой, чтобы в результате работы кода:
 * в консоли было сообщение от ошибке:
► Application: Invalid arguments
Function needs 3 arguments, but only 1 present
 */

function testArguments() {
  function generateError(numArgs) {
    let err = new Error("Invalid arguments");
    err.name = "Application";
    err.stack = `Function needs 3 arguments, but only ${numArgs} present`;
    throw err;
  }
  try {
    arguments.length >= 3 ? null : generateError(arguments.length);
  } catch (err) {
    console.error(`${err.name}: ${err.message}\n${err.stack}`);
  }
}

testArguments("Google");

sampleFunc();

let obj = {
  name: "ivan",
};
console.dir(obj);
let descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptor);
