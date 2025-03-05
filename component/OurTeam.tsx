"use client";

import Image from "next/image";

const doctors = [
  {
    id: 1,
    name: "Dr. Emily Carter",
    specialty: "Pediatrician",
    image: "/doct1.jpeg",
  },
  {
    id: 2,
    name: "Dr. James Anderson",
    specialty: "Psychologist",
    image: "/doct2.jpg",
  },
  {
    id: 3,
    name: "Dr. Olivia Brown",
    specialty: "Therapist",
    image: "/doct3.jpg",
  },
  {
    id: 4,
    name: "Dr. William Smith",
    specialty: "Neurologist",
    image: "/doct4.jpg",
  },
];

const OurTeam = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
            >
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={150}
                height={150}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-green-700">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
