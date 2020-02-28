// Ссылка на задачу https://www.codewars.com/kata/easy-mathematical-callback
// Task. Write the processArray function, which takes an array and a callback function as parameters. The callback function can be, for example, a mathematical function that will be applied on each element of this array. Optionally, also write tests similar to the examples below.
//
// Examples
// 1) Array [4, 8, 2, 7, 5] after processing with function
//
// var myArray = [4, 8, 2, 7, 5];
// myArray = processArray(myArray,function (a) {
//   return a * 2;
// });
// will be [ 8, 16, 4, 14, 10 ].
//
// Напишите функцию processArray, которая принимает массив и функцию обратного вызова в качестве параметров. Функция
// обратного вызова может быть, например, математической функцией, которая будет применяться к каждому элементу этого массива.
// При желании также можно написать тесты, аналогичные приведенным ниже примерам.
//
// Примеры
// 1) Массив [4, 8, 2, 7, 5] после обработки с функцией
//
// var myArray = [4, 8, 2, 7, 5];
// // myArray = processArray(myArray,function (a) {
// //   return a * 2;
// // });
// будет [8, 16, 4, 14, 10].

// Решение задачи.

// Код для выдачи Codewars
function processArray(arr, callback) {
    return arr.map(callback);
}