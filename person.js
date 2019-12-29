// const person = {
//     name:'Rishabh',
//     age: 31
// }

// Module Wrapper Function
(function (exports, require, module, __filename__, __dirname) {

})

console.log(__dirname, __filename);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetings() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }

}
module.exports = Person;