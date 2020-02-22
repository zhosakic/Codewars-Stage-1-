// Ссылка на задачу https://www.codewars.com/kata/anagram-detection
// Task. An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
//
// Note: anagrams are case insensitive
//
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
//
// Examples
// "foefet" is an anagram of "toffee"
//
// "Buckethead" is an anagram of "DeathCubeK"

// Задача.
//
// Анаграмма - это результат перестановки букв слова для создания нового слова (см. Википедию).
//
// Примечание: анаграммы нечувствительны к регистру
//
// Завершите функцию, чтобы вернуть true, если два приведенных аргумента являются анаграммами друг друга; в противном случае верните false
//
// Примеры
// "foefet" - это анаграмма "ириски"
//
// "Buckethead" - это анаграмма "DeathCubeK"

// Решение задачи. Поскольку JS не даёт возможность напрямую действовать на строчные символы необходимо задачу разбить на следующие этапы

// Код для отладки в консоле WebStorm
function test(test, original) {
    if (test.toString().toLowerCase().split('').sort().join() == original.toString().toLowerCase().split('').sort().join()) {
        console.log(true);
    } else {
        console.log(false);
    }
}

test('Twoo', 'WooT');


// Код для выдачи Codewars
var isAnagram = function(test, original) {
    if (test.toString().toLowerCase().split('').sort().join() == original.toString().toLowerCase().split('').sort().join()) {
        return true;
    } else {
        return false;
    }
};
