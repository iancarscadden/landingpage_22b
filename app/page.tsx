'use client';

import React from "react";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Link from 'next/link';

// Dynamic import for ModelViewer
const ModelViewer = dynamic(() => import('./components/ModelViewer'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white text-[#4a5568] flex flex-col">
      {/* Main content - split layout */}
      <div className="flex flex-col md:flex-row w-full min-h-screen">
        {/* Left side - Text content */}
        <div className="w-full md:w-1/2 h-screen flex items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-extrabold text-[#4a5568] font-helvetica-neue leading-tight tracking-tight mb-4">
              Welcome to 22b.dev
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-[#718096] font-medium">
              Ian Carscadden's Development Portfolio
            </p>
          </div>
        </div>
        
        {/* Right side - Car model */}
        <div className="w-full md:w-1/2 h-screen flex items-center justify-center p-4">
          <div className="w-full h-full max-w-2xl max-h-2xl">
            <Suspense fallback={<div className="w-full h-full bg-white"></div>}>
              <ModelViewer
                modelPath="/models/subaru_impreza_sti_22b_stylized_toon.glb"
                backgroundColor="white"
                scale={1.0}
                position={[0, -0.5, 0]}
                rotation={[0, Math.PI / 4, 0]}
                enableDragging={true}
              />
            </Suspense>
          </div>
        </div>
      </div>
      
      {/* Call to action section */}
      <div className="w-full bg-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          {/* Background subtle pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gray-300 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gray-300 transform translate-x-1/3 translate-y-1/3"></div>
          </div>
          
          {/* Main content */}
          <div className="relative z-10 text-center px-4 md:px-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4a5568] leading-tight max-w-3xl mx-auto">
              Want to make your <span className="text-[#2d3748]">idea</span> a reality?
            </h2>
            <p className="text-xl text-[#718096] leading-relaxed mt-6 max-w-2xl mx-auto">
              Get in touch with me
            </p>
            <div className="mt-10">
              <button className="px-10 py-5 bg-[#4a5568] hover:bg-[#2d3748] text-white font-medium rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Portfolio section */}
      <div className="w-full bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4a5568] mb-4">My Portfolio</h2>
            <p className="text-xl text-[#718096] max-w-2xl mx-auto">
              Explore our successful projects and see how we've helped turn ideas into reality.
            </p>
          </div>
          
          {/* Portfolio cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Shira card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-40 w-40 overflow-hidden rounded-[22%]" style={{ 
                    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                    background: 'white'
                  }}>
                    <img 
                      src="/images/Shira V2 Blush.jpeg" 
                      alt="Shira App" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute top-0 right-0 bg-[#4a5568] text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
                  iOS & Android
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#2d3748] mb-2">Shira</h3>
                <p className="text-[#718096] mb-6">
                  Transforming language learning to short form content and interactive real time conversations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-[#4a5568] rounded-full">
                      Mobile App
                    </span>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-[#4a5568] rounded-full">
                      Language Learning
                    </span>
                  </div>
                  <button className="px-4 py-2 text-sm bg-white border border-[#4a5568] text-[#4a5568] rounded-lg hover:bg-[#4a5568] hover:text-white transition-colors duration-300">
                    View Project
                  </button>
                </div>
              </div>
            </div>
            
            {/* DinnerParty card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-40 w-40 overflow-hidden rounded-[22%]" style={{ 
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
                <div className="absolute top-0 right-0 bg-[#4a5568] text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
                  iOS & Android
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#2d3748] mb-2">DinnerParty</h3>
                <p className="text-[#718096] mb-6">
                  A fun way for college students to break out of the norm of only meeting others at parties.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-[#4a5568] rounded-full">
                      Mobile App
                    </span>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-[#4a5568] rounded-full">
                      Social
                    </span>
                  </div>
                  <Link href="/projects/dinnerparty" className="px-4 py-2 text-sm bg-white border border-[#4a5568] text-[#4a5568] rounded-lg hover:bg-[#4a5568] hover:text-white transition-colors duration-300 inline-block">
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
