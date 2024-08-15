module.exports = function toReadable(number) {
    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundreds = "hundred";

    if (number === 0) return "zero";

    let result = "";

    // Обрабатываем сотни
    if (Math.floor(number / 100) > 0) {
        result += ones[Math.floor(number / 100)] + " " + hundreds;
        number %= 100;
    }

    // Обрабатываем числа от 10 до 19
    if (number >= 10 && number < 20) {
        if (result !== "") result += " ";
        result += teens[number - 10];
        return result;
    }

    // Обрабатываем десятки
    if (Math.floor(number / 10) > 0) {
        if (result !== "") result += " ";
        result += tens[Math.floor(number / 10)];
        number %= 10;
    }

    // Обрабатываем единицы
    if (number > 0) {
        if (result !== "") result += " ";
        result += ones[number];
    }

    return result;
};
