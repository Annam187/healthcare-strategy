import { useState } from 'react'
import { scenarios } from '../data/healthcareData'

const difficultyColor = { Easy: '#10b981', Medium: '#f59e0b', Hard: '#ef4444' }

export default function ScenarioSimulator() {
  const [activeScenario, setActiveScenario] = useState(null)
  const [answers, setAnswers] = useState({})
  const [revealed, setRevealed] = useState({})
  const [score, setScore] = useState(null)
  const [step, setStep] = useState('list') // list | scenario | results

  const startScenario = (scenario) => {
    setActiveScenario(scenario)
    setAnswers({})
    setRevealed({})
    setScore(null)
    setStep('scenario')
  }

  const handleAnswer = (qIdx, optIdx) => {
    if (revealed[qIdx]) return
    setAnswers(prev => ({ ...prev, [qIdx]: optIdx }))
    setRevealed(prev => ({ ...prev, [qIdx]: true }))
  }

  const calcScore = () => {
    if (!activeScenario) return 0
    let correct = 0
    activeScenario.questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++
    })
    return correct
  }

  const submitScenario = () => {
    const s = calcScore()
    setScore(s)
    setStep('results')
  }

  const allAnswered = activeScenario && Object.keys(answers).length === activeScenario.questions.length

  if (step === 'list') return (
    <div>
      <div className="page-header">
        <div className="page-title">🎮 Scenario Simulator</div>
        <div className="page-subtitle">Challenge yourself with real-world healthcare business scenarios. Think like a digital strategist.</div>
      </div>

      <div className="grid-3" style={{ marginBottom: 32 }}>
        {scenarios.map(scenario => (
          <div key={scenario.id} className="card" style={{ cursor: 'pointer', borderTop: `3px solid ${difficultyColor[scenario.difficulty]}` }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontSize: 32 }}>{scenario.icon}</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: difficultyColor[scenario.difficulty], background: `${difficultyColor[scenario.difficulty]}22`, padding: '3px 10px', borderRadius: 10 }}>{scenario.difficulty}</span>
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{scenario.title}</div>
            <p style={{ fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.6, marginBottom: 16 }}>{scenario.context.slice(0, 120)}...</p>
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 6 }}>Key stakeholders:</div>
              <div className="pill-list">
                {scenario.stakeholders.map(s => <span key={s} className="pill">{s}</span>)}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{scenario.questions.length} questions</span>
              <button
                onClick={() => startScenario(scenario)}
                style={{ background: 'var(--primary)', color: 'white', padding: '7px 16px', borderRadius: 6, fontSize: 12, fontWeight: 600 }}
              >
                Start Scenario →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="card" style={{ borderLeft: '4px solid var(--accent)' }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>💡 How to Use the Simulator</div>
        <div className="grid-2" style={{ gap: 16 }}>
          {[
            { icon: '📋', text: 'Read the scenario context carefully — real BA work requires understanding the full business situation' },
            { icon: '🤔', text: 'Answer each question based on your healthcare domain knowledge and BA best practices' },
            { icon: '✅', text: 'Get immediate feedback with detailed explanations of why each answer is correct' },
            { icon: '🏆', text: 'Score yourself and identify knowledge gaps to guide further learning' }
          ].map((tip, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--text-dim)' }}>
              <span style={{ fontSize: 16, flexShrink: 0 }}>{tip.icon}</span>
              <span>{tip.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  if (step === 'results') return (
    <div>
      <div className="page-header">
        <div className="page-title">🏆 Results</div>
        <div className="page-subtitle">{activeScenario.title}</div>
      </div>

      <div className="card" style={{ textAlign: 'center', marginBottom: 32, padding: 40, border: `2px solid ${score === activeScenario.questions.length ? 'var(--green)' : score >= activeScenario.questions.length / 2 ? 'var(--orange)' : 'var(--red)'}` }}>
        <div style={{ fontSize: 64, marginBottom: 8 }}>
          {score === activeScenario.questions.length ? '🏆' : score >= activeScenario.questions.length / 2 ? '👍' : '📚'}
        </div>
        <div style={{ fontSize: 48, fontWeight: 800, color: score === activeScenario.questions.length ? 'var(--green)' : score >= activeScenario.questions.length / 2 ? 'var(--orange)' : 'var(--red)' }}>
          {score}/{activeScenario.questions.length}
        </div>
        <div style={{ fontSize: 18, color: 'var(--text)', fontWeight: 600, marginBottom: 8 }}>
          {score === activeScenario.questions.length ? 'Perfect Score! Domain Expert!' : score >= activeScenario.questions.length / 2 ? 'Good Job! Keep Learning' : 'Keep Studying — You Got This!'}
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-dim)' }}>
          {Math.round((score / activeScenario.questions.length) * 100)}% accuracy
        </div>
      </div>

      {/* Review answers */}
      <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: 'var(--text)' }}>Answer Review</h3>
      {activeScenario.questions.map((q, i) => (
        <div key={i} className="question-card" style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>Q{i + 1}: {q.q}</div>
          {q.options.map((opt, j) => (
            <div
              key={j}
              className={`option-btn ${j === q.answer ? 'correct' : answers[i] === j ? 'wrong' : 'revealed'}`}
              style={{ marginBottom: 6, pointerEvents: 'none' }}
            >
              {j === q.answer ? '✓ ' : answers[i] === j ? '✗ ' : ''}{opt}
            </div>
          ))}
          <div style={{ marginTop: 12, background: 'rgba(88,166,255,0.08)', borderRadius: 8, padding: '10px 14px', fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.7, border: '1px solid rgba(88,166,255,0.15)' }}>
            <strong style={{ color: 'var(--accent)' }}>Expert Explanation: </strong>{q.explanation}
          </div>
        </div>
      ))}

      <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
        <button onClick={() => startScenario(activeScenario)} style={{ background: 'var(--primary)', color: 'white', padding: '10px 20px', borderRadius: 8, fontSize: 13, fontWeight: 600 }}>Retry Scenario</button>
        <button onClick={() => setStep('list')} style={{ background: 'var(--surface)', color: 'var(--text)', padding: '10px 20px', borderRadius: 8, fontSize: 13, border: '1px solid var(--border)' }}>All Scenarios</button>
      </div>
    </div>
  )

  // Active scenario
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <button onClick={() => setStep('list')} style={{ background: 'var(--surface)', color: 'var(--text-dim)', padding: '6px 12px', borderRadius: 6, fontSize: 12, border: '1px solid var(--border)' }}>← Back</button>
        <div className="page-title" style={{ marginBottom: 0, fontSize: 20 }}>{activeScenario.icon} {activeScenario.title}</div>
        <span style={{ fontSize: 11, fontWeight: 700, color: difficultyColor[activeScenario.difficulty], background: `${difficultyColor[activeScenario.difficulty]}22`, padding: '3px 10px', borderRadius: 10 }}>{activeScenario.difficulty}</span>
      </div>

      {/* Context */}
      <div className="card" style={{ marginBottom: 24, borderLeft: '4px solid var(--accent)' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>📋 Scenario Context</div>
        <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.8, marginBottom: 16 }}>{activeScenario.context}</p>
        <div>
          <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 6, fontWeight: 600 }}>KEY STAKEHOLDERS INVOLVED</div>
          <div className="pill-list">
            {activeScenario.stakeholders.map(s => <span key={s} className="pill pill-blue">{s}</span>)}
          </div>
        </div>
      </div>

      {/* Questions */}
      <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Your Analysis ({Object.keys(answers).length}/{activeScenario.questions.length} answered)</h3>

      {activeScenario.questions.map((q, i) => (
        <div key={i} className="question-card">
          <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
            <div style={{ background: 'var(--primary)', color: 'white', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', lineHeight: 1.5 }}>{q.q}</div>
          </div>

          {q.options.map((opt, j) => (
            <button
              key={j}
              className={`option-btn ${revealed[i] ? (j === q.answer ? 'correct' : answers[i] === j ? 'wrong' : 'revealed') : ''}`}
              onClick={() => handleAnswer(i, j)}
              disabled={!!revealed[i]}
            >
              <span style={{ color: 'var(--text-muted)', marginRight: 8, fontSize: 11 }}>{String.fromCharCode(65 + j)}.</span>
              {opt}
            </button>
          ))}

          {revealed[i] && (
            <div style={{ marginTop: 12, background: 'rgba(88,166,255,0.06)', borderRadius: 8, padding: '12px 14px', fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.7, border: '1px solid rgba(88,166,255,0.15)', animation: 'fadeIn 0.3s ease' }}>
              <strong style={{ color: answers[i] === q.answer ? 'var(--green)' : 'var(--red)' }}>
                {answers[i] === q.answer ? '✓ Correct! ' : '✗ Incorrect. '}
              </strong>
              {q.explanation}
            </div>
          )}
        </div>
      ))}

      {allAnswered && (
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <button
            onClick={submitScenario}
            style={{ background: 'linear-gradient(135deg, #1f6feb, #00b4d8)', color: 'white', padding: '12px 32px', borderRadius: 8, fontSize: 15, fontWeight: 700 }}
          >
            View Results →
          </button>
        </div>
      )}

      {!allAnswered && (
        <div style={{ color: 'var(--text-muted)', fontSize: 12, textAlign: 'center', marginTop: 16 }}>
          Answer all {activeScenario.questions.length} questions to see your results
        </div>
      )}
    </div>
  )
}
