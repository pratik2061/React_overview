import React from 'react'
import { useState,useContext } from 'react'
import userContext from '../context/userContext'

function Login() {
    const [username,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const {setUser} = useContext(userContext)
    const HandleSubmit= (e)=>{
         e.preventDefault()
         setUser({username,password})
    }
  return (
    <div style={{}}>
        <h2>Login</h2>
        <input type="text" style={{marginRight:30, height:30,padding:10,borderRadius:10,border:0}}
        value={username}
        onChange={(e)=>{
             setUserName(e.target.value)
        }}
        placeholder='Username' />
        <input type="password" style={{marginRight:30, height:30,padding:10,borderRadius:10,border:0}}
        value={password}
        onChange={(e)=>{
         setPassword(e.target.value)
        }}
        placeholder='password'/>
        <button onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Login