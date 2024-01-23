import React from 'react'

//returning function in function on event call

export default function App_8(){
    const [value, setValue] = React.useState(10)

    const hello = (who) => {
        const handler = () => {
          console.log('hello', who)
        }
        return handler
      }
    
  
    // indireclty in button there is () => console.log('hello worl');
    return (
      <div>
        {value}
        <button onClick={hello('sharad')}>button</button>
      </div>
    )
}