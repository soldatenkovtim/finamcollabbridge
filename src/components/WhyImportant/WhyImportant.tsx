'use client'

import { motion } from 'framer-motion'
import styles from './WhyImportant.module.css'

export function WhyImportant() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundGlow} />
      
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left column - Title */}
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.title}>Почему это важно?</h2>
            <p className={styles.subtitle}>Потому что вместе мы сильнее</p>
          </motion.div>
          
          {/* Right column - Content */}
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.textBlock}>
              <p className={styles.text}>
                Мы реализуем совершенно разные проекты в Collab, которые могут требовать узкопрофильной экспертизы.
              </p>
              <p className={styles.text}>
                Именно ты можешь знать человека, который идеально подойдёт под конкретную задачу. А мы не упустим шанс поработать с сильными специалистами.
              </p>
            </div>
            
            <p className={styles.text}>
              <strong className={styles.gradientText}>Collab</strong> — это про инновации, скорость и точность. Помоги нам найти тех, кто живёт так же.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
