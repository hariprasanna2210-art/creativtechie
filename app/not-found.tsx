import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mesh-bg grid min-h-screen place-items-center px-4 pt-24 text-center">
      <div>
        <p className="font-display text-8xl font-black text-gradient">404</p>
        <h1 className="mt-4 font-display text-5xl font-black">This page wandered off.</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#625e6f]">The link may have changed, but the studio is still here and ready to help.</p>
        <div className="mt-8"><Button href="/">Back Home</Button></div>
      </div>
    </section>
  );
}
