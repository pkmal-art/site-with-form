import Head from 'next/head';
import ContactForm from '@/components/ContactForm';



export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Some Company</title>
        <meta
          name="description"
          content="Get in touch with us through our contact form. We’re here to help you with any inquiries or support you need."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/" />
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <html lang="en" />
      </Head>
      <ContactForm />
    </>
  );
}

