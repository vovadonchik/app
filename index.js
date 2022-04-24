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