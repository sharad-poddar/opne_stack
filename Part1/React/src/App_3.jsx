import React from "react";

export default function App_3(props){
    console.log(props);
    let {counter} = props;

    // const increment=()=>{
    //     counter++;
    //     console.log(counter);
    // }

    return(
        <div>
            <p>{counter}</p>
            {/* <button onClick={increment}>inc++</button> */}
        </div>
    )
}