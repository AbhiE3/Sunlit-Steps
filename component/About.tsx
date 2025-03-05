'use client'

import { Link } from "lucide-react"
import { Button } from "./ui/button"
import Head from "next/head"
import Contact from "@/component/Contact";
import Image from "next/image";


const About = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Compassionate Children's Therapy",
    "url": "https://yourwebsite.com/about",
    "logo": "https://yourwebsite.com/logo.png",
    "description": "Learn about our dedicated team of therapists providing support for children's emotional and developmental growth."
  };

  
  return (
    <>
    <Head>
        <title>About Our Children's Therapy Services</title>
        <meta name="description" content="Learn about our dedicated team of therapists providing support for children's emotional and developmental growth." />
        <meta property="og:title" content="About Our Children's Therapy Services" />
        <meta property="og:description" content="Meet our team and learn about our mission to support children's well-being." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
    <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src='/About1.jpg'
                  alt="Our therapy center"
                  height={200}
                  width={200}
                  className="w-full h-full align-middles"
                />
              </div>
              <div >
                <h2 className="text-3xl font-bold mb-4 text-green-700">About Little Triumphs</h2>
                <p className="text-muted-foreground mb-4 text-black">
                  Founded in 2010, Little Triumphs has been dedicated to providing high-quality therapy services to
                  children of all ages and abilities. Our team of experienced therapists works collaboratively to create
                  personalized treatment plans that address each child's unique needs.
                </p>
                <p className="text-muted-foreground mb-6 text-black">
                  We believe in a family-centered approach, involving parents and caregivers in the therapy process to
                  ensure consistent progress and support.
                </p>
                <Button className="px-6 py-2 font-medium bg-[#008080] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] suppressHydrationWarning">
                    Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </section>
        </>
  )
}

export default About
