'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './WhoToRecommend.module.css'

const experts = [
  {
    title: 'Опытные трейдеры и управляющие',
    description: 'С прибыльными стратегиями и перспективными идеями в области трейдинга',
    icon: (
      <Image
        src="/icon/medal-awards.png"
        alt="Опытные трейдеры и управляющие"
        width={80}
        height={80}
        style={{ objectFit: 'contain' }}
      />
    ),
  },
  {
    title: 'Продакт-оунеры и менеджеры',
    description: 'В брокеридже и банкинге — от мидлов до CPO и топ-менеджеров',
    icon: (
      <Image
        src="/icon/peoplee.png"
        alt="Продакт-оунеры и менеджеры"
        width={80}
        height={80}
        style={{ objectFit: 'contain' }}
      />
    ),
  },
  {
    title: 'AI-специалисты',
    description: 'Создатели успешных AI-решений, готовые делиться экспертизой',
    icon: (
      <Image
        src="/icon/roboml.png"
        alt="AI-специалисты"
        width={96}
        height={96}
        style={{ objectFit: 'contain' }}
      />
    ),
  },
]

const expertsSecondRow = [
  {
    title: 'Финансовые инженеры',
    description: 'Структураторы для формирования и запуска новых продуктов',
    icon: (
      <Image
        src="/icon/Gradient-combination-wrench.png"
        alt="Финансовые инженеры"
        width={80}
        height={80}
        style={{ objectFit: 'contain' }}
      />
    ),
  },
  {
    title: 'Комплаенс-офицеры',
    description: 'Понимающие особенности работы с регуляторами в различных юрисдикциях',
    icon: (
      <Image
        src="/icon/judge.png"
        alt="Комплаенс-офицеры"
        width={104}
        height={104}
        style={{ objectFit: 'contain' }}
      />
    ),
  },
  {
    title: 'Кванты и математики',
    description: 'С интересными торговыми идеями',
    icon: (
      <Image
        src="/icon/Colourful-open-book-illustration.png"
        alt="Кванты и математики"
        width={80}
        height={80}
        style={{ objectFit: 'contain' }}
      />
    ),
  },
]

export function WhoToRecommend() {
  return (
    <section className={styles.section}>
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
          <h2 className={styles.heading}>Кого можно порекомендовать?</h2>
          <p className={styles.subtitle}>
            Мы ищем экспертов в разных областях. Если ты знаешь кого-то сильного — поделись!
          </p>
        </motion.div>
        
        <div className={styles.cards}>
          {experts.map((expert, index) => (
            <motion.div
              key={expert.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{expert.title}</h3>
                <p className={styles.cardDescription}>{expert.description}</p>
              </div>
              <div className={styles.cardIcon}>
                {expert.icon}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className={styles.cards}>
          {expertsSecondRow.map((expert, index) => (
            <motion.div
              key={expert.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{expert.title}</h3>
                <p className={styles.cardDescription}>{expert.description}</p>
              </div>
              <div className={styles.cardIcon}>
                {expert.icon}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className={styles.note}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span><strong>Даже если не уверен</strong> — всё равно пришли рекомендацию. Мы разберёмся!</span>
        </motion.div>
      </div>
    </section>
  )
}
