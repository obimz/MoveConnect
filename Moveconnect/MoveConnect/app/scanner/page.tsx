'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { WifiHigh, Gear, UploadSimple, ArrowRight, House, QrCode, User } from 'phosphor-react'

export default function Scanner() {
  const [preconnections, setPreconnections] = useState([
    { name: '@NeoNomad', address: 'ETH Tokyo Event • NFC', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXH7x3sRSVlej3GBvCH9ua91-GjY12-4QYfFoOzLBJYCVPcF4E2qqKvWN9mPxRUzonxtBx3X5PTvaEVdfE8k9YjuCp1F6YmB11CVKN-juWmUskPSIRpwLKQmjX_p4nR3XT-YH5v2v-8sZIm2sbPwYFbaAM9Id3zi4lArMvxfzQgT3E0J_VcVRlezOww19F3G-JfZ_syeW3t0okeWEPnFP2dcCIr7rCN2D945hH923_I9v6WS5butUdDbCkMLmTSNS1yZmSRTO2', online: true, time: '2m ago', pro: true },
    { name: '0xCypher', address: 'Direct Scan', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9iTQCT0snYDNXeJgnFc6w20RRE3RB_J3SDQWJ1KRC2hD9AA49AWTD1qa8m-fVPESD5N8yJPd-lp5ikwiyhBbRtHW8tEAcgNRQbRj2DHS1quOXSV5jd-JPMLwU1cdi5OuAJMq4BRU8OWtPePDMKG7xMnThgvhS_uErNzjBo8lGiFsDpWGybXIrevVP76OPFTTxSwolG9ZtigsP1Jw1pW_uOVfI5Un8YR5aduMSf9RAiFuuWsaYYF018Tc5K73GY3o96Ik508Jr', online: false, time: '15m ago', pro: false },
    { name: 'DAO_Member_88', address: 'Shared via Link', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASYeinjO8fHQqiRbr9k25FztsktuozWH22_GRWvvqZi3zkRfSiNDf5iRhy4a81txVEfzn4Wag_3q8gHXs6Co7wqAwKHnBXESi2soR5YWt5KUKR_70b55fQHqQREmVLX3fVA2XezMW7x91pVLDZE3mCis0GNIRH4onWcXJSkuBLOu-s0XBjQehHGMq-ZCI6Hsd5qk8OL6jpfapW_AxmoIa40153Fma1Yt57ZkYQhW6XB47cPyEW3Y6fVdnqdzvfBkxZWmFNp4h-', online: false, time: '1h ago', pro: false },
  ])

  const [laserPos, setLaserPos] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setLaserPos((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 16)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-display bg-background-dark text-white antialiased min-h-screen flex flex-col overflow-hidden relative">
      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[100px] animate-blob"></div>
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex flex-1 justify-center py-6 sm:py-10 px-4 sm:px-6">
          <div className="flex flex-col w-full max-w-[480px] h-[calc(100vh-80px)] glass-card rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">

            {/* Header */}
            <header className="flex items-center justify-between px-6 py-5 border-b border-white/5 bg-black/20">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary animate-pulse">
                  <WifiHigh size={20} weight="fill" />
                </div>
                <div>
                  <h2 className="text-white text-sm font-bold tracking-widest uppercase leading-none">Connect</h2>
                  <p className="text-primary text-[10px] font-medium tracking-wide mt-1">SYSTEM READY</p>
                </div>
              </div>
              <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
                <Gear size={20} />
              </button>
            </header>

            {/* Scanner Section */}
            <div className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col">
              <div className="p-6 pb-2">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-inner">
                  <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAItFc5yabGvGln1Dmq2uoRJcZWOXm2Z6BsrNTucZ1GDX5pKXn7m9PdsNbDh-2U7sYDJg01L6n7H5Yxn4SAknH5AD-l_F3fMcucPx1C4BhoGZ4azgXKm9zmjsTMfwuxT7TVHOsUTW8K27eKYMs1EumJXMFs9sVCzHA18WOUraGxbURw42kWgHAC6oLTVnoxjURvTpj4Q3ramY70dD9VV_pTeFpcCl25bBpd_pljMp9jhifKaViWluhF0f2uirlwFc6TMTlpFsMo")'}}></div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-10">
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary rounded-tl-lg shadow-glow"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary rounded-tr-lg shadow-glow"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary rounded-bl-lg shadow-glow"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary rounded-br-lg shadow-glow"></div>

                    <div className="absolute left-0 right-0 h-0.5 bg-primary shadow-glow-strong" style={{ top: `${laserPos}%`, transition: 'top 0.016s linear' }}></div>

                    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 opacity-20">
                      <div className="border-r border-b border-primary/30"></div>
                      <div className="border-b border-primary/30"></div>
                      <div className="border-r border-primary/30"></div>
                      <div></div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-white text-xs font-bold hover:bg-primary hover:text-black transition-all duration-300 shadow-lg">
                      <UploadSimple size={18} weight="bold" />
                      <span>UPLOAD QR IMAGE</span>
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-slate-400 text-sm">Align QR code within the frame</p>
                </div>
              </div>

              {/* Preconnections */}
              <div className="flex-1 bg-gradient-to-t from-black/40 to-transparent p-6 pt-2">
                <div className="flex items-center justify-between mb-4 mt-2">
                  <h3 className="text-white text-xs font-bold tracking-[0.15em] uppercase opacity-70">Preconnections // Recent</h3>
                  <Link href="/network" className="text-primary text-xs hover:text-white transition-colors">View All</Link>
                </div>
                <div className="space-y-3">
                  {preconnections.map((item, index) => (
                    <div key={index} className="group flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 hover:shadow-glow transition-all duration-300 cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-cover bg-center border border-white/10" style={{ backgroundImage: `url("${item.avatar}")` }}></div>
                          {item.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-[#151c28]"></div>}
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="text-white font-bold text-sm">{item.name}</span>
                            {item.pro && <span className="bg-primary/20 text-primary text-[9px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">PRO</span>}
                          </div>
                          <span className="text-slate-400 text-xs">{item.address}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-slate-500 text-[10px] font-mono">{item.time}</span>
                        <Link href="/business-card" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors">
                          <ArrowRight size={20} weight="bold" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="p-4 bg-black/40 border-t border-white/5 backdrop-blur-md">
              <nav className="flex items-center justify-between px-6">
                <Link href="/" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors group">
                  <House size={20} weight="bold" className="group-hover:-translate-y-1 transition-transform" />
                  <span className="text-[10px] font-medium tracking-wide">HOME</span>
                </Link>
                <Link href="/scanner" className="relative -top-6 flex flex-col items-center justify-center w-16 h-16 rounded-full bg-primary text-black shadow-glow border-4 border-[#121926] transition-transform hover:scale-110 active:scale-95">
                  <QrCode size={32} weight="bold" />
                </Link>
                <Link href="/profile" className="flex flex-col items-center gap-1 text-slate-400 hover:text-white transition-colors group">
                  <User size={20} weight="bold" className="group-hover:-translate-y-1 transition-transform" />
                  <span className="text-[10px] font-medium tracking-wide">PROFILE</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
