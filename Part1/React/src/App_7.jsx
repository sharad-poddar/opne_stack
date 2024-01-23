import React from 'react'
import History from './Excersice_7/History';

export default function App_7(){
    
    const [left, setLeft] = React.useState(0);
    const [right, setRight] = React.useState(0);
    const [allClicks, setAllClicks] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    console.log(total);

    console.log(allClicks); 

    //1. here push is not working, concat acts as push here
    //2. here push is working for numbers not string
    const handelClickLeft=()=>{
        // here concat retruns the new array
        setAllClicks(allClicks.concat('L'));
        console.log('you clicked Left');
        setLeft(left+1);
        setTotal(left+right+1);
    }
    const handelClickRight=()=>{
        // here push changes the old array which doest not re-render the page
        const num = allClicks.push('R');
        console.log('you clicked Right');
        // console.log(num);
        setAllClicks(allClicks);
        setRight(right+1);
        setTotal(left+right+1);
    }
    
    return(
        <div>
            <button onClick={handelClickLeft}>L</button>
            <button onClick={handelClickRight}>R</button>
            <p>{allClicks.join('  .. ')}</p>
            <History allCount={total} array={allClicks}/>
        </div>
    )
}

//1. join used to give the gap or anything between the consectuive elemnt os array
//2. it joins the item in single string with chracter we gave
//3. onClicking when the button function is full done then only component re-renders