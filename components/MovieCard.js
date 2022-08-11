import React from 'react'
import { Box } from '@mui/system'
import { Stack } from '@mui/material'
import { Typography } from '@mui/material'
import { Chip } from '@mui/material'
import { Button } from '@mui/material'
import { useTheme } from '@emotion/react'
import { useState } from 'react'
import Image from "next/image";
import noPhoto from '../src/nophoto.jpg'
import Link from 'next/link'
import { useRouter } from 'next/router'

// <Link href={`/moviepage/${id}`} onClick={()=>{alert()}} >
// <Image    layout='fill' style={{width:'100%',height:'100%',objectFit:'fill',position:'absolute',zIndex:0}} src={img !=null ? `https://image.tmdb.org/t/p/w500/${img}` : '/src/nophoto.jpg'}/>
export default function MovieCard( {img,title,rating,genr,id}) {
     
     let router=useRouter()
     //router.query={movieID:id}

    const Genres=[{
        id: 28,
        name: "Action"
      }, {
        id: 12,
        name: "Adventure"
      }, {
        id: 16,
        name: "Animation"
      }, {
        id: 35,
        name: "Comedy"
      }, {
        id: 80,
        name: "Crime"
      }, {
        id: 99,
        name: "Documentary"
      }, {
        id: 18,
        name: "Drama"
      }, {
        id: 10751,
        name: "Family"
      }, {
        id: 14,
        name: "Fantasy"
      }, {
        id: 36,
        name: "History"
      }, {
        id: 27,
        name: "Horror"
      }, {
        id: 10402,
        name: "Music"
      }, {
        id: 9648,
        name: "Mystery"
      }, {
        id: 10749,
        name: "Romance"
      }, {
        id: 878,
        name: "Science Fiction"
      }, {
        id: 10770,
        name: "TV Movie"
      }, {
        id: 53,
        name: "Thriller"
      }, {
        id: 10752,
        name: "War"
      }, {
        id: 37,
        name: "Western"
      }]



    let [is_openDesc,setOpenDesc]=useState(false)
    
    if(title==undefined){
        title='No Data'
    }

    const openDesc=()=>{
        setOpenDesc(true)
    }
    const closeDesc=()=>{
        setOpenDesc(false)
    }
     
    const theme=useTheme()
  return (
    <Box onMouseEnter={openDesc} onMouseLeave={closeDesc}  sx={{width:'250px',height:'350px',position:"relative"}}>
{  is_openDesc &&  <Box  sx={{zIndex:999, bgcolor:theme.palette.primary.mainT,backdropFilter:'blur(15px)',position:'absolute',bottom:'0',width:'100%',padding:'15px 5px'}}>
      <Stack direction='row'justifyContent={'space-between'}>
      <Typography variant={(title.length>10 && title !==undefined ) ? 'body1': 'h5' } color='white'>{title!=undefined ? title : "No data"}</Typography>
     <Typography variant='h5' color='white'>7.5</Typography>
      
      </Stack>
      <Stack direction='row' justifyContent={'flex-start'} spacing={0} mt={3} mb={4} sx={{flexWrap:'wrap',gap:1}}>
       
       {genr!=undefined && genr.map((genrID)=>{
           const g=Genres.find((item)=>{
               return item.id==genrID
           })
           return <Chip key={genrID} variant='filled' color='secondary' label={g.name}></Chip>
       })}
      </Stack>
      <Link href={`/moviepage/${id}`}>
      <Button   sx={{width:'100%',mt:'15px'}} variant='outlined' color='secondary'>See More</Button>
      </Link>
    </Box>}
    <Image    layout='fill' style={{width:'100%',height:'100%',objectFit:'fill',position:'absolute',zIndex:0}} src={img !=null ? `https://image.tmdb.org/t/p/w500/${img}` : noPhoto}/>

  </Box> 
  )
}
