import React from 'react'
import { Box } from '@mui/system'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { createContext } from 'react'
import { useContext } from 'react'
import { AuthContext } from './AutProvider'
import { useRouter } from 'next/router'
export const SideBarOpenStaus=createContext()
const { Provider } = SideBarOpenStaus;

export default function Layout({children}) {
 const router=useRouter()
  let [openSidebar,setOpenSidebar]=React.useState(false)

  let userStatus=useContext(AuthContext)

  const toogleSidebar=()=>{
    setOpenSidebar(!openSidebar)
  } 
  


  return (
    <Box sx={{ width: "100%", position: "relative" }}>
    <SideBarOpenStaus.Provider value={{openSidebar,toogleSidebar}}>
    
     <Navbar/>
    
    <Sidebar/>
   
    {children} 
    </SideBarOpenStaus.Provider>
    </Box>
  )
}
