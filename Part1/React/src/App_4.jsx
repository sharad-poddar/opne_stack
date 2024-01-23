import React from 'react';

export default function App_4(){
    
    //1. onChanging the state variable the page rerenders
    const [counter, setCounter] = React.useState(0);
    
    const increment =()=>{
        setCounter(counter => counter+1);
    }

    //1. it will create huge problem as there is overlapping of infinite intervals
    // const intervalId = setInterval(()=>{
    //  setCounter(counter=>counter+1);  
    //  if(counter == 5){
    //     clearInterval(intervalId);
    //  } 
    // }, [5000])

    //1. it will also an infinite loop as again again satte changes it will run
    //2. there is no overlapping
    // setTimeout(()=>setCounter(counter=>counter+1), 5000);

    console.log(counter);


    //1. on directly written of setCounter() then it makes rerendering of pages again and again
    //2. onClick is eventhandler, increment is refrence of function
    //3. proper way ()=>{setCounter(counter+1)}
    return(
        <div>
            <p>{counter}</p>
            <button onClick={increment}>inc++</button>
            <button onClick={()=>{setCounter(0)}}>set it to zero</button>
        </div>
    )
}