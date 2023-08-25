function Person() {
    this.name = 'John';
    this.age = 23;

    this.greet = function() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
}

const person = new Person();
person.greet();