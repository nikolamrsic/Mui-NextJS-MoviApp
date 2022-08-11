import Head from "next/head";

import { useSession, signIn, signOut } from "next-auth/react"
import { Button, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import { Stack } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { Card, CardMedia, CarcContex } from "@mui/material";
import { FiMap } from "react-icons/fi";
import { Rating } from "@mui/material";
import { Chip } from "@mui/material";
import MovieCard from '../../components/MovieCard'
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import useSWR from "swr";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
import theatar from '../../public/theatar.png'
import { useContext } from "react";
import Sceleton from "../../components/Sceleton";
import { AuthContext } from "../../components/AutProvider";
import { useUser } from "../../components/AutProvider";




const fetcher = (...args) => fetch(...args).then(res => res.json())

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
    },
  }
}

function useMovies (page) {
  const { data, error } = useSWR(`https://api.themoviedb.org/3/discover/movie?api_key=1224065e5bf1b7cb815a51a5d409fe55&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}






export default function Movies({movies,pageProps}) {





  const theme = useTheme(); 
  let[page,setPage]=useState(1)
  let router=useRouter()
  const { data, isLoading, isError } = useMovies(page) 

  const updatePage=(event,value)=>{
    setPage(value)
  }
 
  const userStatus = React.useContext(AuthContext);

  const {user}=useUser()
  
  
  return (
    <div
      style={{
        
        position:'relative',
        minHeight: "100vh",
      }}
    >
       <Image src={theatar} layout='fill'  objectFit="cover"
        quality={100} style={{position:'absolute',top:0,left:0,zIndex:0}}></Image>
      

    

      <Box sx={{height:'155px',width:'100%',bgcolor:"",zIndex:55,position:'relative'}}></Box>
      <Container sx={{ marginTop: "0",position:'relative',zIndex:555,}}>
        <Stack direction="row" mb={5} spacing={5} ml={5} alignItems={"center"}>
          <Typography variant="h5"  sx={{ color: "white" }}>
            Discover Movies
          </Typography>
          <FiMap stroke="white" size="1.5rem" />

        </Stack>
        <Grid container  spacing={3} justifyContent='center'   columns={{ xs: 4, sm: 8, md: 12 }}>
          {data==undefined ? Array.from(new Array(20),(el,ind)=>el=ind).map((el,index)=><Sceleton key={index}/>)  : data.results.map((movie,index)=>{
            return  <Grid key={movie.id} item sx={4}>
            <MovieCard key={index} id={movie.id} img={movie.poster_path} title={movie.title}  genr={movie.genre_ids}></MovieCard>
          </Grid>
          })}
        
        </Grid>
       
        <Pagination onChange={updatePage} sx={{width:'100%',display:'flex',justifyContent:'center',py:'15px'}} count={10} variant="text" size="large" color='secondary' shape="rounded" />
      </Container>
    </div>
  );
}
