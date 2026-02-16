'use client'

import { motion } from 'framer-motion'
import styles from './Rewards.module.css'

const rewards = [
  {
    title: 'Ты привёл специалиста',
    description: 'Мидл уровня и выше, которого мы разово привлекли к проекту Финам Collab',
    amount: '10 000 ₽',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="reward-grad-1" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDA3B"/>
            <stop offset="0.5" stopColor="#EF5541"/>
            <stop offset="1" stopColor="#801FDB"/>
          </linearGradient>
        </defs>
        <circle cx="30" cy="24" r="10" stroke="url(#reward-grad-1)" strokeWidth="2.5" fill="none"/>
        <path d="M14 46C14 38 21 34 30 34C39 34 46 38 46 46" stroke="url(#reward-grad-1)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Ты привёл человека с проектом',
    description: 'Который мы решили совместно реализовать в рамках Финам Collab',
    amount: '50 000 ₽',
    premium: true,
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="reward-grad-2" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FEDA3B"/>
            <stop offset="0.4" stopColor="#EF5541"/>
            <stop offset="0.8" stopColor="#801FDB"/>
            <stop offset="1" stopColor="#7E2A89"/>
          </linearGradient>
        </defs>
        <path d="M30 14L34 26H46L36 34L40 46L30 38L20 46L24 34L14 26H26L30 14Z" stroke="url(#reward-grad-2)" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
]

export function Rewards() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundGlow} />
      
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.heading}>Что ты получишь?</h2>
          <p className={styles.subtitle}>
            Если твой кандидат сработает, Collab не забудет! Каждый эксперт попадёт в нашу базу и может быть интегрирован в работу в любой момент.
          </p>
        </motion.div>
        
        <div className={styles.cards}>
          {rewards.map((reward, index) => (
            <motion.div
              key={reward.title}
              className={`${styles.card} ${reward.premium ? styles.premium : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{reward.title}</h3>
                <p className={styles.cardDescription}>{reward.description}</p>
                <div className={`${styles.cardAmount} ${reward.premium ? styles.premiumAmount : ''}`}>
                  {reward.amount}
                </div>
              </div>
              <div className={styles.cardIcon}>
                {reward.icon}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className={styles.note}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.noteIcon}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M10 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="10" cy="14" r="1" fill="currentColor"/>
            </svg>
          </div>
          <span><strong>Срок давности рекомендации — 6 месяцев.</strong> После рекомендации твой эксперт будет закреплён за тобой на этот срок.</span>
        </motion.div>
      </div>
    </section>
  )
}
