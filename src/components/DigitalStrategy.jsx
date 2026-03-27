import { useState } from 'react'
import { digitalStrategies } from '../data/healthcareData'

const impactColor = { 'Very High': '#ef4444', 'High': '#f59e0b', 'Medium': '#10b981', 'Low': '#8b949e' }
const complexityColor = { 'High': '#ef4444', 'Medium': '#f59e0b', 'Low': '#10b981' }
const priorityColor = { 'Critical': '#ef4444', 'High': '#f59e0b', 'Medium': '#10b981' }

const maturityData = [
  { area: 'EHR Adoption', level: 96, color: '#10b981' },
  { area: 'Telehealth', level: 72, color: '#00b4d8' },
  { area: 'Analytics / BI', level: 65, color: '#f59e0b' },
  { area: 'AI / Automation', level: 38, color: '#8b5cf6' },
  { area: 'Interoperability (FHIR)', level: 45, color: '#1f6feb' },
  { area: 'Remote Patient Monitoring', level: 42, color: '#ef4444' },
  { area: 'Value-Based Care Enablement', level: 55, color: '#f59e0b' },
  { area: 'Cybersecurity Maturity', level: 51, color: '#a78bfa' },
]

export default function DigitalStrategy() {
  const [selected, setSelected] = useState(null)
  const [canvas, setCanvas] = useState({ priorities: [], opportunities: [] })
  const [showCanvas, setShowCanvas] = useState(false)

  const togglePriority = (id) => {
    setCanvas(prev => ({
      ...prev,
      priorities: prev.priorities.includes(id)
        ? prev.priorities.filter(p => p !== id)
        : [...prev.priorities, id]
    }))
  }

  return (
    <div>
      <div className="page-header">
        <div className="page-title">🚀 Digital Strategy Canvas</div>
        <div className="page-subtitle">Six transformation domains with use cases, ROI models, and strategic considerations for healthcare digital strategy</div>
      </div>

      {/* Strategy cards */}
      <div className="grid-3" style={{ marginBottom: 32 }}>
        {digitalStrategies.map(strategy => (
          <div
            key={strategy.id}
            className="card"
            style={{
              cursor: 'pointer',
              borderTop: `3px solid ${strategy.color}`,
              background: selected?.id === strategy.id ? `${strategy.color}11` : 'var(--surface)',
              position: 'relative'
            }}
            onClick={() => setSelected(selected?.id === strategy.id ? null : strategy)}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontSize: 28 }}>{strategy.icon}</span>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: priorityColor[strategy.priority], background: `${priorityColor[strategy.priority]}22`, padding: '2px 8px', borderRadius: 10 }}>{strategy.priority}</span>
                <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>{strategy.maturity}</span>
              </div>
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{strategy.title}</div>
            <p style={{ fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.6, marginBottom: 12 }}>{strategy.description}</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{strategy.useCases.length} use cases</span>
              <span style={{ fontSize: 11, color: strategy.color, fontWeight: 600 }}>
                {selected?.id === strategy.id ? '▲ Close' : '▼ Explore →'}
              </span>
            </div>

            {/* Canvas pin */}
            <button
              onClick={(e) => { e.stopPropagation(); togglePriority(strategy.id) }}
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
                background: canvas.priorities.includes(strategy.id) ? strategy.color : 'var(--surface2)',
                color: canvas.priorities.includes(strategy.id) ? 'white' : 'var(--text-muted)',
                border: `1px solid ${strategy.color}55`,
                borderRadius: 6,
                padding: '2px 6px',
                fontSize: 10,
                fontWeight: 600
              }}
            >
              {canvas.priorities.includes(strategy.id) ? '★ Pinned' : '☆ Pin'}
            </button>
          </div>
        ))}
      </div>

      {/* Detail panel */}
      {selected && (
        <div className="detail-panel" style={{ borderColor: selected.color, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <span style={{ fontSize: 40 }}>{selected.icon}</span>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)' }}>{selected.title}</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 4, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: priorityColor[selected.priority], background: `${priorityColor[selected.priority]}22`, padding: '2px 8px', borderRadius: 10 }}>Priority: {selected.priority}</span>
                <span className="badge badge-cyan">Maturity: {selected.maturity}</span>
              </div>
            </div>
          </div>

          {/* Use cases table */}
          <div className="section-label">💡 Key Use Cases</div>
          <div style={{ overflowX: 'auto', marginBottom: 20 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'var(--surface2)' }}>
                  {['Use Case', 'Business Impact', 'Complexity', 'ROI / Outcome', 'Example Vendors'].map(h => (
                    <th key={h} style={{ padding: '10px 12px', textAlign: 'left', color: 'var(--text-muted)', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, borderBottom: '1px solid var(--border)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {selected.useCases.map((uc, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 12px', color: 'var(--text)', fontWeight: 600 }}>{uc.name}</td>
                    <td style={{ padding: '10px 12px' }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: impactColor[uc.impact], background: `${impactColor[uc.impact]}22`, padding: '2px 8px', borderRadius: 10 }}>{uc.impact}</span>
                    </td>
                    <td style={{ padding: '10px 12px' }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: complexityColor[uc.complexity], background: `${complexityColor[uc.complexity]}22`, padding: '2px 8px', borderRadius: 10 }}>{uc.complexity}</span>
                    </td>
                    <td style={{ padding: '10px 12px', color: 'var(--text-dim)' }}>{uc.roi}</td>
                    <td style={{ padding: '10px 12px', color: 'var(--accent)', fontSize: 11 }}>{uc.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Strategic considerations */}
          <div className="section-label">⚠️ Strategic Considerations</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 10 }}>
            {selected.strategicConsiderations.map((c, i) => (
              <div key={i} style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 8, padding: '10px 14px', fontSize: 12, color: 'var(--text-dim)', display: 'flex', gap: 8 }}>
                <span style={{ color: '#f59e0b' }}>⚡</span> {c}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Digital Maturity Benchmarks */}
      <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>Healthcare Digital Maturity Benchmarks (Industry Average)</h2>
      <p style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 20 }}>Current industry adoption levels for key digital capabilities</p>
      <div className="card" style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {maturityData.map((m, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>{m.area}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: m.color }}>{m.level}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${m.level}%`, background: m.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* My Strategy Canvas */}
      {canvas.priorities.length > 0 && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>📌 My Strategy Canvas ({canvas.priorities.length} priorities pinned)</h2>
            <button
              onClick={() => setShowCanvas(!showCanvas)}
              style={{ padding: '6px 14px', borderRadius: 6, background: 'var(--primary)', color: 'white', fontSize: 12 }}
            >
              {showCanvas ? 'Hide Canvas' : 'View Canvas'}
            </button>
          </div>
          {showCanvas && (
            <div className="card" style={{ border: '1px solid var(--accent)' }}>
              <p style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 16 }}>Your selected strategic priorities for the digital transformation roadmap:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {canvas.priorities.map((id, i) => {
                  const s = digitalStrategies.find(d => d.id === id)
                  return (
                    <div key={id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: 'var(--surface2)', borderRadius: 8, border: `1px solid ${s.color}44` }}>
                      <div style={{ background: s.color, color: 'white', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                      <span style={{ fontSize: 18 }}>{s.icon}</span>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{s.title}</div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{s.useCases.length} use cases • {s.maturity}</div>
                      </div>
                      <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 700, color: priorityColor[s.priority] }}>{s.priority}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
