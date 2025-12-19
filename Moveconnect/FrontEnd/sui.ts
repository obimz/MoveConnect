import { TransactionBlock } from '@mysten/sui.js/transactions';
import { getZkLoginSignature } from '@mysten/zklogin';

export async function executeMoveCall(txb: TransactionBlock) {
  // 1. Get your keys
  const idToken = localStorage.getItem('zk_token');
  const ephemeralKey = Ed25519Keypair.fromSecretKey(localStorage.getItem('ephemeral_key'));
  
  // 2. Get the ZK Proof from the Mysten Prover (The API call)
  // This replaces the "Wallet Pop-up"
  const proofResponse = await fetch('https://prover-dev.mystenlabs.com/v1', {
     method: 'POST',
     body: JSON.stringify({ jwt: idToken, ... })
  });
  const zkProof = await proofResponse.json();

  // 3. Sign the transaction
  const { bytes, signature: userSignature } = await txb.sign({ 
    client: suiClient, 
    signer: ephemeralKey 
  });

  // 4. Combine it into a ZK Signature
  const zkSignature = getZkLoginSignature({
    inputs: zkProof,
    maxEpoch: 1000,
    userSignature,
  });

  // 5. Execute on Chain
  return suiClient.executeTransactionBlock({
    transactionBlock: bytes,
    signature: zkSignature,
  });
}