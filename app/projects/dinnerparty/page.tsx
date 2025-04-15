'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DinnerPartyPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-[#4a5568] flex flex-col">
      {/* Header with back button */}
      <header className="w-full p-6 flex items-center">
        <button 
          onClick={() => router.back()}
          className="flex items-center text-[#4a5568] hover:text-[#2d3748] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="text-center mb-16">
          <div className="mb-8 mx-auto">
            <div className="h-32 w-32 overflow-hidden rounded-[22%] mx-auto" style={{ 
              filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
              background: 'white'
            }}>
              <img 
                src="/images/final-image (4).png" 
                alt="DinnerParty App" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#2d3748] mb-4">DinnerParty</h1>
          <p className="text-xl text-[#718096] max-w-2xl mx-auto mb-12">
            A fun way for college students to break out of the norm of only meeting others at parties.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <Link 
            href="/projects/dinnerparty/privacy-policy"
            className="px-8 py-4 border-2 border-[#4a5568] text-[#4a5568] rounded-lg hover:bg-[#4a5568] hover:text-white transition-colors duration-300 text-center"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/projects/dinnerparty/terms-conditions"
            className="px-8 py-4 border-2 border-[#4a5568] text-[#4a5568] rounded-lg hover:bg-[#4a5568] hover:text-white transition-colors duration-300 text-center"
          >
            Terms and Conditions
          </Link>
        </div>
      </main>
    </div>
  );
} 