"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-pr-blue font-bold text-xl md:text-2xl">
              GotMyPR.com
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <a href="#how-it-works" className="text-pr-gray hover:text-pr-blue px-3 py-2 rounded-md text-sm font-medium">
                How It Works
              </a>
              <a href="#value-props" className="text-pr-gray hover:text-pr-blue px-3 py-2 rounded-md text-sm font-medium">
                Why Choose Us
              </a>
              <Link href="/login">
                <Button className="bg-pr-blue hover:bg-pr-darkblue text-white">Log In</Button>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-pr-gray hover:text-pr-blue hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium text-pr-gray hover:text-pr-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#value-props"
              className="block px-3 py-2 rounded-md text-base font-medium text-pr-gray hover:text-pr-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <div className="px-3 py-2">
              <Link href="/login">
                <Button className="w-full bg-pr-blue hover:bg-pr-darkblue text-white">Log In</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
