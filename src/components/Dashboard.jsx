import { SECTIONS, DIFFICULTY_CONFIG } from '../data/Topics'

const CONTENT_READY = ['hashmap']

export default function Dashboard({ onSelectTopic }) {
  const allTopics = SECTIONS.flatMap(s => s.topics)
  const ready = allTopics.filter(t => CONTENT_READY.includes(t.id)).length

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '40px 48px' }}>
      {/* Hero */}
      <div style={{ marginBottom: 40 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '4px 12px', borderRadius: 20,
          background: '#1e1b3a', color: '#7c6af7',
          fontSize: 12, fontWeight: 500, marginBottom: 16
        }}>
          Interview Preparation Platform
        </div>
        <h1 style={{ margin: '0 0 10px', fontSize: 32, fontWeight: 700, color: '#e4e4f0', lineHeight: 1.2 }}>
          Master every concept.<br />
          <span style={{ color: '#7c6af7' }}>Ace every interview.</span>
        </h1>
        <p style={{ margin: 0, fontSize: 15, color: '#5a5a6a', lineHeight: 1.7, maxWidth: 520 }}>
          A visual, structured handbook covering Java, Spring Boot, System Design, DSA, Databases and DevOps — built for backend SWE interviews.
        </p>
      </div>

      {/* Stats row */}
    <div style={{ display: 'flex', gap: 12, marginBottom: 40 }}>
      {[
        { label: 'Total topics', value: allTopics.length, color: '#7c6af7' },
        { label: 'Sections', value: SECTIONS.length, color: '#2dd4aa' },
        // "Topics ready" object removed from here
      ].map(stat => (
        <div key={stat.label} style={{
          background: '#131316', border: '1px solid #1a1a1f',
          borderRadius: 10, padding: '16px 20px', minWidth: 120
        }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: stat.color, marginBottom: 4 }}>{stat.value}</div>
          <div style={{ fontSize: 11, color: '#5a5a6a' }}>{stat.label}</div>
        </div>
      ))}
    </div>

      {/* Sections grid */}
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 13, fontWeight: 500, color: '#5a5a6a', margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Browse by section
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {SECTIONS.map(section => {
            const readyCount = section.topics.filter(t => CONTENT_READY.includes(t.id)).length
            return (
              <div
                key={section.id}
                style={{
                  background: '#131316', border: '1px solid #1a1a1f',
                  borderRadius: 10, padding: '16px 18px', cursor: 'pointer',
                  transition: 'border-color 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#7c6af7'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#1a1a1f'}
                onClick={() => onSelectTopic({ ...section.topics[0], sectionId: section.id })}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span style={{ fontSize: 20 }}>{section.icon}</span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#c4c4d0' }}>{section.label}</span>
                </div>
                <div style={{ fontSize: 11, color: '#5a5a6a', marginBottom: 10 }}>
                  {section.topics.length} topics
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {section.topics.slice(0, 3).map(t => (
                    <span key={t.id} style={{
                      fontSize: 10, padding: '2px 6px', borderRadius: 4,
                      background: CONTENT_READY.includes(t.id) ? '#1e1b3a' : '#0d0d0f',
                      color: CONTENT_READY.includes(t.id) ? '#7c6af7' : '#36363f',
                      border: `1px solid ${CONTENT_READY.includes(t.id) ? '#3d3580' : '#1a1a1f'}`,
                    }}>{t.label}</span>
                  ))}
                  {section.topics.length > 3 && (
                    <span style={{ fontSize: 10, color: '#36363f' }}>+{section.topics.length - 3} more</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Start here */}
      <div style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 13, fontWeight: 500, color: '#5a5a6a', margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Start here
        </h2>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {SECTIONS.flatMap(s => s.topics.map(t => ({ ...t, sectionId: s.id })))
            .filter(t => CONTENT_READY.includes(t.id))
            .map(topic => {
              const diff = DIFFICULTY_CONFIG[topic.difficulty]
              return (
                <div
                  key={topic.id}
                  onClick={() => onSelectTopic(topic)}
                  style={{
                    background: '#131316', border: '1px solid #222228',
                    borderRadius: 8, padding: '10px 16px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 10,
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#7c6af7'; e.currentTarget.style.background = '#1e1b3a' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#222228'; e.currentTarget.style.background = '#131316' }}
                >
                  <span style={{ fontSize: 13, color: '#c4c4d0', fontWeight: 500 }}>{topic.label}</span>
                  <span style={{ fontSize: 11, color: diff.color }}>{diff.label}</span>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}