"use client";

import Link from "next/link";
import ProductPreviewCards from "./ProductPreviewCards";

export default function HeroSection() {
  return (
    <section className="bg-white pt-16 pb-8">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pr-gray leading-tight mb-6">
            Discover Your Fastest Path to Canadian PR — Personalized to Your Profile.
          </h1>
          <p className="text-lg md:text-xl text-pr-gray/80 mb-8">
            Upload your resume or connect your LinkedIn. We'll instantly map the immigration programs you're eligible for — and show how you can qualify for even more.
          </p>
          <Link
            href="/onboarding"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center"
          >
            Get Started – Check Eligibility
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <ProductPreviewCards className="mt-12" />
      </div>
    </section>
  );
}
