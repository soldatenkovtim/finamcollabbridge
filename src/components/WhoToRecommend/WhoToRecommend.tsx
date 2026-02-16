'use client'

import { motion } from 'framer-motion'
import styles from './WhoToRecommend.module.css'

const experts = [
  {
    icon: '📈',
    title: 'Опытные трейдеры и управляющие',
    description: 'С прибыльными стратегиями и перспективными идеями в области трейдинга'
  },
  {
    icon: '💼',
    title: 'Продакт-оунеры и менеджеры',
    description: 'В брокеридже и банкинге — от мидлов до CPO и топ-менеджеров'
  },
  {
    icon: '🤖',
    title: 'AI-специалисты',
    description: 'Создатели успешных AI-решений, готовые делиться экспертизой и разрабатывать уникальные решения'
  },
  {
    icon: '⚙️',
    title: 'Финансовые инженеры',
    description: 'Структураторы для формирования и запуска новых продуктов'
  },
  {
    icon: '📋',
    title: 'Комплаенс-офицеры',
    description: 'Понимающие особенности работы с регуляторами в различных юрисдикциях'
  },
  {
    icon: '🧮',
    title: 'Кванты и математики',
    description: 'С интересными торговыми идеями'
  },
  {
    icon: '👥',
    title: 'Бывшие коллеги, друзья, фрилансеры',
    description: 'В любой области, которых ты можешь назвать профессионалами — от продвижения брендов до подбора сотрудников'
  },
  {
    icon: '🤔',
    title: 'Даже если не уверен',
    description: 'Всё равно пришли — мы разберёмся!'
  }
]

export function WhoToRecommend() {
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
          <h2 className={styles.title}>Кого можно порекомендовать?</h2>
          <p className={styles.subtitle}>Мы ищем экспертов в разных областях</p>
        </motion.div>
        
        <div className={styles.grid}>
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className={styles.cardIcon}>{expert.icon}</span>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{expert.title}</h3>
                <p className={styles.cardDescription}>{expert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className={styles.projectsCta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={styles.ctaContent}>
            <div className={styles.ctaIcon}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="3" y="5" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 11H25" stroke="currentColor" strokeWidth="2"/>
                <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
                <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
              </svg>
            </div>
            <div className={styles.ctaText}>
              <h4>Ищешь конкретный проект?</h4>
              <p>Ты можешь дать рекомендацию исходя из проектов, которые уже ищут внешних экспертов на платформе Финам Collab</p>
            </div>
          </div>
          <a 
            href="https://collab.finam.ru/about-projects" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <span>Посмотреть проекты</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 14L14 4M14 4H6M14 4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
