const objectA = {
    a: 10,
    b: true
}

objectA.d = true

const copy0fA = objectA

copy0fA.c = 25

console.log(copy0fA)

_______________________________________
const myCity = {
    city: 'Kiev'
}

myCity['popular'] = true

console.log(myCity)

const country = 'Marganets'

myCity[country] = 'Ukraine'

console.log(myCity)

_______________________________________
const myUkraine = {
    "userId": 1,
    "id": 1,
    "title": "Test title",
    "status": {
        "completed": false
    }
}

console.log(myUkraine)

_______________________________________
const person = {
    name: 'Vladimir',
    age: 26
}

const person2 = JSON.parse(JSON.stringify(person))

person2.name = 'Bob'

console.log(person2)
console.log(person)

_______________________________________
const person = {
    name: 'Vladimir',
    age: 26
}

const person2 = {...person}

person2.name = 'Bob'

console.log(person2)
console.log(person)

_______________________________________
let a = 130
let b = 244
let c = 100

function sum(a, b, c) {
    const d = a + b - c
    console.log(d)
}

sum (a, b, c)

a = 8
b = 12
c = 2

sum(a, b, c)

_______________________________________
const myBosik = {
    name: 'Antoshka',
    age: 28
}

function increasePersonAge (bosik) {
    const updatePerson = Object.assign({}, bosik)
    updatePerson.age += 1
    return updatePerson
}

const updatedPersonOne = increasePersonAge(myBosik)
console.log(myBosik.age)
console.log(updatedPersonOne.age)