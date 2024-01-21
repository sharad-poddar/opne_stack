import React from "react";

export default function Footer(props){
    return(
        // number converts the string into int
        <p>Number of exercises {Number(props.exercises1) + Number(props.exercises2) + Number(props.exercises3)}</p>
    )
}