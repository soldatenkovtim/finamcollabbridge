'use client'

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
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="url(#footer-logo-gradient)"/>
                <path d="M8 12h16M8 16h12M8 20h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#00A651"/>
                    <stop offset="1" stopColor="#00C4B4"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className={styles.logoText}>Финам <span className={styles.logoAccent}>Collab</span></span>
          </div>
          
          <nav className={styles.nav}>
            <a href="/" className={styles.navLink}>Предложить инициативу</a>
            <a href="/expert" className={styles.navLink}>Предложить эксперта</a>
            <a href="/faq" className={styles.navLink}>FAQ</a>
          </nav>
          
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Финам Collab. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  )
}
