"use client";
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
import { genAddressSeed, getZkLoginSignature } from '@mysten/sui/zklogin';

export default function AuthCallback() {
  useEffect(() => {
    // 1. Get the JWT Token from the URL
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const idToken = urlParams.get('id_token');

    if (idToken) {
      // 2. Retrieve the ephemeral key we saved earlier
      const privateKey = window.localStorage.getItem('ephemeral_key');
      const ephemeralKeyPair = Ed25519Keypair.fromSecretKey(privateKey);

      // 3. Decode the token to get the user's "Salt" 
      // NOTE: For a hackathon, just use a hardcoded salt or simple hash. 
      // In production, you need a "Salt Service" to keep this consistent.
      const decodedJwt = jwtDecode(idToken);
      const userSalt = "12938120398120398"; // HARDCODED FOR DEMO ONLY

      // 4. Calculate the User's Sui Address
      const addressSeed = genAddressSeed(BigInt(userSalt), "sub", decodedJwt.sub, decodedJwt.aud);
      const zkLoginAddress = computeZkLoginAddress({ claimName: 'sub', ... }); 
      
      // 5. Save the JWT and Address to state/localstorage
      localStorage.setItem('zk_token', idToken);
      localStorage.setItem('sui_address', zkLoginAddress);
      
      // Redirect to Dashboard
      window.location.href = '/dashboard';
    }
  }, []);

  return <div>Verifying your Google Account...</div>;
}