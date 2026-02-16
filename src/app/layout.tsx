import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const interTight = Inter_Tight({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter-tight',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Финам Collab | Предложить инициативу',
  description: 'Межкорпоративный мост для Финам Collab — платформа для подачи инициатив и рекомендаций экспертов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${interTight.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
