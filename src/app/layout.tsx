import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
