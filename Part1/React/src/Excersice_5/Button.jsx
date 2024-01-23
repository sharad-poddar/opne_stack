import React from 'react'


export default function Button(props){

    console.log(props);
    const {text, refrenceFunction} = props;

    return(
        <button onClick={refrenceFunction}>{text}</button>
    )
}