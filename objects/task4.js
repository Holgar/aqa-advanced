const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 34
};

person.email = 'john@gmail.com';
delete person.age;
console.log(person);