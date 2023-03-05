// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктомo
const forma1 = document.forms.printUser
const printUsrBtn = document.getElementById('printUsr')
printUsrBtn.onclick = function (ev) {
    ev.preventDefault()
    const userDiv = document.createElement('div')
    userDiv.innerText = `Name - ${forma1.userName.value} Surname - ${forma1.surName.value} Age - ${forma1.userAge.value}`
    document.body.append(userDiv)
}
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

const counter = document.getElementById('counter')
window.addEventListener('load', function () {
    const count = +localStorage.getItem('i') + 1
    counter.innerText = count
    localStorage.setItem('i', count)
})

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
window.addEventListener('load', function () {
    const session = JSON.parse(localStorage.getItem('session')) || []
    session.push(JSON.stringify(Date()))
    localStorage.setItem('session', JSON.stringify(session))
})
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next


function users(name, surname) {
    const arrUsers = []
    for (let i = 1; i < 101; i++) {
        arrUsers.push(({name: name + i, surname: surname + i}))
    }
    return arrUsers
}

const arrUsers = users('name', 'surname');

// при завантажені сторінки з'являються перші 10 об'єктів.
for (let i = 0; i < 10; i++) {
    const divUser = document.createElement('div')
    divUser.classList.add('users')
    divUser.innerText = arrUsers[i].name + arrUsers[i].surname
    document.body.append(divUser)
}
// При натисканні next виводяться настпні 10 об'єктів
const nextBtn = document.getElementById('btn-next')
nextBtn.onclick = function (e) {
    if (+localStorage.getItem('for') >= 100) {
        localStorage.setItem('for', '0')
    } else {
        let bb = +localStorage.getItem('for')
        localStorage.setItem('for', bb + 10)
        const divs = document.getElementsByClassName('users')
        let index = 0
        for (let i = bb; i <= bb + 10; i++) {
            divs[index++].innerText = arrUsers[i].name + arrUsers[i].surname
        }
    }
}


// При натисканні prev виводяться попередні 10 об'єктів
const prevBtn = document.getElementById('btn-prev')
prevBtn.onclick = function () {
    if (+localStorage.getItem('for') <= 0) {
        localStorage.setItem('for', '0')
    } else {
        let bb = +localStorage.getItem('for')
        localStorage.setItem('for', bb - 10)
        const divs = document.getElementsByClassName('users')
        let index = 0
        for (let i = bb - 1; i >= bb - 10; i--) {
            divs[index++].innerText = arrUsers[i].name + arrUsers[i].surname

        }

    }
}

window.addEventListener('load', function () {
    localStorage.setItem('for', '0')
})


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


const creatingTable = document.createElement('form')
const inputRows = document.createElement('input')
inputRows.setAttribute('type', 'number')
inputRows.setAttribute('placeholder', 'Count Rows')

const inputColumn = document.createElement('input')
inputColumn.setAttribute('type', 'number')
inputColumn.setAttribute('placeholder', 'Count Column')

const btnTable = document.createElement('button')
btnTable.innerText = 'Send'

const value = document.createElement('input')
value.setAttribute('placeholder', 'enter value')

creatingTable.append(inputRows, inputColumn, value, btnTable)

document.body.append(creatingTable)

btnTable.onclick = function (ev) {
    ev.preventDefault()
    const table = document.createElement('table')
    for (let i = 0; i < inputRows.value; i++) {
        const tr = document.createElement('tr')
        table.append(tr)
        for (let i = 0; i < inputColumn.value; i++) {
            const td = document.createElement('td')
            td.innerText = value.value
            tr.append(td)
        }
    }
    document.body.append(table)
}