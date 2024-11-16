import { fetchMetadata } from "frames.js/next";
import type { Metadata } from "next";
import { createExampleURL } from "./utils";
import { Frame } from "./components/Frame";
import Hero from "../components/hero";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Segugio",
    description: "This will be the description of the Segugio landing page",
    other: {
      ...(await fetchMetadata(createExampleURL("/frames"))),
    },
  };
}

// This is a react server component only
export default async function Home() {
  const metadata = await generateMetadata();

  // then, when done, return next frame
  return (
    <div className="flex flex-col max-w-[600px] w-full gap-2 mx-auto p-2">
      <Hero />
      <Frame metadata={metadata} url={createExampleURL("/frames")} />
    </div>
  );
}
