"use client";

import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "I had no idea I was eligible for a rural program that fit my profile perfectly. GotMyPR showed me the exact steps to get my PR faster!",
    name: "Manish Jain",
    title: "PG Diploma, Humber",
    id: "manish",
  },
  {
    quote:
      "My consultant quoted me $2000 just to check my profile. GotMyPR showed me everything in minutes — and helped me improve my IELTS score plan!",
    name: "Akhil",
    title: "Work Permit Holder",
    id: "akhil",
  },
  {
    quote:
      "After months of confusion with immigration consultants, GotMyPR gave me clear answers about my eligibility in minutes.",
    name: "Sravya Reddy",
    title: "Tech Worker",
    id: "sravya",
  },
  {
    quote:
      "Using my actual work experience and education, GotMyPR showed me provincial programs I never knew existed.",
    name: "Jagdeep Kaur",
    title: "International Student",
    id: "jagdeep",
  },
  {
    quote:
      "GotMyPR made it so easy to find the best program for me. I thought I had no chance — turns out I qualified for two provincial streams!",
    name: "Carlos",
    title: "Internation student",
    id: "carlos",
  },
  {
    quote:
      "GotMyPR gave me suggestions to improve my IELTS band from CLB 7 to 9 to become eligible. Finally, I got my PR due to 50+ additional points under skill transferability.",
    name: "Harsha",
    title: "Student at Humber",
    id: "harsha",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-pr-light py-16">
      <div className="section-container">
        <h2 className="section-title">Success Stories</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-6 hover:shadow-md transition-all bg-white border border-gray-100"
            >
              <div className="text-3xl text-pr-blue mb-4">"</div>
              <p className="italic mb-6 text-pr-gray/90">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-pr-blue/20 flex items-center justify-center text-pr-blue font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <div className="font-medium text-pr-gray">{testimonial.name}</div>
                  <div className="text-sm text-pr-gray/70">{testimonial.title}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
