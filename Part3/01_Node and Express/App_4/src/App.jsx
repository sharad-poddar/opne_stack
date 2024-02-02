import React from "react";
import axios from 'axios';


export default function App(){

  const [data, setData] = React.useState([]);

  const getData = async()=>{
    try{
      const data = await axios.get('http://localhost:3000/api/phonebook');
      console.log(data);
      setData(data.data);
    }catch(error){
      console.log(error);
    }
  }

  React.useEffect(()=>{
    getData();
  },[])


  return(
    <div>
      <h1>Phone Diary</h1>
      {
        data.map(({id, name, number}, index)=>{
          return(<div key={index}>
            <h2>id: {id}</h2>
            <p>name: {name}</p>
            <p>number: {number}</p>
          </div>)
        })
      }
    </div>
  )
}


// npm i axios
// Same origin policy and CORS
// The issue lies with a thing called same origin policy. 
// A URL's origin is defined by the combination of protocol (AKA scheme), hostname, and port.
// http://example.com:80/index.html
// protocol: http
// host: example.com
// port: 80

