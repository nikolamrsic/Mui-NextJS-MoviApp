import React from 'react'
import { AppBar, Button, Toolbar } from '@mui/material'
import { IconButton } from '@mui/material'
import { Stack } from '@mui/material';
import { Input } from '@mui/material';
import { FiSearch } from "react-icons/fi";
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import logo from "../public/logo.svg"
import { useContext } from 'react';
import { SideBarOpenStaus } from './Layout';
import { AuthContext } from './AutProvider';
import AvatarMenu from './Avatar';
import { Fragment } from 'react';
import Link from 'next/link'

export default function Navbar() {
 let isSideBarOpen=useContext(SideBarOpenStaus)
  const theme = useTheme()

   const userStatus=useContext(AuthContext)
  return (
    
    <AppBar elevation={0} color='primary' sx={{width:'100%',  bgcolor: theme.palette.primary.mainT, backdropFilter: 'blur(50px)', top: 0 }} position="fixed">
    
      <Toolbar>
    
        <Stack direction='row' spacing={3} justifyContent="space-between"  alignItems={'center'} sx={{width:'100%'}} >
        <Stack direction='row' spacing={3} alignItems='center'>
          {/**Logo */}
          <Box sx={{display:{xs:'none',lg:'block'}}}>
          <Image width={48} height={48} src={logo}></Image>
          </Box>
            {/**Mobile menu */}
          <IconButton onClick={()=>{
            isSideBarOpen.toogleSidebar()
          }} sx={{ display: { xs: 'block', md:'none', lg: 'none' } }} variant='text' color='secondary'><FiMenu style={{stroke:'white'}}/></IconButton>
         
          {/**Nav links  */}
          <Stack direction='row' spacing={3} sx={{display:{xs:'none',md:'block'}}}>
            <Link href='/discover/movies'>
            <Button variant='text' color='secondary' sx={{ color: "white", }}>Movies</Button>
            </Link>
         
            <Button variant='text' color='secondary' sx={{ color: "white" }}>Tv Shows</Button>
      
          </Stack>
      
          {/**Search bar */}
          <Stack  direction={'row'}>
      
            <Box sx={{  padding: '0 15px', borderRadius: '55px' }} component="form">
              <Input variant="filled" disableUnderline={true} sx={{ color: 'white' ,'&:hover':{borderBottom:'solid 1px white'}}} placeholder="Search " size="small" color='secondary' />
              <IconButton><FiSearch style={{ stroke: 'white' }} /></IconButton>
            </Box>
      
          </Stack>
          </Stack>
          <AvatarMenu/>
        </Stack>
     
      </Toolbar>
    
    </AppBar>
  )
}
