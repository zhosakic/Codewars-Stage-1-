// Ссылка на задачу https://www.codewars.com/kata/square-every-digit//
// Task. Welcome. In this kata, you are asked to square every digit of a number.
//
// For example, if we run 9119 through the function, 811181 will come out, because 9'2 is 81 and 1'2 is 1.
//
// Note: The function accepts an integer and returns an integer
//
// String will never be empty and you do not need to account for different data types.
//
//
// Добро пожаловать. В этом ката вас просят возвести в квадрат каждую цифру числа.
//
// Например, если мы запустим 9119 через функцию, выйдет 811181, потому что 9 в (2) - это 81, а 1 в (2) - это 1.
//
// Примечание. Функция принимает целое число и возвращает целое число.

// Решение задачи.

// Код для выдачи Codewars
function squareDigits(num){
    var strNum = String(num);
    var newNum ='';
    for (i=0; i<=strNum.length-1 ;i++){
        newNum += strNum[i]*strNum[i];
    }
    return Number(newNum);
}