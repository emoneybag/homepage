import Navbar from "@/components/Navbar";
import Link from "next/link";
import { BlurText, RevealObserver } from "@/components/Reveal";

const ticker = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "SEO",
  "Responsive",
  "Fast hosting",
  "Custom design",
];

const reasons = [
  {
    title: "Built around you",
    text: "Every project starts with your business and your goals, not a template.",
  },
  {
    title: "Honest guidance",
    text: "We recommend only what you need, and tell you plainly what you don't.",
  },
  {
    title: "Quality craft",
    text: "Hand-built, tested on real devices, and tuned for speed and search.",
  },
  {
    title: "Ready to grow",
    text: "A solid foundation, plus support as your business evolves.",
  },
];

const services = [
  "Custom Web Design",
  "Web Development",
  "Responsive Design",
  "SEO & Performance",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-page text-fg">
      {/* HERO */}
      <section className="relative min-h-screen bg-page">
        <Navbar />
        <RevealObserver />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-16 pt-32 lg:px-8">
          <h1
            aria-label="Make it real S&R"
            className="reveal-text font-display text-center text-[clamp(2rem,6.5vw,5.5rem)] font-light uppercase leading-[1.05] tracking-[0.12em]"
          >
            <BlurText text="Make it real " />
            <BlurText text="S&R" offset={13} className="text-accent" />
          </h1>

          <div className="relative mx-auto mt-14 grid w-full max-w-4xl items-center gap-10 md:grid-cols-2">
            <div className="reveal order-2 text-center md:order-1 md:text-right" style={{ transitionDelay: "250ms" }}>
              <p className="text-3xl font-extralight leading-tight text-coral sm:text-4xl">
                Your website
                <br />
                at a higher
                <br />
                standard
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-end">
                <Link
                  href="/portfolio"
                  className="rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-amber-300"
                >
                  View our work
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border border-fg/20 px-6 py-3 text-sm font-semibold text-fg transition hover:bg-fg/10"
                >
                  Contact us
                </Link>
              </div>
            </div>

            {/* Glossy orb on a wireframe grid */}
            <div className="reveal relative order-1 mx-auto h-64 w-64 sm:h-80 sm:w-80 md:order-2" style={{ transitionDelay: "450ms" }}>
              <div
                className="absolute bottom-0 left-0 h-3/4 w-3/4 opacity-70"
                style={{
                  backgroundImage:
                    "linear-gradient(color-mix(in srgb, var(--fg) 75%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--fg) 75%, transparent) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div
                className="absolute right-0 top-0 h-3/4 w-3/4 rounded-[42%_58%_55%_45%/50%_42%_58%_50%]"
                style={{
                  background:
                    "conic-gradient(from 210deg at 40% 40%, #ffb300, #fff3c4, #ff7a59, #c8a6ff, #ffb300)",
                  boxShadow: "0 30px 80px rgba(255,170,0,.25), inset -20px -20px 50px rgba(0,0,0,.25)",
                  animation: "drift 9s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TICKER STRIP */}
      <section className="bg-surface py-5 text-fg">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 text-sm font-semibold tracking-wide">
          {ticker.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>

      {/* WHY S&R */}
      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="reveal-text font-display text-center text-3xl font-light tracking-[0.12em] text-accent sm:text-5xl">
            <BlurText text="Why S&R" />
          </h2>

          <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <div key={r.title} className="reveal" style={{ transitionDelay: `${i * 120}ms` }}>
                <p className="text-3xl font-light">0{i + 1}</p>
                <h3 className="mt-4 text-sm font-medium text-fg/90">{r.title}</h3>
                <p className="mt-6 text-sm leading-6 text-muted">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK / LIGHT SECTION */}
      <section className="bg-surface px-6 py-16 text-fg lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="reveal aspect-4/3 overflow-hidden rounded-2xl bg-surface-2 p-6">
              <div className="h-full rounded-xl border border-fg/10 bg-page p-5">
                <div className="flex justify-between">
                  <div className="h-2 w-16 rounded bg-fg/20" />
                  <div className="h-5 w-12 rounded bg-amber-400" />
                </div>
                <div className="mt-12 h-4 w-3/4 rounded bg-fg/80" />
                <div className="mt-2 h-4 w-1/2 rounded bg-fg/70" />
                <div className="mt-6 h-2 w-full rounded bg-fg/10" />
                <div className="mt-2 h-2 w-2/3 rounded bg-fg/10" />
              </div>
            </div>
            <div style={{ transitionDelay: "150ms" }} className="reveal flex aspect-4/3 items-center justify-center rounded-2xl bg-linear-to-br from-[#ef5b4a] via-[#7a2bd6] to-[#1b1464]">
              <div className="text-center text-white">
                <div className="font-display text-4xl font-light tracking-widest">S&amp;R</div>
                <p className="mt-3 text-sm text-white/80">More projects coming soon</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-start">
            <h2 className="reveal text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Built for business,
              <br />
              powered by craft
            </h2>
            <div style={{ transitionDelay: "200ms" }} className="reveal max-w-md text-sm leading-6 text-muted">
              <p>
                A website should do more than look good. It should communicate
                your value, make it easy for customers to take action, and give
                your business a strong foundation online.
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-2 font-medium">
                {services.map((s) => (
                  <li key={s}>— {s}</li>
                ))}
              </ul>
              <Link
                href="/portfolio"
                className="mt-6 inline-block font-semibold text-fg underline underline-offset-4"
              >
                View portfolio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-28 text-center lg:py-40">
        <h2 className="reveal-text font-display text-3xl font-light uppercase tracking-[0.18em] sm:text-5xl lg:text-6xl">
          <BlurText text="Let's get started!" />
        </h2>
        <Link
          href="/contact"
          className="mt-12 inline-block rounded-lg bg-amber-400 px-12 py-4 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-amber-300"
        >
          GO!
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-fg/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-muted sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} S&amp;R Group. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-fg">Home</Link>
            <Link href="/portfolio" className="hover:text-fg">Portfolio</Link>
            <Link href="/contact" className="hover:text-fg">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
