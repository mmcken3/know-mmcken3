import { FadeIn } from '@/components/FadeIn'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const stack = [
  { category: 'Languages', items: ['Go', 'TypeScript', 'Python', 'SQL'] },
  { category: 'Cloud & Infra', items: ['GCP', 'AWS', 'Kubernetes', 'Terraform'] },
  { category: 'AI & Data', items: ['LLMs', 'RAG pipelines', 'BigQuery', 'Vertex AI'] },
  { category: 'Practices', items: ['Platform Engineering', 'DDD', 'Event-Driven', 'SRE'] },
]

export default function About() {
  return (
    <main className="pt-32 pb-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeIn>
          <h1 className="font-black tracking-tighter mb-16 leading-none">
            <span className="block text-[clamp(3.5rem,9vw,9rem)] text-stone-900 dark:text-stone-50">
              Engineering Leader.
            </span>
            <span className="block text-3xl md:text-5xl text-amber-500 dark:text-amber-400">
              Coach.
            </span>
          </h1>
        </FadeIn>

        {/* Bio */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <FadeIn>
            <div className="space-y-5 text-stone-600 dark:text-stone-400 leading-relaxed">
              <p>
                I&apos;m Mitchell — a Senior Engineering Manager with deep roots in Go, backend
                systems, and cloud architecture. I lead teams that ship impactful software at
                scale, with a relentless focus on developer velocity and the kind of craft that
                makes engineers proud of what they build.
              </p>
              <p>
                My work lives at the intersection of technical depth and people leadership. I care
                about clean architecture, thoughtful APIs, and resilient systems — but I care just
                as much about building the kind of team where great engineers do their best work.
              </p>
              <p>
                Outside of the terminal, I coach CrossFit and Olympic weightlifting, and compete
                in Hyrox. Athletics and engineering are more connected than people think. Both
                reward consistency over intensity, deliberate practice over shortcuts, and showing
                up when it&apos;s hard.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-2">
              {[
                { label: 'Role', value: 'Senior Engineering Manager' },
                { label: 'Focus', value: 'Backend · Cloud · AI' },
                { label: 'Languages', value: 'Go · TypeScript · Python' },
                { label: 'Location', value: 'United States' },
                { label: 'Coaching', value: 'CrossFit · Olympic Weightlifting · Hyrox' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between py-3 border-b border-stone-200 dark:border-stone-800"
                >
                  <span className="text-xs font-semibold tracking-wider uppercase text-stone-400 dark:text-stone-600">
                    {label}
                  </span>
                  <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Divider */}
        <div className="h-px bg-stone-200 dark:bg-stone-800 mb-24" />

        {/* Tech Stack */}
        <FadeIn>
          <h2 className="text-2xl font-black tracking-tight text-stone-900 dark:text-stone-50 mb-12">
            Stack
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stack.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.08}>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-stone-400 dark:text-stone-600 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-stone-200 dark:bg-stone-800 mb-16" />

        <FadeIn className="flex flex-col sm:flex-row gap-6">
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
          >
            View work
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
          <Link
            href="/fitness"
            className="group flex items-center gap-2 text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
          >
            The fitness side
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </FadeIn>
      </div>
    </main>
  )
}
