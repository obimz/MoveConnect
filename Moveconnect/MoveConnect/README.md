<<<<<<< HEAD
# MoveConnect
The Frictionless Web3 Networking Layer on Sui.
MoveConnect is a decentralized networking dApp for builders on the sui network. It replaces physical business cards with "Crypto-Style" digital identities(SUI CARDS). By leveraging the Sui blockchain, we allow users to instantly connect, verify attendance at events via NFT badges, and manage their professional Web3 network through simple QR code interactions.

---

## 🚀 Key Features

### 1. Instant QR Connectivity
* **Scan-to-Connect:** Users can scan a personalized QR code to instantly fetch another user's on-chain profile.
* **Wallet-Native:** No database login required; the connection is established directly between Sui wallet addresses.

### 2. "Crypto-Style" Digital Business Cards
* **Dynamic Identity:** A sleek, dark-mode digital card displaying:
    * Profile Picture (NFT or Standard)
    * "About Me" Bio
    * Copyable Wallet Address (Truncated for UI, full copy on tap)
    * 4 Custom Social Links (Twitter/X, Telegram, Discord, LinkedIn)
* **Preconnections List:** When you scan a user, they are automatically added to your local "Preconnections" history, ensuring you never lose a contact even if you don't fully "friend" them on-chain immediately.

### 3. NFT Proof-of-Attendance (POAP) Badges
* **Event Verification:** Profiles proudly display NFT badges collected from various events (Hackathons, Workshops, Meetups).
* **Social Proof:** Badges act as on-chain verification of a user's activity and involvement in the ecosystem.
* **View Full Profile:** A detailed view allows users to inspect the full gallery of a contact's badges.

---

## 🛠 Tech Stack

* **Blockchain:** Sui Network (Testnet)
* **Smart Contracts:** Sui Move
* **Frontend:** Next.js / React
* **Wallet Integration:** @mysten/dapp-kit
* **Styling:** Tailwind CSS

---

## 📦 Smart Contract Architecture

The project relies on a minimal but efficient Object-Centric architecture:

* **`Profile` Object:** Stores the user's metadata (Bio, Links) and owns the `Badge` objects.
* **`Badge` Object:** A standard NFT struct representing event attendance.
* **`Connection` Logic:** Uses shared objects or on-chain event emission to log interactions between addresses

## Features

- **Onboarding Page** - Connect wallet and explore demo
- **Profile Setup** - Initialize your decentralized identity
- **Business Card** - View and share your Web3 business card
- **Full Profile** - Complete profile with NFT badges and stats
- **Network** - Manage your Web3 connections
- **Scanner** - QR code scanner for connecting with others

## Project Structure

```
MoveConnect/
├── app/
│   ├── page.tsx              # Landing/Onboarding page
│   ├── profile-setup/
│   │   └── page.tsx          # Profile setup page
│   ├── business-card/
│   │   └── page.tsx          # Business card modal
│   ├── profile/
│   │   └── page.tsx          # Full profile page
│   ├── network/
│   │   └── page.tsx          # Network/connections page
│   ├── scanner/
│   │   └── page.tsx          # QR scanner page
│   ├── layout.tsx            # Root layout
│   └── globals.css            # Global styles
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Pages & Routes

- `/` - Landing/Onboarding page
- `/profile-setup` - Initialize your identity
- `/business-card` - View business card modal
- `/profile` - Full profile with badges
- `/network` - My network/connections
- `/scanner` - QR code scanner

## Navigation Flow

1. **Landing** → Connect wallet → **Profile Setup**
2. **Profile Setup** → Save & Generate QR → **Profile**
3. **Network** → Scan New → **Scanner**
4. **Scanner** → View connection → **Business Card**
5. **Business Card** → View Full Profile → **Profile**

## Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Material Symbols** - Icons

## Move Smart Contract Integration

This project is designed to integrate with Move programming language smart contracts. You can add wallet connection functionality and smart contract interactions in the following areas:

- Wallet connection (Sui/Move wallets)
- Profile data storage on-chain
- NFT badge verification
- Network connection management

## Customization

### Colors

The theme uses a cyberpunk-inspired color scheme:
- Primary: `#2bee79` (Neon Green)
- Accent Cyan: `#00f0ff`
- Background Dark: `#0a1122`

You can customize colors in `tailwind.config.js`.

### Fonts

- Display: Spline Sans
- Body: Noto Sans
- Icons: Material Symbols Outlined

## Development Notes

- All pages are client components (`'use client'`) for interactivity
- Navigation uses Next.js `Link` component for client-side routing
- Tailwind CSS utilities are used for styling
- Glassmorphism effects are implemented via custom CSS classes

## Next Steps

1. Add wallet connection functionality (Sui SDK)
2. Integrate Move smart contracts for on-chain data
3. Add QR code generation/scanning functionality
4. Implement real-time connection features
5. Add authentication and user management

## License

MIT

