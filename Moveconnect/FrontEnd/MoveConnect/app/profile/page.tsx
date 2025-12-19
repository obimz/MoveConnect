'use client'

import Link from 'next/link'
import { House, QrCode, User, Envelope, ShareNetwork, CheckCircle } from "phosphor-react"

export default function Profile() {
  return (
    <div className="bg-background-dark min-h-screen text-white font-display antialiased overflow-x-hidden selection:bg-primary selection:text-black relative">
      
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-primary/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-purple-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Layout */}
      <div className="relative z-10 flex flex-col items-center min-h-screen pb-32 pt-6 px-4">
        <main className="w-full max-w-[640px] flex flex-col gap-6">

          {/* Identity Card */}
          <div className="glass-panel rounded-2xl overflow-hidden shadow-glass flex flex-col relative group">
            
            {/* Hero Header Image */}
            <div className="h-48 w-full relative bg-[#112233] overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-overlay group-hover:scale-105 transition-transform duration-700 ease-out" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTYAOJAgFuop9EQKmI5xIddt6biGh4BMeRACkwmYfOc5zUO0ifTbeTznmBCh2d1NCwOZqswUMIlgJxcydP9ayjRmpn29hUVfLn9ACXABO9TehjmPOByUtN5GYvNRQ7265xP4ViJv2jhjtRRCW50QQ7hn5ct1tjcbY7QcYdeFGCOrdm-_3YONq3g3_VnJupa3Lue2O1LJjxGhBkQ_F0w1ncgbzfn-jO0ANpUVRvCu1a_XN3NoJNXItIbHDVRXspaBy8nt1kGBe6")'}} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1929] to-transparent opacity-90"></div>

              {/* Top Actions */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="w-9 h-9 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:bg-white/10 transition shadow-glow" aria-label="More options">
                  <Envelope size={20} weight="bold" />
                </button>
              </div>
            </div>

            {/* Avatar & Info */}
            <div className="px-6 pb-8 relative flex flex-col items-center -mt-16">
              
              {/* Avatar */}
              <div className="relative w-32 h-32 rounded-full p-1 bg-[#0d1929] border border-white/10 shadow-neon">
                <div 
                  className="w-full h-full rounded-full bg-cover bg-center relative overflow-hidden" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-OEpfF-PwIOfv-XukZh4EWHDrsfpVuNxM-hIpfvFZxcyrLZTe1mx0nKj-Mew3Kl_QhroowzVZ5BYzn0tnt9gPIT5HBXBQdGUcnRifqhEzDm5H1nx-DI0DZGGw3o4BTWXWfw33uWvyTxzHOUZTCJFmkt8ySllibrHE4LC1OEvdI5bUqF2zBYxPkiE73LeXt4nqlHOY-sAhM0Iu3dVORAfDujFGN7Ah2aBAWc1iUlm-7uvvnktgmvHMftCoh5lNsd58BICgB4jP")'}}
                >
                  {/* Online Status Indicator */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-primary rounded-full border-2 border-[#0d1929] animate-pulse"></div>
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-4 text-center space-y-1">
                <h1 className="text-2xl font-bold tracking-tight text-white">Alex 'Neo' Chen</h1>
                <p className="text-sm font-medium text-primary tracking-wide uppercase opacity-90">Frontend Wizard & Collector</p>

                {/* Wallet Pill */}
                <button className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer group/wallet shadow-sm" aria-label="Copy wallet address">
                  <span className="w-2 h-2 rounded-full bg-primary/50 animate-pulse"></span>
                  <span className="text-xs font-mono text-gray-300 group-hover/wallet:text-white transition-colors">0x71C...39A2</span>
                  <Envelope size={14} weight="bold" className="text-gray-500 group-hover/wallet:text-primary transition-colors" />
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {[
                  { icon: <Envelope size={20} weight="bold" />, label: 'Dribbble', href: '#' },
                  { icon: <Envelope size={20} weight="bold" />, label: 'Chat', href: '#' },
                  { icon: <ShareNetwork size={20} weight="bold" />, label: 'Website', href: '#' },
                ].map((link, i) => (
                  <a key={i} className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-gray-300 hover:text-primary transition-all hover:scale-110" href={link.href} aria-label={link.label}>
                    {link.icon}
                  </a>
                ))}
              </div>

              {/* Bio */}
              <p className="mt-6 text-sm text-center text-gray-400 leading-relaxed max-w-sm">
                Building the open metaverse. Collector of rare artifacts. Based in Neo-Tokyo. 
                Always looking for the next big protocol.
              </p>

              {/* Main Actions */}
              <div className="flex w-full gap-3 mt-8">
                <button className="flex-1 h-11 rounded-full bg-primary hover:bg-primary/90 text-background-dark font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-neon transition-all hover:shadow-[0_0_25px_-5px_rgba(43,238,121,0.5)]">
                  <Envelope size={18} weight="bold" />
                  Message
                </button>
                <button className="flex-1 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2 backdrop-blur transition-all shadow-sm">
                  <ShareNetwork size={18} weight="bold" />
                  Share Profile
                </button>
              </div>
            </div>
          </div>

          {/* Event Proofs Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle size={18}  weight="bold" className="text-primary" />
                Event Proofs
              </h2>
              <a className="text-xs text-primary hover:text-white transition-colors" href="#">View All</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: 'Early Adopter', tier: 'Gold Tier', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBuRp6k9sWZ2FZ1vJh0sTV3dKxNYjWEXr47upVx5mFYuCa5_m7ck0XjpVE-TfNIL1eKxSSuosNB2RhNUngI88qdyN-sbVJi-PMbkOHRJegfcBbULxCNvGRvZO0mWeLHSz4VkoOcZ9Rsm5IXx3VhW0ejInnXj5r5U2QW73B1gJjPpeVxzAgh42MSppuY-zpDyP_mRV7m2SBPHyB-rfQj8TsJje5mdiR05dzbNjgYmoC5R9ufj2PWpnmf7JLzrs5o6OA--bpx9eQ' },
                { title: "ETH Denver '24", tier: 'Holographic', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDllHqtYbNld4rampTa2yf9UJPVjG16p9Yf_UTxkv5sud1OOkEg1YffNob7-PEF0DwagEMx1x6mEVr23d3iThaUdtG5a5mKKYyJGpksB10FSf9EcZEglnWKGVpjSTIygKD9w4356d-_DVY2hXrTQ8lgwS0yGX7jFyrRpdMUByhVIfL62qWLo_DBh9lDZ78blmguzfIheqJPFwlqQkUjtgK26a9C8KJI4xJpuYkL3yagc-HjtU3yB6IVpe3qfVeZtT1a_RfbBMJ9' },
                { title: 'DAO Contributor', tier: 'Silver Tier', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrsNz6SnL-LVxkkdMDqnLXau2DI1H-f5y19j83DuNo-bU0qeWXPRgrgT-lCOE69ihxYMRONKdAGhIgp1JDb1sHsj8aojCe4jABloZAQgTxDfLxUr5e0zXjji4Bo91FW2yYtTCTAA6bGD0X7Gk8KnrpeKKKpljejy6RvTg7lBCJxoxGhJjKLdEF96vZLg02IJsXOju0zIixWwiO0Noz2LQ2ha_jd8NLtUMpUFAaPMOKYoWqi9bVjC5Lf9nCifAeGkUFI9v5Ym_R' },
              ].map((badge, i) => (
                <div key={i} className="badge-card rounded-xl p-3 border border-white/5 flex sm:flex-col items-center sm:text-center gap-4 sm:gap-3 group cursor-pointer relative overflow-hidden shadow-sm hover:shadow-glow transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-16 sm:w-24 h-16 sm:h-24 rounded-lg bg-black/40 shadow-inner border border-white/5 flex items-center justify-center overflow-hidden relative z-10">
                    <img 
                      alt={badge.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      src={badge.img} 
                    />
                  </div>
                  <div className="flex flex-col items-start sm:items-center z-10">
                    <h3 className="font-bold text-sm text-gray-200 group-hover:text-primary transition-colors">{badge.title}</h3>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mt-1">{badge.tier}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="glass-panel rounded-xl p-4 flex justify-between items-center border border-white/5">
            <div className="flex flex-col items-center flex-1 border-r border-white/5">
              <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Followers</span>
              <span className="text-xl font-display font-bold text-white mt-1">12.8k</span>
            </div>
            <div className="flex flex-col items-center flex-1 border-r border-white/5">
              <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Following</span>
              <span className="text-xl font-display font-bold text-white mt-1">420</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Trust Score</span>
              <span className="text-xl font-display font-bold text-primary mt-1">98%</span>
            </div>
          </div>
        </main>

        {/* Floating Bottom Navigation Dock */}
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 glass-dock rounded-full px-2 py-2 flex items-center gap-2 z-50 shadow-2xl">
          <Link href="/" className="relative w-12 h-12 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all group shadow-sm">
            <House size={24} weight="bold" />
            <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold bg-black px-2 py-1 rounded text-white whitespace-nowrap pointer-events-none">Home</span>
          </Link>
          <Link href="/scanner" className="relative w-14 h-14 rounded-full bg-primary flex items-center justify-center text-background-dark shadow-neon hover:scale-105 transition-all group -mt-4 mb-2 border-4 border-[#050a14]">
            <QrCode size={28} weight="bold" />
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold bg-black px-2 py-1 rounded text-white whitespace-nowrap pointer-events-none">Scan</span>
          </Link>
          <Link href="/profile" className="relative w-12 h-12 rounded-full flex items-center justify-center text-primary bg-white/5 transition-all group shadow-sm">
            <User size={24} weight="bold" />
            <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold bg-black px-2 py-1 rounded text-white whitespace-nowrap pointer-events-none">Profile</span>
          </Link>
        </nav>
      </div>
    </div>
  )
}
