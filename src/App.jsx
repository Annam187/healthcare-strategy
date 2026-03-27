import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import WorkflowExplorer from './components/WorkflowExplorer'
import StakeholderMap from './components/StakeholderMap'
import DigitalStrategy from './components/DigitalStrategy'
import ScenarioSimulator from './components/ScenarioSimulator'
import GlossaryHub from './components/GlossaryHub'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '🏠', subtitle: 'Overview' },
  { id: 'workflows', label: 'Workflow Explorer', icon: '🔄', subtitle: 'End-to-end flows' },
  { id: 'stakeholders', label: 'Stakeholder Map', icon: '🌐', subtitle: 'Ecosystem actors' },
  { id: 'strategy', label: 'Digital Strategy', icon: '🚀', subtitle: 'Transformation' },
  { id: 'simulator', label: 'Scenario Simulator', icon: '🎮', subtitle: 'Test your knowledge' },
  { id: 'glossary', label: 'Glossary Hub', icon: '📖', subtitle: 'Terminology' },
]

export default function App() {
  const [active, setActive] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const renderPage = () => {
    switch (active) {
      case 'dashboard': return <Dashboard onNavigate={setActive} />
      case 'workflows': return <WorkflowExplorer />
      case 'stakeholders': return <StakeholderMap />
      case 'strategy': return <DigitalStrategy />
      case 'simulator': return <ScenarioSimulator />
      case 'glossary': return <GlossaryHub />
      default: return <Dashboard onNavigate={setActive} />
    }
  }

  return (
    <div className="app-shell">
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'collapsed'}`}>
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">⚕</span>
            {sidebarOpen && (
              <div className="logo-text">
                <div className="logo-title">HealthStrategy</div>
                <div className="logo-sub">BA Intelligence Platform</div>
              </div>
            )}
          </div>
          <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${active === item.id ? 'active' : ''}`}
              onClick={() => setActive(item.id)}
              title={!sidebarOpen ? item.label : ''}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && (
                <div className="nav-text">
                  <span className="nav-label">{item.label}</span>
                  <span className="nav-sub">{item.subtitle}</span>
                </div>
              )}
              {active === item.id && <span className="nav-indicator" />}
            </button>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="sidebar-footer">
            <div className="footer-badge">
              <span className="badge badge-green">v2.0</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '11px', marginLeft: 8 }}>Healthcare BA Suite</span>
            </div>
          </div>
        )}
      </aside>

      <main className="main-content">
        <div className="page-container">
          {renderPage()}
        </div>
      </main>
    </div>
  )
}
