"use client";

import { FundButton } from "@coinbase/onchainkit/fund";

export default function Hero() {
  return (
    <div className="flex flex-col gap-2">
      <div className="">
        <h1 className="text-2xl">Segugio</h1>
      </div>
      <div className="pb-4">
        frames.js starter kit. The Template Frame is on this page, it&apos;s in
        the html meta tags (inspect source).
      </div>
      <div className="flex justify-center">
        <FundButton />
      </div>
    </div>
  );
}
