'use client'

import { motion } from 'framer-motion'
import styles from './ExpertHero.module.css'

export function ExpertHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGlow} />
      <div className={styles.gridPattern} />
      
      <div className={styles.container}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.badgeIcon}>🤝</span>
          <span>Предложить эксперта</span>
        </motion.div>
        
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Знаешь сильного специалиста?
          <span className={styles.titleAccent}> Поделись и получи за это бонус!</span>
        </motion.h1>
        
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <strong>Финам Collab</strong> — это платформа, где внутренние задачи решаются с помощью лучших экспертов. 
          Иногда внутри команды не хватает одного точечного человека, чтобы задача поехала. 
          И часто его можешь подсказать именно ты.
        </motion.p>
        
        <motion.div
          className={styles.highlight}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.highlightIcon}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 2C7.37 2 2 7.37 2 14C2 20.63 7.37 26 14 26C20.63 26 26 20.63 26 14C26 7.37 20.63 2 14 2Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 14L12 17L19 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p>
            Если ты знаешь кого-то сильного с рынка, <strong>поделись им!</strong> Это поможет нам быстрее решать реальные проблемы. 
            А тебе — получить заслуженное вознаграждение.
          </p>
        </motion.div>
        
        <motion.div
          className={styles.rewardPreview}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.rewardItem}>
            <span className={styles.rewardAmount}>10 000 ₽</span>
            <span className={styles.rewardLabel}>за привлечённого специалиста</span>
          </div>
          <div className={styles.rewardDivider} />
          <div className={styles.rewardItem}>
            <span className={styles.rewardAmount}>50 000 ₽</span>
            <span className={styles.rewardLabel}>за эксперта с проектом</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
