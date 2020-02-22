// Ссылка на задачу https://www.codewars.com/kata/birthday-i-cake
// Task. It's your Birthday. Your colleagues buy you a cake. The numbers of candles on the cake is provided (x). Please note this is not reality, and your age can be anywhere up to 1,000. Yes, you would look a mess.
//
// As a surprise, your colleagues have arranged for your friend to hide inside the cake and burst out. They pretend this is for your benefit, but likely it is just because they want to see you fall over covered in cake. Sounds fun!
//
// When your friend jumps out of the cake, he/she will knock some of the candles to the floor. If the number of candles that fall is higher than 70% of total candles (x), the carpet will catch fire.
//
// You will work out the number of candles that will fall from the provided string (y). You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in y, with the alphabetical position of each odd indexed character in y to give the string a total.
//
// example: 'abc' --> a=97, b=2, c=99 --> y total = 198.
//
// If the carpet catches fire, return 'Fire!', if not, return 'That was close!'.

// Задача.
//Это твой день рождения. Твои коллеги покупают тебе торт. Количество свечей на торте предоставляется (х). Обратите внимание, что это не реальность, и ваш возраст может быть где-то до 1000. Да, ты выглядишь беспорядок.
//
// Удивительно, но ваши коллеги позаботились о том, чтобы ваш друг спрятался внутри торта и вырвался. Они делают вид, что это для вашей выгоды, но, скорее всего, просто потому, что хотят видеть, как вы падаете в пироге. Звучит смешно!
//
// Когда ваш друг выпрыгнет из торта, он / она выбьет несколько свечей на пол. Если количество падающих свечей превышает
// 70% от общего количества свечей (x), ковер загорается.
//
// Вы определите количество свечей, которое выпадет из указанной строки (Y). Вы должны сложить символьный ASCII-код каждого
// четного индексированного (предположим, индексация на основе 0) символа Y с алфавитной позицией каждого нечетного индексированного
// символа в Y, чтобы получить итоговую строку.
//
// Пример: 'abc' -> a = 97, b = 2, c = 99 -> y всего = 198.
//
// Если ковер загорелся, верните «Огонь!», Если нет, верните «Это было близко!».

// Решение задачи. Поскольку JS не даёт возможность напрямую действовать на строчные символы необходимо задачу разбить на следующие этапы

// Код для отладки в консоле WebStorm
function cake(x, y) {
    let result = i = 0;
    y = y.toString().split('');
    for (i=0; i < y.length; i++) {
        if ((i + 1) % 2 !== 0) {
            result = result + y[i].charCodeAt(0);
            console.log(result);
        } else {
            result = result + (y[i].charCodeAt(0) - 96);
            console.log(result);
        }
    }
    x * 0.7  >  result ? console.log('That was close!') : console.log('Fair');
    console.log(x);
    console.log(x * 0.7);
    console.log(result);
}

cake(501,  'mqoep');
// Код для выдачи Codewars
function cake(x, y) {
    let result = i = 0,
        noFair = 'That was close!',
        fire = 'Fire!';
    y = y.toString().split('');
    for (i=0; i < y.length; i++) {
        if ((i + 1) % 2 !== 0) {
            result = result + y[i].charCodeAt(0);
        } else {
            result = result + (y[i].charCodeAt(0) - 96);
        }
    }
    if (x * 0.7  >  result ) {
        return noFair
    } else {
        return fire
    }
};