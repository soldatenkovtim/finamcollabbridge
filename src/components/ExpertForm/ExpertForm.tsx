'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import styles from './ExpertForm.module.css'

const ATTRACTION_OPTIONS = [
  'Специалист на проект',
  'Специалист в штат',
  'Специалист со своим проектом',
] as const

type AttractionType = (typeof ATTRACTION_OPTIONS)[number] | ''

interface FormData {
  candidateName: string
  attractionType: AttractionType
  position: string
  whyRecommend: string
  howUseful: string
  profileLink: string
  contact: string
  file: File | null
}

export function ExpertForm() {
  const [formData, setFormData] = useState<FormData>({
    candidateName: '',
    attractionType: '',
    position: '',
    whyRecommend: '',
    howUseful: '',
    profileLink: '',
    contact: '',
    file: null
  })
  
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const attractionTriggerRef = useRef<HTMLDivElement>(null)
  const [dropdownRect, setDropdownRect] = useState<{ top: number; left: number; width: number } | null>(null)

  useEffect(() => {
    if (focusedField !== 'attractionType' || !attractionTriggerRef.current) {
      setDropdownRect(null)
      return
    }
    const updateRect = () => {
      const el = attractionTriggerRef.current
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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, file }))
  }
  
  const removeFile = () => {
    setFormData(prev => ({ ...prev, file: null }))
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }
  
  const isFormValid = formData.candidateName && formData.attractionType && formData.position && formData.whyRecommend && formData.contact
  
  if (isSubmitted) {
    return (
      <section className={styles.form} id="form">
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
            <h3 className={styles.successTitle}>Рекомендация отправлена!</h3>
            <p className={styles.successText}>
              Спасибо за рекомендацию! Мы изучим профиль кандидата и свяжемся с тобой в течение 3 рабочих дней.
            </p>
            <button
              className={styles.successButton}
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  candidateName: '',
                  attractionType: '',
                  position: '',
                  whyRecommend: '',
                  howUseful: '',
                  profileLink: '',
                  contact: '',
                  file: null
                })
              }}
            >
              Порекомендовать ещё
            </button>
          </motion.div>
        </div>
      </section>
    )
  }
  
  return (
    <section className={styles.form} id="form">
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
            <h2 className={styles.title}>Предложить эксперта</h2>
            <p className={styles.subtitle}>Заполни форму — это займёт пару минут. Дальше мы с тобой свяжемся.</p>
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
            {/* Имя кандидата */}
            <div className={`${styles.inputWrapper} ${focusedField === 'candidateName' ? styles.focused : ''} ${formData.candidateName ? styles.filled : ''}`}>
              <label className={styles.inputLabel}>ФИО специалиста</label>
              <input
                type="text"
                className={styles.input}
                placeholder="ФИО, кого рекомендуете"
                value={formData.candidateName}
                onChange={(e) => setFormData(prev => ({ ...prev, candidateName: e.target.value }))}
                onFocus={() => setFocusedField('candidateName')}
                onBlur={() => setFocusedField(null)}
                required
              />
            </div>
            
            {/* Как мы его можем привлечь — dropdown как в анкете инициативы */}
            <div className={`${styles.inputWrapper} ${focusedField === 'attractionType' ? styles.focused : ''} ${formData.attractionType ? styles.filled : ''}`}>
              <label className={styles.inputLabel}>Как мы его можем привлечь</label>
              <div className={styles.attractionSelect} ref={attractionTriggerRef}>
                <div
                  className={styles.selectDisplay}
                  onClick={() => setFocusedField(focusedField === 'attractionType' ? null : 'attractionType')}
                >
                  <span className={formData.attractionType ? styles.selectedValue : styles.placeholder}>
                    {formData.attractionType || ' '}
                  </span>
                  <svg className={styles.selectArrow} width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {focusedField === 'attractionType' && dropdownRect && typeof document !== 'undefined' && createPortal(
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
                    {ATTRACTION_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, attractionType: opt }))
                          setFocusedField(null)
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>,
                  document.body
                )}
              </div>
            </div>
            
            {/* Кем работает */}
            <div className={`${styles.inputWrapper} ${focusedField === 'position' ? styles.focused : ''} ${formData.position ? styles.filled : ''}`}>
              <label className={styles.inputLabel}>Должность или роль</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Кем работает или чем занимается?"
                value={formData.position}
                onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                onFocus={() => setFocusedField('position')}
                onBlur={() => setFocusedField(null)}
                required
              />
            </div>
            
            {/* Почему рекомендуешь */}
            <div className={`${styles.inputWrapper} ${focusedField === 'whyRecommend' ? styles.focused : ''} ${formData.whyRecommend ? styles.filled : ''}`}>
              <label className={styles.inputLabel}>Пара слов о причине рекомендации</label>
              <textarea
                className={styles.textarea}
                placeholder="Почему рекомендуешь?"
                rows={3}
                value={formData.whyRecommend}
                onChange={(e) => setFormData(prev => ({ ...prev, whyRecommend: e.target.value }))}
                onFocus={() => setFocusedField('whyRecommend')}
                onBlur={() => setFocusedField(null)}
                required
              />
            </div>
            
            {/* Чем может быть полезен */}
            <div className={`${styles.inputWrapper} ${focusedField === 'howUseful' ? styles.focused : ''} ${formData.howUseful ? styles.filled : ''}`}>
              <label className={styles.inputLabel}>Области экспертизы, навыки</label>
              <textarea
                className={styles.textarea}
                placeholder="Чем может быть полезен?"
                rows={3}
                value={formData.howUseful}
                onChange={(e) => setFormData(prev => ({ ...prev, howUseful: e.target.value }))}
                onFocus={() => setFocusedField('howUseful')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            
            {/* Ссылка на профиль */}
            <div className={`${styles.inputWrapper} ${focusedField === 'profileLink' ? styles.focused : ''} ${formData.profileLink ? styles.filled : ''}`}>
              <label className={styles.inputLabel}>Ссылка на профиль эксперта</label>
              <input
                type="url"
                className={styles.input}
                placeholder="GitHub, LinkedIn, Habr или другие"
                value={formData.profileLink}
                onChange={(e) => setFormData(prev => ({ ...prev, profileLink: e.target.value }))}
                onFocus={() => setFocusedField('profileLink')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            
            {/* Контакт */}
            <div className={`${styles.inputWrapper} ${focusedField === 'contact' ? styles.focused : ''} ${formData.contact ? styles.filled : ''}`}>
              <label className={styles.inputLabel}>Контакт эксперта</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Телефон, email или Telegram"
                value={formData.contact}
                onChange={(e) => setFormData(prev => ({ ...prev, contact: e.target.value }))}
                onFocus={() => setFocusedField('contact')}
                onBlur={() => setFocusedField(null)}
                required
              />
            </div>
            
            {/* Файл */}
            <div className={styles.fileSection}>
              <label className={styles.fileLabel}>Файл <span className={styles.optional}>(опционально)</span></label>
              <div className={styles.fileUpload}>
                {formData.file ? (
                  <div className={styles.filePreview}>
                    <div className={styles.fileIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className={styles.fileName}>{formData.file.name}</span>
                    <button type="button" className={styles.removeFile} onClick={removeFile}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M5 5L13 13M13 5L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                ) : (
                  <label className={styles.fileInputLabel}>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className={styles.fileInput}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.txt"
                    />
                    <div className={styles.fileIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className={styles.filePlaceholder}>
                      Нажми для загрузки или перетащи файл
                    </span>
                    <span className={styles.fileHint}>PDF, DOC, DOCX до 10MB</span>
                  </label>
                )}
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
                'Отправить рекомендацию'
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
