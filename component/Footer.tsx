'use client'

import Head from "next/head"
import Link from "next/link"

const Footer = () => {

  return (
    <>
    <Head>
        <title>Children's Therapy | Compassionate Care & Support</title>
        <meta name="description" content="Helping children with emotional, behavioral, and developmental challenges through expert therapy services." />
        <meta property="og:title" content="Children's Therapy | Compassionate Care & Support" />
        <meta property="og:description" content="Providing expert therapy for children to help them thrive." />
      </Head>
    <footer className="bg-muted py-8 bg-[#008080]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">LT</span>
                </div>
                <h3 className="font-bold">Little Triumphs</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Helping children overcome challenges and reach their full potential through specialized therapy
                services.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="grid gap-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="grid gap-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Speech Therapy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Occupational Therapy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Behavioral Therapy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Physical Therapy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="grid gap-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    HIPAA Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            {/* <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Little Triumphs Children's Therapy Center. All rights reserved.
            </p> */}
          </div>
        </div>
      </footer>
      </>
  )
}

export default Footer
