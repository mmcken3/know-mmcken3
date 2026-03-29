'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/fitness', label: 'Fitness' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 30)
  })

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div
          className={`transition-[background-color,border-color,backdrop-filter] duration-300 ${
            scrolled
              ? 'bg-amber-50/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-amber-200/60 dark:border-stone-800/60'
              : 'bg-transparent'
          }`}
        >
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="font-black text-xl tracking-tight text-stone-900 dark:text-stone-50 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
            >
              MM
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors duration-200 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm ${
                    pathname === href
                      ? 'text-amber-600 dark:text-amber-400'
                      : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
                  }`}
                >
                  {label}
                  {pathname === href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-amber-500 dark:bg-amber-400"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-1">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden flex items-center justify-center w-11 h-11 rounded-full text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-label="Open navigation"
              >
                <Menu size={18} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-amber-50/97 dark:bg-stone-950/97 backdrop-blur-xl flex flex-col"
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-6 py-4">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="font-black text-xl tracking-tight text-stone-900 dark:text-stone-50"
              >
                MM
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-11 h-11 rounded-full text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-label="Close navigation"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col justify-center flex-1 px-8 pb-16 gap-1">
              {links.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.05, duration: 0.3, ease: [0.21, 1, 0.3, 1] }}
                >
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-5xl font-black tracking-tighter py-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm ${
                      pathname === href
                        ? 'text-amber-500 dark:text-amber-400'
                        : 'text-stone-900 dark:text-stone-50 hover:text-amber-600 dark:hover:text-amber-400'
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              {/* Bottom social row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-12 flex items-center gap-5 border-t border-stone-200 dark:border-stone-800 pt-8"
              >
                <a
                  href="https://github.com/mmcken3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mitchell-mckenzie-533292109/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
