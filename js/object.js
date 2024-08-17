// Создайте объект "Человек" с такими свойствами: имя, фамилия, возраст, пол.
// Добавьте методы "представиться" и "рассказать о себе", которые выводят в консоль информацию об объекте.
// Создайте два объекта "Человек" и вызовите их методы.

// const user1 = {
//     name: 'Helen',
//     surname: 'Dicaprio',
//     age: 27,
//     gender: 'female',

//     introduse() {
//         console.log(`Hello, my name is ${this.name} ${this.surname}`)
//     },

//     tellAbout() {
//         console.log(`I'm ${this.age} years old. My gender is ${this.gender}`);
//     },
// };


// const user2 = {
//     name: 'Vlad',
//     surname: 'Scovoroda',
//     age: 34,
//     gender: 'male',

//     introduse() {
//         console.log(`Hello, my name is ${this.name} ${this.surname}`)
//     },

//     tellAbout() {
//         console.log(`I'm ${this.age} years old. My gender is ${this.gender}`);
//     },
// };


// user1.introduse();
// user1.tellAbout();

// user2.introduse();
// user2.tellAbout();



// Объект "Книга":

// Создайте объект "Книга" со следующими свойствами: название, автор, год издания, количество страниц.
// Добавьте метод "showInfo", который выводит в консоль всю информацию о книге.
// Создайте несколько объектов "Книга" и вызовите их метод "showInfo".

// const books = {
//     name: 'Last Kingdom',
//     author: 'Dave Treton',
//     year: 1987,
//     page: 389,

//     showInfo() {
//         console.log(books);
//     }
// }

// const books2 = {
//     name: 'About Nature',
//     author: 'Olly Peterson',
//     year: 2009,
//     page: 290,

//     showInfo() {
//         console.log(books2);
//     }
// }

// books.showInfo()
// books2.showInfo()





// Объект "Автомобиль":

// Создайте объект "Автомобиль" со свойствами: марка, модель, год выпуска, цвет, пробег.
// Добавьте метод "updateMileage", который увеличивает пробег автомобиля на указанное значение.
// Создайте несколько объектов "Автомобиль", вызовите их метод "updateMileage" и выведите в консоль обновленный пробег.

// const car = {
//     make: 'Toyota',
//     model: 'VS23',
//     year: 2010,
//     color: 'red',
//     mileage: 3000,


//     updateMileage(numberForUpdate) {
//         return this.mileage += numberForUpdate;
//         }
    
// }

// const car2 = {
//     make: 'Nissan',
//     model: 'Juke',
//     year: 2015,
//     color: 'grey',
//     mileage: 8000,


//     updateMileage(numberForUpdate) {
//         return this.mileage += numberForUpdate;
//         }
    
// }

// const car3 = {
//     make: 'Mercedes',
//     model: 'GH00',
//     year: 2020,
//     color: 'white',
//     mileage: 5000,


//     updateMileage(numberForUpdate) {
//         return this.mileage += numberForUpdate;
//         }
    
// }

//     console.log(car.updateMileage(1000));
//     console.log(car2.updateMileage(2500));
//     console.log(car3.updateMileage(5000));


// Объект "Студент":

// Создайте объект "Студент" со свойствами: имя, фамилия, возраст, средний балл.
// Добавьте метод "повысить средний балл", который увеличивает средний балл студента на указанное значение.
// Создайте несколько объектов "Студент", вызовите их метод "повысить средний балл" и выведите в консоль обновленный средний балл.

const student = {
    name: 'Vasyl',
    surname: 'Vyshnevuy',
    age: 19,
    score: 73,

    increaseAverageScore(num) {
        return `Dear ${this.name} your average score is ${this.score += num}`;
    }

};

const student2 = {
    name: 'Met',
    surname: 'Damon',
    age: 21,
    score: 93,

    increaseAverageScore(num) {
        return `Dear ${this.name} your average score is ${this.score += num}`;
    }

};

const student3 = {
    name: 'Iryna',
    surname: 'Lipenina',
    age: 18,
    score: 68,

    increaseAverageScore(num) {
        return `Dear ${this.name} your average score is ${this.score += num}`;
    }

};

console.log(student.increaseAverageScore(8));
console.log(student2.increaseAverageScore(12));
console.log(student3.increaseAverageScore(3));


// Объект "Банковский счет":

// Создайте объект "Банковский счет" со свойствами: номер счета, владелец, баланс.
// Добавьте методы "внести средства" и "снять средства", которые изменяют баланс счета.
// Создайте несколько объектов "Банковский счет", вызовите их методы и выведите в консоль обновленный баланс.
