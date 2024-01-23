// passing the state to child react components from parent one
import React from 'react'
import Display from './Excersice_5/Display';
import Button from './Excersice_5/Button';

export default function App_5(){
    
    const [counter, setCounter] = React.useState(0);
    
    const increaseByOne = ()=>{
        setCounter(counter+1);
    }

    const setToZero = ()=>{
        setCounter(0);
    }

    const decreseByOne = ()=>{
        setCounter(counter-1);
    }

    //1. components will re-render on changing state
    //2. here our Button component make to be reusable for different functions
    //3. naming of eventHandel function by hadel_something
    return(
    <div>
        <Display counter={counter}/>
        <Button text={'increment'} refrenceFunction={increaseByOne}/>
        <Button text={'set it to zero'} refrenceFunction={setToZero}/>
        <Button text={'decrement'} refrenceFunction={decreseByOne}/>
    </div>
    )
}