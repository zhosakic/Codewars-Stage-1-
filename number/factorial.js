// Ссылка на задачу https://www.codewars.com/kata/factorial
// Task. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers
// less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
//
// The inputs x and y are always greater or equal to 1, so the the greatest common divisor will always be an integer that
// is also greater or equal to 1.
// Задача.
//
// В математике факториал неотрицательного целого числа n, обозначенного через n !, является произведением всех натуральных
// чисел, меньших или равных n. Например: 5! = 5 * 4 * 3 * 2 * 1 = 120. Условно значение 0! это 1.
// Решение задачи.

// Код для выдачи Codewars
function factorial(n) {
    let result = 1;
    if (n < 0 || n > 12 ) {
        throw new RangeError();
    } else {
        for (let i = 1; i <= n; i++){
            result = result * i;
        } return (result);
    }
}

factorial(3);
