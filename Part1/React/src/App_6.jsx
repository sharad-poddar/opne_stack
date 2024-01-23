import React from 'react'

export default function App_6(){
    
    //1. can be used in object
    // const [right, setRight] = React.useState(0);
    // const [left, setLeft] = React.useState(0);
    

    //1. it makes more simpler as an onject
    //2. { ...click } creates a new object that has copies of all of the properties of the clicks object
    //3. in click all properties comes but at last we have to eriteen the change properties or new prop overlap older one
    //4. never changes the properties direclty in state hooks
    const [click, setClick] = React.useState({
        left: 0,
        right: 0,
    });

    return(
        <div>
            <p>right: {click.right}</p>
            <p>left: {click.left}</p>

            <button onClick={()=>setClick({
                ...click,
                right: click.right+1,
            })}>right++</button>
            <button onClick={()=>setClick({
                ...click,
                left: click.left+1,
            })}>left++</button>
        </div>
    )
}