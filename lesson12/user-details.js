let url = new URL(location.href)
const id = url.searchParams.get('id')
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(response => response.json())
    .then(user => {
        const userDiv = document.createElement('div')
        const h2 = document.createElement('h2')
        h2.innerText = `Id: ${user.id} Name: ${user.name}`

        const h3 = document.createElement('h3')
        h3.innerText = `Username: ${user.username}`

        const p = document.createElement('p')
        p.innerText = `Email: ${user.email}`

        const address = document.createElement('address')

        const addressP = document.createElement('p')
        addressP.innerText = `Address: ${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`

        const geoP = document.createElement('p')
        geoP.innerText = `Geo: ${user.address.geo.lat} ${user.address.geo.lng}`
        address.append(addressP,geoP)

        const phone = document.createElement('p')
        phone.innerText = `Phone: ${user.phone}`

        const website = document.createElement('p')
        website.innerText = `Website: ${user.website}`

        const company = document.createElement('p')
        company.innerText = `Company name: ${user.company.name} `

        const catchPharse = document.createElement('p')
        catchPharse.innerText = `Catch Pharse: ${user.company.catchPhrase}`

        const bs = document.createElement('p')
        bs.innerText = `Bs: ${user.company.bs}`

        userDiv.append(h2,h3,p,address,phone,website,company, catchPharse,bs)
        document.body.append(userDiv)
    })