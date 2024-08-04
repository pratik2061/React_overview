import { useState , useCallback,useEffect, useRef} from "react"

function App() {
  const [length,setlength] = useState(8)
  const [numberAllow,setNumebrAllow] = useState(false)
  const [characterAllow,setCharacterAllow] = useState(false)
  const [password,setPassword] = useState("")
  
  //ref hook 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXabcdefghijklmnopqrstuvwx"

    if(numberAllow) str +="0123456789"
    if(characterAllow) str +="!@#$%^&*():><?][`~_-+" 
    for(let i=1;i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
       pass += str.charAt(char)
    }

    setPassword(pass)

  },[length,numberAllow,characterAllow,setPassword])
  
  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(()=>{
  passwordGenerator()
},[length,numberAllow,characterAllow,passwordGenerator])
   return (
          <>
          <div className="w-full max-w-lg mx-auto shadow-2xl rounded-lg px-4 my-8 text-white bg-gray-600">
            <h1 className="w-full text-center py-[10px] text-2xl">Password Generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
              <input 
              type="text"
              value={password}
              placeholder="password"
              className="outline-none text-black w-full py-2 px-3 h-[35px]"
              readOnly
              ref={passwordRef}
              />
              <button
              onClick={copyPassword} className="bg-blue-600 px-[15px] font-bold hover:bg-blue-800">Copy</button>
            </div>
            <div className="flex text-md gap-x-2 h-[50px]">
              <div className="flex items-center gap-x-1">
                    <input 
                    type="range"
                    min={8}
                    max={50}
                    value={length}
                    className="cursor-pointer"
                    onChange={(e)=>{setlength(e.target.value)}}
                    />
                    <label>Lenght : {length}</label>
              </div>
             <div className="flex items-center gap-x-1">
              <input
               type="checkbox"
               defaultChecked = {numberAllow}
               id="numberInput"
               onChange={()=>{
                setNumebrAllow((prev)=>!prev)
               }}
               />
               <label id="numberInput">Numbers</label>
             </div>
             <div className="flex items-center gap-x-1">
              <input
               type="checkbox"
               defaultChecked = {characterAllow}
               id="characterInput"
               onChange={()=>{
                setCharacterAllow((prev)=>!prev)
               }}
               />
               <label id="characterInput">Character</label>
             </div>
            </div>
          </div>
          </>
  )
}

export default App
