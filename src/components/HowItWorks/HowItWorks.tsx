'use client'

import { motion } from 'framer-motion'
import styles from './HowItWorks.module.css'

const steps = [
  {
    number: 1,
    title: 'Заполни короткую анкету',
    description: 'Опиши проблему или идею в нескольких предложениях',
  },
  {
    number: 2,
    title: 'Мы изучим заявку',
    description: 'Если её можно реализовать, свяжемся с тобой для обсуждения',
  },
  {
    number: 3,
    title: 'Оформим задачу',
    description: 'Поможем упаковать и найдём исполнителя через Collab',
  },
  {
    number: 4,
    title: 'Участвуй в процессе',
    description: 'От идеи до результата — ты часть команды',
  },
]

export function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Как это работает
        </motion.h2>
        
        <div className={styles.stepsWrapper}>
          {/* Connecting lines */}
          <div className={styles.connectingLines}>
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
          </div>
          
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={styles.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.numberBadge}>
                  <span className={styles.number}>{step.number}</span>
                  <div className={styles.numberGlow} />
                </div>
                <div className={styles.stepText}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#initiative-form" className={styles.ctaButton}>
            Предложить инициативу
          </a>
        </motion.div>
      </div>
    </section>
  )
}
