
let person = {
    name: '',
    age: 0,
    isAdult: false
}

person.age = Math.floor((Math.random() * 30) + 1)

person.isAdult = person.age >= 18 ? true : false

console.log(`Person age is ${person.age} and is an adult: ${person.isAdult}`)


// ES6
var obj = {
    id: 42,
    counter: function counter() {
        setTimeout(() => {
            console.log(this.id)
        }, 1000)
    }
}

obj.counter()

