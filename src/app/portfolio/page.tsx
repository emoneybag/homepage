import Link from "next/link";
import Navbar from "@/components/Navbar";

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
    <main className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-[#050b17] dark:text-white">
      <Navbar />

      {/* Page Header */}
      <section className="relative overflow-hidden px-6 pb-20 pt-36 lg:px-8">
        <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Our Work
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Projects built with{" "}
              <span className="text-blue-600 dark:text-blue-400">
                purpose.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-white/60">
              Explore some of the websites and applications we&apos;ve built.
              Every project is designed with performance, usability, and
              modern web standards in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Featured Project
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Our latest work
              </h2>
            </div>
          </div>

          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm dark:border-white/10 dark:bg-white/3"
            >
              <div className="grid lg:grid-cols-2">
                {/* Project Preview */}
                <div className="relative min-h-75 overflow-hidden bg-slate-200 p-6 dark:bg-[#0b1324] sm:p-10">
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

                  {/* Browser Window */}
                  <div className="relative mx-auto mt-4 max-w-xl overflow-hidden rounded-xl border border-slate-300 bg-white shadow-2xl dark:border-white/10 dark:bg-[#111827]">
                    {/* Browser Bar */}
                    <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-3 dark:border-white/10 dark:bg-[#0f172a]">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                      <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1.5 text-[10px] text-slate-400 dark:bg-white/5">
                        nextshop.example
                      </div>
                    </div>

                    {/* Mock Website */}
                    <div className="space-y-5 p-6">
                      <div className="flex items-center justify-between">
                        <div className="h-3 w-20 rounded bg-slate-800 dark:bg-white/80" />

                        <div className="flex gap-2">
                          <div className="h-2 w-10 rounded bg-slate-300 dark:bg-white/20" />
                          <div className="h-2 w-10 rounded bg-slate-300 dark:bg-white/20" />
                          <div className="h-2 w-10 rounded bg-slate-300 dark:bg-white/20" />
                        </div>
                      </div>

                      <div className="rounded-xl bg-slate-100 p-6 dark:bg-white/5">
                        <div className="h-4 w-32 rounded bg-slate-300 dark:bg-white/20" />

                        <div className="mt-3 h-3 w-48 rounded bg-slate-200 dark:bg-white/10" />

                        <div className="mt-6 h-9 w-24 rounded-lg bg-blue-600" />
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="aspect-square rounded-lg bg-slate-100 dark:bg-white/5" />
                        <div className="aspect-square rounded-lg bg-slate-100 dark:bg-white/5" />
                        <div className="aspect-square rounded-lg bg-slate-100 dark:bg-white/5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                      {project.status}
                    </span>

                    <span className="text-sm text-slate-500 dark:text-white/40">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-7 text-slate-600 dark:text-white/60">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7">
                    <p className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">
                      Built with
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/60"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-slate-100 dark:border-white/10 dark:hover:bg-white/5"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-500"
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

      {/* Upcoming Projects */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-24 dark:border-white/5 dark:bg-white/2 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              More Coming Soon
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Building the next one.
            </h2>

            <p className="mt-4 text-slate-600 dark:text-white/60">
              As S&R Group grows, this portfolio will continue to showcase
              websites and digital experiences created for different
              businesses and industries.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {upcomingProjects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/3"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  +
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-white/55">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Have a project in mind?
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Let&apos;s build something great.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 dark:text-white/60">
            Tell us what you need and let&apos;s discuss how we can turn your
            idea into a professional website.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-500"
          >
            Contact S&R
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
              href="/contact"
              className="transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
