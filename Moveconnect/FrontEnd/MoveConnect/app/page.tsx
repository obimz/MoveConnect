'use client'

import Link from 'next/link'
import { Wallet, RocketLaunch } from "phosphor-react"

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-midnight/90 z-0"></div>
      
      {/* Animated Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 particle-blob z-0" style={{animationDelay: '0s'}}></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 particle-blob z-0" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-primary/10 particle-blob z-0" style={{animationDelay: '4s'}}></div>
      
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 bg-grid-pattern z-0 opacity-50 pointer-events-none"></div>
      
      {/* Main Layout Container */}
      <div className="relative z-10 layout-container flex h-full grow flex-col justify-center w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="layout-content-container flex flex-col w-full max-w-[480px]">
            {/* Glass Card */}
            <div className="glass-card rounded-2xl p-8 sm:p-12 flex flex-col items-center text-center animate-float">
              {/* Animated Logo */}
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full animate-pulse-slow"></div>
                <div className="relative size-20 text-white logo-glow">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_logo)">
                      <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="#2bee79" fillRule="evenodd"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_logo"><rect fill="white" height="48" width="48"></rect></clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              
              {/* Headlines */}
              <h1 className="text-white tracking-tight text-[32px] sm:text-[40px] font-bold leading-tight mb-3">
                Connect. Verify. Grow.
              </h1>
              <p className="text-gray-300 text-base sm:text-lg font-normal leading-relaxed mb-10 max-w-[320px]">
                Your blockchain business identity in one link.
              </p>
              
              {/* Buttons Stack */}
              <div className="flex flex-col gap-4 w-full">
                {/* Primary Button */}
                <Link href="/profile-setup" className="group flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-6 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:shadow-[0_0_20px_rgba(43,238,121,0.4)] hover:scale-[1.02]">
                  <Wallet size={24} weight="bold" className="mr-2" />
                  <span className="truncate">Connect Sui Wallet</span>
                </Link>
                
                {/* Secondary Button */}
                <Link href="/network" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-6 border border-primary/30 hover:border-primary/80 bg-transparent text-white text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:bg-primary/5">
                  <RocketLaunch size={24} weight="bold" className="mr-2" />
                  <span className="truncate">Explore Demo</span>
                </Link>
              </div>
              
              {/* Footer Link */}
              <div className="mt-8 pt-4 border-t border-white/5 w-full">
                <p className="text-sm text-gray-400">
                  Already have a profile? 
                  <Link href="/profile" className="text-primary hover:text-white font-semibold transition-colors ml-1">Log In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
