import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
  const data = useLoaderData()
  // const [data,setData] = useState(0)
  // useEffect(()=>{
  //    fetch('https://api.github.com/users/pratik2061')
  //    .then((response)=> response.json())
  //    .then(data=>{
  //     console.log(data);
  //     setData(data)
  //    })
  // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl mb-[10px] '>GitHub Followers : {data.followers}
    <img src={data.avatar_url} alt="Github_image" className='rounded-[30px] p-4 mx-auto text-center' width={300} />
    </div>
  )
}

export default GitHub

export const gitHubInfoLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/pratik2061')
  return response.json()
}