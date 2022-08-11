import React from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Container } from '@mui/system'
import Image from 'next/image'
import { Box } from '@mui/system'
import noPhoto from '../../src/nophoto.jpg'
import { Stack, Typography } from '@mui/material'
import { Chip } from '@mui/material'
import { FiStar,FiPlus } from "react-icons/fi";
import { Button } from '@mui/material'


import { FiPlay } from "react-icons/fi";

const fetcher = (...args) => fetch(...args).then(res => res.json())

function useUser(id) {
  const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/${id}?api_key=1224065e5bf1b7cb815a51a5d409fe55`, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default function MovieDetils({ movie }) {
  let router = useRouter()
  const { data, isLoading, isError } = useUser(router.query.movieID)
  console.log(data)
  return (
    <div>
      {data == undefined ? <h1>Loading...</h1> :
        <div>
          <Container disableGutters maxWidth sx={{ minHeight:'100vh', padding: '15px', position: 'relative', overflow: 'hidden', display:'flex',justifyContent:'center',alignItems:'start'}}>

            <Box sx={{ zIndex: 2, width: '100%', height: '100%', top: 0, left: 0, position: 'absolute', backdropFilter: 'blur(10px)', bgcolor: 'rgb(0,0,0,0.5)' }}></Box>
            <Image layout='fill' style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} src={data.backdrop_path != null ? `https://image.tmdb.org/t/p/w500/${data.backdrop_path}` : noPhoto} />

            <Container disableGutters sx={{ width: '100%', position: 'relative', zIndex: 5, padding:{ sx:"0px",md:'7px 15px'}, margin: '15px 0',mt:'65px' }}>
              <Stack sx={{ width: '100%' }} direction={{xs:'column',md:"row"}}>
               
            
                <Image width={370} height={550} layout='' objectFit='cover' style={{  zIndex: 5, position: 'relative', }} src={data.backdrop_path != null ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : noPhoto} />
                <Box sx={{ padding: "7px 15px", ml: {xs:'0',md:'55px'}, width:{xs:'100%',md:"70%"}}}>
                  <Typography variant="h3" sx={{ typography:{xs:'h4',md:'h3'},color: "white" }}>{data.original_title}</Typography>
                    
                  <Typography variant="h7" mt={2} sx={{ color: "white" }}>Relesase Date: {data.release_date}</Typography>

                  <Stack direction='row' alignItems='center' spacing={1} mt={3} mb={3}> 
                    <Typography variant="h7" sx={{ color: "white" }}>Raring: {data.vote_average}</Typography>
                    <FiStar style={{ fill: 'yellow', stroke: 'none', transition: '0.2s ease' }} />
                  </Stack>
                   
                  <Typography variant='h8' color='white' fontWeight={'thin'} paragraph >
                   {data.overview != undefined && data.overview}
                   </Typography>
                
                  <Stack direction='row' spacing={1} mt={3}>
                    {data.genres != undefined && data.genres.map((genrs) => {
                      return <Chip key={genrs.name} label={genrs.name} color='secondary'></Chip>
                    })}
                  </Stack>

                  <Stack direction='row' spacing={3} mt={3}>
                     <Button color='secondary' variant='contained' sx={{color:'white',dispay:"flex",flexDirection:'row-reverse',gap:1,alignItems:'center'}}><FiPlus/> Add to list</Button>
                     <Button color='secondary' variant='text' sx={{color:'white',dispay:"flex",flexDirection:'row-reverse',gap:2,alignItems:'center'}}><FiPlay/> Watch</Button>
                   </Stack>


               
               
                </Box>
              </Stack>



            </Container>



          </Container>

        </div>

      }

    </div>
  )
}
