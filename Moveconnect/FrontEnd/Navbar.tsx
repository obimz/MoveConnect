import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit';

export default function Navbar() {
  const account = useCurrentAccount(); // This gets the connected wallet data

  return (
    <nav>
      <h1>MoveConnect</h1>
      <ConnectButton />
      {account && <p>Connected: {account.address}</p>}
    </nav>
  );
}