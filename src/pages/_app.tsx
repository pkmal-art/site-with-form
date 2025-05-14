import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { CssBaseline, Container } from '@mui/material';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <CssBaseline />*/}
    <Header /> 
    {/* <Container component="main" maxWidth="lg" sx={{ minHeight: '80vh', py: 4 }}> */}
      <Component {...pageProps} />
    {/* </Container> */}
    <Footer />
    </>
  ) 
}
