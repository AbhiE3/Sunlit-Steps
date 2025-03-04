'use client';
import Link from "next/link"
import { Button } from "./ui/button"
import Head from "next/head";


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
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
            <span className="text-primary text-xl font-bold">LSH</span>
          </div>
          <h1 className="text-primary-foreground text-xl font-bold">LITTLE STEPS HEALING</h1>
        </div>
        <nav className="hidden md:flex gap-6">
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
        <div className="flex gap-2">
          <Link href="/login">
            <Button variant="outline" className="bg-primary-foreground text-primary" suppressHydrationWarning>
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </header>
</>
  )
}

export default Header
