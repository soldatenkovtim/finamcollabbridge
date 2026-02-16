'use client'

import { motion } from 'framer-motion'
import styles from './Benefits.module.css'

const benefits = [
  {
    title: 'Решишь то, что давно мешает работать',
    description: 'Превращай раздражающие проблемы в решённые задачи. Участвуй в процессе улучшения компании и увидь результат своих усилий.',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="benefit-grad-1" x1="10" y1="10" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDA3B"/>
            <stop offset="0.5" stopColor="#EF5541"/>
            <stop offset="1" stopColor="#801FDB"/>
          </linearGradient>
        </defs>
        <circle cx="30" cy="30" r="20" stroke="url(#benefit-grad-1)" strokeWidth="2.5" fill="none"/>
        <path d="M22 30L28 36L40 24" stroke="url(#benefit-grad-1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Прокачаешь идею с экспертами',
    description: 'Получишь обратную связь от профессионалов. Твоя инициатива пройдёт проверку и будет доработана вместе с командой экспертов.',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="benefit-grad-2" x1="10" y1="10" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EF5541"/>
            <stop offset="0.5" stopColor="#801FDB"/>
            <stop offset="1" stopColor="#7E2A89"/>
          </linearGradient>
        </defs>
        <rect x="12" y="18" width="36" height="28" rx="4" stroke="url(#benefit-grad-2)" strokeWidth="2.5" fill="none"/>
        <path d="M12 26H48" stroke="url(#benefit-grad-2)" strokeWidth="2.5"/>
        <circle cx="18" cy="22" r="2" fill="url(#benefit-grad-2)"/>
        <circle cx="24" cy="22" r="2" fill="url(#benefit-grad-2)"/>
        <circle cx="30" cy="22" r="2" fill="url(#benefit-grad-2)"/>
      </svg>
    ),
  },
  {
    title: 'Станешь инициатором реальных улучшений',
    description: 'Твоя идея может изменить процессы компании. Руководство оценит твою вовлечённость и увидит твоё предложение.',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="benefit-grad-3" x1="10" y1="10" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDA3B"/>
            <stop offset="0.4" stopColor="#EF5541"/>
            <stop offset="0.8" stopColor="#801FDB"/>
            <stop offset="1" stopColor="#7E2A89"/>
          </linearGradient>
        </defs>
        <path d="M30 14L34 26H46L36 34L40 46L30 38L20 46L24 34L14 26H26L30 14Z" stroke="url(#benefit-grad-3)" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
]

export function Benefits() {
  return (
    <section className={styles.benefits}>
      {/* Фоновый градиентный эллипс */}
      <div className={styles.backgroundGlow} />
      
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>Зачем тебе это?</h2>
          <p className={styles.subtitle}>Преимущества участия в программе Финам Collab</p>
        </motion.div>
        
        <div className={styles.cards}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardIcon}>{benefit.icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{benefit.title}</h3>
              </div>
              <p className={styles.cardDescription}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
