// Ссылка на задачу https://www.codewars.com/kata/find-the-duplicated-number-in-a-consecutive-unsorted-list
// Task. You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.
//
// The array is unsorted.
//
// An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5]
// would not be valid as it is missing 3.
//
// You should return the duplicate value as a single integer.
//
//You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.
//
// The array is unsorted.
//
// An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.
//
// You should return the duplicate value as a single integer.
// Задача.
//
// Вам дан массив из n + 1 целых чисел от 1 до n. Кроме того, есть одно дублированное целое число.
//
// Массив не отсортирован.
//
// Примером допустимого массива будет [3, 2, 5, 1, 3, 4]. Он имеет целые числа от 1 до 5 и 3 дублируется. [1, 2, 4, 5, 5]
// не будет действительным, так как отсутствует 3.
//
// Вы должны вернуть повторяющееся значение как одно целое число.
// Решение задачи.

// Код для выдачи Codewars
function findDup( arr ){
    arr.sort();
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === arr[i+1]) {
            return (arr[i]);
        }
    }
    // return duplicateValue;
}

findDup([1,2,2,3]);