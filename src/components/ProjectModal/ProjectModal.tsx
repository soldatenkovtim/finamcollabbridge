'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './ProjectModal.module.css'

export interface ProjectData {
  id: string
  title: string
  shortTitle: string
  icon: string
  image?: string
  description: string
  features?: string[]
  goal?: string
  purpose?: string
  useCase?: string
  promotion?: string
  status: string
  tags: string[]
}

interface ProjectModalProps {
  project: ProjectData | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            ref={modalRef}
            className={styles.modal}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <button className={styles.closeButton} onClick={onClose} aria-label="Закрыть">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={styles.content}>
              {/* Hero Section */}
              <div className={styles.heroSection}>
                <div className={styles.heroContent}>
                  <div className={styles.tags}>
                    {project.tags.map((tag, index) => (
                      <span key={index} className={styles.tag}>{tag}</span>
                    ))}
                  </div>

                  <h2 className={styles.title}>{project.title}</h2>
                  
                  <p className={styles.description}>{project.description}</p>
                </div>

                {project.image && (
                  <div className={styles.heroImage}>
                    <img src={project.image} alt={project.title} />
                  </div>
                )}
              </div>

              {/* Content Cards */}
              <div className={styles.cardsContainer}>
                {project.features && project.features.length > 0 && (
                  <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Основные функции</h3>
                    <ul className={styles.featuresList}>
                      {project.features.map((feature, index) => (
                        <li key={index} className={styles.featureItem}>
                          <span className={styles.featureIcon}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M15 4.5L6.75 12.75L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.goal && (
                  <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Цель проекта</h3>
                    <p className={styles.cardText}>{project.goal}</p>
                  </div>
                )}

                {project.purpose && (
                  <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Для чего делаем</h3>
                    <p className={styles.cardText}>{project.purpose}</p>
                  </div>
                )}

                {project.useCase && (
                  <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Сценарий использования</h3>
                    <p className={styles.cardText}>{project.useCase}</p>
                  </div>
                )}

                {project.promotion && (
                  <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Требования к продвижению</h3>
                    <p className={styles.cardText}>{project.promotion}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
