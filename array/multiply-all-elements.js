// Ссылка на задачу https://www.codewars.com/kata/currying-functions-multiply-all-elements-in-an-array
// Task. To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.
//
// The returned array should consist of each of the elements from the first array multiplied by the integer.
//
// Example:
//
// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
// Here's a nice Youtube video about currying, which might help you if this is new to you.
// Задача.
//
// Для завершения этого Kata вам нужно сделать функцию multiplyAll / multiply_all, которая принимает массив целых чисел в качестве аргумента. Эта функция должна возвращать другую функцию, которая принимает одно целое число в качестве аргумента и возвращает новый массив.
//
// Возвращаемый массив должен состоять из каждого элемента из первого массива, умноженного на целое число.
//
// Пример:
//
// multiplyAll ([1, 2, 3]) (2) = [2, 4, 6];
// Вот хорошее видео о карри на Youtube, которое может помочь вам, если это плохо для вас.
// Решение задачи.

// Код для выдачи Codewars
let multiplyAll = function(numbers) {
    return function(n) {
        return numbers.map(function(number) {
            return number * n;
        })
    }
}