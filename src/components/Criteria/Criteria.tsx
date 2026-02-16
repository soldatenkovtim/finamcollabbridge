'use client'

import { motion } from 'framer-motion'
import styles from './Criteria.module.css'

const criteria = [
  {
    title: 'Связь с бизнесом',
    description: 'Инициативы связаны с профессиональной деятельностью компании и направлены на улучшение клиентского сервиса',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="criteria-grad-1" x1="10" y1="10" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDA3B"/>
            <stop offset="0.5" stopColor="#EF5541"/>
            <stop offset="1" stopColor="#801FDB"/>
          </linearGradient>
        </defs>
        <rect x="14" y="20" width="32" height="26" rx="3" stroke="url(#criteria-grad-1)" strokeWidth="2.5" fill="none"/>
        <path d="M22 20V16C22 13.79 23.79 12 26 12H34C36.21 12 38 13.79 38 16V20" stroke="url(#criteria-grad-1)" strokeWidth="2.5" fill="none"/>
        <path d="M14 30H46" stroke="url(#criteria-grad-1)" strokeWidth="2.5"/>
        <circle cx="30" cy="30" r="3" fill="url(#criteria-grad-1)"/>
      </svg>
    ),
  },
  {
    title: 'Инновации',
    description: 'Инициативы, предлагающие что-то новое — технология, подход к работе, вендор или продукт',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="criteria-grad-2" x1="10" y1="10" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EF5541"/>
            <stop offset="0.5" stopColor="#801FDB"/>
            <stop offset="1" stopColor="#7E2A89"/>
          </linearGradient>
        </defs>
        <path d="M30 12V18" stroke="url(#criteria-grad-2)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M42 18L38 22" stroke="url(#criteria-grad-2)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M18 18L22 22" stroke="url(#criteria-grad-2)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 48H36" stroke="url(#criteria-grad-2)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M26 44H34" stroke="url(#criteria-grad-2)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M22 40C20 37 18 33.5 18 30C18 23.37 23.37 18 30 18C36.63 18 42 23.37 42 30C42 33.5 40 37 38 40H22Z" stroke="url(#criteria-grad-2)" strokeWidth="2.5" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Экономия ресурсов',
    description: 'Инициативы по устранению неэффективностей, которые помогут сэкономить ресурс компании',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="criteria-grad-3" x1="10" y1="10" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#801FDB"/>
            <stop offset="0.5" stopColor="#EF5541"/>
            <stop offset="1" stopColor="#FEDA3B"/>
          </linearGradient>
        </defs>
        <circle cx="30" cy="30" r="18" stroke="url(#criteria-grad-3)" strokeWidth="2.5" fill="none"/>
        <path d="M30 20V22" stroke="url(#criteria-grad-3)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M30 38V40" stroke="url(#criteria-grad-3)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M26 26C26 24 28 22 30 22C32 22 34 23.5 34 26C34 28 32 29 30 29C28 29 26 30 26 32.5C26 35 28 36 30 36C32 36 34 34 34 32" stroke="url(#criteria-grad-3)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Операционная эффективность',
    description: 'Инициативы, направленные на повышение операционной эффективности и понятный экономический эффект',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="criteria-grad-4" x1="10" y1="10" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDA3B"/>
            <stop offset="0.4" stopColor="#EF5541"/>
            <stop offset="0.8" stopColor="#801FDB"/>
            <stop offset="1" stopColor="#7E2A89"/>
          </linearGradient>
        </defs>
        <path d="M14 44L24 34L32 42L46 28" stroke="url(#criteria-grad-4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M38 28H46V36" stroke="url(#criteria-grad-4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 16V44H46" stroke="url(#criteria-grad-4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export function Criteria() {
  return (
    <section className={styles.criteria}>
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
          <h2 className={styles.title}>Критерии отбора проектов</h2>
          <p className={styles.subtitle}>Какие инициативы мы рассматриваем для реализации</p>
        </motion.div>
        
        <div className={styles.cards}>
          {criteria.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardIcon}>{item.icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
              <p className={styles.cardDescription}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
