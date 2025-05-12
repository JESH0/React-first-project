import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/home/User/User.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'
import TC from './Components/TC/TC.jsx'


// const router = createBrowserRouter(
//   [
// {
//  path : '/',
//  element: <Layout/>,
//  children: [
// {
//  path: "",
//  element: <Home />

// },{
//   path:"about",
//   element:<About />
// },
// {
//   path: "contact",
//   element: <Contact />
// }
//  ]

// }

//   ]
// )

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='' element={<Layout />} >
    <Route path='/' element={<Home />} />
    <Route path='tc' element ={<TC />} />
   
    <Route path='about' element={<About />} > 
        <Route path='tc' element ={<TC />} />
    </Route>
    
    <Route path='Contact' element={<Contact />} />
    <Route path='user/:id' element={<User />} />
    <Route 
    loader = {githubInfoLoader}
    path='Github' 
    element={<Github />} />


  </Route>

  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>

     <RouterProvider  router={router}/>
  </StrictMode>,
)
