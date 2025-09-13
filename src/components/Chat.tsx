// src/components/Chat.tsx
import { useRef, useEffect, useState } from 'react'
import { useAIConversation } from '../client'

export default function Chat() {
  const [
    {
      data: { messages = [] },
      isLoading,
    },
    handleSendMessage,
  ] = useAIConversation('chat')

  const [input, setInput] = useState('')
  const scroller = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: 'smooth' })
  }, [messages.length, isLoading])

  const onSend = async () => {
    const text = input.trim()
    if (!text) return
    setInput('')
    await handleSendMessage({ content: [{ text }] }) // ✅ hook expects parameters object
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSend()
    }
  }

  const disabled = !input.trim() || isLoading

  return (
    <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 16, boxShadow: '0 1px 2px rgba(0,0,0,.04)', maxWidth: 900, margin: '24px auto', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 180px)' }}>
      <div style={{ padding: 16, borderBottom: '1px solid #e5e7eb' }}>
        <h2 style={{ fontSize: 18, fontWeight: 600 }}>Farm AI Assistant</h2>
        <p style={{ color: '#6b7280', fontSize: 14 }}>Ask about irrigation, fertilizer plans, pests, soil tests, etc.</p>
      </div>

      <div ref={scroller} style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
        {messages.map((m: any) => {
          // message.content is an array of content parts; render any text parts
          const text =
            Array.isArray(m.content)
              ? m.content
                  .map((c: any) => (typeof c?.text === 'string' ? c.text : ''))
                  .join('')
              : String(m.content ?? '')

          const isUser = m.role === 'user'
          return (
            <div key={m.id} style={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start', marginBottom: 12 }}>
              <div
                style={{
                  maxWidth: '80%',
                  borderRadius: 16,
                  padding: '8px 12px',
                  border: '1px solid',
                  borderColor: isUser ? '#2563eb' : '#e5e7eb',
                  background: isUser ? '#2563eb' : '#fff',
                  color: isUser ? '#fff' : '#111827',
                  whiteSpace: 'pre-wrap',
                  boxShadow: '0 1px 1px rgba(0,0,0,.04)',
                }}
              >
                {text}
              </div>
            </div>
          )
        })}
        {isLoading && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6b7280', fontSize: 14 }}>
            <div style={{ width: 32, height: 32, borderRadius: 16, background: '#e5e7eb' }} />
            <span>Thinking…</span>
          </div>
        )}
      </div>

      <div style={{ padding: 12, borderTop: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            placeholder="Ask about your field... (Enter to send)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            style={{ flex: 1, border: '1px solid #e5e7eb', borderRadius: 12, padding: '10px 12px', outline: 'none' }}
          />
          <button
            onClick={onSend}
            disabled={disabled}
            style={{
              padding: '10px 16px',
              borderRadius: 12,
              background: '#2563eb',
              color: '#fff',
              fontWeight: 600,
              opacity: disabled ? 0.6 : 1,
            }}
          >
            Send
          </button>
        </div>
        <p style={{ color: '#6b7280', fontSize: 12, marginTop: 8 }}>
          Connected via <code>useAIConversation('chat')</code>. (State exposes <code>messages</code> and <code>isLoading</code>.) 
        </p>
      </div>
    </div>
  )
}
