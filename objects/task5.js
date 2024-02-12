const users = [
    {
        name: 'John',
        email: 'john@gmail.com',
        age: 33
    },
    {
        name: 'Michael',
        email: 'michael@gmail.com',
        age: 23
    }
];

for (const {name,email,age} of users){
    console.log(`The user ${name} has ${email} email and ${age} years old`)
};