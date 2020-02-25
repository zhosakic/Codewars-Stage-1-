// Ссылка на задачу https://www.codewars.com/kata/sum-of-positive
// Task. You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.
// Задача.
//
// Вы получаете массив чисел, возвращаете сумму всех положительных.
//
// Пример [1, -4,7,12] => 1 + 7 + 12 = 20
//
// Примечание: если нечего суммировать, по умолчанию сумма равна 0.
// Решение задачи.

// Код для выдачи Codewars
function positiveSum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result = result + arr[i];
        }
    } console.log(result);
}

positiveSum([]);