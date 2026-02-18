'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Header.module.css'

const navLinks = [
  { href: '/#initiative-form', label: 'Предложить инициативу' },
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
      <div className={styles.headerInner}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="125" height="38" viewBox="0 0 125 38" fill="none">
              <path d="M63.8817 15.6783C63.8817 17.5553 63.3774 19.0223 62.3922 20.0753C61.3583 21.1821 59.8435 21.7752 57.8478 21.7752H56.1313V23H52.7487V21.7752H51.0321C47.0948 21.7752 45 19.4564 45 15.6766C45 11.5602 47.0948 9.19902 50.7295 9.19902L52.7487 9.19729V8H56.1313V9.19729L58.1522 9.19902C61.787 9.19902 63.8817 11.5602 63.8817 15.6766V15.6783ZM77.2159 21.7863H73.8404V14.265L68.7232 21.7863H65.3444V9.20465H68.7232V16.7517L73.8404 9.20465H77.2159V21.7863ZM91.2559 21.7863H87.8771V16.7536H82.7616V21.7863H79.3827V9.20465H82.7616V14.265H87.8771V9.20465H91.2559V21.7863ZM105.197 21.7863H97.5835C96.1966 21.7863 95.1393 21.5165 94.4099 20.9769C93.5778 20.36 93.0878 19.3457 93.0878 18.0358C93.0878 16.8793 93.4787 16.0201 94.1091 15.3514C94.8403 14.5791 95.9463 14.2817 97.4339 14.2817H102.074V13.9639C102.074 12.3971 101.357 11.7394 99.4658 11.7394H93.801V9.19729H100.534C101.845 9.19729 102.805 9.45031 103.436 9.88832C104.621 10.7104 105.199 12.3695 105.199 14.7602V21.7863H105.197ZM119.907 9.21397C118.596 9.21397 117.789 9.90847 117.389 11.1649L115.15 18.0248L112.915 11.1649C112.51 9.90847 111.705 9.21397 110.394 9.21397L107.301 9.22133V21.7806H110.68V12.9293L113.549 21.788H116.755L119.621 12.9293V21.788H123V9.22133L119.907 9.21397ZM102.072 19.281V16.7666H97.6105C96.7009 16.7666 96.0958 17.0437 96.0958 18.0449C96.0958 18.9688 96.7767 19.2792 97.6105 19.2792H102.072V19.281ZM52.7505 19.268V11.7394H51.6896C49.5948 11.7394 48.4583 13.1325 48.4583 15.4216C48.4583 17.8658 49.62 19.268 51.9417 19.268H52.7505ZM60.4253 15.4216C60.4253 13.1823 59.2887 11.7394 57.194 11.7394H56.1331V19.268H56.9418C59.2635 19.268 60.4253 17.8658 60.4253 15.4216Z" fill="white"/>
              <path d="M4.78859 17.066C1.58954 19.7886 0.302727 22.6803 0 24.0012L3.71528 26.8909C4.01801 25.5699 5.30482 22.6783 8.50387 19.9557C9.97095 18.7071 11.6195 18.0868 13.3891 17.4209C15.4781 16.6347 17.7358 15.7851 20.0625 13.7636C25.0988 9.38779 26.3372 5.42482 26.3372 5.42482L22.6219 2.53516C22.6219 2.53516 21.3835 6.49813 16.3472 10.8739C14.0205 12.8955 11.7629 13.7451 9.67379 14.5312C7.90424 15.1971 6.25566 15.8175 4.78859 17.066Z" fill="url(#paint0_linear_91_13764)"/>
              <path d="M15.4391 25.4051C12.24 28.1277 10.9532 31.0193 10.6505 32.3403L14.3658 35.2299C14.6685 33.9089 15.9553 31.0173 19.1543 28.2947C20.6945 26.984 22.386 26.3061 24.2292 25.5675C26.2144 24.772 28.3756 23.906 30.713 22.1026C33.6027 19.8731 35.5016 16.6532 35.5016 16.6532L31.7863 13.7636C31.7863 13.7636 31.2953 15.479 26.9977 19.2129C24.671 21.2345 22.4133 22.0841 20.3243 22.8702C18.5547 23.5361 16.9061 24.1565 15.4391 25.4051Z" fill="url(#paint1_linear_91_13764)"/>
              <path d="M5.20139 28.2119C5.50412 26.8909 6.79093 23.9993 9.98998 21.2767C11.4571 20.0281 13.1056 19.4078 14.8752 18.7419C16.9642 17.9557 19.2219 17.1061 21.5486 15.0846C27.8202 9.63549 29.1443 3.69104 29.1443 3.69104L32.8596 6.5807C32.8596 6.5807 31.2084 13.2682 25.2639 17.9742C22.9243 19.8265 20.7406 20.6902 18.7315 21.4849C16.9076 22.2063 15.2275 22.8708 13.7053 24.1664C10.5062 26.889 9.2194 29.7806 8.91668 31.1016L5.20139 28.2119Z" fill="url(#paint2_linear_91_13764)"/>
              <path d="M51.1552 29.3587H50.158C50.1197 29.1456 50.0483 28.9581 49.9439 28.7962C49.8395 28.6342 49.7116 28.4968 49.5604 28.3839C49.4091 28.271 49.2397 28.1857 49.0522 28.1282C48.8668 28.0707 48.6697 28.0419 48.4609 28.0419C48.0838 28.0419 47.7461 28.1367 47.4478 28.3263C47.1516 28.516 46.9173 28.794 46.7447 29.1605C46.5742 29.527 46.489 29.9744 46.489 30.5028C46.489 31.0355 46.5742 31.4851 46.7447 31.8516C46.9173 32.218 47.1527 32.495 47.451 32.6825C47.7493 32.87 48.0849 32.9638 48.4577 32.9638C48.6644 32.9638 48.8604 32.9361 49.0458 32.8807C49.2333 32.8232 49.4027 32.739 49.554 32.6282C49.7053 32.5174 49.8331 32.3821 49.9375 32.2223C50.044 32.0604 50.1175 31.875 50.158 31.6662L51.1552 31.6694C51.1019 31.9911 50.9986 32.2873 50.8452 32.5579C50.6939 32.8263 50.4989 33.0586 50.2603 33.2546C50.0238 33.4485 49.7532 33.5987 49.4485 33.7053C49.1438 33.8118 48.8114 33.8651 48.4513 33.8651C47.8846 33.8651 47.3796 33.7308 46.9364 33.4624C46.4933 33.1918 46.1438 32.805 45.8881 32.3022C45.6346 31.7994 45.5078 31.1996 45.5078 30.5028C45.5078 29.804 45.6357 29.2042 45.8913 28.7035C46.147 28.2006 46.4964 27.815 46.9396 27.5465C47.3828 27.2759 47.8867 27.1406 48.4513 27.1406C48.7987 27.1406 49.1225 27.1907 49.4229 27.2908C49.7255 27.3888 49.9972 27.5337 50.2379 27.7255C50.4787 27.9151 50.6779 28.1474 50.8356 28.4222C50.9933 28.695 51.0998 29.0071 51.1552 29.3587Z" fill="url(#paint3_linear_91_13764)"/>
              <path d="M59.0126 30.5028C59.0126 31.2017 58.8848 31.8026 58.6291 32.3054C58.3734 32.8061 58.0229 33.1918 57.5776 33.4624C57.1344 33.7308 56.6305 33.8651 56.0659 33.8651C55.4991 33.8651 54.9931 33.7308 54.5478 33.4624C54.1046 33.1918 53.7552 32.805 53.4995 32.3022C53.2438 31.7994 53.116 31.1996 53.116 30.5028C53.116 29.804 53.2438 29.2042 53.4995 28.7035C53.7552 28.2006 54.1046 27.815 54.5478 27.5465C54.9931 27.2759 55.4991 27.1406 56.0659 27.1406C56.6305 27.1406 57.1344 27.2759 57.5776 27.5465C58.0229 27.815 58.3734 28.2006 58.6291 28.7035C58.8848 29.2042 59.0126 29.804 59.0126 30.5028ZM58.0347 30.5028C58.0347 29.9702 57.9484 29.5217 57.7758 29.1573C57.6053 28.7908 57.3709 28.5138 57.0727 28.3263C56.7765 28.1367 56.4409 28.0419 56.0659 28.0419C55.6888 28.0419 55.3521 28.1367 55.056 28.3263C54.7598 28.5138 54.5254 28.7908 54.3528 29.1573C54.1824 29.5217 54.0972 29.9702 54.0972 30.5028C54.0972 31.0355 54.1824 31.4851 54.3528 31.8516C54.5254 32.2159 54.7598 32.4929 55.056 32.6825C55.3521 32.87 55.6888 32.9638 56.0659 32.9638C56.4409 32.9638 56.7765 32.87 57.0727 32.6825C57.3709 32.4929 57.6053 32.2159 57.7758 31.8516C57.9484 31.4851 58.0347 31.0355 58.0347 30.5028Z" fill="url(#paint4_linear_91_13764)"/>
              <path d="M61.2339 33.7756V27.2301H62.2215V32.9254H65.1874V33.7756H61.2339Z" fill="url(#paint5_linear_91_13764)"/>
              <path d="M67.304 33.7756V27.2301H68.2916V32.9254H71.2575V33.7756H67.304Z" fill="url(#paint6_linear_91_13764)"/>
              <path d="M74.261 33.7756H73.2127L75.5681 27.2301H76.7091L79.0646 33.7756H78.0163L76.1658 28.419H76.1147L74.261 33.7756ZM74.4367 31.2124H77.8373V32.0433H74.4367V31.2124Z" fill="url(#paint7_linear_91_13764)"/>
              <path d="M80.9998 33.7756V27.2301H83.3968C83.8613 27.2301 84.2459 27.3068 84.5506 27.4602C84.8553 27.6115 85.0833 27.8171 85.2345 28.0771C85.3858 28.3349 85.4615 28.6257 85.4615 28.9496C85.4615 29.2223 85.4114 29.4524 85.3112 29.6399C85.2111 29.8253 85.0769 29.9744 84.9085 30.0874C84.7423 30.1982 84.5591 30.2791 84.3588 30.3303V30.3942C84.5762 30.4048 84.7882 30.4751 84.9948 30.6051C85.2036 30.733 85.3762 30.9151 85.5126 31.1516C85.649 31.3881 85.7171 31.6758 85.7171 32.0146C85.7171 32.3491 85.6383 32.6495 85.4806 32.9158C85.3251 33.18 85.0843 33.3899 84.7583 33.5455C84.4323 33.6989 84.0158 33.7756 83.5087 33.7756H80.9998ZM81.9874 32.9286H83.4128C83.8858 32.9286 84.2246 32.837 84.4291 32.6538C84.6337 32.4705 84.736 32.2415 84.736 31.9666C84.736 31.7599 84.6838 31.5703 84.5793 31.3977C84.4749 31.2251 84.3258 31.0877 84.1319 30.9854C83.9401 30.8832 83.7122 30.832 83.448 30.832H81.9874V32.9286ZM81.9874 30.0618H83.3105C83.5321 30.0618 83.7313 30.0192 83.9082 29.9339C84.0872 29.8487 84.2289 29.7294 84.3333 29.576C84.4398 29.4205 84.4931 29.2372 84.4931 29.0263C84.4931 28.7557 84.3982 28.5288 84.2086 28.3455C84.019 28.1623 83.7281 28.0707 83.3361 28.0707H81.9874V30.0618Z" fill="url(#paint8_linear_91_13764)"/>
              <defs>
                <linearGradient id="paint0_linear_91_13764" x1="28.7337" y1="2.53516" x2="1.54355" y2="2.53516" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FEDA3B"/>
                  <stop offset="0.47" stopColor="#EF5541"/>
                  <stop offset="0.815" stopColor="#821EE0"/>
                  <stop offset="0.98" stopColor="#7F2A8A"/>
                </linearGradient>
                <linearGradient id="paint1_linear_91_13764" x1="28.7337" y1="2.53516" x2="1.54355" y2="2.53516" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FEDA3B"/>
                  <stop offset="0.47" stopColor="#EF5541"/>
                  <stop offset="0.815" stopColor="#821EE0"/>
                  <stop offset="0.98" stopColor="#7F2A8A"/>
                </linearGradient>
                <linearGradient id="paint2_linear_91_13764" x1="28.7337" y1="2.53516" x2="1.54355" y2="2.53516" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FEDA3B"/>
                  <stop offset="0.47" stopColor="#EF5541"/>
                  <stop offset="0.815" stopColor="#821EE0"/>
                  <stop offset="0.98" stopColor="#7F2A8A"/>
                </linearGradient>
                <linearGradient id="paint3_linear_91_13764" x1="48.1687" y1="27.1406" x2="85.7171" y2="27.1406" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFE479"/>
                  <stop offset="1" stopColor="#ED6B51"/>
                </linearGradient>
                <linearGradient id="paint4_linear_91_13764" x1="48.1687" y1="27.1406" x2="85.7171" y2="27.1406" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFE479"/>
                  <stop offset="1" stopColor="#ED6B51"/>
                </linearGradient>
                <linearGradient id="paint5_linear_91_13764" x1="48.1687" y1="27.1406" x2="85.7171" y2="27.1406" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFE479"/>
                  <stop offset="1" stopColor="#ED6B51"/>
                </linearGradient>
                <linearGradient id="paint6_linear_91_13764" x1="48.1687" y1="27.1406" x2="85.7171" y2="27.1406" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFE479"/>
                  <stop offset="1" stopColor="#ED6B51"/>
                </linearGradient>
                <linearGradient id="paint7_linear_91_13764" x1="48.1687" y1="27.1406" x2="85.7171" y2="27.1406" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFE479"/>
                  <stop offset="1" stopColor="#ED6B51"/>
                </linearGradient>
                <linearGradient id="paint8_linear_91_13764" x1="48.1687" y1="27.1406" x2="85.7171" y2="27.1406" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFE479"/>
                  <stop offset="1" stopColor="#ED6B51"/>
                </linearGradient>
              </defs>
            </svg>
          </Link>
          
          <nav className={styles.nav}>
            {navLinks.map((link) => {
              const isInitiativeLink = link.href.startsWith('/#initiative-form')
              const isActive = isInitiativeLink ? pathname === '/' : pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={isInitiativeLink && pathname === '/' ? (e) => {
                    e.preventDefault()
                    document.getElementById('initiative-form')?.scrollIntoView({ behavior: 'smooth' })
                  } : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
          
          <div className={styles.actions}>
            <span
              className={styles.projectsButtonWrap}
              style={{
                background: 'linear-gradient(135deg, #A084E8 0%, #E040FB 35%, #EF5541 65%, #FFC06F 100%)',
                padding: '2px',
                borderRadius: '10px',
                display: 'inline-flex',
              }}
            >
              <a 
                href="https://collab.finam.ru/about-projects" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.projectsButton}
                style={{ background: '#0D0512', borderRadius: '8px' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                </svg>
                <span>Смотреть проекты</span>
              </a>
            </span>

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
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {navLinks.map((link) => {
              const isInitiativeLink = link.href.startsWith('/#initiative-form')
              const isActive = isInitiativeLink ? pathname === '/' : pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setIsMenuOpen(false)
                    if (isInitiativeLink && pathname === '/') {
                      setTimeout(() => {
                        document.getElementById('initiative-form')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }
                  }}
                  className={`${styles.mobileNavLink} ${isActive ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              )
            })}
            <span
              className={styles.mobileProjectsButtonWrap}
              style={{
                background: 'linear-gradient(135deg, #A084E8 0%, #E040FB 35%, #EF5541 65%, #FFC06F 100%)',
                padding: '2px',
                borderRadius: '10px',
                display: 'inline-flex',
              }}
            >
              <a 
                href="https://collab.finam.ru/about-projects" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.mobileProjectsButton}
                onClick={() => setIsMenuOpen(false)}
                style={{ background: '#0D0512', borderRadius: '8px' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                </svg>
                <span>Смотреть проекты</span>
              </a>
            </span>
          </nav>
        </div>
      )}
    </header>
  )
}
