import React from 'react'
import { FiHome, FiMap, FiList, FiThumbsUp, FiX } from "react-icons/fi";
import { Fragment } from 'react';
import { Button, IconButton, ListItemButton, ListItemIcon, ListItemText, Stack ,} from '@mui/material'
import { Drawer } from '@mui/material';
import { List } from '@mui/material';
import { Box } from '@mui/system';
import { ListItem } from '@mui/material';
import { Typography } from '@mui/material';
import { SwipeableDrawer } from '@mui/material';
import { useTheme } from '@emotion/react';
import { SideBarOpenStaus } from './Layout';
import { useContext } from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg'
const LinksProps = [
    { title: "Home", href: '/', icon: FiHome ,iconStyle:{fill:'white',stroke:'gray'}},
    { title: "Discover", href: '/discover', icon: FiMap,iconStyle:{fill:'white',stroke:'gray'} },
    { title: "Popular", href: '/popular', icon: FiThumbsUp,iconStyle:{fill:'white',stroke:'gray'} },
    { title: "Watchlist", href: '/watchlist', icon: FiList,iconStyle:{stroke:'white',} },
]




const LinkBox=()=>{
    const theme=useTheme()
  
    return(
        <List>

        {LinksProps.map((link) => {
            return (
                <ListItem key={link.title}>
                    <ListItemButton sx={{'&:hover':{bgcolor:theme.palette.secondary.main},borderRadius:theme.shape.borderRadius,color:"white"}} >
                        <ListItemIcon>
                            <link.icon style={link.iconStyle} />
                        </ListItemIcon>
                        <ListItemText primary={link.title} sx={{color:theme.palette.secondary}} ></ListItemText>

                    </ListItemButton>
                </ListItem>)

        })}
    </List>
    )
}



export default function Sidebar() {
   const theme=useTheme()
   const isSideBarOpen=useContext(SideBarOpenStaus)
    return (<>


    <Drawer
        hideBackdrop
        elevation={0}
        open={isSideBarOpen.openSidebar}
        variant='temporary'
        sx={{display:{xs:"block",md:"none"}}}
        PaperProps={{sx:{width:{xs:'250px',md:'15%'},bgcolor:theme.palette.primary.mainT,borderRight:'solid 1px #131319',backdropFilter:'blur(55px)'}}}
     
        > 
        <Stack direction="row" alignItems="center"  sx={{pl:'25px'}}  mt={3} mb={5} justifyContent="space-between" padding="7px">
        <Image height={48} width={48} src={logo}></Image>
        <IconButton onClick={()=>{isSideBarOpen.toogleSidebar()}} ><FiX style={{stroke:"white"}}/></IconButton>
        </Stack>
      
        <LinkBox></LinkBox>
        
      
    </Drawer>
    </>
    )
}
