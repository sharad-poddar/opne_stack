import React from "react";

export default function History(props){
    
    const {allCount, array} = props;
    console.log(allCount);

    // if(array.length == 0){
    //     return(
    //         <div>
    //             the app is used by pressing the buttons
    //         </div>
    //     )
    // }
    
    // return(
    //     <div>
    //         button press history: {array.join(' ')}
    //     </div>
    // )

    
    //1. conditional rendering
    return(
    array.length?(
        <div>
            button press history: {array.join(' ')}
        </div>
    ) :(
        <div>
            the app is used by pressing the buttons
        </div>)

)}