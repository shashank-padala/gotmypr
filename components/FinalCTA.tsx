"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-r from-pr-blue to-pr-darkblue text-white py-16">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Your PR journey starts here. Get your personalized plan today.
        </h2>
        <div className="max-w-xl mx-auto bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <p className="text-lg mb-6">
            Join thousands of people who found their fastest pathway to Canadian permanent residency
          </p>
          <Link
            href="/onboarding"
            className="btn-primary text-lg inline-flex items-center px-8 py-4"
          >
            Check Your PR Eligibility Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
