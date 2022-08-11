import React from 'react'
import { createContext ,useContext} from 'react'

export const AuthContext=createContext()


export default function AutProvider({children}) {
  let[user,setUser]=React.useState(false)
  return (
    <AuthContext.Provider value={{user}}>
      
     {children}
    </AuthContext.Provider>
  )
}

export function useUser(){

  return( useContext(AuthContext))
}