import Head from 'next/head';
import ContactForm from '@/components/ContactForm';



export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Some Company</title>
        <meta
          name="description"
          content="Форма обратной связи"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://84.201.151.82/contacts" />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />

        <meta property="og:title" content="Some Company" />
        <meta property="og:description" content="Форма обратной связи" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://84.201.151.82/contacts" />

        <meta name="twitter:title" content="Some Company" />
        <meta name="twitter:description" content="Форма обратной связи" />
        <html lang="en" />
      </Head>
      <ContactForm />
    </>
  );
}

