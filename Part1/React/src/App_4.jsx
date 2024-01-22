import React from 'react';

export default function App_4(){
    
    //1. onChanging the state variable the page rerenders
    const [counter, setCounter] = React.useState(0);
    
    // const increment =()=>{
    //     setCounter(counter => counter+1);
    // }

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

    return(
        <div>
            <p>{counter}</p>
            {/* <button onClick={increment}>inc++</button> */}
        </div>
    )
}