'use client'

import { JSX, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import Head from "next/head";
import Link from "next/link";

const therapies = [
  {
    id: "behavioral",
    name: "Behavioral Therapy",
    shortDesc: "Address behavioral challenges, develop social skills, and improve emotional regulation.",
    details: (
      <>
        <p>Behavioral therapy helps children manage emotions, improve social skills, and develop coping mechanisms.</p>
        <h4 className="font-bold mt-4">When is it needed?</h4>
        <ul className="list-disc ml-5 mt-2">
          <li>Frequent tantrums, aggression, or defiance</li>
          <li>Difficulty following rules at home or school</li>
          <li>Anxiety, phobias, or excessive fears</li>
          <li>Trouble with impulse control (acting without thinking)</li>
          <li>Difficulty making or keeping friends</li>
          <li>Social withdrawal or extreme shyness</li>
          <li>Struggles with flexibility, transitions, or changes in routine</li>
          <li>Problems with self-esteem or excessive negative self-talk</li>
        </ul>
      </>
    ),
    icon: "B",
  },
  {
    id: "speech",
    name: "Speech Therapy",
    shortDesc: "Help children improve communication skills, articulation, language development, and fluency.",
    details: (
      <>
        <p>Speech therapy helps children develop verbal and non-verbal communication skills.</p>
        <h4 className="font-bold mt-4">When is it needed?</h4>
        <ul className="list-disc ml-5 mt-2">
          <li>Delayed speech development (not talking as expected for age)</li>
          <li>Difficulty pronouncing words (unclear speech)</li>
          <li>Problems understanding or following spoken instructions</li>
          <li>Limited vocabulary for age</li>
          <li>Difficulty with social communication (trouble with conversation)</li>
          <li>Stuttering or other fluency disorders</li>
          <li>Swallowing or feeding issues (in some cases)</li>
        </ul>
      </>
    ),
    icon: "S",
  },
  {
    id: "occupational",
    name: "Occupational Therapy",
    shortDesc: "Develop fine motor skills, sensory processing, and daily living activities.",
    details: (
      <>
        <p>Occupational therapy helps children improve motor skills, sensory integration, and independence.</p>
        <h4 className="font-bold mt-4">When is it needed?</h4>
        <ul className="list-disc ml-5 mt-2">
          <li>Difficulty with fine motor skills (holding a pencil, using scissors)</li>
          <li>Problems with gross motor skills (balance, coordination)</li>
          <li>Delays in self-care skills (dressing, eating independently)</li>
          <li>Sensory processing issues (overreacting or underreacting to stimuli)</li>
          <li>Poor handwriting or avoidance of writing tasks</li>
          <li>Difficulty with attention, focus, or sitting still</li>
          <li>Clumsiness or frequent falls</li>
        </ul>
      </>
    ),
    icon: "O",
  },
  {
    id: "special-education",
    name: "Special Education",
    shortDesc: "Individualized learning strategies for children with unique educational needs.",
    details: (
      <>
        <p>Special education provides tailored teaching approaches for children with learning difficulties.</p>
        <h4 className="font-bold mt-4">When is it needed?</h4>
        <ul className="list-disc ml-5 mt-2">
          <li>Significant learning delays in reading, writing, or math</li>
          <li>Difficulty processing information or following multi-step instructions</li>
          <li>ADHD, autism, dyslexia, or intellectual disability diagnosis</li>
          <li>Needs assistive technology or special materials to access learning</li>
          <li>Requires speech, occupational, or physical therapy integrated into school</li>
          <li>Needs behavioral support within the classroom</li>
        </ul>
      </>
    ),
    icon: "SE",
  },
];

const Services = () => {
  const [selectedTherapy, setSelectedTherapy] = useState<{
    id: string;
    name: string;
    shortDesc: string;
    details: JSX.Element;
    icon: string;
  } | null>(null);

  return (
    <>
      <Head>
        <title>Children's Therapy Services | Behavioral, Speech, Occupational & Special Education</title>
        <meta name="description" content="We provide expert therapy services, including behavioral therapy, speech therapy, occupational therapy, and special education." />
      </Head>

      <section id="services" className="py-16 bg-[#ffffff] text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Therapy Services</h2>
            <p className="max-w-2xl mx-auto">
              We offer a range of specialized therapy services tailored to meet the unique needs of each child.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
            {therapies.map((therapy) => (
              <Card
                key={therapy.id}
                className="border-2 border-primary/10 hover:border-primary/30 transition-colors cursor-pointer md:h-100"
                onClick={() => setSelectedTherapy(therapy)}
              >
                <CardContent className="pt-6">
                
                  <h3 className="text-2xl font-bold mb-2 text-green-700 mb-10"><u>{therapy.name}</u></h3>
                  <p className="text-muted-foreground">{therapy.shortDesc}</p>
                  <ul className="list-disc ml-5 mt-10">
            <li>Articulation disorders</li>
            <li>Phonological disorders</li>
            <li>Disfluency</li>
            <li>oice disorders or resonance disorders</li>
        </ul>
                  
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
