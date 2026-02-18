import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: 72, margin: 0, color: '#333' }}>404</h1>
      <p style={{ fontSize: 18, color: '#666', marginTop: 8 }}>Страница не найдена</p>
      <nav style={{ marginTop: 24, display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" style={{ color: '#0066cc' }}>Главная</Link>
        <Link href="/faq" style={{ color: '#0066cc' }}>FAQ</Link>
        <Link href="/expert" style={{ color: '#0066cc' }}>Рекомендовать эксперта</Link>
      </nav>
    </div>
  )
}
