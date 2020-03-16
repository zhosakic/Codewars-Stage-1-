// Ссылка на задачу https://www.codewars.com/kata/regexp-basics-is-it-a-letter
// Task. Complete the code which should return true if the given object is a single ASCII letter (lower or upper case),
// false otherwise.
//
// Завершите код, который должен возвращать true, если данный объект представляет собой одну букву ASCII
// (нижний или верхний регистр), иначе false.

// Решение задачи.

// Код для выдачи Codewars
// String.prototype.isLetter = function() {
//     return /^[A-Za-z]{1}$/.test(this);
// }


function test(a) {
    let b = a.slice(6);
    console.log(b);
}



test('GA1.2.1110987456.1581655333');