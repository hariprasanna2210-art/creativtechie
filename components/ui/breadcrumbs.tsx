import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container pt-28 text-sm font-semibold text-[#625e6f]">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="hover:text-[#006df2]">Home</Link></li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4" />
            {item.href ? <Link href={item.href} className="hover:text-[#006df2]">{item.label}</Link> : <span className="text-[#061632]">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
