// Ссылка на задачу https://www.codewars.com/kata/count-characters-in-your-string
// Task. The main idea is to count all the occurring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
//
// What if the string is empty ? Then the result should be empty object literal { }
//
// Основная идея заключается в подсчете всех встречающихся символов (UTF-8) в строке. Если у вас есть строка, подобная этой aba, тогда результат должен быть {'a': 2, 'b': 1}
//
// Что если строка пуста? Тогда результатом должен быть пустой литерал объекта {}

// Решение задачи.

// Код для выдачи Codewars
function count (string) {
    let results = {};
    for (var i = 0; i < string.length; i++)
    {
        if (results[string[i]])
        {
            results[string[i]] += 1;
        }
        else
        {
            results[string[i]] = 1;
        }
    }
    return results;
}