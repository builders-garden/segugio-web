"use client";

import { Toaster } from "@/components/ui/sonner";
import { env } from "./env";

// web3
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrivyClientConfig, PrivyProvider } from "@privy-io/react-auth";
import { WagmiProvider, createConfig } from "@privy-io/wagmi";
import { mainnet, base } from "viem/chains";
import { http } from "wagmi";

declare module "wagmi" {
  interface Register {
    config: typeof wagmiConfig;
  }
}

export const wagmiConfig = createConfig({
  chains: [mainnet, base],
  multiInjectedProviderDiscovery: false,
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});

const privyConfig: PrivyClientConfig = {
  embeddedWallets: {
    createOnLogin: "users-without-wallets",
    requireUserPasswordOnCreate: false,
    noPromptOnSignature: false,
  },
  loginMethods: ["email", "wallet", "farcaster"],
};

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PrivyProvider
        appId={env.NEXT_PUBLIC_PRIVY_APP_ID}
        config={{
          ...privyConfig,
          defaultChain: mainnet,
          supportedChains: [mainnet, base],
        }}
      >
        <QueryClientProvider client={queryClient}>
          <WagmiProvider config={wagmiConfig}>
            {/* <RainbowKitProvider> */}
            {children}
            {/* </RainbowKitProvider> */}
          </WagmiProvider>
        </QueryClientProvider>
      </PrivyProvider>
      <Toaster />
    </>
  );
}
