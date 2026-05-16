"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { blogPosts } from "@/lib/data";

export function BlogList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const cats = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];
  const posts = useMemo(() => blogPosts.filter((post) => (category === "All" || post.category === category) && post.title.toLowerCase().includes(query.toLowerCase())), [category, query]);

  return (
    <>
      <div className="mb-10 grid gap-4 rounded-[28px] bg-white p-4 md:grid-cols-[1fr_auto]">
        <label className="flex items-center gap-3 rounded-full bg-[#f4f0e8] px-5">
          <Search className="h-5 w-5 text-[#006df2]" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles" className="h-14 flex-1 bg-transparent outline-none" />
        </label>
        <div className="flex flex-wrap gap-2">
          {cats.map((cat) => <button key={cat} onClick={() => setCategory(cat)} className={`rounded-full px-5 py-3 text-sm font-bold ${category === cat ? "bg-[#061632] text-white" : "bg-[#f4f0e8]"}`}>{cat}</button>)}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {posts.map((post, index) => (
          <article key={post.title} className={`${index === 0 ? "md:col-span-2" : ""} overflow-hidden rounded-[32px] bg-white`}>
            <div className={`${index === 0 ? "h-96" : "h-64"} relative`}><Image src={post.image} alt={post.title} fill className="object-cover" sizes="50vw" /></div>
            <div className="p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-500">{post.category} / {post.date}</p>
              <h2 className="mt-3 font-display text-3xl font-black leading-tight">{post.title}</h2>
              <p className="mt-4 leading-7 text-[#625e6f]">A practical studio note written for founders, marketers and operators who want sharper digital decisions.</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
