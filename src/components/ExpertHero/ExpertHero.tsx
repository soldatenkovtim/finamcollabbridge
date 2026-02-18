'use client'

import { motion } from 'framer-motion'
import styles from './ExpertHero.module.css'

export function ExpertHero() {
  return (
    <section className={styles.hero}>
      {/* Фоновое изображение с градиентом */}
      <div className={styles.backgroundImage} />
      <div className={styles.backgroundOverlay} />
      
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Знаешь сильного специалиста? Поделись и получи бонус!
          </motion.h1>
          
          <motion.div
            className={styles.description}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>Финам Collab — это платформа, где внутренние задачи решаются с помощью лучших экспертов.</p>
            <p>Порекомендуй того, кого знаешь — получи награду</p>
          </motion.div>
          
          <motion.a
            href="#form"
            className={styles.ctaButton}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Предложить эксперта
          </motion.a>
        </div>
      </div>

      {/* Фоновое изображение */}
      <div className={styles.heroImageBg}>
        <img 
          src="/hero-block/finam-challenge.png" 
          alt="" 
          className={styles.heroImg}
        />
      </div>
    </section>
  )
}
