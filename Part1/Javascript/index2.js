class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log('welcoming to the classes');
    }
}

// here adam is instance of class as an object contains name  and age
const adam = new Person('sharad',20);
console.log(adam);
adam.greet();

const admin = new Person('naman',20);
console.log(admin);
admin.greet();

// typeof object in js is object
console.log(typeof(adam));



const intro = {
    name: 'sharad',
    age: 20,
}
console.log(intro);
console.log(typeof(intro));

