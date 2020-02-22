// Ссылка на задачу https://www.codewars.com/kata/palindrome-strings

// Task. Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
//
// Implement a function that checks if something is a palindrome.
//
// Examples
// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome(12321)    ==> true
// isPalindrome(123456)   ==> false

// Задача.
// Палиндромные строки
// Палиндром - это слово, фраза, число или другая последовательность символов, которая читает одно и то же назад или вперед. Это включает в себя заглавные буквы, знаки пунктуации и разделители слов.
//
// Реализуйте функцию, которая проверяет, является ли что-то палиндромом.
//
// Примеры
// isPalindrome ("анна") ==> true
// isPalindrome ("walter") ==> false
// isPalindrome (12321) ==> true
// isPalindrome (123456) ==> false

// Решение задачи. Поскольку JS не даёт возможность напрямую действовать на строчные символы необходимо задачу разбить на следующие этапы

// Код для отладки в консоле WebStorm
function reverseString(str) {
    str = String(str); // Преобразуем в строку на случай если на вход функции придёт число
    let arr = str.split(''); // Преобразуем строку в массив
    let i = arr.length; // Записываем в i длину массива для того что бы зациклить проверку
    let result = true; // Присваиваем переменно result значение true по умолчанию, на случай если на вход поступает один символ
    while (i > 1) {  // Запускаем цикл и повторяем его то того момента пока i больше 1
        if (arr.shift() == arr.pop()) { // Сравниваем первый и послдений симпол массива и удаляем их из массива
            i = arr.length; // Присваем i новую длину массиву
        } else {
            result = false; // если сравнение НЕ прошло, присваиваем переменно result false
            i = 1; // Присваевам переменно i значение 1 для того что бы остановить выполенение цикла.
        }
    } console.log(result);
}

reverseString('sadas');

// Код для выдачи Codewars
function isPalindrome(line) {
    line = String(line);
    let arr = line.split('');
    let i = arr.length;
    let result = true;
    while (i > 1) {
        if (arr.shift() == arr.pop()) {
            i = arr.length;
            result = true;
        } else {
            result = false;
            i = 1;
        }
    } return result;
}

// Красивое решение но не моё!
function isPalindrome(line) {
    return (String(line) == String(line).split('').reverse().join('') )
}