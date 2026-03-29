import { FadeIn } from '@/components/FadeIn'
import { ArrowRight } from 'lucide-react'

const posts: {
  title: string
  excerpt: string
  category: string
  date: string
  slug: string
}[] = [
  {
    title: 'Golang concurrency patterns I keep reaching for',
    excerpt:
      'The patterns that show up repeatedly in production Go codebases — goroutine pools, context cancellation, and the ones that look clever but bite you later.',
    category: 'Engineering',
    date: 'Coming soon',
    slug: 'go-concurrency-patterns',
  },
  {
    title: 'What CrossFit coaching taught me about engineering management',
    excerpt:
      'Both roles require you to meet people where they are, not where you want them to be. The coaching cues that translate directly to 1:1s and code reviews.',
    category: 'Leadership',
    date: 'Coming soon',
    slug: 'crossfit-coaching-engineering-management',
  },
  {
    title: 'Building AI-powered systems in production: what actually matters',
    excerpt:
      'LLMs are probabilistic. Production is not. The architecture decisions that matter when you are shipping AI features that users depend on.',
    category: 'AI',
    date: 'Coming soon',
    slug: 'ai-production-systems',
  },
  {
    title: 'Cloud architecture decisions I have changed my mind about',
    excerpt:
      'Serverless, microservices, multi-cloud — the conventional wisdom and where I have landed after shipping real systems at scale.',
    category: 'Cloud',
    date: 'Coming soon',
    slug: 'cloud-architecture-lessons',
  },
]

const categoryColors: Record<string, string> = {
  Engineering: 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400',
  Leadership: 'bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400',
  AI: 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400',
  Cloud: 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
  Fitness: 'bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400',
}

export default function Blog() {
  return (
    <main className="pt-32 pb-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeIn>
          <h1 className="font-black tracking-tighter mb-6 leading-none">
            <span className="block text-[clamp(4rem,12vw,12rem)] text-stone-900 dark:text-stone-50">
              Thinking
            </span>
            <span className="block text-2xl md:text-4xl text-stone-400 dark:text-stone-600">
              out loud.
            </span>
          </h1>
          <p className="text-stone-500 dark:text-stone-400 max-w-xl leading-relaxed mb-20">
            Writing on engineering leadership, backend systems, AI in production, and the
            occasional observation from the gym floor.
          </p>
        </FadeIn>

        {/* Posts */}
        <div className="space-y-px">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.06}>
              <div className="group py-8 border-b border-stone-200 dark:border-stone-800 first:border-t cursor-default">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          categoryColors[post.category] ?? ''
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-stone-400 dark:text-stone-600">{post.date}</span>
                    </div>
                    <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-stone-500 dark:text-stone-500 leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-[opacity] duration-200">
                    <ArrowRight
                      size={18}
                      className="text-amber-500 dark:text-amber-400 group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-16">
          <p className="text-sm text-stone-400 dark:text-stone-600 italic">
            Posts are in draft. Check back soon — or follow on{' '}
            <a
              href="https://www.linkedin.com/in/mitchell-mckenzie-533292109/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 dark:text-amber-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
            >
              LinkedIn
            </a>{' '}
            for updates.
          </p>
        </FadeIn>
      </div>
    </main>
  )
}
