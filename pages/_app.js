import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";

import { Box } from "@mui/system";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

import { Container } from "@mui/system";
import { AuthContext, useUser } from "../components/AutProvider";
import AutProvider from "../components/AutProvider";
import Layout from "../components/Layout";
import { createContext } from "react";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <CssBaseline></CssBaseline>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <AutProvider>
          <Layout>
            <Container
              maxWidth
              disableGutters
              sx={{ position: "relative", top: 0, width: "100%" }}
            >
              <Component {...pageProps} />
            </Container>
          </Layout>
        </AutProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
