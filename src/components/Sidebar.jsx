import { useState } from 'react'
import { SECTIONS, DIFFICULTY_CONFIG } from '../data/Topics'

export default function Sidebar({ activeTopic, onSelectTopic }) {
  const [expanded, setExpanded] = useState({ java: true })
  const [search, setSearch] = useState('')

  const toggle = (id) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }))

  const filtered = search.trim()
    ? SECTIONS.map(s => ({
        ...s,
        topics: s.topics.filter(t => t.label.toLowerCase().includes(search.toLowerCase()))
      })).filter(s => s.topics.length > 0)
    : SECTIONS

  const totalTopics = SECTIONS.flatMap(s => s.topics).length

  return (
    <aside style={{
      width: 240, minWidth: 240, height: '100vh',
      background: '#0d0d0f', borderRight: '1px solid #1a1a1f',
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ padding: '18px 16px 14px', borderBottom: '1px solid #1a1a1f' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: 'linear-gradient(135deg, #7c6af7, #2dd4aa)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, fontWeight: 700, color: '#fff'
          }}>P</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#c4c4d0' }}>Interview Prep</div>
            <div style={{ fontSize: 11, color: '#5a5a6a' }}>{totalTopics} topics</div>
          </div>
        </div>

        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search topics..."
          style={{
            width: '100%', padding: '7px 10px',
            background: '#131316', border: '1px solid #222228',
            borderRadius: 6, color: '#c4c4d0', fontSize: 12,
            outline: 'none', boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Topic list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px' }}>
        {filtered.map(section => {
          const isOpen = search.trim() ? true : expanded[section.id]
          return (
            <div key={section.id} style={{ marginBottom: 4 }}>
              {/* Section header */}
              <div
                onClick={() => toggle(section.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '6px 8px', borderRadius: 6, cursor: 'pointer',
                  color: '#8a8a9a', fontSize: 12, fontWeight: 500,
                  userSelect: 'none',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#131316'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <span>{section.icon}</span>
                <span style={{ flex: 1 }}>{section.label}</span>
                <span style={{ fontSize: 10, color: '#36363f' }}>{section.topics.length}</span>
                <span style={{
                  fontSize: 9, color: '#36363f',
                  transform: isOpen ? 'rotate(90deg)' : 'none',
                  transition: '0.15s', display: 'inline-block'
                }}>▶</span>
              </div>

              {/* Topics */}
              {isOpen && (
                <div style={{ paddingLeft: 8 }}>
                  {section.topics.map(topic => {
                    const isActive = activeTopic?.id === topic.id
                    const diff = DIFFICULTY_CONFIG[topic.difficulty]
                    return (
                      <div
                        key={topic.id}
                        onClick={() => onSelectTopic({ ...topic, sectionId: section.id })}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 8,
                          padding: '6px 10px', borderRadius: 6, cursor: 'pointer',
                          fontSize: 12, transition: 'all 0.15s',
                          background: isActive ? '#1e1b3a' : 'transparent',
                          color: isActive ? '#7c6af7' : '#8a8a9a',
                        }}
                        onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = '#131316'; if (!isActive) e.currentTarget.style.color = '#c4c4d0' }}
                        onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; if (!isActive) e.currentTarget.style.color = '#8a8a9a' }}
                      >
                        <span style={{ flex: 1 }}>{topic.label}</span>
                        <span style={{
                          width: 6, height: 6, borderRadius: '50%',
                          background: diff.color, flexShrink: 0, opacity: 0.6
                        }} />
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </aside>
  )
}