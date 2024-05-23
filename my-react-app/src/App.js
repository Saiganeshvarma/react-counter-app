import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(){
  var [counter,setCount] = useState(0)

  return (
    <div className='body'>
    <div className='wrapper'>
      <button className='minus' onClick={()=>{
        setCount(counter--)
      }}>-</button>
      <pr className="para">{counter}</pr>
      <button className='plus' onClick={()=>{
        setCount(counter++)
      }}>+</button>

      <button className='clear' onClick={()=>{
        setCount(0)
      }}>Clear</button>
      <button onClick={()=>{
        setCount(10)
      }}>setCount</button>
      <button onClick={()=>{
        alert(`your count is ${counter}`)
      }} >message</button>
    </div>
    </div>
  
  )
}
export default App