window.addEventListener('DOMContentLoaded', () => {
	
});	

let obj = {
    name: 'Aleks',
    age: 25,
}

function testRestWithObject(...args){
    console.log(args);
}

console.log(testRestWithObject(obj))
console.log(testRestWithObject(obj, obj, obj))


console.log('/////////////////////////////////////////')

console.log(window)
console.log(globalThis)


window.sayHi = function() {
    alert('Hello')
}
sayHi()
window.sayHi()

console.log('/////////////////////////////////////////')

var foo = 'Aleks';
var foo = 'Gosho';

// let foo = 'Aleks';
// let foo = 'Gosho'; Няма как да се смени 
// foo = 'Gosho' така може да се смени стойността

console.log(foo)

console.log('/////////////////////////////////////////')

{
    let message = 'Hello let';
    alert(message);
}

{
    var message = 'Hello var';
    alert(message);
}

console.log('/////////////////////////////////////////')

for(let i = 0; i < 3; i++){
    console.log(i);
}
console.log(i);



for(var i = 0; i < 3; i++){
    console.log(i);
}
console.log(i);

console.log('/////////////////////////////////////////')

function sayHiBye(fitstName, lastName) {
    function generateFullName() {
        return `${fitstName} ${lastName}`
    }
    console.log(`Hello, ${generateFullName()}!`);
    console.log(`Bye, ${generateFullName()}!`);
}
console.log(sayHiBye('Simeon', 'Nikolov'))

console.log('/////////////////////////////////////////')

function makeCountre() {
    let count = 0;

    return function() {
        return count++;
    }
}
let countre = makeCountre();
let countre2 = makeCountre();

console.log(makeCountre())
console.log(countre())
console.log(countre())
console.log(countre())
console.log(countre())
console.log(countre())
console.log(countre2())
console.log(countre2())
console.log(countre2())

console.log('/////////////////////////////////////////')

{
    let message = 'Hi';
    {
        let message = 'Bye';
        console.log(message);
    }
    console.log(message);
}

console.log('/////////////////////////////////////////')

let message1 = 'Hello';
function sayHello(){
    console.log(message1);
}


message1 = 'Bye';
function sayBye(){
    console.log(message1);
}

console.log(sayBye())
console.log(sayHello())