'use client'

import Link from 'next/link'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contactBanner}>
          <div className={styles.contactContent}>
            <span className={styles.contactIcon}>💬</span>
            <div className={styles.contactText}>
              <span className={styles.contactLabel}>Остались вопросы? Свяжись с нами!</span>
              <a href="mailto:tvoycollab@corp.finam.ru" className={styles.contactEmail}>
                tvoycollab@corp.finam.ru
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="url(#footer-logo-gradient-new)"/>
                <path d="M8 12h16M8 16h12M8 20h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="footer-logo-gradient-new" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FEDA3B"/>
                    <stop offset="0.39" stopColor="#EF5541"/>
                    <stop offset="0.77" stopColor="#801FDB"/>
                    <stop offset="1" stopColor="#7E2A89"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className={styles.logoText}>ФИНАМ <span className={styles.logoAccent}>COLLAB</span></span>
          </Link>
          
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Предложить инициативу</Link>
            <Link href="/expert" className={styles.navLink}>Предложить эксперта</Link>
            <Link href="/faq" className={styles.navLink}>FAQ</Link>
          </nav>
          
          <div className={styles.copyright}>
            © {new Date().getFullYear()} АО «Инвестиционная компания «ФИНАМ». Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  )
}
