import React from "react"
import UserContext from "./UserContext"
import Profile from "../Component/Profile"
import Login from "../Component/Login"


// const UserContextProvider = ({children}) =>{


//    const [user , setUser] = React.useState(null)
//     return(
        
//   <UserContext.Provider value={{user, setUser}}>
// {children}
//   </UserContext.Provider>

//     )
// }

// export default UserContextProvider;




const UserContextProvider = () =>{


   const [user , setUser] = React.useState("")
    return(
        
  <UserContext.Provider value={{user, setUser}}>
  <div>
    <Login />
    <Profile />
      </div>
  </UserContext.Provider>


    )
}

export default UserContextProvider;
