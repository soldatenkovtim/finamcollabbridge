'use client'

import { motion } from 'framer-motion'
import styles from './Warning.module.css'

const cards = [
  {
    title: 'Реальная боль',
    description: 'Мы отбираем инициативы, в которых есть настоящая проблема, требующая решения.',
    icon: (
      <img src="/icon/warning_icon_no_bg_v2.png" alt="" width={117} height={117} className={styles.cardIconImg} />
    ),
  },
  {
    title: 'Чёткая мотивация',
    description: 'Если не понимаешь, чего именно хочешь — лучше пока не спеши с заявкой.',
    icon: (
      <span
        data-motivation-icon
        style={{
          display: 'block',
          position: 'relative',
          left: '-18px',
          top: '6px',
        }}
      >
        <img src="/icon/targ.png" alt="" width={85} height={85} className={styles.cardIconImgSm} />
      </span>
    ),
  },
  {
    title: 'Готовность включиться',
    description: 'Если у тебя есть что-то важное — расскажи. Мы поможем двигаться всерьёз.',
    icon: (
      <span style={{ display: 'block', position: 'relative', left: '-14px', top: '6px' }}>
        <img src="/icon/telegram-action.png" alt="" width={115} height={115} className={styles.cardIconImgSm} />
      </span>
    ),
  },
]

export function Warning() {
  return (
    <section className={styles.warning}>
      {/* Фоновый градиентный эллипс */}
      <div className={styles.backgroundGlow} />
      
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.heading}>Но важно понимать!</h2>
          <p className={styles.subtitle}>
            Твоя проработка — это половина успешного решения. Финам Collab — это не место для случайных идей.
          </p>
        </motion.div>
        
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
              <div
                className={styles.cardIcon}
                data-icon={index === 1 ? 'motivation' : undefined}
              >
                {card.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
