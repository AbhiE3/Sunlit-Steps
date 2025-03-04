
'use client'

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import Head from "next/head";



const therapies = [
  {
    id: "speech",
    name: "Speech Therapy",
    shortDesc:
      "Help children improve communication skills, articulation, language development, and fluency.",
    details:
      "Speech therapy helps children develop verbal and non-verbal communication skills. It addresses issues such as articulation disorders, language delays, and fluency problems like stuttering. Therapy includes exercises, games, and techniques to enhance speech clarity and comprehension.",
    icon: "S",
  },
  {
    id: "occupational",
    name: "Occupational Therapy",
    shortDesc:
      "Develop fine motor skills, sensory processing, and daily living activities.",
    details:
      "Occupational therapy helps children improve their ability to perform everyday activities. It focuses on motor skills, hand-eye coordination, sensory integration, and self-care skills like dressing, eating, and writing.",
    icon: "O",
  },
  {
    id: "behavioral",
    name: "Behavioral Therapy",
    shortDesc:
      "Address behavioral challenges, develop social skills, and improve emotional regulation.",
    details:
      "Behavioral therapy focuses on addressing emotional and behavioral challenges. It helps children develop coping mechanisms, manage emotions, and build positive social interactions through structured interventions and reinforcement strategies.",
    icon: "B",
  },
];

const Services = () => {
  const [selectedTherapy, setSelectedTherapy] = useState<{
    id: string;
    name: string;
    shortDesc: string;
    details: string;
    icon: string;
  } | null>(null);

  return (
    <>
    <Head>
        <title>Children's Therapy Services | Speech, Occupational, and Behavioral Therapy</title>
        <meta name="description" content="We offer expert therapy services, including speech therapy, occupational therapy, and behavioral support for children." />
        <meta property="og:title" content="Children's Therapy Services | Speech, Occupational, and Behavioral Therapy" />
        <meta property="og:description" content="Explore our therapy services to help children reach their full potential." />
      </Head>
    <section id="services" className="py-16 bg-[#F4F4F4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Therapy Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a range of specialized therapy services tailored to meet the unique needs of each child.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {therapies.map((therapy) => (
            <Card
              key={therapy.id}
              className="border-2 border-primary/10 hover:border-primary/30 transition-colors cursor-pointer"
              onClick={() => setSelectedTherapy(therapy)}
            >
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">{therapy.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{therapy.name}</h3>
                <p className="text-muted-foreground">{therapy.shortDesc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedTherapy && (
        <Dialog open={!!selectedTherapy} onOpenChange={() => setSelectedTherapy(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedTherapy.name}</DialogTitle>
            </DialogHeader>
            <p>{selectedTherapy.details}</p>
            <Button className="mt-4" onClick={() => setSelectedTherapy(null)}>
              Close
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </section>
    </>
  );
};

export default Services;
