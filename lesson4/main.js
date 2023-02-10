// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function sRectagel(a, b) {
    return a * b
}

console.log(sRectagel(4, 5))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function sCircle(r) {
    return 3.14 * r ** 2
}
console.log(sCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function sCylinder(h, r) {
    return 2 * 3.14 * r * (h + r)
}

console.log(sCylinder(5, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент

let array = [1, 2, 3, 4, 5, 6, 7]

function outArray(array) {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}

outArray(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph() {
    document.write(`<p>${arguments[0]}</p>`)
}

createParagraph('Text')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUlElemenet() {
    document.write('<ul>')
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${arguments[0]}</li>`)
    }
    document.write('</ul>')
}

createUlElemenet('Text2')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createUl() {
    document.write('<ul>')
    for (let i = 0; i < arguments[1]; i++) {
        document.write(`<li>${arguments[0]}</li>`)
    }
    document.write('</ul>')
}

createUl('Text3', 6)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const array2 = [1, 'Text', true]

function createList(array) {
    document.write('<li>')
    for (const arrayElement of array) {
        document.write(`${arrayElement}`,' ')
    }
    document.write('</li>')
}

createList(array2)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users = [
    {id: 0, name: 'Ivan', age: 19},
    {id: 1, name: 'Yura', age: 22},
    {id: 2, name: 'Alex', age: 19},
]

function printUsers(array) {
    for (const arrayElement of array) {
        document.write('<div>')
        document.write(`<h2>${arrayElement.id}</h2>`)
        document.write(`<h2>${arrayElement.name}</h2>`)
        document.write(`<h2>${arrayElement.age}</h2>`)
        document.write('</div>')
    }
}

printUsers(users)

// - створити функцію яка повертає найменьше число з масиву
const arrayNumber = [5, 23, -564, 748, 5]

function findMinNum(array) {
    return Math.min(...array)
}

console.log(findMinNum(arrayNumber));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(array) {
    let summa = 0
    for (const arrayElement of array) {
        summa += arrayElement
    }
    return summa
}

console.log(sum(arrayNumber));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
        console.log(arr);
}

swap([11, 22, 33, 44], 3, 0)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            return sumUAH / currencyValue.value
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR'));

