import About from "@/component/About";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import HorizontalScroll from "@/component/Horizontal_Scroll";
import Services from "@/component/Services";
import Head from "next/head";


export default function Home() {
  return (
    <>
    <Head>
        <title>Compassionate Children's Therapy | Helping Kids Thrive</title>
        <meta name="description" content="Expert children's therapy services focusing on emotional, behavioral, and developmental support. Book a session today!" />
        <meta name="keywords" content="children therapy, kids counseling, child mental health, autism support, speech therapy" />
        <meta property="og:title" content="Compassionate Children's Therapy | Helping Kids Thrive" />
        <meta property="og:description" content="Helping children with emotional, behavioral, and developmental challenges." />
        <meta property="og:url" content="https://yourwebsite.com/" />
      </Head>
    <div className="bg-[#F4F4F4]">
      <Header />
      <Hero />
      <Services />
      <HorizontalScroll/>
      <About />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

