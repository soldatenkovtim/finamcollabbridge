'use client'

import { motion } from 'framer-motion'
import styles from './Criteria.module.css'

const criteria = [
  {
    icon: '🏢',
    text: 'Инициативы связаны с профессиональной деятельностью компании'
  },
  {
    icon: '💡',
    text: 'Инициативы, предлагающие что-то новое (технология, подход к работе, вендор, продукт)'
  },
  {
    icon: '💰',
    text: 'Инициативы по устранению неэффективностей, которые помогут сэкономить ресурс компании'
  },
  {
    icon: '📈',
    text: 'Инициативы, направленные на повышение операционной эффективности'
  },
  {
    icon: '🤝',
    text: 'Инициативы, направленные на улучшение клиентского сервиса'
  }
]

export function Criteria() {
  return (
    <section className={styles.criteria}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>Критерии отбора проектов</h2>
          <p className={styles.subtitle}>Какие инициативы мы рассматриваем</p>
        </motion.div>
        
        <div className={styles.list}>
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              className={styles.item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.text}>{item.text}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className={styles.importantNote}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={styles.noteIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.noteContent}>
            <h4 className={styles.noteTitle}>Важный критерий для каждой инициативы</h4>
            <p className={styles.noteText}>
              <strong>Понятный экономический эффект</strong> — не нужно делать сложные вычисления, 
              главное обосновать эффективность внедрения.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
