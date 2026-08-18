import { SELF_INTRO_CONTENT } from '../data/selfIntro'

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: '#7c6af7', marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid #1a1a1f' }}>
        {title}
      </div>
      {children}
    </div>
  )
}

function EmptyState({ label }) {
  return <div style={{ fontSize: 12, color: '#5a5a6a' }}>No {label} added yet — coming soon</div>
}

function FreeformText({ text }) {
  return (
    <div>
      {text.split('\n').map((line, i) => (
        <p key={i} style={{ margin: line ? '0 0 10px 0' : 0, fontSize: 14, color: '#8a8a9a', lineHeight: 1.9 }}>{line}</p>
      ))}
    </div>
  )
}

function ListSection({ title, items, render }) {
  return (
    <Section title={title}>
      {items?.length
        ? <div>{items.map((item, i) => render(item, i))}</div>
        : <EmptyState label={title.toLowerCase()} />}
    </Section>
  )
}

export default function ResumePage() {
  const c = SELF_INTRO_CONTENT

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ padding: '20px 28px', borderBottom: '1px solid #1a1a1f', background: '#0d0d0f' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: '#e4e4f0' }}>Self Introduction</h1>
          <span style={{ padding: '2px 8px', borderRadius: 4, fontSize: 11, background: '#131316', color: '#5a5a6a', border: '1px solid #222228' }}>reference</span>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 28px', maxWidth: 780 }}>
        <Section title="Overview">
          {c.intro
            ? <FreeformText text={c.intro} />
            : <EmptyState label="overview" />}
        </Section>

        <Section title="Framework">
          {c.framework
            ? <FreeformText text={c.framework} />
            : <EmptyState label="framework" />}
        </Section>

        <Section title="Main Answer (60-90 sec)">
          {c.mainAnswer ? (
            <div style={{ background: '#131316', border: '1px solid #222228', borderRadius: 10, padding: 20 }}>
              <FreeformText text={c.mainAnswer} />
            </div>
          ) : <EmptyState label="main answer" />}
        </Section>

        <ListSection
          title="Variations"
          items={c.variations}
          render={(v, i) => (
            <div key={i} style={{ border: '1px solid #1a1a1f', borderRadius: 8, padding: '12px 16px', marginBottom: 8 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#c4c4d0', marginBottom: 6 }}>{v.context}</div>
              {v.answer && <div style={{ fontSize: 13, color: '#8a8a9a', lineHeight: 1.7 }}>{v.answer}</div>}
            </div>
          )}
        />

        <ListSection
          title="Tips"
          items={c.tips}
          render={(t, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
              <span style={{ color: '#2dd4aa', fontSize: 12 }}>•</span>
              <span style={{ fontSize: 13, color: '#8a8a9a', lineHeight: 1.6 }}>{t}</span>
            </div>
          )}
        />

        <ListSection
          title="Common Mistakes"
          items={c.commonMistakes}
          render={(t, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
              <span style={{ color: '#f26450', fontSize: 12 }}>•</span>
              <span style={{ fontSize: 13, color: '#8a8a9a', lineHeight: 1.6 }}>{t}</span>
            </div>
          )}
        />
      </div>
    </div>
  )
}