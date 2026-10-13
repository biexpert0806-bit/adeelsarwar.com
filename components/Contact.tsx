"use client";
import { useState } from "react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";

interface ProfileData {
  email?: string;
  phone?: string;
  whatsapp?: string;
  linkedinUrl?: string;
}

export default function Contact({ profile }: { profile: ProfileData }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const email = profile?.email ?? "adeel@adeelsarwar.com";
  const linkedinUrl = profile?.linkedinUrl ?? "https://www.linkedin.com/in/adeel-sarwar-o-80336443/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-pad bg-navy-900/3 dark:bg-ink-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="module-label">Contact</div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy-900 dark:text-white">
                Let&rsquo;s Build Something
              </h2>
            </div>
            <p className="text-ink-600 dark:text-mist-300 leading-relaxed">
              If you are looking for an operations leader, a sales systems architect, or a BI
              framework builder — I am available for consulting engagements, interim leadership
              roles, and advisory positions.
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-ink-600 dark:text-mist-300 hover:text-ember-500 dark:hover:text-ember-400 transition-colors duration-200 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500 rounded"
              >
                <span className="w-10 h-10 rounded bg-navy-900/5 dark:bg-mist-800/20 flex items-center justify-center group-hover:bg-ember-500/10 transition-colors duration-200">
                  <Mail size={16} />
                </span>
                <span className="text-sm font-medium">{email}</span>
              </a>
              {profile?.phone && (
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-3 text-ink-600 dark:text-mist-300 hover:text-ember-500 dark:hover:text-ember-400 transition-colors duration-200 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500 rounded"
                >
                  <span className="w-10 h-10 rounded bg-navy-900/5 dark:bg-mist-800/20 flex items-center justify-center group-hover:bg-ember-500/10 transition-colors duration-200">
                    <Phone size={16} />
                  </span>
                  <span className="text-sm font-medium">{profile.phone}</span>
                </a>
              )}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ink-600 dark:text-mist-300 hover:text-ember-500 dark:hover:text-ember-400 transition-colors duration-200 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500 rounded"
              >
                <span className="w-10 h-10 rounded bg-navy-900/5 dark:bg-mist-800/20 flex items-center justify-center group-hover:bg-ember-500/10 transition-colors duration-200">
                  <Linkedin size={16} />
                </span>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="module-frame p-8 space-y-5" noValidate>
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium text-navy-900 dark:text-white">
                Name <span aria-hidden="true" className="text-ember-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 bg-white dark:bg-ink-800 border border-navy-900/15 dark:border-mist-700/20 rounded text-navy-900 dark:text-white placeholder-ink-400 dark:placeholder-mist-600 text-sm focus:outline-none focus:border-ember-500 focus:ring-1 focus:ring-ember-500 transition-colors duration-200"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-navy-900 dark:text-white">
                Email <span aria-hidden="true" className="text-ember-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 bg-white dark:bg-ink-800 border border-navy-900/15 dark:border-mist-700/20 rounded text-navy-900 dark:text-white placeholder-ink-400 dark:placeholder-mist-600 text-sm focus:outline-none focus:border-ember-500 focus:ring-1 focus:ring-ember-500 transition-colors duration-200"
                placeholder="you@company.com"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="message" className="text-sm font-medium text-navy-900 dark:text-white">
                Message <span aria-hidden="true" className="text-ember-500">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 bg-white dark:bg-ink-800 border border-navy-900/15 dark:border-mist-700/20 rounded text-navy-900 dark:text-white placeholder-ink-400 dark:placeholder-mist-600 text-sm focus:outline-none focus:border-ember-500 focus:ring-1 focus:ring-ember-500 transition-colors duration-200 resize-none"
                placeholder="Tell me about your engagement..."
              />
            </div>

            {status === "sent" && (
              <div className="text-sm text-green-600 dark:text-green-400 font-medium" role="status">
                Message sent. I will be in touch shortly.
              </div>
            )}
            {status === "error" && (
              <div className="text-sm text-ember-500 font-medium" role="alert">
                Something went wrong. Please email directly at{" "}
                <a href={`mailto:${email}`} className="underline">{email}</a>.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-navy-900 dark:bg-ember-500 text-white font-semibold rounded hover:bg-ember-500 dark:hover:bg-ember-600 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500"
            >
              <Send size={16} />
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
