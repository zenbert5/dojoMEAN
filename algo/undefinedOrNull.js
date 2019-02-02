
var a = {}

console.log(a)

for (let i = 0; i <10; i++) {
    a[i] = {
        name: 'zebra',
        age: Math.floor((Math.random() * 20) + 1)
    }
    console.log(a[i])
}

console.log(a)