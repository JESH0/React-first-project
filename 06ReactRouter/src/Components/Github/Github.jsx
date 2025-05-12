import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'



const Github = () => {
const data = useLoaderData();

//  const [data, setData] = useState([])
  
// useEffect(() => {
//   fetch('https://api.github.com/users/JESH0')
//   .then(Response=> Response.json())
//   .then( data => {
//     setData(data)
   
//   })
 
 
//  }, [])
 
 

  return (
  <div  className='flex gap-7 p-8'>

    <img  src={data.avatar_url} alt="Jesh_IMG" height={100} width={150} />
    <div>Followers : {data.followers}
     <div> author : {data.login}</div>
     <div>Id : {data.id}</div>
    </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const Response = await fetch('https://api.github.com/users/JESH0')
  return Response.json();
}