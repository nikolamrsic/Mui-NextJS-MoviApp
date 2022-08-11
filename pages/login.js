import React, { useContext } from "react";
import Image from "next/image";
import loginWp from "../public/loginWP.jpg";
import { Box } from "@mui/system";
import { Stack, Typography } from "@mui/material";
import logo from "../public/logo.svg";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../src/firebase";
import { AuthContext } from "../components/AutProvider";
import Cookies from 'js-cookie'
export default function loginpage() {
  
  
  const theme = useTheme();
  const router = useRouter();
  const context = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  


  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
      }}
    >
      <Image
        src={loginWp}
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
      ></Image>

      <Box
        sx={{
          padding: "15px 30px",
          width: { xs: "100%", md: "50%" },
          position: "absolute",
          top: 0,
          zIndex: 5,
          bgcolor: theme.palette.primary.blackFift,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          backdropFilter:'blur(5px)'
        }}
      >
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          spacing={3}
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          <Typography variant="h3" color="white">
            Join Filmot
          </Typography>
          <Box>
            <Image
              position="relative"
              style={{ marginLeft: "55px" }}
              width={64}
              height={64}
              layout="fixed"
              src={logo}
            ></Image>
          </Box>
        </Stack>
        <Typography variant="h4" mt={3} fontWeight={50} color="white">
          Watch over 2000 TvShows and Movies
        </Typography>
        <Stack direction={"row"} spacing={3} mt={5}>
          <Button
    
            variant="contained"
            color="secondary"
            size="large"
          >
            Register
          </Button>
          <Button
            variant="text"
            disableRipple
            sx={{ color: "white" }}
            size="large"
          >
            Login
          </Button>
        </Stack>
      </Box>
    </div>
  );
}
