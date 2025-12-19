'use client'

import Link from 'next/link'
import { PlusCircle, QrCode } from "phosphor-react"
import { useCurrentAccount, useSuiClientQuery, useSignAndExecuteTransaction } from '@mysten/dapp-kit'
import { Transaction } from '@mysten/sui/transactions'

export default function Profile() {
  const account = useCurrentAccount();
  const { mutate: signAndExecute } = useSignAndExecuteTransaction();

  // 1. Fetch Profile Object owned by the current user
  const { data: profileData, isPending } = useSuiClientQuery('getOwnedObjects', {
    owner: account?.address || '',
    filter: { StructType: `${process.env.NEXT_PUBLIC_PACKAGE_ID}::moveconnect::Profile` },
    options: { showContent: true }
  });

  const profileObject = profileData?.data?.[0]?.data?.content;
  const profileFields = (profileObject?.dataType === 'moveObject') ? (profileObject.fields as any) : null;

  // 2. Add Connection Logic
  const handleAddConnection = () => {
    if (!profileFields?.id?.id) return alert("No Profile Found!");
    const newContactAddress = prompt("Enter Address to Connect:"); 
    if(!newContactAddress) return;

    const tx = new Transaction();
    tx.moveCall({
      target: `${process.env.NEXT_PUBLIC_PACKAGE_ID}::moveconnect::add_connection`,
      arguments: [ tx.object(profileFields.id.id), tx.pure.address(newContactAddress) ]
    });

    signAndExecute({ transaction: tx }, {
      onSuccess: () => alert("Connection Added!"),
      onError: (err) => console.error(err)
    });
  };

  if (isPending) return <div className="text-center mt-20 text-white">Loading Profile...</div>;

  // If no profile exists, force them to create one
  if (!isPending && !profileFields) {
    return (
      <div className="min-h-screen bg-background-dark flex flex-col items-center justify-center gap-6">
        <p className="text-white text-lg">No Profile Found on Chain.</p>
        <Link href="/profile-setup" className="bg-primary text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
            Create Profile
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background-dark w-full flex flex-col items-center px-4 pb-20">
      <div className="w-full max-w-[640px] glass-panel border border-white/10 rounded-2xl overflow-hidden shadow-glass flex flex-col relative mt-10">
        
        {/* Banner */}
        <div className="h-32 w-full bg-gradient-to-r from-blue-900 to-purple-900 opacity-80"></div>

        <div className="px-6 pb-8 relative flex flex-col items-center -mt-16">
          {/* Avatar Display */}
          <div className="relative w-32 h-32 rounded-full p-1 bg-background-dark border border-white/10 shadow-neon overflow-hidden">
            <img 
              src={profileFields.avatar_url} 
              className="w-full h-full object-cover rounded-full"
              alt="Avatar"
              // Fallback if image fails to load
              onError={(e) => { e.currentTarget.src = "https://avatars.githubusercontent.com/u/1?v=4" }}
            />
          </div>

          {/* Profile Details */}
          <div className="mt-4 text-center space-y-2">
            <h1 className="text-2xl font-bold text-white">{profileFields.name}</h1>
            <p className="text-sm text-primary opacity-90 max-w-sm">{profileFields.bio}</p>
            
            <div className="flex gap-2 justify-center mt-2 flex-wrap">
               {profileFields.twitter && <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">Twitter: {profileFields.twitter}</span>}
               {profileFields.linkedin && <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">LinkedIn: {profileFields.linkedin}</span>}
            </div>
          </div>

          {/* Actions - CLEANED UP (No Message Button) */}
          <div className="flex w-full mt-8 gap-4">
            <button 
              onClick={handleAddConnection}
              className="flex-1 h-12 rounded-full bg-primary text-black font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 hover:shadow-[0_0_15px_rgba(43,238,121,0.4)] transition-all"
            >
              <PlusCircle size={20} weight="bold" />
              Add Connection
            </button>
            
            <button className="flex-1 h-12 rounded-full border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
              <QrCode size={20} weight="bold" />
              Show QR
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}