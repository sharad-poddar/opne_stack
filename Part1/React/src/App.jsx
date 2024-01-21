import React from 'react'

//1. component is defined in the javascript and export
//2. import something from 'App.jsx' means it will be default means here component
//3. component can be defined in arraow, simple functions.
//4. name of component should start from capital letter.
//5. component must have one parent element
//6. never render objects in react component

// export default function App(){
//   return(
//     <div>
//       <h1>hello world</h1>
//     </div>
//   )
// }

const App = ()=>{

  // functions may contains the js functions, logics
  // code embedded in {} consider as js logic or code or defined variables which dynimcally page
  // react compilation is handeled by Babel
  // every tag needs to be closed like xml

  console.log('hello sharad');

  const now = new Date();
  const a=10;
  const b=20;
  console.log(a,b);

  const name = 'naman';
  const friends = [
    {name: 'sharad', age: 20},
    {name: 'naman', age: 20}
  ]

  // aray can be rendered direclty but result is not good
  const frie = ['maya', 'sanjay'];

  return(
    <div>
      <p>sharad poddar, {now.toString()}</p>
      <p>a plus b is {a+b}</p>
      <Hello name={name}/>
      <p>name: {friends[0].name} and age: {friends[0].age}</p>
      <p>name: {friends[1].name} and age: {friends[1].age}</p>
      <Hello/>
      {frie}
    </div>
  )
}

export default App;


// compoent is used upward, it can be export also
// it can be used multiple times
// here props comes in object we can use them by destructing as {}
const Hello = (props)=>{
  
  console.log(props.name);
  return(
    <div>
      <p>hello</p>
      <p>{props.name}</p>
    </div>
  )
}