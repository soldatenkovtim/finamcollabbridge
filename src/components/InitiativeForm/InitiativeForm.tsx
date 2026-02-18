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
  
  const [focusedField, setFocusedField] = useState<string | null>(null)
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
      <section className={styles.form} id="initiative-form">
        <div className={styles.backgroundGlow} />
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
    <section className={styles.form} id="initiative-form">
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
            <h2 className={styles.title}>Анкета</h2>
            <p className={styles.subtitle}>Заполни форму — это займёт пару минут</p>
          </motion.div>
          
          {/* Right column - Form */}
          <motion.form
            className={styles.formFields}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* ФИО */}
            <div className={`${styles.inputWrapper} ${focusedField === 'fullName' ? styles.focused : ''} ${formData.fullName ? styles.filled : ''}`}>
              <label className={styles.inputLabel}>ФИО*</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Как тебя зовут?"
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                onFocus={() => setFocusedField('fullName')}
                onBlur={() => setFocusedField(null)}
                required
              />
            </div>
            
            {/* Подразделение */}
            <div className={`${styles.inputWrapper} ${focusedField === 'department' ? styles.focused : ''} ${formData.department ? styles.filled : ''}`}>
              <label className={styles.inputLabel}>Подразделение*</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Где ты работаешь?"
                value={formData.department}
                onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
                onFocus={() => setFocusedField('department')}
                onBlur={() => setFocusedField(null)}
                required
              />
            </div>
            
            {/* Кого ищешь - Dropdown style */}
            <div className={`${styles.inputWrapper} ${focusedField === 'searchType' ? styles.focused : ''} ${formData.searchType ? styles.filled : ''}`}>
              <label className={styles.inputLabel}>Кого ищешь?*</label>
              <div className={styles.searchTypeSelect}>
                <div 
                  className={styles.selectDisplay}
                  onClick={() => setFocusedField(focusedField === 'searchType' ? null : 'searchType')}
                >
                  <span className={formData.searchType ? styles.selectedValue : styles.placeholder}>
                    {formData.searchType === 'expert' && 'Эксперт'}
                    {formData.searchType === 'team' && 'Команда'}
                    {formData.searchType === 'unknown' && 'Пока не знаю'}
                    {!formData.searchType && 'Выбери вариант'}
                  </span>
                  <svg className={styles.selectArrow} width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {focusedField === 'searchType' && (
                  <div className={styles.selectDropdown}>
                    <button type="button" onClick={() => { handleSearchTypeSelect('expert'); setFocusedField(null); }}>
                      <span className={styles.optionIcon}>👤</span> Эксперт
                    </button>
                    <button type="button" onClick={() => { handleSearchTypeSelect('team'); setFocusedField(null); }}>
                      <span className={styles.optionIcon}>👥</span> Команда
                    </button>
                    <button type="button" onClick={() => { handleSearchTypeSelect('unknown'); setFocusedField(null); }}>
                      <span className={styles.optionIcon}>🤔</span> Пока не знаю
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Суть проблемы */}
            <div className={`${styles.inputWrapper} ${focusedField === 'problem' ? styles.focused : ''} ${formData.problem ? styles.filled : ''}`}>
              <label className={styles.inputLabel}>Суть проблемы / идея*</label>
              <textarea
                className={styles.textarea}
                placeholder="Опиши, что хочешь решить или улучшить"
                rows={3}
                value={formData.problem}
                onChange={(e) => setFormData(prev => ({ ...prev, problem: e.target.value }))}
                onFocus={() => setFocusedField('problem')}
                onBlur={() => setFocusedField(null)}
                required
              />
            </div>
            
            {/* Приоритетность - Слайдер */}
            <div className={styles.prioritySection}>
              <div className={styles.priorityHeader}>
                <label className={styles.priorityLabel}>Приоритетность</label>
                <span className={styles.priorityValue}>{formData.priority} из 5</span>
              </div>
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
                'Отправить заявку'
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
