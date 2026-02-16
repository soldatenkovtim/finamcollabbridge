'use client'

import { motion } from 'framer-motion'
import styles from './HowItWorks.module.css'

const steps = [
  {
    number: '01',
    title: 'Заполни короткую анкету',
    description: 'Опиши проблему или идею в нескольких предложениях',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M20 3H8C6.34315 3 5 4.34315 5 6V22C5 23.6569 6.34315 25 8 25H20C21.6569 25 23 23.6569 23 22V6C23 4.34315 21.6569 3 20 3Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 9H19M9 14H19M9 19H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    number: '02',
    title: 'Мы изучим заявку',
    description: 'Если её можно реализовать, свяжемся с тобой',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 8V14L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    number: '03',
    title: 'Оформим задачу',
    description: 'Поможем упаковать и найдём исполнителя через Collab',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 25C20.0751 25 25 20.0751 25 14C25 7.92487 20.0751 3 14 3C7.92487 3 3 7.92487 3 14C3 20.0751 7.92487 25 14 25Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 9V14M14 19H14.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    number: '04',
    title: 'Участвуй в процессе',
    description: 'От идеи до результата — ты часть команды',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M9 14L12 17L19 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  }
]

export function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>Как это работает</h2>
          <p className={styles.subtitle}>Простой путь от идеи к реализации</p>
        </motion.div>
        
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={styles.step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={styles.stepLine}>
                <div className={styles.stepDot} />
                {index < steps.length - 1 && <div className={styles.stepConnector} />}
              </div>
              
              <div className={styles.stepContent}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <div className={styles.stepIcon}>{step.icon}</div>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
