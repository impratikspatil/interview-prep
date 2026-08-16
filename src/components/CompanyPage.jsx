import { useState } from 'react'
import { ZOMATO_CONTENT } from '../data/companies/zomato'

const COMPANY_TABS = ['Overview', 'Process & Rounds', 'DSA Asked', 'System Design Asked', 'Behavioral', 'Tips & Notes']

const DIFF_COLOR = { easy: '#2dd4aa', medium: '#f59e0b', hard: '#f26450' }

function EmptyState({ tab }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 300, gap: 12 }}>
      <div style={{ fontSize: 32 }}>📝</div>
      <div style={{ fontSize: 14, color: '#5a5a6a' }}>No {tab} added yet</div>
      <div style={{ fontSize: 12, color: '#36363f' }}>Notes coming soon</div>
    </div>
  )
}

const CONTENT_MAP = {
  zomato: ZOMATO_CONTENT,
  // add next company here, e.g. amazon: AMAZON_CONTENT
}

export default function CompanyPage({ company }) {
  const [activeTab, setActiveTab] = useState('Overview')
  const content = CONTENT_MAP[company.id]

  const renderTab = () => {
    if (!content) return <EmptyState tab={activeTab} />

    switch (activeTab) {
      case 'Overview':
        return content.overview
          ? <p style={{ fontSize: 14, color: '#8a8a9a', lineHeight: 1.9, marginTop: 0 }}>{content.overview}</p>
          : <EmptyState tab="Overview" />

      case 'Process & Rounds':
        return content.process?.length ? (
          <div>
            {content.process.map((r, i) => (
              <div key={i} style={{ border: '1px solid #1a1a1f', borderRadius: 8, padding: '14px 16px', marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#c4c4d0' }}>Round {i + 1}: {r.round}</span>
                  {r.duration && <span style={{ fontSize: 11, color: '#5a5a6a' }}>{r.duration}</span>}
                </div>
                {r.focus && <div style={{ fontSize: 12, color: '#7c6af7', marginBottom: 4 }}>{r.focus}</div>}
                {r.notes && <div style={{ fontSize: 13, color: '#8a8a9a', lineHeight: 1.7 }}>{r.notes}</div>}
              </div>
            ))}
          </div>
        ) : <EmptyState tab="process details" />

      case 'DSA Asked':
        return content.dsaQuestions?.length ? (
          <div>
            {content.dsaQuestions.map((q, i) => (
              <div key={i} style={{ border: '1px solid #1a1a1f', borderRadius: 8, padding: '12px 16px', marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontSize: 13, color: '#c4c4d0', fontWeight: 500 }}>{q.question}</span>
                  <span style={{
                    fontSize: 11, padding: '2px 8px', borderRadius: 4,
                    color: DIFF_COLOR[q.difficulty] || '#5a5a6a', background: '#131316'
                  }}>{q.difficulty}</span>
                </div>
                {q.pattern && <div style={{ fontSize: 11, color: '#7c6af7', marginBottom: 4 }}>Pattern: {q.pattern}</div>}
                {q.notes && <div style={{ fontSize: 12, color: '#8a8a9a', lineHeight: 1.6 }}>{q.notes}</div>}
              </div>
            ))}
          </div>
        ) : <EmptyState tab="DSA questions" />

      case 'System Design Asked':
        return content.systemDesign?.length ? (
          <div>
            {content.systemDesign.map((q, i) => (
              <div key={i} style={{ border: '1px solid #1a1a1f', borderRadius: 8, padding: '12px 16px', marginBottom: 8 }}>
                <div style={{ fontSize: 13, color: '#c4c4d0', fontWeight: 500, marginBottom: 4 }}>{q.question}</div>
                {q.notes && <div style={{ fontSize: 12, color: '#8a8a9a', lineHeight: 1.6 }}>{q.notes}</div>}
              </div>
            ))}
          </div>
        ) : <EmptyState tab="system design questions" />

      case 'Behavioral':
        return content.behavioral?.length ? (
          <div>
            {content.behavioral.map((q, i) => (
              <div key={i} style={{ border: '1px solid #1a1a1f', borderRadius: 8, padding: '12px 16px', marginBottom: 8 }}>
                <div style={{ fontSize: 13, color: '#c4c4d0', fontWeight: 500, marginBottom: 4 }}>{q.q}</div>
                {q.notes && <div style={{ fontSize: 12, color: '#8a8a9a', lineHeight: 1.6 }}>{q.notes}</div>}
              </div>
            ))}
          </div>
        ) : <EmptyState tab="behavioral questions" />

      case 'Tips & Notes':
        return content.tips ? (
          <div style={{ background: '#131316', border: '1px solid #222228', borderRadius: 10, padding: 20 }}>
            {content.tips.split('\n').map((line, i) => (
              <div key={i} style={{ fontSize: 13, color: '#8a8a9a', lineHeight: 1.7 }}>{line || <br />}</div>
            ))}
          </div>
        ) : <EmptyState tab="tips" />

      default:
        return <EmptyState tab={activeTab} />
    }
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ padding: '20px 28px 0', borderBottom: '1px solid #1a1a1f', background: '#0d0d0f' }}>
        <div style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <h1 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: '#e4e4f0' }}>{company.label}</h1>
            <span style={{ padding: '2px 8px', borderRadius: 4, fontSize: 11, background: '#131316', color: '#5a5a6a', border: '1px solid #222228' }}>company prep</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 2, overflowX: 'auto' }}>
          {COMPANY_TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '6px 14px', borderRadius: '6px 6px 0 0', fontSize: 12,
                fontWeight: 500, cursor: 'pointer', border: 'none', transition: 'all 0.15s',
                whiteSpace: 'nowrap',
                background: activeTab === tab ? '#131316' : 'transparent',
                color: activeTab === tab ? '#7c6af7' : '#5a5a6a',
                borderBottom: activeTab === tab ? '2px solid #7c6af7' : '2px solid transparent',
              }}
            >{tab}</button>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 28px' }}>
        {renderTab()}
      </div>
    </div>
  )
}