// Ссылка на задачу https://www.codewars.com/kata/is-a-number-prime/
// Task. Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.
//
// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
//
// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */
// Assumptions
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
// There are no fancy optimizations required, but still the most trivial solutions might time out. Try to find a solution which does not loop all the way up to n.
// Задача.
//Определите функцию, которая принимает целочисленный аргумент и возвращает логическое значение true или false в зависимости от того, является ли целое число простым числом.
//
// Согласно Википедии, простое число (или простое число) - это натуральное число, большее 1, которое не имеет положительных делителей, кроме 1 и самого себя.
//
// пример
// is_prime (1) / * false * /
// is_prime (2) / * true * /
// is_prime (-1) / * false * /
// Предположения
// Вы можете предположить, что вам дадут целочисленный ввод.
// Нельзя предполагать, что целое число будет только положительным. Вам также могут быть указаны отрицательные числа (или 0).
// Не нужно никаких причудливых оптимизаций, но все же самые тривиальные решения могут быть недоступны. Попробуйте найти решение,
// которое не зацикливается вплоть до n.
// Решение задачи.

// Код для выдачи Codewars
function isPrime(num) {
    if (num === 1 || num <= 0 ) {
        return false;
        return;
    } else {
        for (let i = 2; i < Math.sqrt(num) + 10 && num; i++) {
            if (num % i === 0 && num > i) {
                return false;
            }
        }
    } return true;
}