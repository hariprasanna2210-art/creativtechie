import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const classes = cn(
    "focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition duration-300",
    variant === "primary" && "bg-[#061632] text-white shadow-[0_18px_45px_rgba(6,22,50,0.2)] hover:-translate-y-1 hover:bg-[#006df2]",
    variant === "light" && "bg-white text-[#061632] shadow-[0_16px_38px_rgba(6,22,50,0.16)] hover:-translate-y-1 hover:text-[#006df2]",
    variant === "ghost" && "border border-[#061632]/15 bg-white/55 text-[#061632] hover:border-[#006df2] hover:bg-white",
    className
  );

  const content = (
    <>
      {children}
      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );

  if (href?.startsWith("http")) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return href ? (
    <Link href={href} className={classes}>
      {content}
    </Link>
  ) : (
    <button className={classes}>{content}</button>
  );
}
