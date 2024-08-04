import { useState } from "react"

function App() {
 const [color,setcolor]= useState("olive")
  return (
<div className="w-full h-screen duration-500 " style={{backgroundColor : color}}>
   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-[16px]">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg text-white bg-white w-[80%] h-[50px] rounded-full px-[10px] py-[10px]">
      <button  className=" mx-[10px] outline-none px-[15px] border-none shadow-[3px_3px_10px_black] font-bold tracking-[1px] text-[18px] rounded-full" style={{backgroundColor:"red"}} 
      onClick={()=>setcolor("red")}
      >RED</button>
      <button className=" text-black mx-[10px] outline-none px-[15px] border-none shadow-[3px_3px_10px_black] font-bold tracking-[1px] text-[18px] rounded-full" style={{backgroundColor:"yellow"}} 
      onClick={()=>setcolor("yellow")}
      >YELLOW</button>
      <button className=" mx-[10px] outline-none px-[15px] border-none shadow-[3px_3px_10px_black] font-bold tracking-[1px] text-[18px] rounded-full" style={{backgroundColor:"green"}} 
      onClick={()=>setcolor("green")}
      >GREEN</button>
      <button className=" mx-[10px] outline-none px-[15px] border-none shadow-[3px_3px_10px_black] font-bold tracking-[1px] text-[18px] rounded-full" style={{backgroundColor:"blue"}} 
      onClick={()=>setcolor("blue")}
      >BLUE</button>
      <button className=" mx-[10px] outline-none px-[15px] border-none shadow-[3px_3px_10px_black] font-bold tracking-[1px] text-[18px] rounded-full" style={{backgroundColor:"olive"}} 
      onClick={()=>setcolor("olive")}
      >OLIVE</button>
      <button className=" mx-[10px] outline-none px-[15px] border-none shadow-[3px_3px_10px_black] font-bold tracking-[1px] text-[18px] rounded-full" style={{backgroundColor:"purple"}} 
      onClick={()=>setcolor("purple")}
      >PURPLE</button>
      <button className=" mx-[10px] outline-none px-[15px] border-none shadow-[3px_3px_10px_black] font-bold tracking-[1px] text-[18px] rounded-full" style={{backgroundColor:"black"}} 
      onClick={()=>setcolor("black")}
      >BLACK</button>
      <button  className=" mx-[10px] outline-none px-[15px] border-none shadow-[3px_3px_10px_black] font-bold tracking-[1px] text-[18px] rounded-full" style={{backgroundColor:"brown"}} 
      onClick={()=>setcolor("brown")}
      >BROWN</button>
    </div>

   </div>
</div>
  )
}

export default App
