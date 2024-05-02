// let header = document.createElement('h1')

// function makeGold() {
//     header.style.color = 'gold'
// }

// makeGold ()

// function sayHello() {
//     console.log('Hello World')

// }

// const sayHello = () => {
//     console.log('Hello World')
// }
// sayHello () // Logs 'Hello World'

// function add(number1, number2) {
//     console.log(number1 + number2)
// }
// add (6, 4)
// add (5, 10)

// function add(number1, number2) {
//     return number1 + number2
// }

// let sum_1 = add (6,4) 
// let sum_2 = add(sum_1, 5)
// console.log(sum_2)

// let isTeenager;
// let age = 15
// if(12 < age && age < 20) {
//     isTeenager = true;
// } else {
//     isTeenager = false;
// }
// console.log(isTeenager)

function one(){}
function two(callback) {
    console.log (callback)
}
two(one)