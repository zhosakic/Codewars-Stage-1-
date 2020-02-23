// Ссылка на задачу https://www.codewars.com/kata/even-or-odd
// Task. Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// Задача.
//Создайте функцию (или напишите скрипт в Shell), который принимает целое число в качестве аргумента и возвращает «четные» для четных чисел или «нечетные» для нечетных чисел.

// Решение задачи.

// Код для выдачи Codewars
function even_or_odd(number) {

    return (number % 2 == 0) ? "Even" : "Odd"
}


even_or_odd(3);

