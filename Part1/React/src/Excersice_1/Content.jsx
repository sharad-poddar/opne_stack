import React from "react";

export default function Content({props}){

    return(

        // <p>
        //     {props.part} {props.exercises}
        // </p>
    
        <p>
            {props.name} {props.exercises}
        </p>
    )
}