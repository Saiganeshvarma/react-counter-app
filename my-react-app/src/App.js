import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(){
  let [counter,setCounter] = useState(0)


  return(
    <div className="wrapper">
      <button className="minus" onClick={()=>{
        setCounter(counter--)

      }}>-</button>
      <pr>{counter}</pr>
      <button className="plus"onClick={()=>{
        setCounter(counter++)

      }} >+</button>
    </div>
  )
}
export default App