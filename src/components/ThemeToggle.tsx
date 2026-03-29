'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="w-11 h-11" />

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-11 h-11 flex items-center justify-center rounded-full text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-100/80 dark:hover:bg-stone-800/80 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'moon' : 'sun'}
          initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          {isDark ? <Moon size={17} /> : <Sun size={17} />}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}
