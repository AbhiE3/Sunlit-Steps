'use client';
import { Calendar, Clock, MapPin, Phone } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import Head from "next/head";

const Contact = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "telephone": "+1234567890",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": ["English", "Spanish"]
  };

  return (
    <>
    <Head>
        <title>Contact Us | Book a Children's Therapy Session</title>
        <meta name="description" content="Get in touch with us to schedule a consultation for your child's therapy needs." />
        <meta property="og:title" content="Contact Us | Book a Children's Therapy Session" />
        <meta property="og:description" content="Reach out to our team for expert therapy services and support." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
    <section  id="contact" className="bg-[#9391be] py-16">
          <div className="container text-black mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have questions or ready to schedule an appointment? Reach out to us today.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="grid gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">123 Therapy Lane, Kidsville, CA 90210</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 8am - 6pm</p>
                      <p className="text-muted-foreground">Saturday: 9am - 1pm</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Appointments</h3>
                      <p className="text-muted-foreground">Schedule online or call us directly</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card>
                  <CardContent className="pt-6">
                    <form className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <label htmlFor="first-name" className="text-sm font-medium">
                            First Name
                          </label>
                          <input id="first-name" className="p-2 border rounded-md" placeholder="John" suppressHydrationWarning />
                        </div>
                        <div className="grid gap-2">
                          <label htmlFor="last-name" className="text-sm font-medium">
                            Last Name
                          </label>
                          <input id="last-name" className="p-2 border rounded-md" placeholder="Doe" suppressHydrationWarning/>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="p-2 border rounded-md"
                          placeholder="john.doe@example.com"
                          suppressHydrationWarning
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone
                        </label>
                          <input id="phone" type="tel" className="p-2 border rounded-md" placeholder="(555) 123-4567" suppressHydrationWarning/>
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="p-2 border rounded-md min-h-[100px]"
                          placeholder="Tell us about your child and how we can help..."
                          suppressHydrationWarning
                        ></textarea>
                      </div>
                      <Button type="submit" className="w-full" suppressHydrationWarning>
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        </>
  )
}

export default Contact
