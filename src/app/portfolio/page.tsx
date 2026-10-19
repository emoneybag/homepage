import Link from "next/link";
import Navbar from "@/components/Navbar";
import { BlurText, RevealObserver } from "@/components/Reveal";

const projects = [
  {
    title: "Next.js E-Commerce Platform",
    category: "Web Application",
    description:
      "A full-stack e-commerce application built to demonstrate modern web development, including product browsing, shopping cart functionality, user accounts, checkout flows, and database integration.",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
    status: "Completed",
    github: "#",
    demo: "#",
  },
];

const upcomingProjects = [
  {
    title: "Your Business Website",
    description:
      "A custom website designed and developed for a business, focused on a professional online presence and a great user experience.",
  },
  {
    title: "More Projects Coming Soon",
    description:
      "We're currently working on new projects. Check back soon to see more of our work.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-page text-fg">
      <Navbar />
      <RevealObserver />

      {/* Page Header */}
      <section className="px-6 pb-20 pt-40 text-center lg:px-8 lg:pb-28">
        <p className="reveal text-xs font-medium uppercase tracking-[0.35em] text-coral">
          Our Work
        </p>

        <h1
          aria-label="Projects built with purpose."
          className="reveal-text font-display mx-auto mt-6 max-w-5xl text-[clamp(2rem,5.5vw,4.5rem)] font-light uppercase leading-[1.1] tracking-[0.1em]"
        >
          <BlurText text="Projects built with " />
          <BlurText text="purpose." offset={20} className="text-accent" />
        </h1>

        <p
          style={{ transitionDelay: "200ms" }}
          className="reveal mx-auto mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg"
        >
          Explore some of the websites and applications we&apos;ve built. Every
          project is designed with performance, usability, and modern web
          standards in mind.
        </p>
      </section>

      {/* Featured Project */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="reveal mb-8 font-display text-sm font-light uppercase tracking-[0.3em] text-accent">
            Featured Project
          </h2>

          {projects.map((project) => (
            <article
              key={project.title}
              className="reveal overflow-hidden rounded-3xl border border-fg/10 bg-fg/[0.04]"
            >
              <div className="grid lg:grid-cols-2">
                {/* Preview */}
                <div className="relative overflow-hidden bg-surface p-6 sm:p-10">
                  <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />

                  <div className="relative mx-auto max-w-xl overflow-hidden rounded-xl border border-fg/10 bg-page shadow-xl">
                    <div className="flex items-center gap-2 border-b border-fg/10 bg-fg/5 px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      <div className="ml-3 flex-1 rounded-md bg-fg/5 px-3 py-1.5 text-[10px] text-muted">
                        nextshop.example
                      </div>
                    </div>

                    <div className="space-y-5 p-6">
                      <div className="flex items-center justify-between">
                        <div className="h-3 w-20 rounded bg-fg/80" />
                        <div className="flex gap-2">
                          <div className="h-2 w-10 rounded bg-fg/20" />
                          <div className="h-2 w-10 rounded bg-fg/20" />
                          <div className="h-2 w-10 rounded bg-fg/20" />
                        </div>
                      </div>

                      <div className="rounded-xl bg-fg/5 p-6">
                        <div className="h-4 w-32 rounded bg-fg/25" />
                        <div className="mt-3 h-3 w-48 rounded bg-fg/10" />
                        <div className="mt-6 h-9 w-24 rounded-lg bg-amber-400" />
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="aspect-square rounded-lg bg-fg/5" />
                        <div className="aspect-square rounded-lg bg-fg/5" />
                        <div className="aspect-square rounded-lg bg-fg/5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-semibold text-accent">
                      {project.status}
                    </span>
                    <span className="text-sm text-muted">{project.category}</span>
                  </div>

                  <h3 className="mt-5 text-3xl font-medium tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-7 text-muted">{project.description}</p>

                  <div className="mt-7">
                    <p className="mb-3 text-sm font-medium text-fg">Built with</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-fg/15 bg-fg/5 px-3 py-1.5 text-xs font-medium text-muted"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      className="rounded-lg border border-fg/20 px-5 py-2.5 text-sm font-semibold transition hover:bg-fg/10"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-amber-300"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Upcoming Projects (light band) */}
      <section className="bg-surface px-6 py-24 text-fg lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-coral">
              More Coming Soon
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Building the next one.
            </h2>
            <p className="mt-5 text-sm leading-6 text-muted">
              As S&amp;R Group grows, this portfolio will continue to showcase
              websites and digital experiences created for different businesses
              and industries.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {upcomingProjects.map((project, i) => (
              <div
                key={project.title}
                style={{ transitionDelay: `${i * 150}ms` }}
                className="reveal rounded-2xl bg-surface-2 p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-xl font-semibold text-black">
                  +
                </div>
                <h3 className="mt-6 text-xl font-medium">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 text-center lg:py-40">
        <p className="reveal text-xs font-medium uppercase tracking-[0.35em] text-coral">
          Have a project in mind?
        </p>
        <h2 className="reveal-text font-display mx-auto mt-6 max-w-4xl text-3xl font-light uppercase leading-tight tracking-[0.14em] sm:text-5xl">
          <BlurText text="Let's build something great." />
        </h2>
        <Link
          href="/contact"
          className="mt-12 inline-block rounded-lg bg-amber-400 px-10 py-4 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-amber-300"
        >
          Contact S&amp;R
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-fg/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-muted sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} S&amp;R Group. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-fg">Home</Link>
            <Link href="/contact" className="hover:text-fg">Contact Us</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
