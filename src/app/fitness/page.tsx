import { FadeIn } from '@/components/FadeIn'
import { ArrowRight } from 'lucide-react'

const disciplines = [
  {
    title: 'CrossFit',
    subtitle: 'Level 1 Trainer',
    description:
      'CrossFit is where I started. I coach athletes from their first pull-up to competing at the regional level. The methodology is simple: constantly varied, functional movement, performed at high intensity. The coaching is anything but.',
    focus: ['Movement quality', 'Scaling for every athlete', 'Building capacity over time', 'Competition prep'],
  },
  {
    title: 'Olympic Weightlifting',
    subtitle: 'USAW L1 Coach · Snatch · Clean & Jerk',
    description:
      'The two lifts. The snatch and clean & jerk are the most technically demanding barbell movements in existence. I coach the positions, the timing, and the patience it takes to actually get strong — not just look like you are.',
    focus: ['Technical positioning', 'Pulling mechanics', 'Percentage-based programming', 'Meet preparation'],
  },
  {
    title: 'Hyrox',
    subtitle: 'Competitor',
    description:
      'Hyrox is a fitness race — 8km of running interspersed with 8 functional fitness stations. It rewards athletes who can run and work at threshold simultaneously. I train and compete for fun and to improve my aerobic base for Crossfit. I bring that experience to how I program for endurance-based athletes, especially Crossfit athelets looking for something new.',
    focus: ['Threshold running', 'Pacing strategy', 'Functional station efficiency', 'Race nutrition'],
  },
]

export default function Fitness() {
  return (
    <main className="pt-32 pb-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeIn>
          <h1 className="text-[clamp(3.5rem,10vw,10rem)] font-black tracking-tighter leading-none mb-6">
            <span className="text-stone-900 dark:text-stone-50">The other side</span>
            <br />
            <span className="text-stone-900 dark:text-stone-50">of the </span>
            <span className="text-amber-500 dark:text-amber-400">barbell.</span>
          </h1>
          <p className="text-stone-500 dark:text-stone-400 max-w-xl leading-relaxed mb-20">
            When I&apos;m not building systems, I&apos;m coaching athletes. CrossFit, Olympic
            weightlifting, and Hyrox. The same principles apply: progressive overload, deliberate
            practice, and showing up consistently.
          </p>
        </FadeIn>

        {/* Philosophy callout */}
        <FadeIn>
          <div className="mb-20 p-8 rounded-2xl bg-amber-50 dark:bg-amber-500/5 border border-amber-200/60 dark:border-amber-500/20">
            <blockquote className="text-xl md:text-2xl font-bold text-stone-800 dark:text-stone-200 leading-snug tracking-tight">
              &ldquo;Intensity is relative. Consistency is not. The athletes who improve are the
              ones who show up, do the work, and trust the process — every single week.&rdquo;
            </blockquote>
          </div>
        </FadeIn>

        {/* Disciplines */}
        <div className="space-y-16">
          {disciplines.map((d, i) => (
            <FadeIn key={d.title} delay={i * 0.08}>
              <div className="grid md:grid-cols-[1fr_2fr] gap-10 pt-12 border-t border-stone-200 dark:border-stone-800">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 dark:text-stone-50 mb-1">
                    {d.title}
                  </h2>
                  <p className="text-sm font-medium text-amber-600 dark:text-amber-400">
                    {d.subtitle}
                  </p>
                </div>
                <div>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
                    {d.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {d.focus.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-stone-200 dark:bg-stone-800 my-20" />

        {/* Connect */}
        <FadeIn>
          <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">
            Interested in coaching?
          </h3>
          <p className="text-stone-500 dark:text-stone-400 mb-6 max-w-md leading-relaxed text-sm">
            Reach out on LinkedIn for programming, coaching inquiries, or just to talk training.
          </p>
          <a
            href="https://www.linkedin.com/in/mitchell-mckenzie-533292109/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 dark:hover:bg-amber-400 text-white dark:text-stone-950 transition-colors duration-200 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
          >
            Let&apos;s talk <ArrowRight size={14} />
          </a>
        </FadeIn>
      </div>
    </main>
  )
}
