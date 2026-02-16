'use client'

import { motion } from 'framer-motion'
import styles from './Benefits.module.css'

const benefits = [
  {
    icon: '🎯',
    title: 'Решишь то, что давно мешает работать',
    description: 'Превращай раздражающие проблемы в решённые задачи'
  },
  {
    icon: '🚀',
    title: 'Прокачаешь идею с экспертами',
    description: 'Получишь обратную связь от профессионалов'
  },
  {
    icon: '⭐',
    title: 'Станешь инициатором реальных улучшений',
    description: 'Твоя идея может изменить процессы компании'
  },
  {
    icon: '👁️',
    title: 'Твоё предложение увидит компания',
    description: 'Руководство оценит твою вовлечённость'
  }
]

export function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>Зачем тебе это?</h2>
          <p className={styles.subtitle}>Преимущества участия в программе</p>
        </motion.div>
        
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardIcon}>{benefit.icon}</div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDescription}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
