 
import { useState } from "react";
import Counter from './Counter'
function App() {
  const [count,setCount]=useState(0)

  
  const addCount=()=>{
    setCount(count+1)
  }
    let obj={
      title:'1st counter',
      count
    }
    return (
      <div className='App'>
        <button onClick={addCount}> add</button>
        <Counter  {...obj} />
        <Counter  title='2nd Counter' count={obj.count} />

      </div>
    );  
}

export default App;
