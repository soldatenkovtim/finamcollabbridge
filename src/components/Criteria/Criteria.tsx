'use client'

import { motion } from 'framer-motion'
import styles from './Criteria.module.css'

const criteria = [
  {
    title: 'Связь с бизнесом',
    description: 'Инициативы связаны с профессиональной деятельностью компании и направлены на улучшение клиентского сервиса',
    icon: (
      <img src="/icon/briefcase-gradient.png" alt="" width={60} height={60} className={styles.criteriaIconImg} />
    ),
  },
  {
    title: 'Инновации',
    description: 'Инициативы, предлагающие что-то новое — технология, подход к работе, вендор или продукт',
    icon: (
      <img src="/icon/Upward-trending-glossy-arrow.png" alt="" width={68} height={68} className={`${styles.criteriaIconImg} ${styles.criteriaIconImgMd}`} />
    ),
  },
  {
    title: 'Экономия ресурсов',
    description: 'Инициативы по устранению неэффективностей, которые помогут сэкономить ресурс компании',
    icon: (
      <img src="/icon/Stack-of-gradient-discs.png" alt="" width={80} height={80} className={`${styles.criteriaIconImg} ${styles.criteriaIconImgLg}`} />
    ),
  },
  {
    title: 'Операционная эффективность',
    description: 'Инициативы, направленные на повышение операционной эффективности и понятный экономический эффект',
    icon: (
      <img src="/icon/analy.png" alt="" width={88} height={88} className={`${styles.criteriaIconImg} ${styles.criteriaIconImgLg} ${styles.criteriaIconImgXl}`} />
    ),
  },
]

export function Criteria() {
  return (
    <section className={styles.criteria}>
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
          <h2 className={styles.title}>Критерии отбора проектов</h2>
          <p className={styles.subtitle}>Какие инициативы мы рассматриваем для реализации</p>
        </motion.div>
        
        <div className={styles.cards}>
          {criteria.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardIcon}>{item.icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
              <p className={styles.cardDescription}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
