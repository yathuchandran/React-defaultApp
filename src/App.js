 
// import Counter from './Counter'
import { useState } from "react";
import {  } from "./Employee";

import Employee from "./Employee";


function App() {
  const [count,setCount]=useState(0)

  
  const addCount=()=>{
    setCount(count+1)
  }
    let emp =[{name:'nk' , age:14},
    {name:"steev",age:32},
    {name:'yathu',age:21}]
    return (
      <div className='App'>
        <button onClick={addCount}> add</button>
{
  emp.map((obj,index)=>{
    return (
      <Employee key={index} {...obj} />
    )

  })
}     </div>
    );  
}

export default App;
