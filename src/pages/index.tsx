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
          content="Современный адаптивный лендинг с формой обратной связи"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://84.201.151.82/" />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />

        <meta property="og:title" content="Some Company" />
        <meta property="og:description" content="Современный адаптивный лендинг с формой обратной связи" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://84.201.151.82/" />

        <meta name="twitter:title" content="Some Company" />
        <meta name="twitter:description" content="Современный адаптивный лендинг с формой обратной связи" />

        <html lang="en" />
      </Head>
      <Hero />
      <CardsSection />
      <ActionSection />
    </>
  )
}


