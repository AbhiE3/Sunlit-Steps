import { Card, CardContent } from "./ui/card"

const Services = () => {
  return (
    <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Therapy Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer a range of specialized therapy services tailored to meet the unique needs of each child.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary text-xl font-bold">S</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Speech Therapy</h3>
                  <p className="text-muted-foreground">
                    Help children improve communication skills, articulation, language development, and fluency.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary text-xl font-bold">O</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Occupational Therapy</h3>
                  <p className="text-muted-foreground">
                    Develop fine motor skills, sensory processing, and daily living activities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary text-xl font-bold">B</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Behavioral Therapy</h3>
                  <p className="text-muted-foreground">
                    Address behavioral challenges, develop social skills, and improve emotional regulation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
  )
}

export default Services
