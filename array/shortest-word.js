// Ссылка на задачу https://www.codewars.com/kata/shortest-word
// Task. Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.
//
// Простой, учитывая строку слов, возвращает длину самого короткого слова.
//
// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

// Решение задачи.

// Код для выдачи Codewars
function findShort(s){
    let result =[];
    let j = 0;
    s.toString();
    for (let i = 0; i < s.length; i++) {
        j = (j + 1);
        if (i === s.length - 1) {
            console.log('123');
            result.push(+j);
        } else {
            if (s[i] === ' ') {
                result.push((j - 1));
                j = 0;
            }
        }
    }
    result.sort(function(a, b) {
        return a - b;
    });
    console.log(result);
}

findShort("MadeSafeCoin Bitcoin 21inc Dash LiteCoin Ripple Bitcoin ProofOfStake Waves 21inc Factom Bitcoin Ripple LiteCoin");