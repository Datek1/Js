// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const sRectangle = (a, b) => a * b;
console.log(sRectangle(5, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const sCircle = (r) => 3.14 * r ** 2;
console.log(sCircle(5));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const sCylinder = (r, h) => 2 * 3.14 * r * (h + r);
console.log(sCylinder(5, 4));
// - створити функцію яка приймає масив та виводить кожен його елемент

const array = [1, 2, 3, 4, 5, 6, 7]

const outArray = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
};
outArray(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const createParagraph = (text) => {
    document.write(`<p>${text}</p>`)
};

createParagraph('Text')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const createUlElemenet = (text) => {
    document.write('<ul>')
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}

createUlElemenet('Text2')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const createUl = (number, text) => {
    document.write('<ul>')
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}

createUl(6, 'Text3')

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const array2 = [1, 'Text', true]

const createList = (array) => {
    document.write('<ul>')
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write('</ul>')
}

createList(array2)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const users = [
    {id: 0, name: 'Ivan', age: 19},
    {id: 1, name: 'Yura', age: 22},
    {id: 2, name: 'Alex', age: 19},
]

const printUsers = (array) => {
    for (const arrayElement of array) {
        document.write(`<div> ${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</div>`)
    }
}
printUsers(users)


// - створити функцію яка повертає найменьше число з масиву
const arrayNumber = [5, -555, 6, 1, 10]
const findMin = (arr) => {
    let minValue = arr[0]
    for (const minValueElement of arr) {
        if (minValueElement < minValue) {
            minValue = minValueElement
        }
    }
    return minValue
}
console.log(findMin(arrayNumber));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const summNumArr = (arr) => {
    let summa = 0
    for (const arrElement of arr) {
        summa += arrElement
    }
    return summa
}
console.log(summNumArr(arrayNumber));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    console.log(arr);
}
swap([11, 22, 33, 44], 0, 1)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            return sumUAH / currencyValue.value
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));


