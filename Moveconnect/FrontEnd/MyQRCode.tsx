import { QRCodeSVG } from 'qrcode.react';
import { useCurrentAccount } from '@mysten/dapp-kit';

export default function MyQRCode() {
  const account = useCurrentAccount();

  if (!account) return <p>Connect Wallet to see your QR</p>;

  // The QR code just holds the wallet address text!
  return (
    <div className="flex flex-col items-center">
      <QRCodeSVG value={account.address} size={200} />
      <p className="mt-4 text-sm text-gray-500">Scan to connect</p>
    </div>
  );
}