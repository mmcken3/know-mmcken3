import Hero from '@/components/Hero'
import { FadeIn } from '@/components/FadeIn'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const disciplines = [
  {
    title: 'Engineering Leadership',
    meta: 'Go · Cloud · Systems',
    body: 'Leading software engineering teams that ship at scale with a focus in platform, developer tooling and cloud engineering. I care about the craft — clean architecture, resilient systems, and the developer experience that makes engineers do their best work.',
    href: '/about',
  },
  {
    title: 'Architecture, AI & Building',
    meta: 'LLMs · GCP · Distributed Systems',
    body: 'Building intelligent systems on modern cloud infrastructure. From LLM integrations to data pipelines that move with intention. The architecture is the product.',
    href: '/projects',
  },
  {
    title: 'Fitness & Coaching',
    meta: 'CrossFit · Olympic Lifting · Hyrox',
    body: 'CrossFit L1 trainer. USAW L1 Olympic weightlifting coach. Fitness competitor. The barbell and running shoes teach as much as the terminal — both reward consistency over intensity.',
    href: '/fitness',
  },
]

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Disciplines — editorial list */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-stone-200 dark:border-stone-800">
            {disciplines.map((d, i) => (
              <FadeIn key={d.title} delay={i * 0.05}>
                <Link
                  href={d.href}
                  className="group grid md:grid-cols-[2fr_3fr] gap-4 md:gap-16 py-10 border-b border-stone-200 dark:border-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-stone-900 dark:text-stone-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200 mb-1.5">
                      {d.title}
                    </h3>
                    <span className="text-xs font-mono text-stone-400 dark:text-stone-600">
                      {d.meta}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <p className="text-sm text-stone-500 dark:text-stone-500 leading-relaxed">
                      {d.body}
                    </p>
                    <ArrowRight
                      size={16}
                      className="flex-shrink-0 text-stone-300 dark:text-stone-700 group-hover:text-amber-500 dark:group-hover:text-amber-400 group-hover:translate-x-0.5 transition-[color,transform] duration-200"
                    />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Work — honest placeholder */}
      <section className="py-20 px-6 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-stone-900 dark:text-stone-50 mb-3">
                Work
              </h2>
              <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
                Projects in progress. What exists lives on{' '}
                <a
                  href="https://github.com/mmcken3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-700 dark:text-stone-300 underline underline-offset-2 decoration-stone-300 dark:decoration-stone-700 hover:text-amber-600 dark:hover:text-amber-400 hover:decoration-amber-500 transition-colors duration-200"
                >
                  GitHub
                </a>{' '}
                — more here soon.
              </p>
            </div>
            <Link
              href="/projects"
              className="flex-shrink-0 flex items-center gap-2 text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
            >
              Browse projects
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Connect */}
      <section className="py-24 px-6 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-stone-900 dark:text-stone-50 mb-5 leading-[0.92]">
              Want to talk engineering,<br />
              AI, or the barbell?
            </h2>
            <p className="text-stone-500 dark:text-stone-400 mb-8 leading-relaxed text-sm">
              I&apos;m usually up for interesting conversations. Find me on LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/in/mitchell-mckenzie-533292109/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 hover:bg-amber-600 dark:hover:bg-amber-400 transition-colors duration-200 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
            >
              Let&apos;s talk <ArrowRight size={14} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 dark:border-stone-800 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-400 dark:text-stone-600">
            © {new Date().getFullYear()} Mitchell McKenzie
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/mmcken3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-400 dark:text-stone-600 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mitchell-mckenzie-533292109/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-400 dark:text-stone-600 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
