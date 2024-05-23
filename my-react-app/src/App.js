import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(){
  var [counter,setCount] = useState(0)

  return (
    <div className='wrapper'>
      <button className='minus' onClick={()=>{
        setCount(counter--)
      }}>-</button>
      <pr>{counter}</pr>
      <button className='plus' onClick={()=>{
        setCount(counter++)
      }}>+</button>

      <button onClick={()=>{
        setCount(0)

      }}>Clear</button>
    </div>
  )
}
export default App