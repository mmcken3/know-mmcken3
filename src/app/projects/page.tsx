import { FadeIn } from '@/components/FadeIn'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/icons'

const projects: {
  title: string
  description: string
  tags: string[]
  github?: string
  link?: string
  status: 'live' | 'wip' | 'coming-soon'
}[] = [
  {
    title: 'Project Alpha',
    description:
      'A placeholder for a real project. Add your Go microservice, platform tool, or AI-powered system here with a description of the problem it solves.',
    tags: ['Go', 'gRPC', 'Kubernetes'],
    status: 'coming-soon',
  },
  {
    title: 'Project Beta',
    description:
      'Another placeholder. This could be a cloud architecture project, a data pipeline, or an internal developer tool that shipped meaningful impact.',
    tags: ['GCP', 'Terraform', 'BigQuery'],
    status: 'coming-soon',
  },
  {
    title: 'Project Gamma',
    description:
      'An AI-powered project. LLM integration, RAG pipeline, or intelligent automation system built on top of modern foundation models.',
    tags: ['AI', 'Python', 'Vertex AI'],
    status: 'coming-soon',
  },
]

const statusConfig = {
  live: { label: 'Live', class: 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' },
  wip: { label: 'In progress', class: 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400' },
  'coming-soon': { label: 'Coming soon', class: 'bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-500' },
}

export default function Projects() {
  return (
    <main className="pt-32 pb-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeIn>
          <h1 className="text-[clamp(5rem,15vw,15rem)] font-black tracking-tighter text-stone-900 dark:text-stone-50 mb-6 leading-none">
            Work.
          </h1>
          <p className="text-stone-500 dark:text-stone-400 max-w-xl leading-relaxed mb-20">
            Systems, tools, and products I&apos;ve built or led. Backend-heavy, cloud-native,
            occasionally AI-powered. Go first, TypeScript and Python close behind.
          </p>
        </FadeIn>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const status = statusConfig[project.status]
            return (
              <FadeIn key={project.title} delay={i * 0.08}>
                <div className="group p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-900/50 hover:border-amber-400/40 dark:hover:border-amber-500/30 transition-[border-color,background-color] duration-300 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${status.class}`}>
                      {status.label}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} on GitHub`}
                          className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                        >
                          <GithubIcon size={15} />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${project.title}`}
                          className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-bold text-stone-900 dark:text-stone-100 mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-stone-500 dark:text-stone-500 leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </main>
  )
}
