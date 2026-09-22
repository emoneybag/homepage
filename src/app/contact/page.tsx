"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Email delivery will be connected later.
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-[#050b17] dark:text-white">
      <Navbar />

      {/* Page Header */}
      <section className="relative overflow-hidden px-6 pb-16 pt-36 lg:px-8">
        <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Contact Us
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s build something{" "}
              <span className="text-blue-600 dark:text-blue-400">
                great.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-white/60">
              Have a business that needs a website? Tell us a little about
              your project and we&apos;ll get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/3">
              <h2 className="text-2xl font-bold">
                Get in touch
              </h2>

              <p className="mt-4 leading-7 text-slate-600 dark:text-white/60">
                Whether you need a brand-new website, a redesign, or help
                improving an existing site, we&apos;d love to hear about
                your project.
              </p>

              <div className="mt-8 space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                    @
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-slate-500 dark:text-white/50">
                      We&apos;ll add our business email here.
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                    ◉
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-slate-500 dark:text-white/50">
                      Guatemala
                    </p>
                  </div>
                </div>

                {/* Response */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                    ✓
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Response
                    </p>

                    <p className="mt-1 text-sm text-slate-500 dark:text-white/50">
                      We&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Link */}
            <div className="mt-6 rounded-3xl border border-slate-200 p-8 dark:border-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
                Before you contact us
              </p>

              <h3 className="mt-3 text-xl font-bold">
                See what we&apos;ve built.
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-white/55">
                Take a look at our portfolio to see examples of our web
                development work.
              </p>

              <Link
                href="/portfolio"
                className="mt-5 inline-flex text-sm font-semibold text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400"
              >
                View portfolio →
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/3 sm:p-10">
            {submitted ? (
              <div className="flex min-h-100 flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  ✓
                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  Message received!
                </h2>

                <p className="mt-3 max-w-md leading-7 text-slate-600 dark:text-white/60">
                  Thanks for reaching out to S&R Group. Our contact system
                  isn&apos;t connected to email delivery yet, but the form
                  is ready for the next step.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-slate-100 dark:border-white/10 dark:hover:bg-white/5"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
                    Start a conversation
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Tell us about your project
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-white/55">
                    Fill out the form below and give us as much information
                    as you can.
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
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-white/30"
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
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-white/30"
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
                      placeholder="What can we help you with?"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-white/30"
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
                      rows={6}
                      placeholder="Tell us about your project..."
                      className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-white/30"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30"
                  >
                    Send Message
                  </button>

                  <p className="text-center text-xs text-slate-400 dark:text-white/35">
                    Your information will only be used to respond to your
                    inquiry.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-slate-200 px-6 py-20 dark:border-white/5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Not ready to start yet?
          </h2>

          <p className="mt-4 text-slate-600 dark:text-white/55">
            No problem. Explore our work and come back whenever you&apos;re
            ready.
          </p>

          <Link
            href="/portfolio"
            className="mt-7 inline-flex rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold transition-colors hover:bg-slate-100 dark:border-white/10 dark:hover:bg-white/5"
          >
            Explore Portfolio
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 py-8 dark:border-white/5 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 dark:text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} S&R Group. All rights reserved.</p>

          <div className="flex gap-6">
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
