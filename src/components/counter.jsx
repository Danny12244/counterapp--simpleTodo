import React from "react";
import Tct from "./tct"
import './counter.css';

const Counter = () => {
  const [count, setCount] = React.useState(0);
  // console.log(count);
  function colorname (){
    if(count%2==0){
     return 'green'
    }
    else {
      return 'red'
    }

  }
  
  return (
    <>
    <div>
      <h1 className={colorname()}> {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count * 2)}>Double</button>
    </div>
    <br/>
    <br/>
     <Tct/>
    </>
  );
};

export { Counter };
