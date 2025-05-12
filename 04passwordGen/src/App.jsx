import React, { useCallback, useEffect, useRef, useState } from 'react'


function App() {
const [length, setLength] = useState(8);
const [numAllw, setnumAllw] = useState(false);
const [charAllw , setCharAllw] = useState(false);
const [password, setPassword] = useState("");

const passwordGenerator = useCallback(  ()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numAllw) str+="1234567890";
  if(charAllw) str+="!@#$%^&*()_+-={}[]:;'<>,.?/";

  for(let i=1; i<=length; i++){
    let char = Math.floor(Math.random()* str.length + 1);

    pass += str.charAt(char)
  }
  setPassword(pass)

}, [length,numAllw,charAllw,setPassword ])  


// useRef hook

const refPassword = useRef(null);  // show whicj part selected

const CopyPassword = useCallback(() =>{
  refPassword.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

useEffect( ()=>{passwordGenerator()}, [charAllw,numAllw,length,passwordGenerator] )


  return (
   <>
   
   <div  className='  w-full h-screen flex justify-center mt-9 rounded'>
      <div className='bg-gray-700 h-min w-max px-10 rounded'>
        
<div className='py-5'> 
  <div className='flex justify-center text-2xl text-blue-300'>Password Generator</div>
    <div className='flex  py-4'>

     <input
     className='bg-white rounded-l-md px-2 flex py-1 w-full' 
     type="text " 
     value={password}
     placeholder='Password'
     readOnly
     ref={refPassword}
     /> 
     
     <button
      className='bg-blue-700 px-4 py-1 rounded-r-md active:scale-95 active:bg-blue-500'
      onClick={CopyPassword}>copy</button>

     </div> 
     <div className=' mt-1 text-amber-600'> 
      <div className='flex gap-4'>
      <div>
      <input type="range"
      min={0}
      max={8}
      value={length}
      className='cursor-pointer'
      onChange={(e)=> {setLength(e.target.value)}}/>

      <label> Length: {length}</label>
      </div>
      
      <div className='flex justify-center gap-x-1'>
      <input type="checkbox" 
       defaultChecked ={numAllw}
       id='num'
       onChange={()=>{
           setnumAllw((prev)=> !prev);

       }} /> 
       <label htmlFor="">Numbers</label>
  </div>

  <div className='flex justify-center gap-x-1'>
<input type="checkbox" 
defaultChecked ={charAllw}
id='char'
onChange={()=>{
  setCharAllw((prev) => !prev);
}} />

<label htmlFor="">Character</label>

  </div>
</div>
</div>
</div>
   




   </div>


   </div>
      </>
  )
}

export default App
