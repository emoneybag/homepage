"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { BlurText, RevealObserver } from "@/components/Reveal";

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
    <main className="min-h-screen overflow-hidden bg-page text-fg">
      <Navbar />
      <RevealObserver />

      {/* Page Header */}
      <section className="px-6 pb-16 pt-40 text-center lg:px-8 lg:pb-24">
        <p className="reveal text-xs font-medium uppercase tracking-[0.35em] text-coral">
          Contact S&amp;R
        </p>

        <h1
          aria-label="Let's build something great."
          className="reveal-text font-display mx-auto mt-6 max-w-5xl text-[clamp(2rem,5.5vw,4.5rem)] font-light uppercase leading-[1.1] tracking-[0.1em]"
        >
          <BlurText text="Let's build something " />
          <BlurText text="great." offset={22} className="text-accent" />
        </h1>

        <p
          style={{ transitionDelay: "200ms" }}
          className="reveal mx-auto mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg"
        >
          Have a project in mind, need a new website, or want to improve an
          existing one? Send us a message and let&apos;s talk about how S&amp;R
          can help.
        </p>
      </section>

      {/* Contact Section */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <div className="reveal">
            <div className="rounded-3xl border border-fg/10 bg-fg/[0.04] p-8">
              <h2 className="text-2xl font-medium">Get in touch</h2>
              <p className="mt-4 leading-7 text-muted">
                Whether you&apos;re starting from scratch or looking to improve
                an existing website, we&apos;d love to hear about it.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  ["✉", "Email", "We'll add our business email here."],
                  ["◉", "Location", "Guatemala"],
                  ["⏱", "Response time", "We'll get back to you as soon as possible."],
                ].map(([icon, title, text]) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-accent">
                      {icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{title}</p>
                      <p className="mt-1 text-sm text-muted">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-fg/10 p-8">
              <h3 className="text-lg font-medium">Want to see what we can build?</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Take a look at our portfolio to see some of our projects and
                examples.
              </p>
              <Link
                href="/portfolio"
                className="mt-5 inline-flex items-center text-sm font-semibold text-accent transition hover:text-accent/80"
              >
                View our portfolio
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* Contact Form (light card for contrast) */}
          <div
            style={{ transitionDelay: "150ms" }}
            className="reveal rounded-3xl bg-surface p-8 text-fg sm:p-10"
          >
            {submitted ? (
              <div className="flex min-h-125 flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 text-3xl text-green-600">
                  ✓
                </div>
                <h2 className="mt-6 text-3xl font-medium">Message sent!</h2>
                <p className="mt-4 max-w-md leading-7 text-muted">
                  Thanks for reaching out to S&amp;R. We&apos;ve received your
                  message and will get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setError("");
                  }}
                  className="mt-8 rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-amber-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div>
                  <h2 className="text-2xl font-medium">Send us a message</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Fill out the form below and we&apos;ll get back to you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-fg/15 bg-surface-2 px-4 py-3 text-sm text-fg outline-none transition placeholder:text-fg/55 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-fg/15 bg-surface-2 px-4 py-3 text-sm text-fg outline-none transition placeholder:text-fg/55 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="How can we help?"
                      className="w-full rounded-lg border border-fg/15 bg-surface-2 px-4 py-3 text-sm text-fg outline-none transition placeholder:text-fg/55 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      placeholder="Tell us about your project..."
                      className="w-full resize-none rounded-lg border border-fg/15 bg-surface-2 px-4 py-3 text-sm text-fg outline-none transition placeholder:text-fg/55 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30"
                    />
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500"
                    >
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-amber-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? "Sending message..." : "Send Message"}
                  </button>

                  <p className="text-center text-xs leading-5 text-muted">
                    By submitting this form, you agree to be contacted regarding
                    your inquiry.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-fg/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-muted sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} S&amp;R Group. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-fg">Home</Link>
            <Link href="/portfolio" className="hover:text-fg">Portfolio</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
