'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'none'
}

export function FadeIn({ children, delay = 0, className = '', direction = 'up' }: FadeInProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : direction === 'up' ? 24 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.6,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
