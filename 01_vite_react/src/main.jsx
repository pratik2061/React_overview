import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h2>Cutsom app</h2>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
   <>
    <App />
    </>
)
