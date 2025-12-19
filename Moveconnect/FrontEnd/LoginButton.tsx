import { generateNonce, generateRandomness } from '@mysten/zklogin';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';

export default function LoginWithGoogle() {
  const handleLogin = () => {
    // 1. Create a temporary "Ephemeral" Keypair for this browser session
    const ephemeralKeyPair = new Ed25519Keypair();
    
    // 2. Save this key to LocalStorage (so we have it when Google redirects back)
    window.localStorage.setItem('ephemeral_key', ephemeralKeyPair.export().privateKey);
    
    // 3. Generate the specific parameters required by Sui
    const randomness = generateRandomness();
    const nonce = generateNonce(ephemeralKeyPair.getPublicKey(), 1000000000, randomness); // Max epoch
    
    // 4. Redirect the user to Google
    const params = new URLSearchParams({
      client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
      redirect_uri: 'https://moveconnect01.vercel.app/auth/callback', // Must match Google Console
      response_type: 'id_token',
      scope: 'openid email',
      nonce: nonce, // This binds the login to our temporary key!
    });
    
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
  };

  return <button onClick={handleLogin}>Log in with Google</button>;
}