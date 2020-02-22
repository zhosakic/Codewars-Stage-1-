// Ссылка на задачу https://www.codewars.com/kata/remove-first-and-last-character
// Task. It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a
// string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
// Задача. Это довольно просто. Ваша цель - создать функцию, которая удаляет первый и последний символы строки. Вам дан
// один параметр, исходная строка. Вам не нужно беспокоиться о строках длиной менее двух символов.
// Решение задачи. Поскольку JS не даёт возможность напрямую действовать на строчные символы необходимо задачу разбить на следующие этапы
// 1. Преобразуем строку в массив. Это можно сделать с помощью метода .split('')
// 2. Удаляем из массива последний символ. Это можно сделать с помощью метода .pop()
// 3. Удаляем из массива первый символ. Это можно сделать с помощью метода .shift()
// 4. Преобразуем массив в строку. Эот можно сделать с помощью метода .join('').
// Таким образом решение задачи будет выглядеть следующим образом.

// Код для отладки в консоле WebStorm
function reverseString(str) {
    let arr = str.split('');
    arr.pop();
    arr.shift();
    str = arr.join('');
    console.log(str);
}

reverseString('world');

// Код для выдачи Codewars
function removeChar(str){
    let arr = str.split('');
    arr.pop();
    arr.shift();
    return arr.join('');
};