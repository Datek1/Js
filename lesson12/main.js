// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            const userUl = document.createElement('ul')
            const userLi = document.createElement('li')
            userLi.innerText = `${user.id} ${user.name}`
            userUl.append(userLi)
            const aUser = document.createElement('a')
            aUser.innerText = 'link' + user.id
            aUser.href = 'user-details.html?id='+JSON.stringify(user.id)
            document.body.append(userUl, aUser)
        }
    })

// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
