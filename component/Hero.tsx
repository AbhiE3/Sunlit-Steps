import { ArrowRight, Link } from "lucide-react"
import { Button } from "./ui/button"
import Balancer from "react-wrap-balancer"
import Head from "next/head"
import Image from "next/image"

const Hero = () => {
  return (
    <>
    <Head>
        <title>Helping Children Thrive | Expert Therapy Services</title>
        <meta name="description" content="Personalized therapy services to support children's emotional, behavioral, and developmental needs." />
        <meta property="og:title" content="Helping Children Thrive | Expert Therapy Services" />
        <meta property="og:description" content="Specialized therapy to nurture children's growth and happiness." />
      </Head>
    <section className="bg-[#F4F4F4]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center pt-20 pl-15">
              <div className="pb-20">
                <h1 className="text-black sm:mt-10 text-4xl md:text-5xl font-bold tracking-tight mb-10">
                  <Balancer>Helping <span className="text-[#008080]">Children Grow</span>, One Step at a Time</Balancer>
                </h1>
                <p className="text-black text-xl text-muted-foreground mb-8">
                  <Balancer>
                    At Little Triumphs, we provide specialized therapy services to help children overcome challenges and
                    reach their full potential.
                  </Balancer>
                </p>
                <div className="flex">
                <div className="pb-2">
                  <Button className="px-6 py-2 font-medium bg-[#008080] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] suppressHydrationWarning">
                    Book Consultance
                  </Button>
              </div>
                
                </div>
                
              </div>
              <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden mb-10 ">
      
                <Image
                  src="/hero.jpg"
                  alt="Children in therapy session"
                  height={250}
                  width={250}
                  className="object-cover w-full h-full drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        </>
  )
}

export default Hero
