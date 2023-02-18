// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world'
let str2 = 'lorem ipsum'
let str3 = 'javascript is cool'
console.log(str1.length, str2.length, str3.length);
// - Перевести до великого регістру наступні стрінгові значення
console.log(str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
let str4 = 'HELLO WORLD'
const str5 = 'LOREM IPSUM'
const str6 = 'JAVASCRIPT IS COOL'
console.log(str1.toLowerCase(), str2.toLowerCase(), str3.toLowerCase());

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
console.log(str.replaceAll(' ', ''));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const stringToArray = (str) => str.split(' ');
console.log(stringToArray(str));

// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
console.log(arr.map(value => value + ''));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];

function sortNums(arr, direction) {
    const sorting = arr.sort((a, b) => {
        if (direction) {
            return a - b
        } else {
            return b - a
        }
    })
    return sorting
}

console.log(sortNums(nums, true));
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log(coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, title: value.title, monthDuration: value.monthDuration}
}));


// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// описати колоду карт (від 6 до туза без джокерів)
const cards = [
    {name: '6', cardSuite: 'spade', color: 'black'},
    {name: '6', cardSuite: 'clubs', color: 'black'},
    {name: '6', cardSuite: 'diamond', color: 'red'},
    {name: '6', cardSuite: 'hearts', color: 'red'},
    {name: '7', cardSuite: 'spade', color: 'black'},
    {name: '7', cardSuite: 'clubs', color: 'black'},
    {name: '7', cardSuite: 'diamond', color: 'red'},
    {name: '7', cardSuite: 'hearts', color: 'red'},
    {name: '8', cardSuite: 'spade', color: 'black'},
    {name: '8', cardSuite: 'clubs', color: 'black'},
    {name: '8', cardSuite: 'diamond', color: 'red'},
    {name: '8', cardSuite: 'hearts', color: 'red'},
    {name: '9', cardSuite: 'spade', color: 'black'},
    {name: '9', cardSuite: 'clubs', color: 'black'},
    {name: '9', cardSuite: 'diamond', color: 'red'},
    {name: '9', cardSuite: 'hearts', color: 'red'},
    {name: '10', cardSuite: 'spade', color: 'black'},
    {name: '10', cardSuite: 'clubs', color: 'black'},
    {name: '10', cardSuite: 'diamond', color: 'red'},
    {name: '10', cardSuite: 'hearts', color: 'red'},
    {name: 'Jack', cardSuite: 'spade', color: 'black'},
    {name: 'Jack', cardSuite: 'clubs', color: 'black'},
    {name: 'Jack', cardSuite: 'diamond', color: 'red'},
    {name: 'Jack', cardSuite: 'hearts', color: 'red'},
    {name: 'Queen', cardSuite: 'spade', color: 'black'},
    {name: 'Queen', cardSuite: 'clubs', color: 'black'},
    {name: 'Queen', cardSuite: 'diamond', color: 'red'},
    {name: 'Queen', cardSuite: 'hearts', color: 'red'},
    {name: 'King', cardSuite: 'spade', color: 'black'},
    {name: 'King', cardSuite: 'clubs', color: 'black'},
    {name: 'King', cardSuite: 'diamond', color: 'red'},
    {name: 'King', cardSuite: 'hearts', color: 'red'},
    {name: 'Ace', cardSuite: 'spade', color: 'black'},
    {name: 'Ace', cardSuite: 'clubs', color: 'black'},
    {name: 'Ace', cardSuite: 'diamond', color: 'red'},
    {name: 'Ace', cardSuite: 'hearts', color: 'red'},
]
//     - знайти піковий туз

console.log(cards.filter(value => {
    if (value.name === 'Ace' && value.cardSuite === 'spade') {
        return value
    }
}));

// - всі шістки
console.log(cards.filter(value => value.name === '6'));

// - всі червоні карти

console.log(cards.filter(value => value.color === 'red'));


// - всі буби
console.log(cards.filter(value => value.cardSuite === 'diamond'));

// - всі трефи від 9 та більше
console.log(cards.filter(value => value.cardSuite === 'clubs' && value.name !== '9' && value.name !== '8' && value.name !== '7' && value.name !== '6'));
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

const packing = cards.reduce((previousValue, currentValue) => {
    if (currentValue.cardSuite === 'spade') {
        previousValue.spades.push(currentValue)
    }
    if (currentValue.cardSuite === 'diamond') {
        previousValue.diamonds.push(currentValue)
    }
    if (currentValue.cardSuite === 'hearts') {
        previousValue.hearts.push(currentValue)
    }
    if (currentValue.cardSuite === 'clubs') {
        previousValue.clubs.push(currentValue)
    }
    return previousValue
}, {spades: [], diamonds: [], hearts: [], clubs: []})
console.log(packing);

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

const docker = coursesArray.filter(value => value.modules.includes('docker'))
console.log(docker);
const sass = coursesArray.filter(value => value.modules.includes('sass'))
console.log(sass);