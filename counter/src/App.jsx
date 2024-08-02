import { useState  } from 'react';
import './App.css'

function App() {

let  [counter , setCounter]  =  useState(0)

const addValue= ()=>{  
  if(counter !=20){
  counter = counter + 1
  setCounter(counter)
}else{
  alert("oopsssssss!!! , Limit reached.")
}
}
const removeValue=()=>{
  if(counter !=0){
  counter = counter - 1
  setCounter(counter)
}else{
  alert("ooppppssss!! , Don't click it.")
}
}

  
  return (
    <>
    <h1>chai aur pratik sharma</h1>
    <h2>counter value  : {counter}</h2>
    <button onClick={addValue}>Add value</button><br></br><br></br>
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
