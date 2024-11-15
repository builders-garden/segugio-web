"use client";
import Navbar from "@/components/navbar";
import { ConnectedWallet, usePrivy } from "@privy-io/react-auth";
import { useWallets } from "@privy-io/react-auth";
import { useEffect } from "react";

export default function Initialize() {
  const { login, logout, ready, authenticated, user } = usePrivy();
  console.log("Privy", { login, logout, ready, authenticated, user });

  // Find the embedded wallet
  const { wallets } = useWallets();
  const embeddedWallet = wallets.find(
    (wallet) => wallet.walletClientType === "privy"
  );

  console.log({ wallets, embeddedWallet });

  useEffect(() => {
    async function switchChain(wallet: ConnectedWallet) {
      // Switch the embedded wallet to the target network
      await wallet.switchChain(8453);
    }

    if (embeddedWallet) {
      switchChain(embeddedWallet);
    } else {
      if (wallets.length > 0) {
        switchChain(wallets[0]!);
      }
    }
  }, [embeddedWallet, wallets]);

  return (
    <div className="flex flex-col">
      <Navbar />
      <h1 className="text-4xl my-4">Create your segugio</h1>
      <p className="text-lg">
        Please create a signature to deploy your new Segugio.
      </p>
    </div>
  );
}
