'use client'

import { motion } from 'framer-motion'
import styles from './Benefits.module.css'

const benefits = [
  {
    title: 'Решишь то, что давно мешает работать',
    description: 'Превращай раздражающие проблемы в решённые задачи. Участвуй в процессе улучшения компании и увидь результат своих усилий.',
    icon: <img src="/icon/posmark.png" alt="" width={120} height={120} className={styles.cardIconImg} />,
  },
  {
    title: 'Прокачаешь идею с экспертами',
    description: 'Получишь обратную связь от профессионалов. Твоя инициатива пройдёт проверку и будет доработана вместе с командой экспертов.',
    icon: <img src="/icon/monitoor.png" alt="" width={106} height={106} className={styles.cardIconImgStandard} />,
  },
  {
    title: 'Станешь инициатором реальных улучшений',
    description: 'Твоя идея может изменить процессы компании. Руководство оценит твою вовлечённость и увидит твоё предложение.',
    icon: <img src="/icon/star_icon_no_bg.png" alt="" width={53} height={53} className={styles.cardIconImgSmall} />,
  },
]

export function Benefits() {
  return (
    <section className={styles.benefits}>
      {/* Фоновый градиентный эллипс */}
      <div className={styles.backgroundGlow} />
      
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>Зачем тебе это?</h2>
          <p className={styles.subtitle}>Преимущества участия в программе Финам Collab</p>
        </motion.div>
        
        <div className={styles.cards}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className={`${styles.card} ${index === 1 ? styles.cardContentLower : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardIcon}>{benefit.icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{benefit.title}</h3>
              </div>
              <p className={styles.cardDescription}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
