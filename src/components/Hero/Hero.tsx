'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Фоновый эффект */}
      <div className={styles.backgroundEffect} />
      
      <div className={styles.container}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.badgeIcon}>💡</span>
          <span>Предложить инициативу</span>
        </motion.div>
        
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          У тебя есть рабочая проблема?
          <span className={styles.titleAccent}> Расскажи – мы поможем её решить</span>
        </motion.h1>
        
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Каждый день ты сталкиваешься с задачами, которые тормозят работу, тратят время или просто раздражают. 
          Или у тебя есть новое классное решение, которое улучшит бизнес-процессы компании. 
          Не держи в себе — расскажи об этом, а мы вместе найдём решение.
        </motion.p>
        
        <motion.div
          className={styles.collabInfo}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.collabIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p>
            <strong>Финам Collab</strong> — это новый подход, где твоя инициатива становится задачей, 
            а задачу решают внешние эксперты.
          </p>
        </motion.div>
        
        <motion.div
          className={styles.processSteps}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { num: '01', text: 'Ты описываешь суть проблемы' },
            { num: '02', text: 'Мы помогаем упаковать её в проект' },
            { num: '03', text: 'Ищем подходящего специалиста через Collab' },
            { num: '04', text: 'Вы вместе находите решение' },
          ].map((step) => (
            <div key={step.num} className={styles.step}>
              <span className={styles.stepNum}>{step.num}</span>
              <span className={styles.stepText}>{step.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
