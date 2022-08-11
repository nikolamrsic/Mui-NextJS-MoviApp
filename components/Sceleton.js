import React from 'react'
import { Fragment } from 'react'
import Skeleton from '@mui/material/Skeleton';
import { Button } from '@mui/material';
import MovieCard from './MovieCard'
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';
export default function Sceleton() {
  return (
    <>
    <Box sx={{position:'relative',width:'250px',height:'350px',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <CircularProgress></CircularProgress>

    </Box>
   
    </>
  )
}
