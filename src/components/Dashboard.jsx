const stats = [
  { icon: '🏥', value: '$4.5T', label: 'US Healthcare Spend 2023', trend: '↑ 7.5% YoY', color: '#00b4d8' },
  { icon: '👨‍⚕️', value: '1M+', label: 'Active Physicians in US', trend: '↓ 10% shortage projected by 2034', color: '#10b981' },
  { icon: '🏦', value: '10-15%', label: 'Average Claims Denial Rate', trend: '↑ Increasing payer complexity', color: '#f59e0b' },
  { icon: '💻', value: '96%', label: 'Hospitals with EHR Adoption', trend: '↑ From 12% in 2009', color: '#8b5cf6' },
]

const quickCards = [
  {
    id: 'workflows',
    icon: '🔄',
    title: 'Workflow Explorer',
    desc: 'Walk through 4 core healthcare workflows step by step — Patient Journey, RCM, Clinical Ops, and Value-Based Care',
    tags: ['Patient Journey', 'RCM', 'Clinical Ops', 'VBC'],
    color: '#00b4d8',
    cta: 'Explore Workflows →'
  },
  {
    id: 'stakeholders',
    icon: '🌐',
    title: 'Stakeholder Universe',
    desc: 'Understand every key actor in the ecosystem: who they are, their goals, pain points, and digital needs',
    tags: ['Patients', 'Providers', 'Payers', 'Regulators'],
    color: '#f59e0b',
    cta: 'Map Stakeholders →'
  },
  {
    id: 'strategy',
    icon: '🚀',
    title: 'Digital Strategy Canvas',
    desc: 'Explore 6 strategic digital transformation areas with use cases, ROI, and implementation considerations',
    tags: ['AI/ML', 'Interoperability', 'Analytics', 'VBC'],
    color: '#10b981',
    cta: 'Build Strategy →'
  },
  {
    id: 'simulator',
    icon: '🎮',
    title: 'Scenario Simulator',
    desc: 'Test your domain expertise with real-world healthcare scenarios and challenging multi-choice questions',
    tags: ['ED Crisis', 'VBC Transition', 'RCM Turnaround'],
    color: '#8b5cf6',
    cta: 'Run Scenarios →'
  },
]

const domainMap = [
  { label: 'Acute Care (Inpatient)', desc: 'Hospitals, ICUs, surgical units — episodic high-acuity care', icon: '🏥' },
  { label: 'Ambulatory / Outpatient', desc: 'Physician offices, ASCs, clinics — the majority of healthcare visits', icon: '🩺' },
  { label: 'Post-Acute Care', desc: 'SNFs, rehab, home health, hospice — care after hospital discharge', icon: '🏠' },
  { label: 'Health Plans & Payers', desc: 'Commercial, Medicare Advantage, Medicaid Managed Care, PBMs', icon: '💼' },
  { label: 'Population Health & ACOs', desc: 'Value-based care models managing cost and quality at scale', icon: '📊' },
  { label: 'Digital Health & HIT', desc: 'EHRs, telehealth, remote monitoring, health IT vendors', icon: '💻' },
  { label: 'Pharma & Life Sciences', desc: 'Drug development, clinical trials, market access, adherence', icon: '🔬' },
  { label: 'Government Programs', desc: 'Medicare, Medicaid, CHIP, VA — federal and state healthcare programs', icon: '🏛️' },
]

const keyTrends = [
  { trend: 'AI in Clinical Workflows', impact: 'Transformative', color: '#00b4d8', desc: 'Ambient documentation, diagnostic AI, and predictive analytics are reshaping care delivery' },
  { trend: 'Value-Based Care Acceleration', impact: 'High', color: '#10b981', desc: 'ACO REACH, MA growth, and commercial VBC contracts shifting payment from volume to outcomes' },
  { trend: 'Prior Auth Reform (CMS 2026)', impact: 'High', color: '#f59e0b', desc: 'FHIR-based prior auth APIs mandated for payers, reducing $13B in annual administrative waste' },
  { trend: 'Workforce Crisis & Burnout', impact: 'Critical', color: '#ef4444', desc: '500K nurse shortage projected. Digital tools and AI assistants critical to sustainable care delivery' },
  { trend: 'Cybersecurity Threats', impact: 'Critical', color: '#8b5cf6', desc: '2024 Change Healthcare breach cost $1.6B+. Ransomware attacks up 300% since 2020' },
  { trend: 'GLP-1 Drug Cost Explosion', impact: 'High', color: '#f59e0b', desc: 'Ozempic/Wegovy adding $5K+ PMPY cost. Payers and employers grappling with coverage decisions' },
]

export default function Dashboard({ onNavigate }) {
  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ background: 'linear-gradient(135deg,#1f6feb,#00b4d8)', borderRadius: 10, padding: '8px 12px', fontSize: 22 }}>⚕</div>
          <div>
            <div className="page-title">Healthcare BA Intelligence Platform</div>
            <div className="page-subtitle">Your complete guide to becoming a digital strategist in the healthcare domain</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
          {['Business Analysis', 'Digital Strategy', 'Healthcare Domain', 'Workflow Expertise'].map(t => (
            <span key={t} className="badge badge-blue">{t}</span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid-4" style={{ marginBottom: 32 }}>
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
            <div className="stat-label">{s.label}</div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>{s.trend}</div>
          </div>
        ))}
      </div>

      {/* Quick nav cards */}
      <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Explore the Platform</h2>
      <div className="grid-2" style={{ marginBottom: 32 }}>
        {quickCards.map(card => (
          <div
            key={card.id}
            className="card"
            style={{ cursor: 'pointer', borderLeft: `3px solid ${card.color}` }}
            onClick={() => onNavigate(card.id)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <span style={{ fontSize: 28 }}>{card.icon}</span>
              <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>{card.title}</div>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 12, lineHeight: 1.6 }}>{card.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
              {card.tags.map(t => <span key={t} className="pill">{t}</span>)}
            </div>
            <div style={{ color: card.color, fontSize: 13, fontWeight: 600 }}>{card.cta}</div>
          </div>
        ))}
      </div>

      {/* Domain Map */}
      <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>Healthcare Ecosystem Landscape</h2>
      <p style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 16 }}>The 8 major segments of the US healthcare industry</p>
      <div className="grid-4" style={{ marginBottom: 32 }}>
        {domainMap.map((d, i) => (
          <div key={i} className="card" style={{ padding: '16px' }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{d.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{d.label}</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>{d.desc}</div>
          </div>
        ))}
      </div>

      {/* Key trends */}
      <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>Key Trends Shaping Healthcare (2024-2026)</h2>
      <p style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 16 }}>Strategic forces every digital strategist must understand</p>
      <div className="grid-2">
        {keyTrends.map((t, i) => (
          <div key={i} className="card" style={{ display: 'flex', gap: 14, padding: '16px' }}>
            <div style={{ width: 4, background: t.color, borderRadius: 2, flexShrink: 0 }} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{t.trend}</span>
                <span className={`badge ${t.impact === 'Transformative' || t.impact === 'Critical' ? 'badge-red' : 'badge-orange'}`}>{t.impact}</span>
              </div>
              <p style={{ fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
