'use strict';

// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

function getEvenNumbers(start, end) {
    let evenNumbers = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}

console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
console.log(getEvenNumbers(8, 8));
console.log(getEvenNumbers(7, 7));
console.log(getEvenNumbers());



// Напишите функцию isEven, которая принимает число в качестве аргумента и возвращает true, если число чётное, и false, если нечётное.

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));  // true  
console.log(isEven(5));  // false


// Создайте функцию sumArray, которая принимает массив чисел и возвращает их сумму.

function sumArray(arr) {
    
    let totalSum = 0;

    for (let i = 0; i <= arr.length; i++) {
        totalSum += i;
    }
    return totalSum;
}

console.log(sumArray([1, 2, 3, 4]));  // 10  
console.log(sumArray([-1, -2, -3]));  // -6


// Напишите функцию isPalindrome, которая принимает строку и проверяет, является ли она палиндромом (читается одинаково слева направо и справа налево).