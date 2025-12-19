'use client'

import { useState, ChangeEvent } from 'react'
import Link from 'next/link'
import { QrCode, Question, TwitterLogo, DiscordLogo } from "phosphor-react"

export default function ProfileFlow() {
  const [displayName, setDisplayName] = useState('CyberDrifter')
  const [aboutMe, setAboutMe] = useState('Building the future of decentralized social graphs. Collector of rare NFTs.')
  const [twitter, setTwitter] = useState('')
  const [discord, setDiscord] = useState('')
  const [avatar, setAvatar] = useState<string>('https://lh3.googleusercontent.com/aida-public/AB6AXuBmShphZ92V4eqPyntTQj1xKwDUKxCWYizWKyhl6olsDrh0ckViIrxcyTHvXmtVQzgFLfHcfflm7_ewN7bJZBD7JHcnBhH9u2BlaEUAe18vRUE4cZORk9AChqq4p1NEuxYN_5nnFltY5d5zNN50WXBMGTIwDcxuQ2vUtFPOnXVhVBs39ckWU5Qse2Q44h9Cg4dQ9sxcFn4-kYXqUVoHbvuP1J1C_xLUP3Wkba7NFzZYJcafPqKaRrsyiFsw7olb4UlRK-qsdmmg')

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (ev) => {
        if (ev.target?.result) {
          setAvatar(ev.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="bg-background-dark min-h-screen text-white font-display antialiased overflow-x-hidden relative">
      
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-primary/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-purple-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-glass-border bg-deep-blue/80 backdrop-blur-md px-6 lg:px-10 py-4 fixed w-full z-50">
        <Link href="/" className="flex items-center gap-3 text-white group">
          <div className="size-8 text-primary group-hover:text-accent-cyan transition-colors duration-300">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-white text-xl font-bold tracking-tight">Web3 Net</h2>
        </Link>
        <div className="flex items-center gap-6">
          <button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
            <Question size={20} weight="bold" />
            Help
          </button>
          <div className="h-8 w-[1px] bg-glass-border hidden md:block"></div>
          <div className="flex items-center gap-3 pl-2 py-1 pr-4 rounded-full bg-glass-surface border border-glass-border">
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-8 border border-primary/30" style={{ backgroundImage: `url(${avatar})` }}></div>
            <span className="text-sm font-medium text-slate-300">0x71...9A23</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-12 px-4 md:px-8 lg:px-20 flex justify-center relative overflow-hidden">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-start relative z-10">
          
          {/* Left: Setup Form */}
          <div className="flex-1 w-full lg:max-w-[600px]">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-2">Edit Profile</h1>
              <p className="text-accent-cyan/80 text-lg font-normal">Configure your decentralized contact card.</p>
            </div>
            <div className="glass-panel rounded-3xl p-6 md:p-8 flex flex-col gap-6">

              {/* Avatar Upload */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-medium ml-1">Avatar</label>
                <input type="file" accept="image/*" onChange={handleAvatarChange} className="w-full text-sm text-slate-400 file:bg-primary file:text-white file:px-4 file:py-2 file:rounded-lg file:border-none file:cursor-pointer focus:outline-none"/>
              </div>

              {/* Display Name */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-medium ml-1">Display Name</label>
                <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="e.g. Satoshi Nakamoto" className="w-full bg-glass-surface border border-glass-border rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"/>
              </div>

              {/* About Me */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-medium ml-1 flex justify-between">
                  <span>About Me</span>
                  <span className="text-slate-500 text-xs font-normal">{aboutMe.length}/140</span>
                </label>
                <textarea value={aboutMe} onChange={(e) => setAboutMe(e.target.value)} maxLength={140} rows={3} placeholder="Tell the network about your vibe..." className="w-full bg-glass-surface border border-glass-border rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"></textarea>
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-3">
                <label className="text-white text-sm font-medium ml-1">Social Signals</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="@twitter" value={twitter} onChange={(e) => setTwitter(e.target.value)} className="w-full bg-glass-surface border border-glass-border rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"/>
                  <input type="text" placeholder="Discord User" value={discord} onChange={(e) => setDiscord(e.target.value)} className="w-full bg-glass-surface border border-glass-border rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"/>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col-reverse md:flex-row gap-4 items-center justify-between mt-4">
                <Link href="/" className="text-slate-400 text-sm hover:text-white transition-colors">Skip for now</Link>
                <Link href="/" className="w-full md:w-auto bg-primary text-deep-blue font-bold px-8 py-4 rounded-full shadow-neon-green hover:shadow-[0_0_30px_-5px_rgba(43,238,121,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
                  <QrCode size={20} weight="bold" />
                  Save & Generate QR
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Live Profile Preview */}
          <div className="w-full lg:w-[420px] lg:sticky lg:top-32 flex flex-col items-center">
            <div className="mb-4 flex items-center gap-2 text-accent-cyan text-xs font-bold uppercase tracking-widest opacity-80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
              </span>
              Live Preview
            </div>

            <div className="glass-card-preview w-full aspect-[4/5] rounded-[2rem] p-8 flex flex-col justify-between relative group">
              <div className="flex flex-col items-center z-10 my-auto text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full border-4 border-glass-border shadow-[0_0_40px_-10px_rgba(0,240,255,0.4)] bg-cover bg-center" style={{backgroundImage: `url(${avatar})`}}></div>
                  <div className="absolute bottom-1 right-1 bg-primary border-2 border-deep-blue w-6 h-6 rounded-full"></div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">{displayName}</h2>
                <div className="px-4 py-1.5 rounded-full bg-black/30 border border-glass-border mb-4">
                  <span className="font-mono text-primary text-sm">0x71C...9A23</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed max-w-[260px]">{aboutMe}</p>
              </div>
              
              <div className="flex justify-center gap-4 z-10 pt-6 border-t border-glass-border mt-auto">
                {twitter && (
                  <a href={`https://twitter.com/${twitter.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-110">
                    <TwitterLogo size={20} weight="bold" />
                  </a>
                )}
                {discord && (
                  <a href={`https://discord.com/users/${discord}`} target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-110">
                    <DiscordLogo size={20} weight="bold" />
                  </a>
                )}
              </div>
            </div>
            
            <p className="mt-6 text-slate-500 text-sm text-center max-w-xs">This card is how you will appear to other nodes on the network.</p>
          </div>

        </div>
      </main>
    </div>
  )
}
