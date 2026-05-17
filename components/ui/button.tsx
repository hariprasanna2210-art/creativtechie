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
    "focus-ring group inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition duration-300",
    variant === "primary" && "bg-[#06345f] text-white shadow-sm hover:bg-[#0077b6]",
    variant === "light" && "bg-white text-[#06345f] shadow-sm hover:text-[#0077b6]",
    variant === "ghost" && "border border-[#06345f]/15 bg-white/55 text-[#06345f] hover:border-[#0077b6] hover:bg-white",
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
