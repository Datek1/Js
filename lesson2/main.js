// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [1, 2, 356, true, false, 'Yura', -4, 7, 6, 5]
console.log(array[0], array[1], array[2], array[3], array[4], array[5], array[6], array[7], array[8], array[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {title: 'Вертіті', pageCount: 336, genre: 'Художня література'}
let book2 = {title: 'Лагідна війна', pageCount: 520, genre: 'Художня література'}
let book3 = {title: 'Дюна', pageCount: 176, genre: 'Комікси'}

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'Вертіті',
    pageCount: 336,
    genre: 'Художня література',
    author: [
        {
            name: 'Колін Гувер',
            age: 43
        }
    ]
}
let book5 = {
    title: 'Лагідна війна',
    pageCount: 520,
    genre: 'Художня література',
    author: [
        {
            name: 'Джулія Беррі',
            age: 55,
        }
    ]
}
let book6 = {
    title: 'Дюна',
    pageCount: 176,
    genre: 'Комікси',
    author: [
        {
            name: 'Браян Герберт',
            age: 75
        }
    ]
}
//  Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Yura', userName: 'Rudkevych', password: 'gdgs'},
    {name: 'Vasya', userName: 'Milenin', password: 'hghf'},
    {name: 'Bart', userName: 'Linkoln', password: 'khj4g'},
    {name: 'John', userName: 'Tura', password: 'gfvx5'},
    {name: 'Borya', userName: 'Numerov', password: 'nvbnv3'},
    {name: 'Sergiy', userName: 'Kavalec', password: '76765j'},
    {name: 'Natalia', userName: 'Ternova', password: '65hgg'},
    {name: 'Rita', userName: 'Balkon', password: 'hee646'},
    {name: 'Valik', userName: 'Kastet', password: '65jhds'},
    {name: 'Lyonya', userName: 'Kravchuk', password: '76jgd'},
]
console.log(users[0].password, users[1].password, users[2].password, users[3].password, users[4].password, users[5].password, users[6].password, users[7].password, users[8].password, users[9].password,);

// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 2
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let numberDay = 15;
if (numberDay >= 1 && numberDay <= 11) {
    console.log('Перша');
} else if (numberDay > 11 && numberDay <= 21) {
    console.log('Друга');
} else if (numberDay > 21 && numberDay <= 31) {
    console.log('Третя');
}

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 6;
if (time > 0 && time <= 14) {
    console.log('Перша');
} else if (time > 14 && time <= 28) {
    console.log('Друга')
} else if (time > 28 && time <= 44) {
    console.log('Третя');
} else if (time > 44 && time <= 59) {
    console.log('Четверта');
}

//Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let day = +prompt('Enter day')
switch (day) {
    case 1:
        console.log('Понеділок, 19.30 - Практика');
        break;
    case 2:
        console.log('Вівторок, 19.30 - Лекція');
        break;
    case 3:
        console.log('Середа, 19.30 - Практика');
        break;
    case 4:
        console.log('Четвер, 19.30 - Лекція');
        break;
    case 5:
        console.log('П`ятниця, 19.30 - Консультація');
        break;
    case 6:
        console.log('Субота, 15.30 - Англійська');
        break;
    case 7:
        console.log('Неділя, можна віддихати');
        break;
    default:
        console.log('Потрібно ввести число від 1 до 7')
}

// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let num1 = 1;
let num2 = -2;

if (num1 > num2) {
    console.log(num1);
} else if (num1 < num2){
    console.log(num2);
}else if(num1 === num2){
    console.log('Ці числа рівні');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let m = undefined
if (m = !!'fd' || !0 || !!undefined || !!null){
    m = 'default'
    console.log(m);
}

// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер');
}