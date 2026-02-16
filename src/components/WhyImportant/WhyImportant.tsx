'use client'

import { motion } from 'framer-motion'
import styles from './WhyImportant.module.css'

export function WhyImportant() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.iconWrapper}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 5L5 15V25L20 35L35 25V15L20 5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 20L35 10M20 20L5 10M20 20V35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h2 className={styles.title}>Почему это важно?</h2>
          
          <p className={styles.text}>
            Потому что мы реализуем <strong>совершенно разные проекты</strong> в Collab, которые могут требовать узкопрофильной экспертизы. 
            Именно ты можешь знать человека, который идеально подойдёт под конкретную задачу.
          </p>
          
          <p className={styles.text}>
            А мы не упустим шанс поработать с сильными специалистами.
          </p>
          
          <div className={styles.highlight}>
            <strong>Collab</strong> — это про инновации, скорость и точность. 
            <span className={styles.accent}>Помоги нам найти тех, кто живёт так же.</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
