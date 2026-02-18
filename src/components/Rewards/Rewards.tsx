'use client'

import { motion } from 'framer-motion'
import styles from './Rewards.module.css'

const rewards = [
  {
    title: 'Ты привёл специалиста',
    description: 'Мидл уровня и выше, которого мы разово привлекли к проекту Финам Collab',
    amount: '10 000 ₽',
  },
  {
    title: 'Ты привёл человека с проектом',
    description: 'Который мы решили совместно реализовать в рамках Финам Collab',
    amount: '50 000 ₽',
    premium: true,
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
              </div>
              <div className={`${styles.cardAmount} ${reward.premium ? styles.premiumAmount : ''}`}>
                {reward.amount}
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
          <span><strong>Срок давности рекомендации — 6 месяцев.</strong> После рекомендации твой эксперт будет закреплён за тобой на этот срок.</span>
        </motion.div>
      </div>
    </section>
  )
}
