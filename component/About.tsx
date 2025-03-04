'use client'

import { Link } from "lucide-react"
import { Button } from "./ui/button"
import Head from "next/head"

const About = () => {

  
  return (
    <>
    <Head>
        <title>About Our Children's Therapy Services</title>
        <meta name="description" content="Learn about our dedicated team of therapists providing support for children's emotional and developmental growth." />
        <meta property="og:title" content="About Our Children's Therapy Services" />
        <meta property="og:description" content="Meet our team and learn about our mission to support children's well-being." />
      </Head>
    <section id="about" className="py-16 bg-amber-950">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <img
                  src="About.jpeg"
                  alt="Our therapy center"
                  className="object-cover w-full h-full align-middles object-fill"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">About Little Triumphs</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2010, Little Triumphs has been dedicated to providing high-quality therapy services to
                  children of all ages and abilities. Our team of experienced therapists works collaboratively to create
                  personalized treatment plans that address each child's unique needs.
                </p>
                <p className="text-muted-foreground mb-6">
                  We believe in a family-centered approach, involving parents and caregivers in the therapy process to
                  ensure consistent progress and support.
                </p>
                <Button variant="outline" asChild>
                  <Link href="#team">Meet Our Team     jhh</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        </>
  )
}

export default About
