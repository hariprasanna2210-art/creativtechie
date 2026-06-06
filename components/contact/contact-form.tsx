"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

const services = ["Website or redesign", "SEO and marketing", "Branding", "App or software", "AI automation"];

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send your enquiry.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to send your enquiry.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-[#06345f]/10 bg-white p-6 shadow-sm md:p-8">
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 font-bold">
          Name
          <input name="name" required className="h-14 rounded-lg bg-[#edf5f8] px-4 outline-none focus:ring-2 focus:ring-[#8ed2e8]" />
        </label>
        <label className="grid gap-2 font-bold">
          Email
          <input name="email" type="email" required className="h-14 rounded-lg bg-[#edf5f8] px-4 outline-none focus:ring-2 focus:ring-[#8ed2e8]" />
        </label>
        <label className="grid gap-2 font-bold">
          Company
          <input name="company" className="h-14 rounded-lg bg-[#edf5f8] px-4 outline-none focus:ring-2 focus:ring-[#8ed2e8]" />
        </label>
        <label className="grid gap-2 font-bold">
          Phone
          <input name="phone" className="h-14 rounded-lg bg-[#edf5f8] px-4 outline-none focus:ring-2 focus:ring-[#8ed2e8]" />
        </label>
      </div>
      <label className="mt-4 grid gap-2 font-bold">
        What do you need?
        <select name="service" className="h-14 rounded-lg bg-[#edf5f8] px-4 outline-none focus:ring-2 focus:ring-[#8ed2e8]">
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>
      <label className="mt-4 grid gap-2 font-bold">
        Project notes
        <textarea name="message" required rows={6} className="rounded-lg bg-[#edf5f8] p-4 outline-none focus:ring-2 focus:ring-[#8ed2e8]" />
      </label>
      <button
        disabled={status === "sending"}
        className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-[#06345f] px-5 font-semibold text-white transition hover:bg-[#0077b6] disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send className="h-4 w-4" />
        {status === "sending" ? "Sending..." : "Send Enquiry"}
      </button>
      {status === "success" && (
        <p className="mt-4 rounded-lg bg-[#e7f7ed] p-4 font-bold text-[#06345f]">
          Thanks for contacting us. We will get back to you soon.
        </p>
      )}
      {status === "error" && (
        <div className="mt-4 rounded-lg bg-[#fff7dc] p-4 font-bold text-[#06345f]">
          <p>{error}</p>
          <a href="https://wa.me/917418120053" className="mt-3 inline-flex text-[#0077b6] underline">
            Continue on WhatsApp
          </a>
        </div>
      )}
    </form>
  );
}
