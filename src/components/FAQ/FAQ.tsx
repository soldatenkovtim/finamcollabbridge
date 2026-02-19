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
    answer: 'Да! Если предложенный тобой эксперт будет задействован в одном из проектов, ты получишь 10 000 рублей за каждое его участие. Даже одноразовая помощь — это ценный вклад.',
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
    answer: 'Если ты рекомендуешь эксперта высокого уровня, например, CEO, основателя, признанного лидера рынка, то мы обсудим персональную награду. Это может быть премия, участие в закрытых проектах, рекомендации — всё решим на отдельной встрече лично с тобой. Просто оставь заявку на вкладке «предложить эксперта» с пометкой о том, что у тебя важный контакт.',
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
        
      </div>
    </section>
  )
}
