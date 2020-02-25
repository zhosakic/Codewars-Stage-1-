// Ссылка на задачу https://www.codewars.com/kata/fizz-buzz
// Task. Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).
//
// C# ONLY: If N is smaller then or equal to 0, throw an ArgumentOutOfRangeException!
// Replace certain values however if any of the following conditions are met:
//
// If the value is a multiple of 3: use the value 'Fizz' instead
// If the value is a multiple of 5: use the value 'Buzz' instead
// If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead
// C# method calling example:
//
// string[] result = FizzBuzz.GetFizzBuzzArray(3); // => [ "1", "2", "Fizz" ]
// Задача.
//
// Вернуть массив, содержащий числа от 1 до N, где N - это параметризованное значение. N никогда не будет меньше 1 (в C # N может быть меньше 1).
//
// ТОЛЬКО для C #: если N меньше или равно 0, выдается исключение ArgumentOutOfRangeException!
// Замените некоторые значения, однако, если выполняется любое из следующих условий:
//
// Если значение кратно 3: вместо этого используйте значение «Fizz»
// Если значение кратно 5: используйте вместо этого значение «Buzz»
// Если значение кратно 3 и 5: используйте вместо него значение FizzBuzz
// Пример вызова метода C #:
//
// string [] result = FizzBuzz.GetFizzBuzzArray (3); // => ["1", "2", "Fizz"]
// Решение задачи.

// Код для выдачи Codewars
function positiveSum(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        if ((i + 1) % 3 !== 0 && (i + 1) % 5 !== 0) {
            arr[i] = i + 1;
        } else {
            if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
                arr[i] = 'FizzBuzz';
            } else {
                if ((i + 1) % 3 === 0) {
                    arr[i] = 'Fizz';
            } else {
                    arr[i] = 'Buzz';
                }
            }
        }
    }
    console.log(arr);
}

positiveSum(30);