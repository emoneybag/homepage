import Navbar from "@/components/Navbar";
import Link from "next/link";

const benefits = [
  {
    title: "Modern Design",
    description: "Beautiful interfaces built around your brand.",
    icon: "✦",
  },
  {
    title: "Mobile Friendly",
    description: "A great experience on every screen.",
    icon: "◫",
  },
  {
    title: "SEO Ready",
    description: "Built with search engines in mind.",
    icon: "⌁",
  },
  {
    title: "Fast & Secure",
    description: "Performance and security from day one.",
    icon: "◇",
  },
];

const services = [
  {
    number: "01",
    title: "Custom Web Design",
    description:
      "We create unique, professional designs that represent your business and make a strong first impression.",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Modern, reliable websites built with technologies designed for speed, scalability, and performance.",
  },
  {
    number: "03",
    title: "Responsive Design",
    description:
      "Your website will look and work beautifully across phones, tablets, laptops, and desktops.",
  },
  {
    number: "04",
    title: "SEO & Performance",
    description:
      "We build with performance and search visibility in mind, helping your website reach more people.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900 transition-colors duration-300 dark:bg-[#050b17] dark:text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-screen overflow-hidden bg-white transition-colors duration-300 dark:bg-[#050b17]">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/15" />

        <div className="pointer-events-none absolute right-0 top-20 h-125 w-125 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-600/10" />

        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="dark:hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-linear-to-b from-blue-50/70 to-transparent" />
        </div>

        <Navbar />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-8">
          <div className="grid w-full items-center gap-16 lg:grid-cols-2">
            {/* Hero Copy */}
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 dark:border-blue-400/20 dark:bg-blue-500/10">
                <span className="h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40 dark:bg-blue-400 dark:shadow-blue-400/50" />

                <span className="text-xs font-semibold tracking-wide text-blue-700 dark:text-blue-300">
                  WEB DESIGN & DEVELOPMENT
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-slate-900 transition-colors duration-300 dark:text-white sm:text-6xl lg:text-7xl">
                We Build Websites
                <br />
                That{" "}
                <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                  Grow Your Business
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 transition-colors duration-300 dark:text-slate-400 sm:text-lg">
                At S&R Group, we design and develop modern, fast, and
                user-friendly websites that help businesses build their brand,
                reach more customers, and grow online.
              </p>

              {/* CTA buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30"
                >
                  View Our Work
                  <span>→</span>
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:shadow-none dark:hover:bg-white/10"
                >
                  Contact Us
                </a>
              </div>

              {/* Benefits */}
              <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="group">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-lg text-blue-600 transition-colors dark:text-blue-400">
                        {benefit.icon}
                      </span>

                      <span className="text-xs font-semibold text-slate-900 transition-colors dark:text-white">
                        {benefit.title}
                      </span>
                    </div>

                    <p className="text-[11px] leading-5 text-slate-500 transition-colors dark:text-slate-500">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* =====================================================
                WEBSITE PREVIEW
            ===================================================== */}
            <div className="relative hidden lg:block">
              {/* Glow */}
              <div className="absolute inset-10 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/20" />

              <div className="relative mx-auto w-full max-w-155">
                {/* Laptop */}
                <div className="relative rounded-xl border border-slate-200 bg-slate-100 p-2 shadow-2xl shadow-slate-300/50 transition-colors duration-300 dark:border-white/15 dark:bg-slate-900 dark:shadow-blue-950/50">
                  {/* Browser bar */}
                  <div className="flex h-8 items-center gap-1.5 px-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                    <div className="ml-4 h-4 flex-1 rounded bg-slate-200 dark:bg-white/5" />
                  </div>

                  {/* Website screen */}
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white transition-colors duration-300 dark:border-white/5 dark:bg-[#0b1220]">
                    {/* Fake website navbar */}
                    <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-white/10">
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        S<span className="text-blue-500">&</span>R
                      </div>

                      <div className="hidden gap-5 sm:flex">
                        <span className="h-1.5 w-10 rounded bg-slate-300 dark:bg-white/20" />
                        <span className="h-1.5 w-12 rounded bg-slate-200 dark:bg-white/10" />
                        <span className="h-1.5 w-10 rounded bg-slate-200 dark:bg-white/10" />
                      </div>

                      <div className="h-6 w-14 rounded bg-blue-600/90" />
                    </div>

                    {/* Fake website hero */}
                    <div className="grid min-h-75 grid-cols-2 gap-5 p-7">
                      <div className="flex flex-col justify-center">
                        <div className="mb-3 h-2 w-16 rounded bg-blue-500/80" />

                        <div className="h-5 w-full rounded bg-slate-800 dark:bg-white/90" />
                        <div className="mt-2 h-5 w-4/5 rounded bg-slate-700 dark:bg-white/90" />

                        <div className="mt-4 h-2 w-full rounded bg-slate-200 dark:bg-white/10" />
                        <div className="mt-2 h-2 w-4/5 rounded bg-slate-200 dark:bg-white/10" />

                        <div className="mt-6 h-8 w-24 rounded bg-blue-600" />
                      </div>

                      <div className="relative flex items-center justify-center">
                        <div className="absolute h-40 w-40 rounded-full bg-blue-500/10 blur-2xl dark:bg-blue-500/20" />

                        <div className="relative h-44 w-full rounded-xl border border-slate-200 bg-linear-to-br from-blue-50 to-indigo-50 p-3 dark:border-white/10 dark:from-blue-500/20 dark:to-indigo-500/5">
                          <div className="h-full rounded-lg border border-slate-200 bg-white/70 dark:border-white/5 dark:bg-white/3" />

                          <div className="absolute left-8 right-8 top-8 h-2 rounded bg-slate-200 dark:bg-white/10" />

                          <div className="absolute left-8 right-20 top-14 h-2 rounded bg-slate-200 dark:bg-white/10" />

                          <div className="absolute bottom-8 left-8 h-12 w-12 rounded-lg bg-blue-500/20 dark:bg-blue-500/30" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Laptop bottom */}
                  <div className="absolute -bottom-3 left-1/2 h-3 w-[80%] -translate-x-1/2 rounded-b-full bg-slate-300 dark:bg-slate-700" />
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-8 -left-8 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-xl shadow-slate-300/30 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#0c1424]/90 dark:shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-500/10">
                      <span className="text-lg text-blue-600 dark:text-blue-400">
                        ↗
                      </span>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Online presence
                      </p>

                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        Built to grow
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating mobile card */}
                <div className="absolute -right-5 top-1/3 rounded-xl border border-slate-200 bg-white/95 p-3 shadow-xl shadow-slate-300/30 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#0c1424]/90 dark:shadow-2xl">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-5 rounded border border-blue-500/50" />

                    <span className="text-xs font-medium text-slate-800 dark:text-white">
                      Mobile Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-white to-transparent dark:from-[#050b17]" />
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="relative bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#050b17] lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-600 dark:text-blue-400">
              WHAT WE DO
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              Complete Website Solutions
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">
              From the first design concept to the final launch, we create
              digital experiences that help businesses stand out and connect
              with their customers.
            </p>
          </div>

          {/* Services */}
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.number}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 dark:border-white/10 dark:bg-white/3 dark:hover:border-blue-500/30 dark:hover:bg-white/5 dark:hover:shadow-blue-950/20"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {service.number}
                  </span>

                  <span className="text-slate-300 transition-colors group-hover:text-blue-500 dark:text-white/10 dark:group-hover:text-blue-500">
                    ↗
                  </span>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          APPROACH
      ========================================================= */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-24 transition-colors duration-300 dark:border-white/5 dark:bg-[#080f1d] lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-600 dark:text-blue-400">
              WHY S&R GROUP
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white sm:text-4xl">
              Your website should work as hard as you do.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">
              We believe a website should be more than something that simply
              looks good. It should communicate your value, make it easy for
              customers to take action, and give your business a strong
              foundation online.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400"
            >
              Let&apos;s build something together
              <span>→</span>
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Built Around You",
                text: "Every project starts with understanding your business and goals.",
              },
              {
                title: "User Focused",
                text: "We make it simple for visitors to find what they need.",
              },
              {
                title: "Performance First",
                text: "Fast-loading experiences designed with modern technology.",
              },
              {
                title: "Ready to Grow",
                text: "A solid foundation that can evolve alongside your business.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/3 dark:shadow-none"
              >
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  0{index + 1}
                </div>

                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PORTFOLIO PREVIEW
      ========================================================= */}
      <section className="bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#050b17] lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-blue-600 dark:text-blue-400">
                OUR WORK
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-slate-900 dark:text-white sm:text-4xl">
                Websites built to make an impact.
              </h2>
            </div>

            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              View Portfolio
              <span>→</span>
            </a>
          </div>

          {/* Portfolio placeholders */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900">
              <div className="aspect-16/10 bg-linear-to-br from-slate-200 via-white to-blue-50 p-6 dark:from-slate-800 dark:via-slate-900 dark:to-blue-950/50">
                <div className="h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0b1220]">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-20 rounded bg-slate-200 dark:bg-white/10" />
                    <div className="h-6 w-16 rounded bg-blue-600" />
                  </div>

                  <div className="mt-12 max-w-xs">
                    <div className="h-5 w-full rounded bg-slate-800 dark:bg-white/80" />
                    <div className="mt-2 h-5 w-4/5 rounded bg-slate-700 dark:bg-white/70" />

                    <div className="mt-5 h-2 w-full rounded bg-slate-200 dark:bg-white/10" />
                    <div className="mt-2 h-2 w-3/4 rounded bg-slate-200 dark:bg-white/10" />

                    <div className="mt-6 h-8 w-24 rounded bg-blue-600" />
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/3">
                <p className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400">
                  FEATURED PROJECT
                </p>

                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Modern Business Website
                </h3>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  A clean, conversion-focused website concept.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900">
              <div className="flex aspect-16/10 items-center justify-center bg-linear-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-950/40 dark:via-slate-900 dark:to-indigo-950/30">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white shadow-xl shadow-blue-600/20">
                    S&R
                  </div>

                  <p className="mt-5 text-sm font-medium text-slate-500 dark:text-slate-400">
                    More projects coming soon
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/3">
                <p className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400">
                  YOUR BUSINESS
                </p>

                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Your Website Could Be Here
                </h3>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Let&apos;s create something great together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#050b17] px-8 py-16 text-center shadow-2xl shadow-slate-300/20 dark:shadow-blue-950/30 sm:px-12 lg:px-20">
          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-400">
              START YOUR PROJECT
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Ready to build something amazing?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400">
              Tell us about your business and what you&apos;re looking to
              build. We&apos;d love to help turn your idea into a website you
              can be proud of.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Contact S&R Group
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-slate-200 bg-white px-6 py-10 transition-colors duration-300 dark:border-white/5 dark:bg-[#050b17] lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-2xl font-bold tracking-[-0.08em] text-slate-900 dark:text-white">
              S<span className="text-blue-500">&</span>R
            </div>

            <p className="mt-1 text-xs font-medium tracking-[0.35em] text-slate-400">
              GROUP
            </p>
          </div>

          <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
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

            <Link
              href="/contact"
              className="transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              Contact
            </Link>
          </div>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} S&R Group. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}