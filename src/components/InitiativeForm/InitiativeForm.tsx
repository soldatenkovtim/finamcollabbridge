'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './InitiativeForm.module.css'

type SearchType = 'expert' | 'team' | 'unknown' | null

interface FormData {
  fullName: string
  department: string
  searchType: SearchType
  problem: string
  priority: number
}

export function InitiativeForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    department: '',
    searchType: null,
    problem: '',
    priority: 3
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }
  
  const handleSearchTypeSelect = (type: SearchType) => {
    setFormData(prev => ({ ...prev, searchType: type }))
  }
  
  const isFormValid = formData.fullName && formData.department && formData.searchType && formData.problem
  
  if (isSubmitted) {
    return (
      <section className={styles.form} id="form">
        <div className={styles.container}>
          <motion.div
            className={styles.successCard}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.successIcon}>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="3"/>
                <path d="M20 32L28 40L44 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.successTitle}>Заявка отправлена!</h3>
            <p className={styles.successText}>
              Спасибо за твою инициативу! Мы изучим заявку и свяжемся с тобой в течение 3 рабочих дней.
            </p>
            <button
              className={styles.successButton}
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  fullName: '',
                  department: '',
                  searchType: null,
                  problem: '',
                  priority: 3
                })
              }}
            >
              Отправить ещё одну
            </button>
          </motion.div>
        </div>
      </section>
    )
  }
  
  return (
    <section className={styles.form} id="form">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>Анкета</h2>
          <p className={styles.subtitle}>Заполни форму — это займёт пару минут</p>
        </motion.div>
        
        <motion.form
          className={styles.formCard}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.formGrid}>
            {/* ФИО */}
            <div className={styles.formGroup}>
              <label className={styles.label}>
                ФИО
                <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Как тебя зовут?"
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                required
              />
            </div>
            
            {/* Подразделение */}
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Подразделение
                <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Где ты работаешь?"
                value={formData.department}
                onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
                required
              />
            </div>
          </div>
          
          {/* Кого ищете */}
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Кого ищешь?
              <span className={styles.required}>*</span>
            </label>
            <div className={styles.searchTypeButtons}>
              <button
                type="button"
                className={`${styles.searchTypeBtn} ${formData.searchType === 'expert' ? styles.active : ''}`}
                onClick={() => handleSearchTypeSelect('expert')}
              >
                <span className={styles.btnIcon}>👤</span>
                <span>Эксперт</span>
              </button>
              <button
                type="button"
                className={`${styles.searchTypeBtn} ${formData.searchType === 'team' ? styles.active : ''}`}
                onClick={() => handleSearchTypeSelect('team')}
              >
                <span className={styles.btnIcon}>👥</span>
                <span>Команда</span>
              </button>
              <button
                type="button"
                className={`${styles.searchTypeBtn} ${formData.searchType === 'unknown' ? styles.active : ''}`}
                onClick={() => handleSearchTypeSelect('unknown')}
              >
                <span className={styles.btnIcon}>🤔</span>
                <span>Пока не знаю</span>
              </button>
            </div>
          </div>
          
          {/* Суть проблемы */}
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Суть проблемы / идея
              <span className={styles.required}>*</span>
            </label>
            <textarea
              className={styles.textarea}
              placeholder="Опиши, что хочешь решить или улучшить. Чем подробнее — тем лучше."
              rows={5}
              value={formData.problem}
              onChange={(e) => setFormData(prev => ({ ...prev, problem: e.target.value }))}
              required
            />
          </div>
          
          {/* Приоритетность */}
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Приоритетность
              <span className={styles.priorityValue}>{formData.priority} из 5</span>
            </label>
            <div className={styles.sliderWrapper}>
              <div className={styles.sliderLabels}>
                <span>Низкий</span>
                <span>Высокий</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={formData.priority}
                onChange={(e) => setFormData(prev => ({ ...prev, priority: parseInt(e.target.value) }))}
                className={styles.slider}
              />
              <div className={styles.sliderDots}>
                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    className={`${styles.dot} ${formData.priority >= num ? styles.activeDot : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className={styles.submitButton}
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className={styles.spinner} />
                Отправляем...
              </>
            ) : (
              <>
                <span>Отправить заявку</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
