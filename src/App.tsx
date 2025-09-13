import { Authenticator } from '@aws-amplify/ui-react'
import Chat from './components/Chat'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#f9fafb,#f3f4f6)' }}>
      <header style={{ position: 'sticky', top: 0, backdropFilter: 'blur(6px)', background: 'rgba(255,255,255,.85)', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ fontSize: 18, fontWeight: 600 }}>AI Chatbot (Amplify Gen 2)</h1>
          <span style={{ color: '#6b7280', fontSize: 14 }}>Vite • React • TypeScript</span>
        </div>
      </header>
      <main style={{ maxWidth: 1100, margin: '0 auto', padding: 16 }}>
        <Authenticator loginMechanisms={['email']}>
          {() => <Chat />}
        </Authenticator>
      </main>
    </div>
  )
}
