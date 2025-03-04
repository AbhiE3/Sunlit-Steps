import { ArrowRight, Link } from "lucide-react"
import { Button } from "./ui/button"
import Balancer from "react-wrap-balancer"

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-primary/20 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  <Balancer>Helping Children Grow, One Step at a Time</Balancer>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  <Balancer>
                    At Little Triumphs, we provide specialized therapy services to help children overcome challenges and
                    reach their full potential.
                  </Balancer>
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="#contact">
                      Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#services">Explore Our Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Children in therapy session"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
  )
}

export default Hero
