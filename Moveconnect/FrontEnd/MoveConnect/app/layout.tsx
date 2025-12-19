import type { Metadata } from 'next'
import './globals.css'
"use client";

import { createNetworkConfig, SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "@mysten/dapp-kit/dist/index.css"; // Import standard wallet styles

// 1. Setup the Network Configuration
const { networkConfig } = createNetworkConfig({
  testnet: { url: getFullnodeUrl('testnet') },
  mainnet: { url: getFullnodeUrl('mainnet') },
});

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* 2. Wrap your app in the providers */}
        <QueryClientProvider client={queryClient}>
          <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
            <WalletProvider>
              {children}
            </WalletProvider>
          </SuiClientProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'MoveConnect - Web3 Networking',
  description: 'Your blockchain business identity in one link',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased min-h-screen flex flex-col selection:bg-primary selection:text-background-dark">
        {children}
      </body>
    </html>
  )
}

