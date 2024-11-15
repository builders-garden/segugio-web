import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  // without a title, warpcast won't validate your frame
  title: "frames.js starter",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="p-4 h-screen w-screen flex flex-col bg-black text-white">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
