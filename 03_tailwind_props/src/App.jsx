import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
let myObj = {
  name : "pratik sharma",
  age : 20
}
  return (
    <>
        <h1 className="text-3xl font-bold underline mb-[10px]">
    Hello world!
  </h1>
         
<Card userName = "chai aur code" someobject = {myObj}/>
  </>

  )
}

export default App
