import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'


const Profile = () => {
  const {user} = useContext(UserContext)

if (!user?.username  || !user?.password || !user?.rollNo) { return <div className='flex justify-center'> <div className=' p-4 bg-white flex justify-center'>Please Login</div> </div> }

  else {  return <div className='flex justify-center '> <div className='bg-white p-8 '> Welcome - {user.username} ||    Your password : {user.password} rollNO :  {user.rollNo} </div>   </div>  
}
  
}

export default Profile