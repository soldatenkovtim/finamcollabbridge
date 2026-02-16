'use client'

import { motion } from 'framer-motion'
import styles from './Warning.module.css'

export function Warning() {
  return (
    <motion.section
      className={styles.warning}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 4L2 28H30L16 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 12V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="16" cy="23" r="1.5" fill="currentColor"/>
            </svg>
          </div>
          
          <div className={styles.content}>
            <h3 className={styles.title}>Но важно понимать!</h3>
            <p className={styles.text}>
              Твоя проработка — это половина успешного решения.
            </p>
            
            <div className={styles.points}>
              <p>
                <strong>Финам Collab</strong> — это не место для случайных идей «на всякий случай».
              </p>
              <p>
                Если ты не готов двигаться всерьёз, если не понимаешь, чего именно хочешь — лучше пока не спеши с заявкой.
              </p>
              <p>
                Мы отбираем инициативы, в которых есть <span className={styles.highlight}>реальная боль</span>, 
                <span className={styles.highlight}> чёткая мотивация</span> и 
                <span className={styles.highlight}> готовность включиться</span>.
              </p>
            </div>
            
            <div className={styles.cta}>
              <span className={styles.ctaGreen}>Если у тебя есть что-то важное — расскажи. Мы поможем.</span>
              <span className={styles.ctaMuted}> Если пока не готов — ничего страшного, вернись позже.</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
