import Header from "@/component/Header";
import React from "react";

interface Therapy {
  name: string;
  description: string;
  benefits: string[];
  procedure: string[];
  precautions: string[];
}

const therapyData: Therapy = {
  name: "Cognitive Behavioral Therapy (CBT)",
  description: "CBT is a type of therapy that helps individuals identify and change negative thought patterns and behaviors.",
  benefits: [
    "Improves emotional regulation",
    "Reduces symptoms of anxiety and depression",
    "Enhances problem-solving skills",
    "Promotes healthy coping mechanisms"
  ],
  procedure: [
    "Initial assessment with the therapist",
    "Identifying negative thought patterns",
    "Developing coping strategies",
    "Practicing new behavioral responses",
    "Ongoing progress evaluation"
  ],
  precautions: [
    "Ensure consistency in therapy sessions",
    "Patience is required for long-term effectiveness",
    "Open communication with the therapist is crucial",
    "Not a substitute for medication in severe cases"
  ]
};

const TherapyDetails: React.FC = () => {
  return (
    <Header/>
  );
};

export default TherapyDetails;