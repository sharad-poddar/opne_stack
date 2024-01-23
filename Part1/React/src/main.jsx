import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App_1 from './App_1.jsx'
import App_2 from './App_2.jsx'
import App_3 from './App_3.jsx'
import App_4 from './App_4.jsx'
import App_5 from './App_5.jsx'

// let counter = 1;
// console.log(counter);

const root = ReactDOM.createRoot(document.getElementById('root'));

// const refresh =() => {root.render(
//   <App_3 counter={counter}/>
// )}

// // refresh();
// // counter+=1;
// // refresh();
// // counter+=1;
// // refresh();


// refresh();
// // rendering after every 5 second, it will be an infinite loop
// // clear interval will clear or the infinte loop on given condtion
// const intervalId = setInterval(()=>{
//   counter++;
//   refresh();
//   if(counter==5){
//     clearInterval(intervalId);
//   }
// },5000)

// console.log(intervalId);
// console.log(counter);


root.render(<App_5/>);