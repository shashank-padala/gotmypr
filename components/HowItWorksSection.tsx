"use client";

import { FileText, Link as LinkIcon, Search } from "lucide-react";

const steps = [
  {
    title: "Connect Your LinkedIn or Upload Your Resume",
    description:
      "Easily import your education, experience, and skills to auto-fill your profile. (Don't worry, you can edit before finalizing!)",
    icon: LinkIcon,
    id: "connect",
  },
  {
    title: "Answer a Few Quick Questions",
    description:
      "Help us understand your current status (student, worker, visitor) and your immigration timeline to personalize the best pathways.",
    icon: FileText,
    id: "questions",
  },
  {
    title: "We Analyze 100+ Immigration Programs",
    description:
      "Federal, Provincial, Rural, Pilot Programs — we map every opportunity you qualify for today (and how to unlock more).",
    icon: Search,
    id: "analyze",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-pr-light py-16">
      <div className="section-container">
        <h2 className="section-title">How It Works</h2>
        <p className="text-center text-lg text-pr-gray/80 mb-12">
          It takes less than 5 minutes to unlock your dream PR pathways!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-pr-lightblue flex items-center justify-center mb-4">
                <step.icon className="h-6 w-6 text-pr-blue" />
              </div>
              <div className="inline-block bg-pr-blue text-white text-sm font-medium px-3 py-1 rounded-full mb-3">
                Step {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-pr-gray">
                {step.title}
              </h3>
              <p className="text-pr-gray/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
