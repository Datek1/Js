//Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//Вивести кожну змінну за допомогою: console.log
let let1 = 'hello';
let let2 = 'owu';
let let3 = 'com';
let let4 = 'ua';
let let5 = 1;
let let6 = 10;
let let7 = -999;
let let8 = 123;
let let9 = 3.14;
let let10 = 2.7;
let let11 = 16;
let let12 = true;
let let13 = false;
console.log(let1, let2, let3, let4, let5, let6, let7, let8, let9, let10, let11, let12, let13);

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Yura';
let midleName = 'Ivanovych';
let lastName = 'Rudkevych';
let person = `${firstName} ${midleName} ${lastName}`;
console.log(person);
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a, typeof b, typeof c);
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('Enter your Name')
let surName = prompt('Enter Surname')
let age = prompt('Enter your age')
console.log(name, surName, +age);