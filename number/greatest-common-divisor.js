// Ссылка на задачу https://www.codewars.com/kata/even-or-odd
// Task. Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.
//
// The inputs x and y are always greater or equal to 1, so the the greatest common divisor will always be an integer that is also greater or equal to 1.
// Задача.
//
// Найдите наибольший общий делитель двух натуральных чисел. Целые числа могут быть большими, поэтому вам нужно найти умное решение.
//
// Входы x и y всегда больше или равны 1, поэтому наибольший общий делитель всегда будет целым числом, которое также больше или равно 1.

// Решение задачи.
// Для решения задачи выбран алгоритм Евклида.

// Код для выдачи Codewars
    function mygcd(x, y) {
        while (x !== 0 && y !== 0) {
            if (x > y) {
                x = x % y;
            } else {
                y = y % x;
            }
        } return (x + y);
    }

mygcd(30,12);

