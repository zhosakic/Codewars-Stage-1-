// https://www.codewars.com/kata/remove-duplicates-from-list
// Task. Define a function that removes duplicates from an array of numbers and returns it as a result.
//
// The order of the sequence has to stay the same.
//
// Задача.
//Определите функцию, которая удаляет дубликаты из массива чисел и возвращает их в результате.
//
// Порядок последовательности должен оставаться неизменным.
// Решение задачи.

// Код для выдачи Codewars
function distinct(a) {
    return ([...new Set(a)]);
}


distinct([7,2,3,4,5,6,1,2,3,4,5,6,6,605,4,3,2,1]);