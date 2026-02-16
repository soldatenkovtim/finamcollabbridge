'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.css'

export function Hero() {
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
            У тебя есть рабочая проблема? Расскажи – мы поможем её решить
          </motion.h1>
          
          <motion.div
            className={styles.description}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>Каждый день ты сталкиваешься с задачами, которые тормозят работу,</p>
            <p>тратят время или просто раздражают. Расскажи об этом — мы найдём решение</p>
          </motion.div>
          
          <motion.a
            href="#initiative-form"
            className={styles.ctaButton}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Предложить инициативу
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
