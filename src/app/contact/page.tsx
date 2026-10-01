"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.SubmitEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setIsSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to send your message."
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-[#050b17] dark:text-white">
      <Navbar />

      {/* Page Header */}
      <section className="relative overflow-hidden px-6 pb-16 pt-36 lg:px-8 lg:pb-24">
        <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Contact S&R
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s build something{" "}
              <span className="text-blue-600 dark:text-blue-400">
                great.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-white/65">
              Have a project in mind, need a new website, or want to
              improve an existing one? Send us a message and let&apos;s
              talk about how S&R can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/3">
              <h2 className="text-2xl font-bold">
                Get in touch
              </h2>

              <p className="mt-4 leading-7 text-slate-600 dark:text-white/60">
                Whether you&apos;re starting from scratch or looking
                to improve an existing website, we&apos;d love to hear
                about it.
              </p>

              <div className="mt-8 space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    ✉
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-slate-600 dark:text-white/60">
                      We&apos;ll add our business email here.
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    ◉
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-slate-600 dark:text-white/60">
                      Guatemala
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    ⏱
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Response time
                    </p>

                    <p className="mt-1 text-sm text-slate-600 dark:text-white/60">
                      We&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio CTA */}
            <div className="mt-6 rounded-2xl border border-slate-200 p-8 dark:border-white/10">
              <h3 className="text-lg font-bold">
                Want to see what we can build?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/60">
                Take a look at our portfolio to see some of our
                projects and examples.
              </p>

              <Link
                href="/portfolio"
                className="mt-5 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View our portfolio
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-white/3 dark:shadow-black/20 sm:p-10">
            {submitted ? (
              <div className="flex min-h-125 flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-3xl text-green-600 dark:text-green-400">
                  ✓
                </div>

                <h2 className="mt-6 text-3xl font-bold">
                  Message sent!
                </h2>

                <p className="mt-4 max-w-md leading-7 text-slate-600 dark:text-white/60">
                  Thanks for reaching out to S&R. We&apos;ve received
                  your message and will get back to you as soon as
                  possible.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setError("");
                  }}
                  className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div>
                  <h2 className="text-2xl font-bold">
                    Send us a message
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/60">
                    Fill out the form below and we&apos;ll get back to
                    you.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-6"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="How can we help?"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      placeholder="Tell us about your project..."
                      className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30"
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <div
                      role="alert"
                      className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400"
                    >
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {isSubmitting
                      ? "Sending message..."
                      : "Send Message"}
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-500 dark:text-white/40">
                    By submitting this form, you agree to be contacted
                    regarding your inquiry.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 py-8 dark:border-white/10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 dark:text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} S&R Group. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/portfolio"
              className="transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}