'use client'

import { motion } from 'framer-motion'
import styles from './Rewards.module.css'

export function Rewards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>Что ты получишь?</h2>
          <p className={styles.subtitle}>
            Если твой кандидат сработает, Collab не забудет! Каждый эксперт попадёт в нашу базу 
            и может быть интегрирован в работу в любой момент.
          </p>
        </motion.div>
        
        <motion.div
          className={styles.table}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.tableHeader}>
            <div className={styles.tableHeaderCell}>Сценарий</div>
            <div className={styles.tableHeaderCell}>Твоя награда</div>
          </div>
          
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>
              <div className={styles.scenarioIcon}>👤</div>
              <div className={styles.scenarioText}>
                <strong>Ты привёл специалиста</strong> (мидл уровня и выше), которого мы разово привлекли к проекту Финам Collab
              </div>
            </div>
            <div className={styles.tableCell}>
              <div className={styles.rewardAmount}>10 000 ₽</div>
            </div>
          </div>
          
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>
              <div className={styles.scenarioIcon}>🚀</div>
              <div className={styles.scenarioText}>
                <strong>Ты привёл человека со своим проектом</strong>, который мы решили совместно реализовать в рамках Финам Collab
              </div>
            </div>
            <div className={styles.tableCell}>
              <div className={`${styles.rewardAmount} ${styles.premium}`}>50 000 ₽</div>
            </div>
          </div>
        </motion.div>
        
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
