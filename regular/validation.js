// Ссылка на задачу https://www.codewars.com/kata/simple-validation-of-a-username-with-regex
// Task. Write a simple regex to validate a username. Allowed characters are:
//
// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).
//
//
// Напишите простое регулярное выражение для проверки имени пользователя. Допустимые символы:
//
// строчные буквы,
// номера,
// подчеркивать
// Длина должна быть от 4 до 16 символов (оба включены).

// Решение задачи.

// Код для выдачи отладки
function validateUsr(username) {
    res = username.toString().split('');
    if (res.length < 4 || res.length > 16) {
        console.log(res);
        console.log('Мало или много символов');
        return
    } else {
        for (let i = 0; i < res.length - 1; i++) {
            if ((res[i].charCodeAt(0) >= 48 && res[i].charCodeAt(0) <= 57) || (res[i].charCodeAt(0) >= 97 && res[i].charCodeAt(0) <= 122)
                || res[i].charCodeAt(0) === 95) {
                console.log(res[i].charCodeAt(0))

            } else {
                console.log("ошибка на" + res[i].charCodeAt(0))
                console.log('проверка не прошла');
                return
            }
                }  console.log('ОК');
        return
    }
    // return res
}
// Код для выдачи Codewars
function validateUsr(username) {
    res = username.toString().split('');
    if (res.length < 4 || res.length > 16) {
        return false
    } else {
        for (let i = 0; i < res.length - 1; i++) {
            if ((res[i].charCodeAt(0) >= 48 && res[i].charCodeAt(0) <= 57) || (res[i].charCodeAt(0) >= 97 && res[i].charCodeAt(0) <= 122)
                || res[i].charCodeAt(0) === 95) {

            } else {

                return false
            }
        }
        return true
    }
}

validateUsr('asd43_34');
// validateUsr('asd43 34');
// validateUsr('asd43');
// validateUsr('Hass');