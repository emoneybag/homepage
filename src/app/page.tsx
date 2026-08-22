import Navbar from "@/components/Navbar";

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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden bg-white transition-colors duration-300 dark:bg-[#050b17]">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />

        <div className="pointer-events-none absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-3xl" />

        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <Navbar />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-32 lg:px-8">
          <div className="grid w-full items-center gap-16 lg:grid-cols-2">
            {/* Hero Copy */}
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />

                <span className="text-xs font-medium tracking-wide text-blue-300">
                  WEB DESIGN & DEVELOPMENT
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
                We Build Websites
                <br />
                That{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Grow Your Business
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                At S&R Group, we design and develop modern, fast and
                user-friendly websites that help businesses build their brand,
                reach more customers and grow online.
              </p>

              {/* CTA buttons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-slate-900 dark:text-white shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30"
                >
                  View Our Work
                  <span>→</span>
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-900 dark:text-white transition-all hover:bg-white/10"
                >
                  Contact Us
                </a>
              </div>

              {/* Benefits */}
              <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="group">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-lg text-blue-400">
                        {benefit.icon}
                      </span>

                      <span className="text-xs font-semibold text-slate-900 dark:text-white">
                        {benefit.title}
                      </span>
                    </div>

                    <p className="text-[11px] leading-5 text-slate-500">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Website Preview */}
            <div className="relative hidden lg:block">
              {/* Glow behind preview */}
              <div className="absolute inset-10 rounded-full bg-blue-600/20 blur-3xl" />

              <div className="relative mx-auto w-full max-w-[620px]">
                {/* Laptop */}
                <div className="relative rounded-xl border border-white/15 bg-slate-900 p-2 shadow-2xl shadow-blue-950/50">
                  {/* Browser bar */}
                  <div className="flex h-8 items-center gap-1.5 px-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                    <div className="ml-4 h-4 flex-1 rounded bg-white/5" />
                  </div>

                  {/* Website screen */}
                  <div className="overflow-hidden rounded-lg bg-[#0b1220]">
                    {/* Fake website navbar */}
                    <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                      <div className="text-sm font-bold text-white">
                        S<span className="text-blue-500">&</span>R
                      </div>

                      <div className="hidden gap-5 sm:flex">
                        <span className="h-1.5 w-10 rounded bg-white/20" />
                        <span className="h-1.5 w-12 rounded bg-white/10" />
                        <span className="h-1.5 w-10 rounded bg-white/10" />
                      </div>

                      <div className="h-6 w-14 rounded bg-blue-600/80" />
                    </div>

                    {/* Fake website hero */}
                    <div className="grid min-h-[300px] grid-cols-2 gap-5 p-7">
                      <div className="flex flex-col justify-center">
                        <div className="mb-3 h-2 w-16 rounded bg-blue-500/80" />

                        <div className="h-5 w-full rounded bg-white/90" />
                        <div className="mt-2 h-5 w-4/5 rounded bg-white/90" />

                        <div className="mt-4 h-2 w-full rounded bg-white/10" />
                        <div className="mt-2 h-2 w-4/5 rounded bg-white/10" />

                        <div className="mt-6 h-8 w-24 rounded bg-blue-600" />
                      </div>

                      <div className="relative flex items-center justify-center">
                        <div className="absolute h-40 w-40 rounded-full bg-blue-500/20 blur-2xl" />

                        <div className="relative h-44 w-full rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-indigo-500/5 p-3">
                          <div className="h-full rounded-lg border border-white/5 bg-white/[0.03]" />

                          <div className="absolute left-8 right-8 top-8 h-2 rounded bg-white/10" />
                          <div className="absolute left-8 right-20 top-14 h-2 rounded bg-white/10" />
                          <div className="absolute bottom-8 left-8 h-12 w-12 rounded-lg bg-blue-500/30" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Laptop bottom */}
                  <div className="absolute -bottom-3 left-1/2 h-3 w-[80%] -translate-x-1/2 rounded-b-full bg-slate-700" />
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-8 -left-8 rounded-xl border border-white/10 bg-[#0c1424]/90 p-4 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                      <span className="text-lg text-blue-400">↗</span>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-slate-400">
                        Online presence
                      </p>

                      <p className="text-sm font-semibold text-white">
                        Built to grow
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating mobile card */}
                <div className="absolute -right-5 top-1/3 rounded-xl border border-white/10 bg-[#0c1424]/90 p-3 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-5 rounded border border-blue-400/50" />

                    <span className="text-xs font-medium text-white">
                      Mobile Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Temporary section marker — we'll build this next */}
      <section className="px-6 py-24 text-center lg:px-8">
        <p className="text-sm font-semibold tracking-[0.2em] text-blue-600">
          WHAT WE DO
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Complete Website Solutions
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-500">
          From design to development, we create digital experiences that help
          businesses stand out and connect with their customers.
        </p>
      </section>
    </main>
  );
}