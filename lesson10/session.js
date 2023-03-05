// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
function print(){
    const arrayVisited = JSON.parse(localStorage.getItem('session'))
    for (const element of arrayVisited) {
        const divSesion = document.createElement('div')
        divSesion.innerText = element
        document.body.append(divSesion)
    }
}
print()