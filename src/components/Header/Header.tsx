'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Header.module.css'

const navLinks = [
  { href: '/', label: 'Предложить инициативу' },
  { href: '/expert', label: 'Предложить эксперта' },
  { href: '/faq', label: 'FAQ' },
]

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const lastScrollY = useRef(0)

  // Закрываем меню при изменении маршрута
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Отслеживание прокрутки для динамического хедера
  useEffect(() => {
    lastScrollY.current = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = currentScrollY - lastScrollY.current
      const threshold = 10

      if (currentScrollY <= 50) {
        setIsHeaderVisible(true)
      } else if (scrollDifference > threshold && currentScrollY > 100) {
        setIsHeaderVisible(false)
      } else if (scrollDifference < 0) {
        setIsHeaderVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={styles.header}
      style={{
        transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="10" fill="url(#logo-gradient-header)"/>
              <path d="M10 15h20M10 20h15M10 25h10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <defs>
                <linearGradient id="logo-gradient-header" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FEDA3B"/>
                  <stop offset="0.39" stopColor="#EF5541"/>
                  <stop offset="0.77" stopColor="#801FDB"/>
                  <stop offset="1" stopColor="#7E2A89"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className={styles.logoText}>
            ФИНАМ <span className={styles.logoAccent}>COLLAB</span>
          </span>
        </Link>
        
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className={styles.actions}>
          <a 
            href="https://collab.finam.ru/about-projects" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.projectsButton}
          >
            <span>Смотреть проекты</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {isMenuOpen ? (
                <path d="M6 6L18 18M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="https://collab.finam.ru/about-projects" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mobileProjectsButton}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Смотреть проекты</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
