'use client'

import type React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import {
  House,
  QrCode,
  User,
  Users,
  DotsThreeVertical,
  MagnifyingGlass,
  ShareNetwork,
  UserMinus,
  ChatCenteredText,
  List,
  Barcode
} from 'phosphor-react'

export default function Network() {
  const [searchQuery, setSearchQuery] = useState('')

  const contacts = [
    { name: 'Vitalik.eth', address: '0xd8...040', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh2Kx7JNGKQ9IUbThzmSfm-cNBoouTNXz9pR8RvlaFWbwcbXkmLFufvp7YYmmS7kY5ZbdrEIdcZBrrG24QKUSiaMmpZNnyymtrWqxutpTsf2rGFi77eqB9KtdythTmsC0RLDLz2uvl06p9alHCcvs1W2YkfM6ISZFEVzPdySnfmP798kAFeCASpfWB__gt4pcqiBHTmS0NjxM9zOZ6kAG7e5VAExA_hRjgmr3DDpdqkIXAKxFAQe5c0CV6VAZP1bHW87zeHYSj', online: true, time: '2m ago' },
    { name: '0xDev...8a2', address: '0x71...8a2', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvFcbj8in-g_Cx-m92ZCryBia4LPo0jRCeCFmpBHY22NM8Dw7ISIn-4O9XABhlFw6CAacEY7u-KSh9m1nq_0NWPmpnDsukN039NtTU26eMnXSSNKDCZ3e9PzI8lOBtLWYQf-bBhfIQMY5c08e44DXHwOZjrQuEj_NbQ7JJYlX3HHIoBtFqw7O6ZOh3u3ifL48BA1RGap8u5pfj9CcKGuy5TYDH3bCGEC9no9LYnfeR-Kj2m2ynJ1Ns7zyK5FzrJgqUbs5CG-Is', online: false, time: '1h ago' },
    { name: 'Alice_W3', address: '0xa2...99c', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0-k9h2Cww5jUhgj93JMDIlHYDlkM5dwheckg4cCD4SjUnEnm-t_n0LPb-Ku8V27xdia90HuU1Z5Fa8-C8NN2edd2IOSAVYRT_uMEl5WQZFqEa-kd5OWQa9PsTQtHXAG7xhlNINOBFY79Qic8OgnDxQ1kk6wn4Y6iCBWQRYKZKEB-nbeWQ644tf-IdRz8SnqBhUwxgio0044jmXIX7MezbbSiyjDSqik98qysBsTABkeg0fCZoZzenaBY897Y_ascwItL3Ev8A', online: true, time: '3h ago' },
    { name: 'CryptoPunk#9922', address: '0xbb...112', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoDiMDJmHx5BSzOhURkWTglJcg6FuLuaoX-R7QFD8IMe8fxmjVuKQCDEPmv9y6tVVQNVh10X9PkP6q9hvj7PONHn02s5FCNqzVDb14FLOMRIK4sLFaVuk2dXyW645cidt1tvE5xs3zYf6WJBNSxrfmm3NY3NAS8HijeoFQFk9QhERo1KDp08NDqABSRUyrgDf00syX8elLyR8rQcoXBIx0gtBeor1h8HSUfTQeZae0SeAI9eq6TmIg9bSIVQ4PHmOo5sr-QbWI', online: false, time: '1d ago' },
    { name: 'Satoshi_Naka', address: '0xff...001', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdNrCdpjeenH4hNxTvgRZeK4tfN0jd5mnr8b02yUMenN4ycas4K1sf1QmZ6vPaoGz0m8v5OwneLWT0pr0thr9SOYJAqNXK1ZWpvjhSqmsiP-2scU3i0I-_rkigL9SelxLXvCtgb6UUuy08Gqi0vuj7OLswel0fSzRC5uQd-uZpg-L5gD8o6tko0HOEA9RPmsGqmu8OCncTdAxGv8RsPTDh5S4v1iZDekiTyQnFW3dtL4-1h0zxTrdiIkGDi02dmuB2U07l55ig', online: true, time: '2d ago' },
  ]

  return (
    <div className="flex h-screen w-full relative">
      {/* Sidebar */}
      <aside className="w-20 lg:w-72 flex-shrink-0 z-20 flex flex-col border-r border-glass-border glass-panel">
        <nav className="flex-1 flex flex-col gap-2 px-3 py-6">
          <Link href="/" className="flex items-center gap-4 px-3 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5">
            <House size={22} weight="duotone" />
            <span className="hidden lg:block font-medium">Home</span>
          </Link>

          <Link href="/scanner" className="flex items-center gap-4 px-3 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5">
            <QrCode size={22} weight="duotone" />
            <span className="hidden lg:block font-medium">Scan</span>
          </Link>

          <Link href="/profile" className="flex items-center gap-4 px-3 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5">
            <User size={22} weight="duotone" />
            <span className="hidden lg:block font-medium">Profile</span>
          </Link>

          <Link href="/network" className="flex items-center gap-4 px-3 py-3 rounded-xl text-white bg-white/5 border border-white/10">
            <Users size={22} weight="duotone" className="text-secondary" />
            <span className="hidden lg:block font-medium">My Network</span>
            <span className="ml-auto text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full">342</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-glass-border">
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold">JD</div>
            <div className="hidden lg:block overflow-hidden">
              <p className="text-sm font-medium text-white truncate">0xJohnDoe.eth</p>
              <p className="text-xs text-gray-500 truncate">0x4a...3b1</p>
            </div>
            <DotsThreeVertical size={20} className="ml-auto text-gray-500 hidden lg:block" />
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col relative">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 glass-panel border-b border-glass-border">
          <span className="font-bold text-lg">My Network</span>
          <Barcode size={24} />
        </div>

        <div className="flex-1 overflow-y-auto p-4 lg:p-10">
          <div className="max-w-5xl mx-auto flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-4xl font-black text-white">My Network</h2>
                <p className="text-secondary flex items-center gap-2 mt-1">
                  <List size={18} weight="duotone" />
                  342 Connections
                </p>
              </div>

              <Link href="/scanner" className="hidden md:flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-full font-bold">
                <QrCode size={20} weight="bold" />
                Scan New
              </Link>
            </div>

            {/* Search */}
            <div className="relative">
              <MagnifyingGlass size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                className="w-full bg-[#0f1623] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white"
                placeholder="Search ENS or 0x address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Contacts */}
            <div className="flex flex-col gap-3 pb-24">
              {contacts.map((c, i) => (
                <div key={i} className="group flex items-center justify-between p-4 rounded-2xl glass-card hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${c.avatar}')` }} />
                      <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${c.online ? 'bg-primary' : 'bg-gray-500'}`} />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{c.name}</p>
                      <p className="text-xs text-gray-400 font-mono">{c.address}</p>
                    </div>
                  </div>

                  <div className="hidden group-hover:flex gap-2">
                    <ShareNetwork size={18} />
                    <UserMinus size={18} />
                    <ChatCenteredText size={18} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile FAB */}
        <Link href="/scanner" className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-black rounded-full flex items-center justify-center">
          <QrCode size={26} weight="bold" />
        </Link>
      </main>
    </div>
  )
}
