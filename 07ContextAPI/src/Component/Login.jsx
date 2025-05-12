import React,{useState,useContext} from 'react'

import UserContext from '../Context/UserContext'

const Login = () => {

    const [username, setUsername] = useState('')
    
    const [password, setPassword] = useState('')

    const [rollNo, setRollNo ] = useState('2')

    const {setUser} = useContext(UserContext);



    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username,password,rollNo})

    }

  return (
    <div className='text-white ' >
<h2 className='text-3xl flex justify-center'>Login</h2>

<div className=' flex justify-center p-2 gap-3' >
<input 
className='bg-amber-700  p-2 rounded-sm '
type="text"
 placeholder='Username'
 value={username}
 onChange={(e) =>setUsername(e.target.value)}
 />
<input 
className='bg-amber-700  p-2 rounded-sm'
 type="password"
  placeholder='Password'
  value ={password}
  onChange ={(e) => setPassword(e.target.value)}
  
  
  />

<div 
onChange={(e)=>setRollNo()}>{rollNo}</div>




  
  </div>
      <div className= 'flex w-full justify-center p-4'  ><button className=' rounded-sm p-1 bg-blue-700 flex justify-center active:bg-blue-600' onClick={handleSubmit}> Submit</button> </div>
    </div>
  )
}

export default Login