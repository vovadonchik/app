const myBosik = {
    krasiviy: true,
    friends: 'Vovchina, Levani',
    city: 'Moscow',
    cityGreeting() {
        console.log('Privet Bosik')
    }
}

myBosik1 = myBosik

myBosik1.mDenchik = 'kakashka'

const name = 'Vovan'
const serName = 'Kiselov'

const vovadonchik = {
    name,
    serName,
    age: 26
}

console.table(vovadonchik)

console.table(myBosik1)

myBosik.cityGreeting()