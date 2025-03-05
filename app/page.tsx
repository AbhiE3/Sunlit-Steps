import About from "@/component/About";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import HorizontalScroll from "@/component/Horizontal_Scroll";
import NewTeam from "@/component/NewTeam";
import OurTeam from "@/component/OurTeam";
import Services from "@/component/Services";
import Head from "next/head";
import Image from "next/image";


export default function Home() {

  const structuredData = {

    "@type": "MedicalBusiness",
    "name": "Compassionate Children's Therapy",
    "url": "https://yourwebsite.com",
    "logo": "https://yourwebsite.com/logo.png",
    "description": "Expert children's therapy services focusing on emotional, behavioral, and developmental support.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Therapy St",
      "addressLocality": "City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "telephone": "+1234567890"
  };
  return (
    <>
    <Head>
        <title>Compassionate Children's Therapy | Helping Kids Thrive</title>
        <Image src="/logo.jpg" alt="Children's Therapy Logo" width={120} height={50} />
        <h1>Compassionate Children's Therapy</h1>
        <meta name="description" content="Expert children's therapy services focusing on emotional, behavioral, and developmental support. Book a session today!" />
        <meta name="keywords" content="children therapy, kids counseling, child mental health, autism support, speech therapy" />
        <meta property="og:title" content="Compassionate Children's Therapy | Helping Kids Thrive" />
        <meta property="og:description" content="Helping children with emotional, behavioral, and developmental challenges." />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
    <div className="bg-[#F4F4F4]">
      <Header />
      <Hero />
      <Services />
      <HorizontalScroll/>
      <OurTeam />
      <NewTeam />
      <About />
      <Contact />
      <Footer />

      

    </div>
    </>
  )
}

