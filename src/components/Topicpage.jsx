import { useState } from 'react'
import { TABS, DIFFICULTY_CONFIG } from '../data/Topics'
import { HASHMAP_CONTENT } from '../data/content/Hashmap'

const CONTENT_MAP = {
  hashmap: HASHMAP_CONTENT,
}

function EmptyState({ tab }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', height: 300, gap: 12
    }}>
      <div style={{ fontSize: 32 }}>📝</div>
      <div style={{ fontSize: 14, color: '#5a5a6a' }}>No {tab} content yet</div>
      <div style={{ fontSize: 12, color: '#36363f' }}>Coming soon as we study this topic</div>
    </div>
  )
}

function CodeBlock({ code, title }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 13, fontWeight: 500, color: '#8a8a9a' }}>{title}</span>
        <button onClick={copy} style={{
          padding: '3px 10px', background: 'transparent',
          border: '1px solid #222228', borderRadius: 4,
          color: copied ? '#2dd4aa' : '#5a5a6a', fontSize: 11, cursor: 'pointer'
        }}>{copied ? 'Copied!' : 'Copy'}</button>
      </div>
      <pre className="code-block" style={{ margin: 0 }}><code>{code}</code></pre>
    </div>
  )
}

function QAItem({ q, a, idx }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ border: '1px solid #1a1a1f', borderRadius: 8, marginBottom: 8, overflow: 'hidden' }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          padding: '12px 16px', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: open ? '#131316' : 'transparent',
        }}
        onMouseEnter={e => { if (!open) e.currentTarget.style.background = '#0d0d0f' }}
        onMouseLeave={e => { if (!open) e.currentTarget.style.background = 'transparent' }}
      >
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <span style={{ fontSize: 11, color: '#7c6af7', fontWeight: 600, marginTop: 2, minWidth: 20 }}>Q{idx + 1}</span>
          <span style={{ fontSize: 13, color: '#c4c4d0', fontWeight: 500 }}>{q}</span>
        </div>
        <span style={{
          color: '#36363f', fontSize: 12, marginLeft: 12, flexShrink: 0,
          transform: open ? 'rotate(180deg)' : 'none', transition: '0.15s', display: 'inline-block'
        }}>▼</span>
      </div>
      {open && (
        <div style={{ padding: '12px 16px', borderTop: '1px solid #1a1a1f', background: '#131316' }}>
          <p style={{ margin: 0, fontSize: 13, color: '#8a8a9a', lineHeight: 1.8 }}>{a}</p>
        </div>
      )}
    </div>
  )
}

export default function TopicPage({ topic }) {
  const [activeTab, setActiveTab] = useState('Overview')
  const content = CONTENT_MAP[topic.id]
  const diff = DIFFICULTY_CONFIG[topic.difficulty]

  const renderTab = () => {
    if (!content) return <EmptyState tab={activeTab} />

    switch (activeTab) {
      case 'Overview':
        return content.overview
          ? <p style={{ fontSize: 14, color: '#8a8a9a', lineHeight: 1.9, marginTop: 0 }}>{content.overview}</p>
          : <EmptyState tab="Overview" />

      case 'Interview Q&A':
        return content.interviewQA?.length ? (
          <div>
            <p style={{ fontSize: 12, color: '#5a5a6a', marginTop: 0, marginBottom: 16 }}>
              Click a question to reveal the answer. Practice saying it out loud.
            </p>
            {content.interviewQA.map((item, i) => <QAItem key={i} idx={i} q={item.q} a={item.a} />)}
          </div>
        ) : <EmptyState tab="Interview Q&A" />

      case 'Code':
        return content.code?.length
          ? <div>{content.code.map((block, i) => <CodeBlock key={i} {...block} />)}</div>
          : <EmptyState tab="Code" />

      case 'Deep Dive':
        return content.deepDive ? (
          <div style={{ fontSize: 13, color: '#8a8a9a', lineHeight: 1.8 }}>
            {content.deepDive.split('\n').map((line, i) => {
              if (line.startsWith('**') && line.endsWith('**'))
                return <div key={i} style={{ fontWeight: 600, color: '#c4c4d0', marginTop: 16, marginBottom: 6 }}>{line.replace(/\*\*/g, '')}</div>
              if (line.startsWith('```')) return null
              if (!line.trim()) return <br key={i} />
              return <div key={i}>{line}</div>
            })}
          </div>
        ) : <EmptyState tab="Deep Dive" />

      case 'Revision Notes':
        return content.revisionNotes ? (
          <div style={{ background: '#131316', border: '1px solid #222228', borderRadius: 10, padding: 20 }}>
            {content.revisionNotes.split('\n').map((line, i) => {
              if (line.startsWith('**') && line.endsWith('**'))
                return <div key={i} style={{ fontWeight: 600, color: '#7c6af7', marginTop: 14, marginBottom: 6, fontSize: 12 }}>{line.replace(/\*\*/g, '')}</div>
              if (line.startsWith('- '))
                return (
                  <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
                    <span style={{ color: '#2dd4aa', fontSize: 12, marginTop: 1 }}>•</span>
                    <span style={{ fontSize: 12, color: '#8a8a9a', lineHeight: 1.6 }}>{line.slice(2)}</span>
                  </div>
                )
              if (!line.trim()) return <br key={i} />
              return <div key={i} style={{ fontSize: 12, color: '#8a8a9a', lineHeight: 1.6 }}>{line}</div>
            })}
          </div>
        ) : <EmptyState tab="Revision Notes" />

      default:
        return <EmptyState tab={activeTab} />
    }
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Topic header */}
      <div style={{ padding: '20px 28px 0', borderBottom: '1px solid #1a1a1f', background: '#0d0d0f' }}>
        <div style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: '#e4e4f0' }}>{topic.label}</h1>
            <span style={{
              padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 500,
              background: diff.bg, color: diff.color
            }}>{diff.label}</span>
            {topic.tags?.map(tag => (
              <span key={tag} style={{
                padding: '2px 8px', borderRadius: 4, fontSize: 11,
                background: '#131316', color: '#5a5a6a', border: '1px solid #222228'
              }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 2 }}>
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '6px 14px', borderRadius: '6px 6px 0 0', fontSize: 12,
                fontWeight: 500, cursor: 'pointer', border: 'none', transition: 'all 0.15s',
                background: activeTab === tab ? '#131316' : 'transparent',
                color: activeTab === tab ? '#7c6af7' : '#5a5a6a',
                borderBottom: activeTab === tab ? '2px solid #7c6af7' : '2px solid transparent',
              }}
            >{tab}</button> 
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 28px' }}>
        {renderTab()}
      </div>
    </div>
  )
}