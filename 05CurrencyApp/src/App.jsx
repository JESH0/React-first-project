import React,{ use, useState } from 'react'
import UseCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from "./Components/InputBox";



function App() {
const [amount, setAmount] = useState(1)
const [from, setFrom] = useState("USD")
const [to, setTo] =useState("NPR")
const [convetedAmount , setConvertedAmount] = useState("")

const currencyInfo = UseCurrencyInfo(from)
const options = currencyInfo ? Object.keys(currencyInfo) : [];





const swap = ()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convetedAmount)
}

const convert =()=>{
  setConvertedAmount(amount * currencyInfo[to])
}

const image = "auto=format&fit=crop&w=1920&q=100"



  return (
  <>

<div
  className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1706510357511-afe0801a077c?auto=format&fit=crop&w=1920&q=100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D)`}}
>

      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
     
     
        <form onSubmit={(e) => {
          e.preventDefault()
          convert()
       
        }}>

      <div className='w-full mb-1'>


<InputBox
 label= "from" 
amount={amount}
currencyOptions={options}
onCurrencyChange={(currency) => setFrom(currency)}
selectCurrency={to}
onAmountChange={(amount)=> setAmount(amount)
  
}
/>




      </div>
<div className='relative w-full h-0.5'>

  <button 
  type='button'
  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 '
  onClick={swap}
  >
Swap
  </button>
</div>




<div className='w-full mt-1 mb-4'>
  <InputBox 
  label ="To" 
            amount = {convetedAmount}
            convetedAmount ={setConvertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency)=> setTo(currency)}
            selectCurrency={to}
            onAmountChange={(amount)=> setAmount(amount)}
            amountDisable
             />
</div>

<button
 type="submit"
 className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg' 
 
> convert {from.toUpperCase()} to {to.toUpperCase()}



 </button>

        </form>
        
        </div>
      </div>
       </div>

  
  </>
  )
}

export default App
