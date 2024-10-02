"use client";

import { useState } from "react";
import { Heart, Mail, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

// Custom Input component
const Input = ({
  className,
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => (
  <input
    className={`appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm ${className}`}
    {...props}
  />
);

export default function LandingPage() {
  

  return (
    <div
      className={`min-h-screen flex flex-col bg-white ${poppins.variable} font-sans`}
    >
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="flex items-center justify-center">
        <Image
                src="/../images/Color logo - no background copy.svg"
                alt="Healthcare innovation illustration"
                width={200}
                height={20}
                className="mx-auto"
              />
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full space-y-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
                Coming Soon
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Revolutionizing healthcare through cutting-edge AI.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/../images/undraw_medicine_b-1-ol-2.svg"
                alt="Healthcare innovation illustration"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="flex justify-center space-x-6">
          <a href="https://www.instagram.com/boardwalkhealth/?hl=en" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <Instagram className="h-6 w-6" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/company/boardwalk-health" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Boardwalk Health. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
