import { useState, useMemo } from 'react'
import { glossaryTerms } from '../data/healthcareData'

const categoryColors = {
  'VBC': '#10b981',
  'RCM': '#f59e0b',
  'Clinical': '#00b4d8',
  'Technology': '#8b5cf6',
  'Regulatory': '#ef4444',
  'Quality': '#58a6ff',
  'Payer': '#a78bfa',
  'Administrative': '#6e7681',
}

const importanceColor = { Critical: '#ef4444', High: '#f59e0b' }

export default function GlossaryHub() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [importance, setImportance] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const categories = ['All', ...new Set(glossaryTerms.map(t => t.category))]
  const importances = ['All', 'Critical', 'High']

  const filtered = useMemo(() => {
    return glossaryTerms.filter(t => {
      const matchSearch = !search || t.term.toLowerCase().includes(search.toLowerCase()) || t.definition.toLowerCase().includes(search.toLowerCase())
      const matchCat = category === 'All' || t.category === category
      const matchImp = importance === 'All' || t.importance === importance
      return matchSearch && matchCat && matchImp
    })
  }, [search, category, importance])

  const criticalTerms = glossaryTerms.filter(t => t.importance === 'Critical')

  return (
    <div>
      <div className="page-header">
        <div className="page-title">📖 Glossary Hub</div>
        <div className="page-subtitle">{glossaryTerms.length} essential healthcare terms — from RCM to VBC to clinical operations</div>
      </div>

      {/* Critical terms banner */}
      <div className="card" style={{ marginBottom: 24, borderLeft: '4px solid var(--red)', background: 'rgba(239,68,68,0.04)' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--red)', marginBottom: 10 }}>🔴 Must-Know Critical Terms ({criticalTerms.length} terms)</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {criticalTerms.map(t => (
            <button
              key={t.term}
              onClick={() => setExpanded(expanded === t.term ? null : t.term)}
              style={{ padding: '3px 10px', borderRadius: 20, background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', color: '#ef4444', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}
            >
              {t.term}
            </button>
          ))}
        </div>
      </div>

      {/* Search and filters */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
          <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: 14 }}>🔍</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search terms or definitions..."
            style={{
              width: '100%',
              padding: '9px 12px 9px 36px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              color: 'var(--text)',
              fontSize: 13,
              outline: 'none',
              fontFamily: 'var(--font)'
            }}
          />
        </div>
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          style={{ padding: '9px 12px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--text)', fontSize: 13, cursor: 'pointer', outline: 'none', fontFamily: 'var(--font)' }}
        >
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select
          value={importance}
          onChange={e => setImportance(e.target.value)}
          style={{ padding: '9px 12px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--text)', fontSize: 13, cursor: 'pointer', outline: 'none', fontFamily: 'var(--font)' }}
        >
          {importances.map(i => <option key={i} value={i}>{i === 'All' ? 'All Levels' : i}</option>)}
        </select>
      </div>

      {/* Result count */}
      <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>
        Showing {filtered.length} of {glossaryTerms.length} terms
        {search && <span> matching "<strong style={{ color: 'var(--accent)' }}>{search}</strong>"</span>}
      </div>

      {/* Terms */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {filtered.map(term => (
          <div key={term.term}>
            <div
              className="card"
              style={{
                cursor: 'pointer',
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                borderLeft: `3px solid ${categoryColors[term.category] || '#8b949e'}`,
                background: expanded === term.term ? 'rgba(88,166,255,0.05)' : 'var(--surface)'
              }}
              onClick={() => setExpanded(expanded === term.term ? null : term.term)}
            >
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', minWidth: 0 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', flexShrink: 0 }}>{term.term}</span>
                <span style={{ fontSize: 10, background: `${categoryColors[term.category]}22`, color: categoryColors[term.category], padding: '2px 8px', borderRadius: 10, fontWeight: 600, border: `1px solid ${categoryColors[term.category]}44`, flexShrink: 0 }}>{term.category}</span>
                {term.importance === 'Critical' && (
                  <span style={{ fontSize: 10, background: 'rgba(239,68,68,0.15)', color: '#ef4444', padding: '2px 8px', borderRadius: 10, fontWeight: 700, border: '1px solid rgba(239,68,68,0.3)', flexShrink: 0 }}>Critical</span>
                )}
                {expanded !== term.term && (
                  <span style={{ fontSize: 12, color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, minWidth: 0 }}>{term.definition.slice(0, 80)}...</span>
                )}
              </div>
              <span style={{ color: 'var(--text-muted)', fontSize: 12, flexShrink: 0 }}>{expanded === term.term ? '▲' : '▼'}</span>
            </div>

            {expanded === term.term && (
              <div style={{ background: 'var(--surface2)', borderLeft: `3px solid ${categoryColors[term.category] || '#8b949e'}`, padding: '14px 18px', borderRadius: '0 0 8px 8px', animation: 'fadeIn 0.2s ease' }}>
                <p style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.8, margin: 0 }}>{term.definition}</p>
                <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Category:</span>
                  <span style={{ fontSize: 11, color: categoryColors[term.category], fontWeight: 600 }}>{term.category}</span>
                  <span style={{ marginLeft: 12, fontSize: 11, color: 'var(--text-muted)' }}>Importance:</span>
                  <span style={{ fontSize: 11, color: importanceColor[term.importance] || 'var(--text-dim)', fontWeight: 600 }}>{term.importance}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '48px 24px', color: 'var(--text-muted)' }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
          <div style={{ fontSize: 16, marginBottom: 8 }}>No terms found</div>
          <div style={{ fontSize: 13 }}>Try adjusting your search or filters</div>
        </div>
      )}

      {/* Category legend */}
      <div style={{ marginTop: 32 }}>
        <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>Category Reference</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {Object.entries(categoryColors).map(([cat, color]) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{ padding: '4px 12px', borderRadius: 20, background: `${color}22`, color, border: `1px solid ${color}44`, fontSize: 11, fontWeight: 600, cursor: 'pointer' }}
            >
              {cat} ({glossaryTerms.filter(t => t.category === cat).length})
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
