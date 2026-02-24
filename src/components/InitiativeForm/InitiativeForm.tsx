'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import styles from './InitiativeForm.module.css'

type SearchType = 'expert' | 'team' | 'unknown' | null

const PRIORITY_LABELS: Record<number, string> = {
  1: 'Низкая',
  2: 'Ниже среднего',
  3: 'Средняя',
  4: 'Значимая',
  5: 'Высокая'
}

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
  const [isSliderDragging, setIsSliderDragging] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const searchTypeTriggerRef = useRef<HTMLDivElement>(null)
  const sliderTrackRef = useRef<HTMLDivElement>(null)
  const [dropdownRect, setDropdownRect] = useState<{ top: number; left: number; width: number } | null>(null)

  const SLIDER_THUMB_HALF = 10

  const updatePriorityFromClientX = (clientX: number) => {
    const track = sliderTrackRef.current
    if (!track) return
    const rect = track.getBoundingClientRect()
    const leftBound = rect.left + SLIDER_THUMB_HALF
    const rightBound = rect.right - SLIDER_THUMB_HALF
    const trackWidth = rightBound - leftBound
    const ratio = Math.max(0, Math.min(1, (clientX - leftBound) / trackWidth))
    const priority = Math.min(5, Math.max(1, Math.round(ratio * 4) + 1))
    setFormData(prev => ({ ...prev, priority }))
  }

  const sliderInsetRatio = (formData.priority - 1) / 4
  const sliderThumbLeft = `calc(10px + (100% - 20px) * ${sliderInsetRatio})`

  const handleSliderMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsSliderDragging(true)
    updatePriorityFromClientX(e.clientX)
    const onMove = (e: MouseEvent) => updatePriorityFromClientX(e.clientX)
    const onUp = () => {
      setIsSliderDragging(false)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }
  
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

  useEffect(() => {
    if (focusedField !== 'searchType' || !searchTypeTriggerRef.current) {
      setDropdownRect(null)
      return
    }
    const updateRect = () => {
      const el = searchTypeTriggerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      setDropdownRect({
        top: rect.bottom + 10,
        left: rect.left - 16,
        width: rect.width + 28
      })
    }
    updateRect()
    window.addEventListener('scroll', updateRect, true)
    window.addEventListener('resize', updateRect)
    return () => {
      window.removeEventListener('scroll', updateRect, true)
      window.removeEventListener('resize', updateRect)
    }
  }, [focusedField])

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
            <h2 className={styles.title}>Предложить инициативу</h2>
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
            <div className={`${styles.inputWrapper} ${styles.inputWrapperFirst} ${focusedField === 'fullName' ? styles.focused : ''} ${formData.fullName ? styles.filled : ''}`}>
              <label className={styles.inputLabel}>Как тебя зовут?</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Например: Иванов Иван Иванович"
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                onFocus={() => setFocusedField('fullName')}
                onBlur={() => setFocusedField(null)}
                required
              />
            </div>
            
            {/* Подразделение */}
            <div className={`${styles.inputWrapper} ${styles.inputWrapperSecond} ${focusedField === 'department' ? styles.focused : ''} ${formData.department ? styles.filled : ''}`}>
              <label className={styles.inputLabel}>Где ты работаешь?</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Подразделение"
                value={formData.department}
                onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
                onFocus={() => setFocusedField('department')}
                onBlur={() => setFocusedField(null)}
                required
              />
            </div>
            
            {/* Кого ищешь - Dropdown style */}
            <div className={`${styles.inputWrapper} ${styles.inputWrapperThird} ${focusedField === 'searchType' ? styles.focused : ''} ${formData.searchType ? styles.filled : ''}`}>
              <label className={styles.inputLabel}>Кого ищешь?</label>
              <div className={styles.searchTypeSelect} ref={searchTypeTriggerRef}>
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
                {focusedField === 'searchType' && dropdownRect && typeof document !== 'undefined' && createPortal(
                  <div
                    className={styles.selectDropdown}
                    style={{
                      position: 'fixed',
                      top: dropdownRect.top,
                      left: dropdownRect.left,
                      width: dropdownRect.width,
                      background: 'rgba(28, 28, 36, 0.12)',
                      backdropFilter: 'blur(18px)',
                      WebkitBackdropFilter: 'blur(18px)'
                    }}
                  >
                    <button type="button" onClick={() => { handleSearchTypeSelect('expert'); setFocusedField(null); }}>
                      Эксперт
                    </button>
                    <button type="button" onClick={() => { handleSearchTypeSelect('team'); setFocusedField(null); }}>
                      Команда
                    </button>
                    <button type="button" onClick={() => { handleSearchTypeSelect('unknown'); setFocusedField(null); }}>
                      Пока не знаю
                    </button>
                  </div>,
                  document.body
                )}
              </div>
            </div>
            
            {/* Суть проблемы */}
            <div className={`${styles.inputWrapper} ${styles.inputWrapperFourth} ${focusedField === 'problem' ? styles.focused : ''} ${formData.problem ? styles.filled : ''}`}>
              <label className={styles.inputLabel}>Опиши, что хочешь решить или улучшить</label>
              <textarea
                className={styles.textarea}
                placeholder="Суть проблемы / идея"
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
                <span className={styles.priorityValue}>Выбрана: {PRIORITY_LABELS[formData.priority]}</span>
              </div>
              <div className={styles.sliderWrapper}>
                <div className={styles.sliderLabels}>
                  <span className={styles.sliderLabelLeft}>Низкая</span>
                  <span className={styles.sliderLabelCenter}>Ниже среднего</span>
                  <span className={styles.sliderLabelCenter}>Средняя</span>
                  <span className={styles.sliderLabelCenterRight}>Значимая</span>
                  <span className={styles.sliderLabelRight}>Высокая</span>
                </div>
                <div
                  ref={sliderTrackRef}
                  className={styles.sliderTrack}
                  onMouseDown={handleSliderMouseDown}
                >
                  <div
                    className={styles.sliderFill}
                    style={{ width: sliderThumbLeft }}
                  />
                  <div
                    className={`${styles.sliderThumb} ${isSliderDragging ? styles.sliderThumbDragging : ''}`}
                    style={{ left: sliderThumbLeft }}
                  />
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      className={styles.sliderHitArea}
                      style={{ left: `${((num - 1) / 4) * 100}%` }}
                      onClick={() => setFormData(prev => ({ ...prev, priority: num }))}
                    />
                  ))}
                </div>
                <div className={styles.sliderDots}>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div
                      key={num}
                      className={`${styles.dot} ${formData.priority >= num ? styles.activeDot : ''}`}
                      onClick={() => setFormData(prev => ({ ...prev, priority: num }))}
                      style={{ cursor: 'pointer' }}
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
