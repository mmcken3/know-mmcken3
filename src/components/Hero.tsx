'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { useTheme } from 'next-themes'
import { useEffect, useState, useRef } from 'react'

type Blob = {
  id: number
  color: string
  left: string
  top: string
  size: string
  opacity: number
  duration: number
}

const darkBlobs: Blob[] = [
  { id: 1, color: '#f59e0b', left: '-5vw',  top: '-15vw', size: '70vw', opacity: 0.55, duration: 14 },
  { id: 2, color: '#ea580c', left: '45vw',  top: '5vh',   size: '58vw', opacity: 0.45, duration: 19 },
  { id: 3, color: '#d97706', left: '5vw',   top: '50vh',  size: '52vw', opacity: 0.40, duration: 23 },
  { id: 4, color: '#fbbf24', left: '-15vw', top: '35vh',  size: '42vw', opacity: 0.30, duration: 17 },
]

const lightBlobs: Blob[] = [
  { id: 1, color: '#fbbf24', left: '-5vw',  top: '-15vw', size: '70vw', opacity: 0.70, duration: 14 },
  { id: 2, color: '#fb923c', left: '45vw',  top: '5vh',   size: '58vw', opacity: 0.55, duration: 19 },
  { id: 3, color: '#fcd34d', left: '5vw',   top: '50vh',  size: '52vw', opacity: 0.60, duration: 23 },
  { id: 4, color: '#fed7aa', left: '-15vw', top: '35vh',  size: '42vw', opacity: 0.60, duration: 17 },
]

export default function Hero() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const turbRef = useRef<SVGFETurbulenceElement>(null)

  useEffect(() => {
    setMounted(true)
    setIsMobile(window.innerWidth < 768)
  }, [])

  // Animate SVG turbulence baseFrequency for organic blob morphing
  useEffect(() => {
    if (prefersReducedMotion || !turbRef.current) return
    let t = 0
    let raf: number
    const tick = () => {
      t += 0.003
      const fx = (0.012 + Math.sin(t) * 0.005).toFixed(4)
      const fy = (0.012 + Math.sin(t * 0.7 + 1) * 0.004).toFixed(4)
      turbRef.current?.setAttribute('baseFrequency', `${fx} ${fy}`)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [prefersReducedMotion])

  const allBlobs = mounted && resolvedTheme === 'light' ? lightBlobs : darkBlobs
  const blobs = isMobile ? allBlobs.slice(0, 2) : allBlobs

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-amber-50 dark:bg-stone-950">

      {/* SVG filter definition — turbulence drives organic blob morphing */}
      <svg className="absolute" style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true">
        <defs>
          <filter id="blob-morph" x="-30%" y="-30%" width="160%" height="160%" colorInterpolationFilters="sRGB">
            <feTurbulence
              ref={turbRef}
              type="turbulence"
              baseFrequency="0.012 0.012"
              numOctaves={2}
              seed={3}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={70}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Animated background blobs */}
      <div
        className="absolute inset-0"
        style={prefersReducedMotion ? undefined : { filter: 'url(#blob-morph)' }}
      >
        {blobs.map((blob) => (
          <div
            key={blob.id}
            className="absolute rounded-full"
            style={{
              width: blob.size,
              height: blob.size,
              left: blob.left,
              top: blob.top,
              background: `radial-gradient(circle at center, ${blob.color} 0%, transparent 70%)`,
              filter: 'blur(60px)',
              opacity: blob.opacity,
              animation: prefersReducedMotion
                ? 'none'
                : `blob${blob.id}-drift ${blob.duration}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, var(--vignette) 100%)' }}
      />

      {/* Content — hero-scroll-out drives the cinematic collapse on scroll */}
      <div className="hero-scroll-out relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-amber-500 dark:text-amber-400">
            Senior Engineering Manager
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-tighter leading-[0.88] mb-8"
          >
            <span className="block text-[clamp(4rem,13vw,13rem)] bg-gradient-to-br from-amber-500 via-orange-400 to-amber-600 dark:from-amber-300 dark:via-orange-400 dark:to-amber-500 bg-clip-text text-transparent">
              Mitchell
            </span>
            <span className="block text-[clamp(2.8rem,8.5vw,8.5rem)] text-stone-900 dark:text-stone-50">
              McKenzie
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base md:text-lg text-stone-500 dark:text-stone-400 font-light tracking-wide mb-12 max-w-sm mx-auto"
        >
          Engineering systems.{' '}
          <span className="text-amber-600 dark:text-amber-400 font-medium">
            Coaching athletes.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <a
            href="https://github.com/mmcken3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-400/50 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-amber-500 hover:text-amber-700 dark:hover:border-amber-400 dark:hover:text-amber-400 transition-colors duration-200 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <GithubIcon size={15} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mitchell-mckenzie-533292109/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-stone-950 transition-colors duration-200 text-sm font-semibold shadow-lg shadow-amber-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
          >
            <LinkedinIcon size={15} />
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 dark:text-stone-600"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}
