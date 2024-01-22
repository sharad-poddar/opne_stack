import React from 'react'

const Hello =(props)=>{
    const bornYear =()=>{
        const yearNow = new Date().getFullYear();
        console.log(yearNow - props.age)
        return yearNow - props.age; 
    }

    return(
        <div>
            <p>Hello {props.name} and you are {props.age} years old</p>
            <p>your birth year is {bornYear()}</p>
        </div>
    )    
}

const Hello_2 = ({props})=>{
    console.log(props);
    console.log(typeof(props));

    // destructing of object
    const {name, age} = props;

    // const name = props.name;
    // const age = props.age;

    // compact function arraow which returns
    const bornYear = () => new Date().getFullYear() - age;

    return(
        <div>
            <p>Hello {name} and you are {age} years old</p>
            <p>your age is {bornYear()}</p>
        </div>
    )    
}


export default function App_2(){
        
    const name = 'sharad';
    const age = 20;

    const intro = {
        name: 'sharad',
        age: 20,
    } 
    
    return(
        <div>
        <h1>Greetings</h1>
            <Hello name={name} age={age}/>
            <Hello_2 props={intro}/>
        </div>
    )
}