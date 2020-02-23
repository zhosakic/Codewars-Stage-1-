// Ссылка на задачу https://www.codewars.com/kata/even-or-odd
// Task. The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
//
// Task :
// Given a year, return the century it is in.
//
// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)
// Задача.
//
// Первый век длится от 1 года до 100 года включительно, второй - от 101 года до 200 года включительно и т. Д.
//
// Задача:
// Учитывая год, верните век, в котором он находится.
//
// Примеры ввода, вывода ::
// ageFromYear (1705) возвращает (18)
// ageFromYear (1900) возвращает (19)ч
// ageFromYear (1601) возвращает (17)
// ageFromYear (2000) возвращает (20)

// Решение задачи.

// Код для выдачи Codewars
function century(year) {
    return year % 100 == 0 ? (year/100) : Math.trunc(year/100) + 1;
}


century(1902);

