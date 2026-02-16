'use client'

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
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="url(#logo-gradient)"/>
              <path d="M8 12h16M8 16h12M8 20h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32">
                  <stop stopColor="#00A651"/>
                  <stop offset="1" stopColor="#00C4B4"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className={styles.logoText}>Финам <span className={styles.logoAccent}>Collab</span></span>
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
      </div>
    </header>
  )
}
