// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone



function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
const users = [
    new User(1, 'Yura', 'Rudkevych', 'tttt@gmail.com', 1235),
    new User(2, 'Vasya', 'Lincoln', 'bbb@gmail.com', 6454),
    new User(3, 'Lida', 'Friday', 'yyy@ukr.net', 5345),
    new User(4, 'Tom', 'Skalska', 't7ugr@gmail.com', 6565),
    new User(5, 'Nick', 'Shevckenko', 'fvd6@gmail.com',),
    new User(6, 'Lisa', 'Kulakova', 'nnbfd@ua.com', 86585),
    new User(7, 'Bridget', 'Simpson', 'hhh@gmail.com', 74436),
    new User(8, 'Anna', 'Savin', 'jjj@gmail.com', 85865),
    new User(9, 'Ivan', 'Sokolov', 'uui@gmail.com', 7554745),
    new User(10, 'Petya', 'Robak', 'mmfd@gmail.com', 75474)
]
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)



class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
const Clients = [
    new Client(1, 'Yura', 'Rudkevych', 'tttt@gmail.com', 1235, ['milk', 'tea', 'coffee']),
    new Client(2, 'Vasya', 'Lincoln', 'bbb@gmail.com', 6454, ['beef', 'beer']),
    new Client(3, 'Lida', 'Friday', 'yyy@ukr.net', 5345, ['pizza', 'cheese', 'chicken', 'pie']),
    new Client(4, 'Tom', 'Skalska', 't7ugr@gmail.com', 6565, ['sandwich']),
    new Client(5, 'Nick', 'Shevckenko', 'fvd6@gmail.com', 6765, ['soda', 'cookies', 'cake', 'chocolate']),
    new Client(6, 'Lisa', 'Kulakova', 'nnbfd@ua.com', 86585, ['ice cream']),
    new Client(7, 'Bridget', 'Simpson', 'hhh@gmail.com', 74436, ['honey']),
    new Client(8, 'Anna', 'Savin', 'jjj@gmail.com', 85865, ['meal', 'water']),
    new Client(9, 'Ivan', 'Sokolov', 'uui@gmail.com', 7554745, ['apples', 'oranges']),
    new Client(10, 'Petya', 'Robak', 'mmfd@gmail.com', 75474, ['cucumbers', 'potatoes', 'tomatoes'])
]
console.log(Clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
Clients.sort((a, b) => a.order.length - b.order.length)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, brand, year, maxSpeed, engineCp) {
    this.model = model
    this.brand = brand
    this.year = year
    this.maxSpeed = maxSpeed
    this.engineCp = engineCp
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${maxSpeed}`)
    }
    this.info = function () {
        console.log(`model - ${model}, brand ${brand}, year - ${year}, maxspeed - ${maxSpeed}, engineCp - ${engineCp} `)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        console.log('Нова швидкість', maxSpeed + newSpeed);
    }
    this.changeYear = function (newValue) {
        console.log('Новий рік випуску', year = newValue);
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }
}

let car = new Car('M5', "BMW", 2017, 280, 4.8,);
car.drive()
car.info()
car.increaseMaxSpeed(5);
car.changeYear(6)
car.addDriver({name: 'Nick'})
console.log(car)


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class NewCar {
    constructor(model, brand, year, maxSpeed, engineCp) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCp = engineCp;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed}`);
    }

    info() {
        console.log(`model - ${this.model}, brand ${this.brand}, year - ${this.year}, maxspeed - ${this.maxSpeed}, engineCp - ${this.engineCp} `)
    }

    increaseMaxSpeed(newSpeed) {
        console.log('Нова швидкість', this.maxSpeed + newSpeed);
    }

    changeYear(newValue) {
        console.log('Новий рік випуску', this.year = newValue);
    }

    addDriver(driver) {
        this.driver = driver
    }
}

car = new NewCar('M5', "BMW", 2017, 280, 4.8,);
car.drive()
car.info()
car.increaseMaxSpeed(50)
car.changeYear(2022)
car.addDriver({name: 'John'})
console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Person {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

const cinderella = [
    new Person('Anna1', 22, 36),
    new Person('Anna2', 18, 34),
    new Person('Anna3', 33, 38),
    new Person('Anna4', 38, 35),
    new Person('Anna5', 25, 37),
    new Person('Anna6', 19, 39),
    new Person('Anna7', 19, 33),
    new Person('Anna8', 21, 36),
    new Person('Anna9', 43, 36),
    new Person('Anna10', 28, 36)
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.


class Prince {
    constructor(name, age, findedShoes) {
        this.name = name;
        this.age = age;
        this.findedShoes = findedShoes;
    }
}

const prince = new Prince('John', 20, 34)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const person of cinderella) {
    if (person.size === prince.findedShoes) {
        console.log(person);
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбекуa
console.log(cinderella.find(value => value.size === prince.findedShoes));