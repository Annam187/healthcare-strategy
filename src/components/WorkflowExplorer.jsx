import { useState } from 'react'
import { workflows } from '../data/healthcareData'

const workflowList = Object.values(workflows)

export default function WorkflowExplorer() {
  const [activeWorkflow, setActiveWorkflow] = useState('patientJourney')
  const [selectedStep, setSelectedStep] = useState(null)

  const wf = workflows[activeWorkflow]

  return (
    <div>
      <div className="page-header">
        <div className="page-title">🔄 Workflow Explorer</div>
        <div className="page-subtitle">Deep-dive into the core operational workflows that drive healthcare — from patient journey to revenue cycle</div>
      </div>

      {/* Workflow selector */}
      <div className="tabs">
        {workflowList.map(w => (
          <button
            key={w.id}
            className={`tab ${activeWorkflow === w.id ? 'active' : ''}`}
            onClick={() => { setActiveWorkflow(w.id); setSelectedStep(null) }}
          >
            {w.title}
          </button>
        ))}
      </div>

      {/* Workflow header */}
      <div className="card" style={{ marginBottom: 24, borderLeft: `4px solid ${wf.color}` }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{wf.title}</div>
            <div style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.6 }}>{wf.description}</div>
          </div>
          <div style={{ background: wf.color + '22', border: `1px solid ${wf.color}44`, borderRadius: 8, padding: '8px 14px', textAlign: 'center', flexShrink: 0 }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: wf.color }}>{wf.steps.length}</div>
            <div style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.5 }}>Steps</div>
          </div>
        </div>
      </div>

      {/* Steps grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16, marginBottom: 24 }}>
        {wf.steps.map((step, i) => (
          <div
            key={step.id}
            className={`workflow-step ${selectedStep?.id === step.id ? 'selected' : ''}`}
            onClick={() => setSelectedStep(selectedStep?.id === step.id ? null : step)}
          >
            <div className="step-number">Step {step.id}</div>
            <div style={{ fontSize: 28, marginBottom: 8, marginTop: 8 }}>{step.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{step.name}</div>
            <div style={{ fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.5 }}>{step.description}</div>
            <div style={{ marginTop: 12, fontSize: 11, color: wf.color, fontWeight: 600 }}>
              {selectedStep?.id === step.id ? '▲ Close details' : '▼ View details'}
            </div>
          </div>
        ))}
      </div>

      {/* Detail panel */}
      {selectedStep && (
        <div className="detail-panel" style={{ borderColor: wf.color }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <span style={{ fontSize: 36 }}>{selectedStep.icon}</span>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)' }}>{selectedStep.name}</div>
              <div style={{ fontSize: 13, color: 'var(--text-dim)' }}>Step {selectedStep.id} of {wf.steps.length}</div>
            </div>
          </div>

          <div style={{ background: 'rgba(88,166,255,0.05)', border: '1px solid rgba(88,166,255,0.15)', borderRadius: 8, padding: 16, marginBottom: 20 }}>
            <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.7, margin: 0 }}>{selectedStep.details}</p>
          </div>

          <div className="grid-2" style={{ gap: 20 }}>
            <div>
              <div className="section-label">👤 Key Actors</div>
              <div className="pill-list">
                {selectedStep.actors.map(a => <span key={a} className="pill pill-blue">{a}</span>)}
              </div>

              <div className="section-label">💻 Systems & Tools</div>
              <div className="pill-list">
                {selectedStep.systems.map(s => <span key={s} className="pill pill-purple">{s}</span>)}
              </div>

              <div className="section-label">📉 Pain Points</div>
              <div className="pill-list">
                {selectedStep.painPoints.map(p => <span key={p} className="pill pill-red">{p}</span>)}
              </div>
            </div>

            <div>
              <div className="section-label">🚀 Digital Opportunities</div>
              <div className="pill-list">
                {selectedStep.digitalOps.map(d => <span key={d} className="pill pill-green">{d}</span>)}
              </div>

              <div className="section-label">📊 KPIs to Track</div>
              <div className="pill-list">
                {selectedStep.kpis.map(k => <span key={k} className="pill pill-orange">{k}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Flow diagram */}
      <div style={{ marginTop: 32 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Workflow Flow Diagram</h3>
        <div style={{ display: 'flex', alignItems: 'center', overflowX: 'auto', padding: '8px 0', gap: 0 }}>
          {wf.steps.map((step, i) => (
            <div key={step.id} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <div
                onClick={() => setSelectedStep(selectedStep?.id === step.id ? null : step)}
                style={{
                  background: selectedStep?.id === step.id ? wf.color : 'var(--surface)',
                  border: `2px solid ${wf.color}`,
                  borderRadius: 10,
                  padding: '10px 14px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  minWidth: 100,
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ fontSize: 20 }}>{step.icon}</div>
                <div style={{ fontSize: 10, fontWeight: 600, color: selectedStep?.id === step.id ? 'white' : 'var(--text)', marginTop: 4, lineHeight: 1.3 }}>{step.name}</div>
              </div>
              {i < wf.steps.length - 1 && (
                <div style={{ color: wf.color, fontSize: 18, padding: '0 4px', flexShrink: 0 }}>→</div>
              )}
            </div>
          ))}
        </div>
        <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 8 }}>Click any step in the diagram to view details</div>
      </div>
    </div>
  )
}
