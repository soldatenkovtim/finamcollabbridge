'use client'

import { motion } from 'framer-motion'
import styles from './Warning.module.css'

const cards = [
  {
    title: 'Реальная боль',
    description: 'Мы отбираем инициативы, в которых есть настоящая проблема, требующая решения.',
    icon: (
      <img src="/icon/warning_icon_no_bg_v2.png" alt="" width={117} height={117} className={styles.cardIconImg} />
    ),
  },
  {
    title: 'Чёткая мотивация',
    description: 'Если не понимаешь, чего именно хочешь — лучше пока не спеши с заявкой.',
    icon: (
      <img src="/icon/targ.png" alt="" width={85} height={85} className={styles.cardIconImgSm} />
    ),
  },
  {
    title: 'Готовность включиться',
    description: 'Если у тебя есть что-то важное — расскажи. Мы поможем двигаться всерьёз.',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="warning-grad-3" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDA3B"/>
            <stop offset="0.4" stopColor="#EF5541"/>
            <stop offset="0.8" stopColor="#801FDB"/>
            <stop offset="1" stopColor="#7E2A89"/>
          </linearGradient>
        </defs>
        <path d="M18 42L30 18L42 42" stroke="url(#warning-grad-3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M22 36H38" stroke="url(#warning-grad-3)" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="30" cy="30" r="3" fill="url(#warning-grad-3)"/>
      </svg>
    ),
  },
]

export function Warning() {
  return (
    <section className={styles.warning}>
      {/* Фоновый градиентный эллипс */}
      <div className={styles.backgroundGlow} />
      
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.heading}>Но важно понимать!</h2>
          <p className={styles.subtitle}>
            Твоя проработка — это половина успешного решения. Финам Collab — это не место для случайных идей.
          </p>
        </motion.div>
        
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
              <div className={styles.cardIcon}>
                {card.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
