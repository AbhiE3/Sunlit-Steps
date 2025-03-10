'use client';
import Link from "next/link"
import { Button } from "./ui/button"
import Head from "next/head";
import Image from "next/image";


const Header = () => {
  return (
    <>
    <Head>
        <title>Children's Therapy Center | Compassionate Support</title>
        <meta name="description" content="Our children's therapy center provides emotional, behavioral, and developmental support for kids." />
        <meta property="og:title" content="Children's Therapy Center | Compassionate Support" />
        <meta property="og:description" content="Providing therapy services to help children grow and develop in a supportive environment." />
      </Head>
    <header className="bg-[#008080] py-6">
    <div className="container mx-auto px-4 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center ">
        <Image 
          src="/lsh.jpg" 
          alt="Children's Therapy Logo" 
          width={70} 
          height={70} 
          className="rounded-4xl"
        />
      </div>
          <h1 className="text-primary-foreground text-xl font-bold">LITTLE STEPS HEALING</h1>
        </div>
        <nav className="hidden md:flex gap-6 mr-12">
          <Link href="/" className="text-primary-foreground font-medium hover:underline">
            Home
          </Link>
          <Link href="#services" className="text-primary-foreground font-medium hover:underline">
            Services
          </Link>
          <Link href="#about" className="text-primary-foreground font-medium hover:underline">
            About Us
          </Link>
          <Link href="#contact" className="text-primary-foreground font-medium hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  </header>
</>
  )
}

export default Header
