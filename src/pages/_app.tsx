import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {  Container } from '@mui/material';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <CssBaseline />     */}
      <Container component="main" maxWidth="lg"  disableGutters sx={{ minWidth: '320px' }}>
        <Header /> 
      </Container>
      <Container
            component="main"
            maxWidth="lg"
            disableGutters
            sx={{   
              minWidth: '320px',           
              minHeight: '80vh',
              backgroundColor: 'transparent', 
            }}
      >
        <Component {...pageProps} />
      </Container>
      <Container component="main" maxWidth="lg" disableGutters sx={{ minWidth: '320px', }}>
        <Footer />
      </Container>
    
    </>
  ) 
}
