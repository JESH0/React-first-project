import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Jesh from './jeshh.jsx'

const myname = "rajesh deuba"

const createElement = React.createElement(
  'a',
  { href: 'https://google.com', target:'_blank'}
  , 'goto google ',
  myname
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <App />
  // <Jesh/>
  createElement
  // </StrictMode>,

)
