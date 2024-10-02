"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

// Custom Input component


export default function LandingPage() {
  

  return (
    <div
      className={`min-h-screen flex flex-col bg-white ${poppins.variable} font-sans`}
    >
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="flex items-center justify-center">
          <Image
            src="/../images/Color logo - no background copy.svg"
            alt=""
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
            </div>
            <div className="md:w-1/2 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Image
                src="/../images/undraw_search_re_x5gq.svg"
                alt=""
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <p className="mt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Boardwalk Search. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
