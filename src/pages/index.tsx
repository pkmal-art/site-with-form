import Head from 'next/head';
import Hero from '@/components/Hero';
import CardsSection from '@/components/CardsSection';
import ActionSection from '@/components/ActionSection';


export default function HomePage() {
  return (
    <>
      <Head>
        <title>Some Company</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/" />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <html lang="en" />
      </Head>
      <Hero />
      <CardsSection />
      <ActionSection />
    </>
  )
}


