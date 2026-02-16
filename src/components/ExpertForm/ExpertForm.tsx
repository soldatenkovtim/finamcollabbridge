'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './ExpertForm.module.css'

interface FormData {
  candidateName: string
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
    position: '',
    whyRecommend: '',
    howUseful: '',
    profileLink: '',
    contact: '',
    file: null
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
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
  
  const isFormValid = formData.candidateName && formData.position && formData.whyRecommend && formData.contact
  
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
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>Как отправить рекомендацию?</h2>
          <p className={styles.subtitle}>Заполни форму ниже — это займёт пару минут. Дальше мы с тобой свяжемся.</p>
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
            {/* Имя кандидата */}
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Имя кандидата
                <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="ФИО специалиста"
                value={formData.candidateName}
                onChange={(e) => setFormData(prev => ({ ...prev, candidateName: e.target.value }))}
                required
              />
            </div>
            
            {/* Кем работает */}
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Кем работает
                <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Должность или роль"
                value={formData.position}
                onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                required
              />
            </div>
          </div>
          
          {/* Почему рекомендуешь */}
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Почему рекомендуешь?
              <span className={styles.required}>*</span>
            </label>
            <textarea
              className={styles.textarea}
              placeholder="Пара слов о причине рекомендации"
              rows={3}
              value={formData.whyRecommend}
              onChange={(e) => setFormData(prev => ({ ...prev, whyRecommend: e.target.value }))}
              required
            />
          </div>
          
          {/* Чем может быть полезен */}
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Чем может быть полезен?
            </label>
            <textarea
              className={styles.textarea}
              placeholder="Области экспертизы, навыки"
              rows={3}
              value={formData.howUseful}
              onChange={(e) => setFormData(prev => ({ ...prev, howUseful: e.target.value }))}
            />
          </div>
          
          <div className={styles.formGrid}>
            {/* Ссылка на профиль */}
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Ссылка на профиль
              </label>
              <input
                type="url"
                className={styles.input}
                placeholder="GitHub, LinkedIn, SourceForge..."
                value={formData.profileLink}
                onChange={(e) => setFormData(prev => ({ ...prev, profileLink: e.target.value }))}
              />
            </div>
            
            {/* Контакт */}
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Контакт эксперта
                <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                className={styles.input}
                placeholder="Телефон, email или Telegram"
                value={formData.contact}
                onChange={(e) => setFormData(prev => ({ ...prev, contact: e.target.value }))}
                required
              />
            </div>
          </div>
          
          {/* Файл */}
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Файл
              <span className={styles.optional}>(опционально)</span>
            </label>
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
                <label className={styles.fileLabel}>
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
                    <strong>Нажми для загрузки</strong> или перетащи файл
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
              <>
                <span>Отправить рекомендацию</span>
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
