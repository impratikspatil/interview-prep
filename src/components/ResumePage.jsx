import { RESUME_CONTENT } from '../data/resume'

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
  const c = RESUME_CONTENT

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ padding: '20px 28px', borderBottom: '1px solid #1a1a1f', background: '#0d0d0f' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: '#e4e4f0' }}>Resume Preparation</h1>
          <span style={{ padding: '2px 8px', borderRadius: 4, fontSize: 11, background: '#131316', color: '#5a5a6a', border: '1px solid #222228' }}>reference</span>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 28px', maxWidth: 780 }}>
        <Section title="Overview">
          {c.intro
            ? <p style={{ fontSize: 14, color: '#8a8a9a', lineHeight: 1.9, margin: 0 }}>{c.intro}</p>
            : <EmptyState label="overview" />}
        </Section>

        <ListSection
          title="Resume Structure"
          items={c.structure}
          render={(s, i) => (
            <div key={i} style={{ border: '1px solid #1a1a1f', borderRadius: 8, padding: '12px 16px', marginBottom: 8 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#c4c4d0', marginBottom: 4 }}>{s.section}</div>
              {s.notes && <div style={{ fontSize: 12, color: '#8a8a9a', lineHeight: 1.6 }}>{s.notes}</div>}
            </div>
          )}
        />

        <Section title="Bullet Point Formula">
          {c.bulletFormula
            ? <p style={{ fontSize: 13, color: '#8a8a9a', lineHeight: 1.8, margin: 0 }}>{c.bulletFormula}</p>
            : <EmptyState label="bullet formula" />}
        </Section>

        <ListSection
          title="Before / After Examples"
          items={c.bulletExamples}
          render={(e, i) => (
            <div key={i} style={{ border: '1px solid #1a1a1f', borderRadius: 8, padding: '12px 16px', marginBottom: 8 }}>
              <div style={{ fontSize: 12, color: '#f26450', marginBottom: 4 }}>Before: {e.before}</div>
              <div style={{ fontSize: 12, color: '#2dd4aa', marginBottom: 4 }}>After: {e.after}</div>
              {e.why && <div style={{ fontSize: 12, color: '#5a5a6a' }}>{e.why}</div>}
            </div>
          )}
        />

        <ListSection
          title="ATS Tips"
          items={c.atsTips}
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

        <ListSection
          title="Tailoring Checklist"
          items={c.tailoringChecklist}
          render={(t, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
              <span style={{ color: '#7c6af7', fontSize: 12 }}>•</span>
              <span style={{ fontSize: 13, color: '#8a8a9a', lineHeight: 1.6 }}>{t}</span>
            </div>
          )}
        />
      </div>
    </div>
  )
}