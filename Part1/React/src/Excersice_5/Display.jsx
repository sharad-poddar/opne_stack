import React from 'react'

export default function Display(props){

    console.log(props);
    const {counter} = props;

    return(
        <div>
           <p>{counter}</p>
        </div>
    )
}