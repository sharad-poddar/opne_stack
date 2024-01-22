// Object methods and this

const arto = {
    name: 'sharad poddar',
    age: 35,
    education: 'PHD',
    greet: function(){
        console.log('hi i am welcoming you to comme here!', this.name);
    },
    doAdittion: function(a,b){
        console.log(a+b);
    }
}

arto.greet(); // calling the function
arto.doAdittion(1,2);
// we can make refrence of function also
const referenceFunction = arto.doAdittion;
referenceFunction(2,3);
// in the refrence variable the value it takes is globaly so here this.name is undefined
const refrenceGreetFunction = arto.greet;
refrenceGreetFunction(); 

// here also the this.name is global varibale so undeinfed
// it will takes 1000ms means 1s
setTimeout(arto.greet, 1000)
// here this repesent to object
setTimeout(arto.greet.bind(arto), 1000)


// methods can be assign
// function is used instead of ()=>
arto.growOlder=function(){ 
    this.age+=10;
    console.log(this.age)
}
console.log(arto.age);
arto.growOlder();
console.log(arto.age);



