import { useState } from 'react'
import { stakeholders } from '../data/healthcareData'

const influenceColor = {
  'Extreme': '#ef4444',
  'Very High': '#f59e0b',
  'High': '#10b981',
  'Medium': '#00b4d8',
}

const categories = ['All', ...new Set(stakeholders.map(s => s.category))]

export default function StakeholderMap() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('All')
  const [view, setView] = useState('grid')

  const filtered = filter === 'All' ? stakeholders : stakeholders.filter(s => s.category === filter)

  return (
    <div>
      <div className="page-header">
        <div className="page-title">🌐 Stakeholder Universe</div>
        <div className="page-subtitle">Every key actor in the healthcare ecosystem — their goals, pain points, and digital needs</div>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '5px 12px',
                borderRadius: 20,
                background: filter === cat ? 'var(--primary)' : 'var(--surface)',
                color: filter === cat ? 'white' : 'var(--text-dim)',
                border: '1px solid var(--border)',
                fontSize: 12,
                fontWeight: 500,
                transition: 'all 0.15s',
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
          {['grid', 'list'].map(v => (
            <button
              key={v}
              onClick={() => setView(v)}
              style={{ padding: '5px 10px', borderRadius: 6, background: view === v ? 'var(--primary)' : 'var(--surface)', color: view === v ? 'white' : 'var(--text-dim)', border: '1px solid var(--border)', fontSize: 12, cursor: 'pointer' }}
            >
              {v === 'grid' ? '⊞ Grid' : '≡ List'}
            </button>
          ))}
        </div>
      </div>

      {/* Grid view */}
      {view === 'grid' && (
        <div className="grid-4" style={{ marginBottom: 24 }}>
          {filtered.map(s => (
            <div
              key={s.id}
              className="card"
              style={{ cursor: 'pointer', borderTop: `3px solid ${s.color}`, background: selected?.id === s.id ? `${s.color}11` : 'var(--surface)' }}
              onClick={() => setSelected(selected?.id === s.id ? null : s)}
            >
              <div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{s.name}</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 10 }}>{s.category}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Influence:</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: influenceColor[s.influence] || '#58a6ff' }}>{s.influence}</span>
              </div>
              <p style={{ fontSize: 11, color: 'var(--text-dim)', lineHeight: 1.5, margin: 0 }}>{s.description.slice(0, 80)}...</p>
              <div style={{ fontSize: 11, color: s.color, marginTop: 10, fontWeight: 600 }}>
                {selected?.id === s.id ? '▲ Close' : '▼ Deep dive'}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List view */}
      {view === 'list' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
          {filtered.map(s => (
            <div
              key={s.id}
              className="card"
              style={{ cursor: 'pointer', display: 'flex', gap: 16, alignItems: 'flex-start', borderLeft: `4px solid ${s.color}`, padding: '14px 16px' }}
              onClick={() => setSelected(selected?.id === s.id ? null : s)}
            >
              <span style={{ fontSize: 28, flexShrink: 0 }}>{s.icon}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{s.name}</span>
                  <span className="badge badge-blue" style={{ fontSize: 10 }}>{s.category}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: influenceColor[s.influence] || '#58a6ff' }}>● {s.influence} Influence</span>
                </div>
                <p style={{ fontSize: 12, color: 'var(--text-dim)', margin: 0, lineHeight: 1.5 }}>{s.description}</p>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 6, fontStyle: 'italic' }}>{s.trend}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detail panel */}
      {selected && (
        <div className="detail-panel" style={{ borderColor: selected.color }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
            <span style={{ fontSize: 48 }}>{selected.icon}</span>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)' }}>{selected.name}</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 6, flexWrap: 'wrap' }}>
                <span className="badge badge-blue">{selected.category}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: influenceColor[selected.influence] }}>● {selected.influence} Influence</span>
              </div>
            </div>
          </div>

          <div style={{ background: `${selected.color}11`, border: `1px solid ${selected.color}33`, borderRadius: 8, padding: 16, marginBottom: 20 }}>
            <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.7, margin: 0 }}>{selected.description}</p>
            <p style={{ fontSize: 13, color: selected.color, fontStyle: 'italic', marginTop: 8, marginBottom: 0 }}>📈 {selected.trend}</p>
          </div>

          <div className="grid-2" style={{ gap: 20 }}>
            <div>
              <div className="section-label">🎯 Goals & Priorities</div>
              {selected.goals.map((g, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, padding: '6px 0', borderBottom: '1px solid var(--border)', fontSize: 13, color: 'var(--text-dim)' }}>
                  <span style={{ color: 'var(--green)' }}>✓</span> {g}
                </div>
              ))}

              <div className="section-label">😤 Pain Points</div>
              {selected.painPoints.map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, padding: '6px 0', borderBottom: '1px solid var(--border)', fontSize: 13, color: 'var(--text-dim)' }}>
                  <span style={{ color: 'var(--red)' }}>✗</span> {p}
                </div>
              ))}
            </div>

            <div>
              <div className="section-label">💻 Digital Needs</div>
              <div className="pill-list">
                {selected.digitalNeeds.map(d => <span key={d} className="pill pill-blue">{d}</span>)}
              </div>

              <div className="section-label">💡 BA Strategy Note</div>
              <div style={{ background: 'rgba(88,166,255,0.05)', borderRadius: 8, padding: 14, border: '1px solid rgba(88,166,255,0.15)' }}>
                <p style={{ fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.7, margin: 0 }}>
                  When working with <strong style={{ color: 'var(--text)' }}>{selected.name}</strong>, lead discovery around their core pain points.
                  Understand their success metrics and how digital transformation aligns with their incentives.
                  Map your solution's value proposition to their specific goals — not generic benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ecosystem relationship diagram */}
      <div style={{ marginTop: 32 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Healthcare Ecosystem Relationships</h3>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: 24, textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12 }}>
            {[
              { from: 'Patient', to: 'Provider', label: 'Receives Care', color: '#00b4d8' },
              { from: 'Provider', to: 'Payer', label: 'Submits Claims', color: '#10b981' },
              { from: 'Payer', to: 'Provider', label: 'Reimburses', color: '#f59e0b' },
              { from: 'Employer', to: 'Payer', label: 'Pays Premiums', color: '#8b5cf6' },
              { from: 'CMS', to: 'Payer', label: 'Regulates + Pays MA', color: '#ef4444' },
              { from: 'Provider', to: 'Patient', label: 'Delivers Care', color: '#00b4d8' },
              { from: 'Pharma', to: 'Patient', label: 'Drug Access', color: '#a78bfa' },
              { from: 'Health IT', to: 'Provider', label: 'Enables Operations', color: '#58a6ff' },
            ].map((rel, i) => (
              <div key={i} style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 14px', fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: rel.color, fontWeight: 700 }}>{rel.from}</span>
                <span style={{ color: 'var(--text-muted)' }}>→</span>
                <span style={{ color: 'var(--text-dim)', fontStyle: 'italic', fontSize: 10 }}>{rel.label}</span>
                <span style={{ color: 'var(--text-muted)' }}>→</span>
                <span style={{ color: rel.color, fontWeight: 700 }}>{rel.to}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
