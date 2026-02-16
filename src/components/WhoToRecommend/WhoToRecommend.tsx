'use client'

import { motion } from 'framer-motion'
import styles from './WhoToRecommend.module.css'

const experts = [
  {
    title: 'Опытные трейдеры и управляющие',
    description: 'С прибыльными стратегиями и перспективными идеями в области трейдинга',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="expert-grad-1" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDA3B"/>
            <stop offset="0.5" stopColor="#EF5541"/>
            <stop offset="1" stopColor="#801FDB"/>
          </linearGradient>
        </defs>
        <path d="M15 40L22 28L30 34L38 20L45 28" stroke="url(#expert-grad-1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="15" cy="40" r="3" fill="url(#expert-grad-1)"/>
        <circle cx="45" cy="28" r="3" fill="url(#expert-grad-1)"/>
      </svg>
    ),
  },
  {
    title: 'Продакт-оунеры и менеджеры',
    description: 'В брокеридже и банкинге — от мидлов до CPO и топ-менеджеров',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="expert-grad-2" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EF5541"/>
            <stop offset="0.5" stopColor="#801FDB"/>
            <stop offset="1" stopColor="#7E2A89"/>
          </linearGradient>
        </defs>
        <rect x="14" y="14" width="32" height="32" rx="4" stroke="url(#expert-grad-2)" strokeWidth="2.5" fill="none"/>
        <path d="M14 26H46" stroke="url(#expert-grad-2)" strokeWidth="2.5"/>
        <path d="M26 26V46" stroke="url(#expert-grad-2)" strokeWidth="2.5"/>
      </svg>
    ),
  },
  {
    title: 'AI-специалисты',
    description: 'Создатели успешных AI-решений, готовые делиться экспертизой',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="expert-grad-3" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDA3B"/>
            <stop offset="0.4" stopColor="#EF5541"/>
            <stop offset="0.8" stopColor="#801FDB"/>
            <stop offset="1" stopColor="#7E2A89"/>
          </linearGradient>
        </defs>
        <circle cx="30" cy="30" r="16" stroke="url(#expert-grad-3)" strokeWidth="2.5" fill="none"/>
        <circle cx="24" cy="26" r="3" fill="url(#expert-grad-3)"/>
        <circle cx="36" cy="26" r="3" fill="url(#expert-grad-3)"/>
        <path d="M22 36C22 36 25 40 30 40C35 40 38 36 38 36" stroke="url(#expert-grad-3)" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

const expertsSecondRow = [
  {
    title: 'Финансовые инженеры',
    description: 'Структураторы для формирования и запуска новых продуктов',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="expert-grad-4" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDA3B"/>
            <stop offset="0.5" stopColor="#EF5541"/>
            <stop offset="1" stopColor="#801FDB"/>
          </linearGradient>
        </defs>
        <path d="M30 14V46" stroke="url(#expert-grad-4)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 30H46" stroke="url(#expert-grad-4)" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="30" cy="30" r="8" stroke="url(#expert-grad-4)" strokeWidth="2.5" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Комплаенс-офицеры',
    description: 'Понимающие особенности работы с регуляторами в различных юрисдикциях',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="expert-grad-5" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EF5541"/>
            <stop offset="0.5" stopColor="#801FDB"/>
            <stop offset="1" stopColor="#7E2A89"/>
          </linearGradient>
        </defs>
        <path d="M30 14L44 22V34C44 40 38 46 30 48C22 46 16 40 16 34V22L30 14Z" stroke="url(#expert-grad-5)" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
        <path d="M22 30L28 36L38 26" stroke="url(#expert-grad-5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Кванты и математики',
    description: 'С интересными торговыми идеями',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="expert-grad-6" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDA3B"/>
            <stop offset="0.4" stopColor="#EF5541"/>
            <stop offset="0.8" stopColor="#801FDB"/>
            <stop offset="1" stopColor="#7E2A89"/>
          </linearGradient>
        </defs>
        <path d="M18 18L30 42L42 18" stroke="url(#expert-grad-6)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M22 28H38" stroke="url(#expert-grad-6)" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export function WhoToRecommend() {
  return (
    <section className={styles.section}>
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
          <h2 className={styles.heading}>Кого можно порекомендовать?</h2>
          <p className={styles.subtitle}>
            Мы ищем экспертов в разных областях. Если ты знаешь кого-то сильного — поделись!
          </p>
        </motion.div>
        
        <div className={styles.cards}>
          {experts.map((expert, index) => (
            <motion.div
              key={expert.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{expert.title}</h3>
                <p className={styles.cardDescription}>{expert.description}</p>
              </div>
              <div className={styles.cardIcon}>
                {expert.icon}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className={styles.cards}>
          {expertsSecondRow.map((expert, index) => (
            <motion.div
              key={expert.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{expert.title}</h3>
                <p className={styles.cardDescription}>{expert.description}</p>
              </div>
              <div className={styles.cardIcon}>
                {expert.icon}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className={styles.note}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className={styles.noteIcon}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M10 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="10" cy="14" r="1" fill="currentColor"/>
            </svg>
          </div>
          <span><strong>Даже если не уверен</strong> — всё равно пришли рекомендацию. Мы разберёмся!</span>
        </motion.div>
      </div>
    </section>
  )
}
