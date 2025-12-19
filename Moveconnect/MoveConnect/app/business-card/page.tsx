'use client'

import Link from 'next/link'
import {
  Copy,
  ShareNetwork,
  ChatCircleDots,
  PaperPlaneTilt,
  Briefcase,
  UserPlus,
  ArrowRight,
} from 'phosphor-react'

export default function BusinessCard() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#2bee79 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10" />

      {/* Card */}
      <div className="relative z-20 w-full max-w-[380px]">
        <div className="glass-card flex flex-col items-center rounded-lg p-8 shadow-2xl ring-1 ring-white/10 transition-all duration-500 hover:ring-primary/30 hover:shadow-neon">

          {/* Avatar */}
          <div className="relative mb-6 group cursor-pointer">
            <div className="absolute inset-0 bg-primary blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />

            <div className="relative h-32 w-32 hexagon-avatar bg-gradient-to-br from-primary to-blue-900 p-[2px]">
              <div className="h-full w-full bg-[#112218] hexagon-avatar overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt9vIZ4OnV9OG_TnAhzdr-xXuHxTXUnVmOwq8bWckVjhpMOlO_BjkQ-ANHU2bs9c7f3Dbp6SvKBUgBKBIatFQkXoZwF6JSlZC-LlRMh-8u3141dH9Nuz7QwDVNAiYlhcaff6Gx6N1AcvDsu1ODpeV5qjzEAp7w8DMMEEuFMzJZzcci1K2w4wxQzGHYKyQP4d7VmeRoVVZ9fVZtS6FWkmCY87ArIve5ZzjKd2NAlnMTk5DGpsQ68SlVab6cdqWC0Plpu607XAjq"
                  alt="User Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-primary border-[3px] border-[#112218]" />
          </div>

          {/* Text */}
          <div className="flex flex-col items-center gap-2 mb-6">
            <h1 className="text-white text-[26px] font-bold text-center">
              Alex &apos;Cipher&apos; Doe
            </h1>
            <p className="text-[#92c9a8] text-sm text-center max-w-[260px]">
              Building the future of DeFi @ Protocol X. Smart Contract Auditor.
            </p>
          </div>

          {/* Wallet */}
          <div className="mb-8">
            <button className="group flex h-10 items-center gap-2 rounded-full bg-white/5 border border-white/5 pl-4 pr-3 hover:bg-white/10 hover:border-primary/30 transition-all active:scale-95">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-gray-300 text-sm font-mono group-hover:text-white">
                0x71C...9A23
              </span>
              <Copy
                size={18}
                weight="bold"
                className="text-gray-400 group-hover:text-primary transition-colors"
              />
            </button>
          </div>

          {/* Socials */}
          <div className="grid grid-cols-4 gap-3 w-full mb-8 px-2">
            <IconButton icon={<ShareNetwork size={24} weight="bold" />} />
            <IconButton icon={<ChatCircleDots size={24} weight="bold" />} />
            <IconButton icon={<PaperPlaneTilt size={24} weight="bold" />} />
            <IconButton icon={<Briefcase size={24} weight="bold" />} />
          </div>

          {/* Actions */}
          <div className="flex flex-col w-full gap-3">
            <Link
              href="/network"
              className="w-full h-12 rounded-full bg-primary text-background-dark font-bold flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98]"
            >
              <UserPlus size={20} weight="bold" />
              Add to Contacts
            </Link>

            <Link
              href="/profile"
              className="h-10 text-white/70 hover:text-white text-sm font-semibold flex items-center justify-center gap-1"
            >
              View Full Profile
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

/* Reusable icon button */
function IconButton({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="flex items-center justify-center aspect-square rounded-2xl bg-white/5 hover:bg-primary hover:text-background-dark transition-all text-white"
    >
      {icon}
    </a>
  )
}
