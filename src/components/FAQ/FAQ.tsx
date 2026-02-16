'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './FAQ.module.css'

const faqData = [
  {
    id: 1,
    question: 'А какие проекты реализуются в рамках Финам Collab?',
    answer: 'Финам Collab реализует абсолютно разные проекты, направленные на улучшение компании. С актуальными проектами ты можешь ознакомиться на сайте для внешних экспертов.',
    hasLink: true,
    linkText: 'Посмотреть проекты',
    linkUrl: 'https://collab.finam.ru/about-projects'
  },
  {
    id: 2,
    question: 'Что значит «Моя проработка — это половина успешного решения»?',
    answer: 'Мы рассматриваем только инициативы, где автор готов быть вовлечён: понимать проблему, уточнять задачу и сопровождать процесс как product owner. Мы поможем на каждом этапе, но не сможем реализовать твою идею за тебя.',
    hasLink: false
  },
  {
    id: 3,
    question: 'Один из важных критериев для отбора инициатив – понятный экономический эффект. Что он под собой подразумевает?',
    answer: 'Понятный экономический эффект — это расчёт, который будет понятен и тебе, и нам. Это может быть расчёт рентабельности, срока окупаемости, суммы возврата средств на каждый инвестированный рубль и другие понятные способы расчёта внедрения твоей инициативы. Не нужно делать сложные вычисления, главное — обосновать эффективность внедрения.',
    hasLink: false
  },
  {
    id: 4,
    question: 'Ответите ли вы мне? И когда ждать обратной связи?',
    answer: 'Да, мы отвечаем абсолютно всем. На это уходит до трёх рабочих дней. Если твоя инициатива может быть реализована, мы пригласим тебя на встречу, где обсудим все дальнейшие шаги по реализации. Если ты порекомендовал эксперта, мы также ответим тебе и в зависимости от того, когда и как эксперт будет привлечён, предложим тебе встречу, где зададим уточняющие вопросы, а после привлечения выплатим бонус.',
    hasLink: false
  },
  {
    id: 5,
    question: 'За каждое новое привлечение эксперта бонус выплачивается повторно?',
    answer: 'Да! Если предложенный вами эксперт будет задействован в одном из проектов, вы получите 10 000 рублей за каждое его участие. Даже одноразовая помощь — это ценный вклад.',
    hasLink: false
  },
  {
    id: 6,
    question: 'А если вы сейчас не найдёте проект под предложенного мной эксперта, но такой проект появится через несколько месяцев, я получу вознаграждение?',
    answer: 'Да! Важно понимать, что эксперта мы можем подключить в любой момент к любому проекту — мы можем связаться с ним сразу после твоей рекомендации, или через полгода, когда появится проект, где нам пригодится его экспертиза. Все рекомендованные специалисты будут храниться в нашей единой базе. Если мы договоримся с ним о совместной работе — обязательно свяжемся с тобой и выплатим твоё вознаграждение.',
    hasLink: false
  },
  {
    id: 7,
    question: 'Что значит срок давности рекомендации – 6 месяцев?',
    answer: 'После рекомендации твой эксперт будет закреплён за тобой 6 месяцев. Если мы обратимся к нему в этот срок, то вернёмся к тебе с твоим вознаграждением. Если мы не обратились к нему в течение 6 месяцев — это не значит, что мы ждали истечения срока, чтобы поработать с твоим экспертом и не платить тебе. Скорее всего, наши проекты не пересекаются с его интересами. Но всегда есть исключения, а Collab всегда платит долги.',
    hasLink: false
  },
  {
    id: 8,
    question: 'А что, если я предложу топового специалиста?',
    answer: 'Если ты рекомендуешь эксперта высокого уровня, например, CEO, основателя, признанного лидера рынка, то мы обсудим персональную награду. Это может быть премия, участие в закрытых проектах, рекомендации — всё решим на отдельной встрече лично с вами. Просто оставь заявку на вкладке «предложить эксперта» с пометкой о том, что у тебя важный контакт.',
    hasLink: false
  },
  {
    id: 9,
    question: 'У меня всё равно остались вопросы, как я могу связаться с вами напрямую?',
    answer: 'Если у тебя всё ещё остались вопросы, напиши на почту',
    hasLink: true,
    isEmail: true,
    linkText: 'tvoycollab@corp.finam.ru',
    linkUrl: 'mailto:tvoycollab@corp.finam.ru',
    answerSuffix: '. Мы ответим тебе в течение трёх рабочих дней.'
  }
]

function FAQItem({ item, isOpen, onToggle }: { 
  item: typeof faqData[0]
  isOpen: boolean
  onToggle: () => void 
}) {
  return (
    <motion.div
      className={`${styles.item} ${isOpen ? styles.open : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <button className={styles.question} onClick={onToggle}>
        <span className={styles.questionText}>{item.question}</span>
        <span className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d={isOpen ? "M5 15L12 8L19 15" : "M5 9L12 16L19 9"} 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.answerWrapper}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className={styles.answer}>
              <p>
                {item.answer}
                {item.hasLink && !item.isEmail && (
                  <>
                    {' '}
                    <a 
                      href={item.linkUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.inlineLink}
                    >
                      {item.linkText}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </>
                )}
                {item.isEmail && (
                  <>
                    {' '}
                    <a href={item.linkUrl} className={styles.emailLink}>
                      {item.linkText}
                    </a>
                    {item.answerSuffix}
                  </>
                )}
              </p>
              
              {item.hasLink && !item.isEmail && (
                <a 
                  href={item.linkUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  <span>{item.linkText}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1)
  
  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id)
  }
  
  return (
    <section className={styles.faq}>
      <div className={styles.backgroundGlow} />
      
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>❓</span>
            <span>Часто задаваемые вопросы</span>
          </div>
          
          <h1 className={styles.title}>FAQ</h1>
          <p className={styles.subtitle}>
            Ответы на популярные вопросы о Финам Collab
          </p>
        </motion.div>
        
        <div className={styles.list}>
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
        
        <motion.div
          className={styles.contact}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.contactIcon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M28 22V26C28 26.5304 27.7893 27.0391 27.4142 27.4142C27.0391 27.7893 26.5304 28 26 28H6C5.46957 28 4.96086 27.7893 4.58579 27.4142C4.21071 27.0391 4 26.5304 4 26V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 4V20M16 20L22 14M16 20L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className={styles.contactTitle}>Не нашёл ответ?</h3>
          <p className={styles.contactText}>
            Напиши нам напрямую — мы ответим в течение 3 рабочих дней
          </p>
          <a href="mailto:tvoycollab@corp.finam.ru" className={styles.contactButton}>
            <span>tvoycollab@corp.finam.ru</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 6L9 10L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
