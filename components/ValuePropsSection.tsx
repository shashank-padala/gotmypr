"use client";

import { Shield, RefreshCw, Target, Lock } from "lucide-react";

const valueProps = [
  {
    title: "Save $1000s",
    description: "Skip overpriced lawyers and agents. Get clear options for just $10.",
    icon: Shield,
    id: "save-money",
  },
  {
    title: "Always Updated",
    description: "We monitor Canadian immigration streams and update policies weekly.",
    icon: RefreshCw,
    id: "updated",
  },
  {
    title: "Personalized Improvement Tips",
    description: "Not eligible today? We'll show you EXACTLY what to fix to qualify — faster.",
    icon: Target,
    id: "personalized",
  },
  {
    title: "Simple & Secure",
    description: "No confusing paperwork. No spam. Just your best routes to PR.",
    icon: Lock,
    id: "secure",
  },
];

export default function ValuePropsSection() {
  return (
    <section id="value-props" className="bg-white py-16">
      <div className="section-container">
        <h2 className="section-title">Why Choose GotMyPR</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop) => (
            <div
              key={prop.id}
              className="bg-pr-light p-6 rounded-lg shadow-sm hover:shadow transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 border border-gray-100 shadow-sm">
                <prop.icon className="h-6 w-6 text-pr-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-pr-gray">{prop.title}</h3>
              <p className="text-pr-gray/80">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
