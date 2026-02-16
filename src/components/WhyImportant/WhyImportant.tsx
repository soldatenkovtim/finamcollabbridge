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
                Мы реализуем <strong>совершенно разные проекты</strong> в Collab, которые могут требовать узкопрофильной экспертизы.
              </p>
              <p className={styles.text}>
                Именно ты можешь знать человека, который идеально подойдёт под конкретную задачу. А мы не упустим шанс поработать с сильными специалистами.
              </p>
            </div>
            
            <div className={styles.highlight}>
              <div className={styles.highlightIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.highlightText}>
                <strong>Collab</strong> — это про инновации, скорость и точность. Помоги нам найти тех, кто живёт так же.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
