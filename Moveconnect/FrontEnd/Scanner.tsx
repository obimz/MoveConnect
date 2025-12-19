import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { useSignAndExecuteTransactionBlock } from '@mysten/dapp-kit';

export default function Scanner() {
  const [data, setData] = useState('');
  const { mutate: signAndExecute } = useSignAndExecuteTransactionBlock();

  const handleScan = (result: any, error: any) => {
    if (!!result) {
      setData(result?.text);
      // AUTOMATICALLY TRIGGER THE TRANSACTION
      addConnection(result?.text);
    }
  };

  const addConnection = (targetAddress: string) => {
    const txb = new TransactionBlock();
    // Call your Move Smart Contract
    txb.moveCall({
      target: `${process.env.NEXT_PUBLIC_PACKAGE_ID}::core::add_connection`,
      arguments: [
        txb.object(YOUR_PROFILE_OBJECT_ID), // You need to fetch this first
        txb.pure(targetAddress),
      ],
    });

    signAndExecute({ transactionBlock: txb });
  };

  return (
    <div className="w-full max-w-md">
      <QrReader
        onResult={handleScan}
        constraints={{ facingMode: 'environment' }} // Uses Back Camera
      />
      {data && <p>Scanned: {data}</p>}
    </div>
  );
}