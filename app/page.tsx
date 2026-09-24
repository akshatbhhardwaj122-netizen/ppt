'use client'

import { useEffect, useState, useCallback } from 'react'
import {
  ArrowLeft, ArrowRight, Maximize2, Sparkles,
  MessageCircle, Bird, Gamepad2, Cloud, Brain, CreditCard, Music,
  Globe, Microscope, HeartPulse, Sprout, BookOpen, Users,
  Cpu, Zap, Shield, Rocket
} from 'lucide-react'

const slides = ['01', '02', '03', '04', '05']

/* ── Animated Counter ────────────────────────────── */
function Counter({ end, suffix = '', active }: { end: number; suffix?: string; active: boolean }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) { setVal(0); return }
    let frame: number
    const start = performance.now()
    const dur = 1800
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setVal(Math.round(ease * end))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, end])
  return <>{val}{suffix}</>
}

/* ── Slide 1 only: Orbital Graphic ───────────────── */
function OrbitalGraphic() {
  const labels = ['SOCIAL', 'GAMING', 'CLOUD', 'AI']
  return (
    <div className="orbital" aria-hidden="true">
      <div className="orbital-core">
        <span>TC</span>
        <strong>TENCENT</strong>
      </div>
      {labels.map((label, i) => (
        <div
          className="orbit-node"
          key={label}
          style={{ ['--i' as string]: i, ['--angle' as string]: '90deg' }}
        >
          {label}
        </div>
      ))}
      <div className="orbital-ring ring-one" />
      <div className="orbital-ring ring-two" />
      <div className="orbital-ring ring-three" />
    </div>
  )
}

/* ── Slide 2: Radial Icon Hub ───────────────────── */
function RadialHub() {
  const items = [
    { label: 'WeChat', Icon: MessageCircle, color: '#07c160' },
    { label: 'QQ', Icon: Bird, color: '#00A4FF' },
    { label: 'Gaming', Icon: Gamepad2, color: '#0052D9' },
    { label: 'Cloud', Icon: Cloud, color: '#00A4FF' },
    { label: 'AI', Icon: Brain, color: '#0052D9' },
    { label: 'FinTech', Icon: CreditCard, color: '#00D9A6' },
  ]
  return (
    <div className="radial-hub" aria-hidden="true">
      <div className="radial-core">
        <span>TC</span>
        <strong>ECOSYSTEM</strong>
      </div>
      <div className="radial-orbit radial-orbit-1" />
      <div className="radial-orbit radial-orbit-2" />
      {items.map((item, i) => (
        <div
          className="radial-node"
          key={item.label}
          style={{
            ['--i' as string]: i,
            ['--total' as string]: items.length,
            ['--node-color' as string]: item.color,
          }}
        >
          <item.Icon size={18} strokeWidth={1.8} color={item.color} />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

/* ── Slide 3: Pulse Wave Visual ─────────────────── */
function PulseWave() {
  return (
    <div className="pulse-wave" aria-hidden="true">
      <div className="pw-ring pw-ring-1" />
      <div className="pw-ring pw-ring-2" />
      <div className="pw-ring pw-ring-3" />
      <div className="pw-ring pw-ring-4" />
      <div className="pw-core">
        <span className="pw-icon"><Globe size={28} strokeWidth={1.5} color="white" /></span>
        <span className="pw-label">TECH FOR<br />GOOD</span>
      </div>
      <div className="pw-particle pw-p1"><Microscope size={18} strokeWidth={1.5} /></div>
      <div className="pw-particle pw-p2"><HeartPulse size={18} strokeWidth={1.5} /></div>
      <div className="pw-particle pw-p3"><Sprout size={18} strokeWidth={1.5} /></div>
      <div className="pw-particle pw-p4"><BookOpen size={18} strokeWidth={1.5} /></div>
      <div className="pw-particle pw-p5"><Users size={18} strokeWidth={1.5} /></div>
    </div>
  )
}

/* ── Slide 5: Constellation Map ─────────────────── */
function ConstellationMap() {
  return (
    <div className="constellation" aria-hidden="true">
      <svg className="constellation-svg" viewBox="0 0 400 400">
        <line x1="200" y1="100" x2="120" y2="200" className="const-line" />
        <line x1="200" y1="100" x2="280" y2="200" className="const-line" />
        <line x1="120" y1="200" x2="160" y2="310" className="const-line" />
        <line x1="280" y1="200" x2="240" y2="310" className="const-line" />
        <line x1="160" y1="310" x2="240" y2="310" className="const-line" />
        <line x1="120" y1="200" x2="280" y2="200" className="const-line" />
        <line x1="50" y1="150" x2="120" y2="200" className="const-line" />
        <line x1="350" y1="150" x2="280" y2="200" className="const-line" />
        <circle cx="200" cy="100" r="6" className="const-star const-s1" />
        <circle cx="120" cy="200" r="5" className="const-star const-s2" />
        <circle cx="280" cy="200" r="5" className="const-star const-s3" />
        <circle cx="160" cy="310" r="4" className="const-star const-s4" />
        <circle cx="240" cy="310" r="4" className="const-star const-s5" />
        <circle cx="50" cy="150" r="3" className="const-star const-s6" />
        <circle cx="350" cy="150" r="3" className="const-star const-s7" />
      </svg>
      <div className="const-label const-l1">Innovation</div>
      <div className="const-label const-l2">Connection</div>
      <div className="const-label const-l3">Impact</div>
      <div className="const-glow" />
    </div>
  )
}

function Slide({ index, active }: { index: number; active: boolean }) {
  return (
    <section
      className={`slide slide-${index + 1} ${active ? 'is-active' : ''}`}
      aria-hidden={!active}
    >
      {/* ── SLIDE 1 — Introduction ─────────────────────── */}
      {index === 0 && (
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              01 / INTRODUCTION
            </div>
            <h1>
              Tencent
              <br />
              <span className="accent">Holdings.</span>
            </h1>
            <p className="hero-sub">
              Connecting people,
              <br />
              <em>products and services.</em>
            </p>
            <p className="hero-desc">
              <strong>Mission:</strong> "Value for Users, Tech for Good."<br/>
              <strong>Vision:</strong> "To become the most respected internet enterprise."<br/>
              <strong>Core Values:</strong> Integrity, Proactivity, Collaboration, and Innovation.<br/>
              Tencent is a global leader in communication (WeChat, QQ), gaming, and cloud technologies.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <strong><Counter end={1998} active={active} /></strong>
                <span>Founded</span>
              </div>
              <div className="stat">
                <strong><Counter end={1} active={active} suffix=".3B+" /></strong>
                <span>WeChat Users</span>
              </div>
              <div className="stat">
                <strong><Counter end={110} active={active} suffix="K+" /></strong>
                <span>Employees</span>
              </div>
              <div className="stat">
                <strong>$<Counter end={480} active={active} suffix="B" /></strong>
                <span>Market Cap</span>
              </div>
            </div>
            <div className="mission">&ldquo;Value for Users, Tech for Good.&rdquo;</div>
          </div>
          <div className="hero-art">
            <div className="cityline" />
            <OrbitalGraphic />
            <div className="reference-stack">
              <img src="/tencent-reference-home.jpg" alt="Tencent official website reference" />
              <span>OFFICIAL WEBSITE REFERENCE</span>
            </div>
          </div>
        </div>
      )}

      {/* ── SLIDE 2 — Job Profile ────────────────── */}
      {index === 1 && (
        <div className="eco-grid">
          <div className="eco-text">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              02 / JOB PROFILE
            </div>
            <h2>
              Frontend Engineer.
              <br />
              <span>WeChat Ecosystem.</span>
            </h2>
            <p>
              This role is critical for shaping the digital experiences of over 1.3 billion users. The position demands technical excellence and a user-first mindset to build scalable, high-performance web applications and WeChat mini-programs.
            </p>
            <div className="eco-key-metrics">
              <div className="ek"><strong>B.S.</strong><span>Comp. Science</span></div>
              <div className="ek"><strong>2+</strong><span>Years Exp.</span></div>
              <div className="ek"><strong>React</strong><span>Core Tech</span></div>
            </div>
          </div>
          <div className="eco-visual" style={{ opacity: 0.6 }}>
            <RadialHub />
          </div>
          <div className="ecosystem-labels">
            {([
              ['RESPONSIBILITIES', 'Develop UI/UX for WeChat web services. Collaborate with backend and design teams to deliver seamless features.', MessageCircle],
              ['ELIGIBILITY', 'Bachelor’s degree in Computer Science or related fields. Minimum 2 years of frontend development experience.', BookOpen],
              ['TECHNICAL SKILLS', 'Deep expertise in JavaScript/TypeScript, React/Vue, HTML5, CSS3, and frontend performance optimization.', Cpu],
              ['BEHAVIOURAL SKILLS', 'Strong problem-solving abilities, adaptability to fast-paced environments, and cross-functional communication.', Users],
            ] as const).map(([title, desc, Icon], i) => (
              <article key={title}>
                <div className="eco-card-icon"><Icon size={18} strokeWidth={1.5} /></div>
                <b>0{i + 1}</b>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="eco-card-shine" />
              </article>
            ))}
          </div>
        </div>
      )}

      {/* ── SLIDE 3 — Skills & Competencies ──────── */}
      {index === 2 && (
        <div className="tech-grid">
          <div className="tech-left">
            <div className="tech-heading">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                03 / SKILLS & COMPETENCIES
              </div>
              <h2>
                Required
                <br />
                <span>Expertise.</span>
              </h2>
              <p>
                Succeeding in this role requires a balanced mix of technical mastery and behavioural excellence, directly impacting WeChat's performance and user satisfaction.
              </p>
              <div className="tech-initiatives" style={{ gap: '1rem', marginTop: '1.5rem' }}>
                <div className="ti" style={{ alignItems: 'flex-start' }}>
                  <Cpu size={20} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 4 }} />
                  <div>
                    <strong style={{ color: 'white', display: 'block', marginBottom: 2 }}>Web Technologies (Technical)</strong>
                    <span style={{ display: 'block', opacity: 0.8, lineHeight: 1.4, fontSize: '0.85em' }}>
                      <strong>What:</strong> Advanced React & Next.js.<br/>
                      <strong>Why:</strong> To render complex UI at scale without lag.<br/>
                      <strong>How:</strong> By implementing component-based architecture.
                    </span>
                  </div>
                </div>
                <div className="ti" style={{ alignItems: 'flex-start' }}>
                  <Brain size={20} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 4 }} />
                  <div>
                    <strong style={{ color: 'white', display: 'block', marginBottom: 2 }}>Problem-Solving (Behavioural)</strong>
                    <span style={{ display: 'block', opacity: 0.8, lineHeight: 1.4, fontSize: '0.85em' }}>
                      <strong>What:</strong> Navigating edge-cases and bugs.<br/>
                      <strong>Why:</strong> A single bug can affect millions instantly.<br/>
                      <strong>How:</strong> Methodical debugging and analytical thinking.
                    </span>
                  </div>
                </div>
                <div className="ti" style={{ alignItems: 'flex-start' }}>
                  <Users size={20} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 4 }} />
                  <div>
                    <strong style={{ color: 'white', display: 'block', marginBottom: 2 }}>Collaboration (Professional)</strong>
                    <span style={{ display: 'block', opacity: 0.8, lineHeight: 1.4, fontSize: '0.85em' }}>
                      <strong>What:</strong> Working seamlessly with other teams.<br/>
                      <strong>Why:</strong> To ensure the product matches the design vision.<br/>
                      <strong>How:</strong> Clear communication and agile workflows.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="impact-visual">
              <img
                src="/tencent-reference-feature.jpg"
                alt="Tencent official website feature reference"
              />
              <div className="impact-caption">
                <span>ROLE IMPACT</span>
                <strong>
                  Building interfaces that empower billions of users globally.
                </strong>
              </div>
            </div>
          </div>
          <div className="tech-right">
            <PulseWave />
            <div className="culture-note">
              <span>CORE FOCUS</span>
              <strong>
                Scalability,
                <br />
                Performance.
              </strong>
              <small>WeChat Ecosystem</small>
            </div>
          </div>
        </div>
      )}

      {/* ── SLIDE 4 — Strategic Alignment ────────────── */}
      {index === 3 && (
        <div className="career-layout">
          <div className="career-left">
            <div className="career-heading">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                04 / STRATEGIC ALIGNMENT
              </div>
              <h2>
                Connecting
                <br />
                <span>Role & Vision.</span>
              </h2>
              <p>
                Tencent's mission is "Value for Users, Tech for Good." 
                The Frontend Engineer directly executes this by building the very interfaces that connect billions of people to essential daily services.
              </p>
            </div>
            <div className="bottom-quote">
              <Zap size={18} strokeWidth={1.5} />
              Aligning technical execution with business objectives.
            </div>
          </div>
          <div className="career-grid">
            {([
              ['BUSINESS GOAL', 'Expand digital ecosystem accessibility and ensure platform stability for 1.3B users globally.', Globe],
              ['CORE VALUE: INNOVATION', 'The job demands cutting-edge web performance optimizations to stay ahead in a competitive market.', Sparkles],
              ['MISSION REFLECTION', '"Value for Users" means the UI must be flawless. The job requires meticulous attention to UX details.', HeartPulse],
              ['STRATEGIC IMPACT', 'By mastering technical and collaborative skills, the engineer drives product adoption and growth.', Rocket],
            ] as const).map(([a, b, Icon], i) => (
              <article key={a} className="career-card" style={{ ['--i' as string]: i }}>
                <div className="career-card-icon"><Icon size={22} strokeWidth={1.5} /></div>
                <b>0{i + 1}</b>
                <h3>{a}</h3>
                <p>{b}</p>
                <div className="career-card-glow" />
              </article>
            ))}
          </div>
        </div>
      )}

      {/* ── SLIDE 5 — Conclusion ───────────────── */}
      {index === 4 && (
        <div className="final-grid">
          <div className="final-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              05 / CONCLUSION & ALIGNMENT
            </div>
            <h2>
              Profile
              <br />
              <span>Alignment.</span>
            </h2>
            <p className="final-desc">
              Tencent requires individuals who embody innovation, technical mastery, and a user-first approach. 
              My background in modern web development perfectly aligns with the core requirements of the Frontend Engineer role, while my commitment to continuous learning addresses the dynamic nature of Tencent's ecosystem.
            </p>
            <div className="final-takeaways">
              <div className="ft"><strong>Strengths</strong><span>Strong React/JS skills, UI/UX focus, and proactive problem-solving.</span></div>
              <div className="ft"><strong>Growth Area</strong><span>Further scaling experience with systems serving 1B+ users.</span></div>
              <div className="ft"><strong>Conclusion</strong><span>Ready to contribute to "Tech for Good" and open for discussion.</span></div>
            </div>
            <div className="final-question">
              <small>POST-PRESENTATION DISCUSSION</small>
              <strong>
                "How do my skills and experiences align with Tencent's vision for this role?"
              </strong>
            </div>
            <div className="thank-you">
              THANK YOU <span>Q&A</span>
            </div>
          </div>
          <div className="final-art">
            <ConstellationMap />
          </div>
        </div>
      )}
    </section>
  )
}

export default function Page() {
  const [current, setCurrent] = useState(0)
  const [help, setHelp] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const go = useCallback((next: number) => {
    const clamped = Math.max(0, Math.min(4, next))
    if (clamped === current) return
    setDirection(clamped > current ? 'next' : 'prev')
    setCurrent(clamped)
  }, [current])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        go(current + 1)
      }
      if (e.key === 'ArrowLeft') go(current - 1)
      if (e.key.toLowerCase() === 'f') document.documentElement.requestFullscreen?.()
      if (e.key === '?') setHelp((v) => !v)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [current, go])

  return (
    <main
      className={`presentation dir-${direction}`}
      onClick={(e) => {
        if (e.clientX > window.innerWidth * 0.72) go(current + 1)
        else if (e.clientX < window.innerWidth * 0.28) go(current - 1)
      }}
    >
      <div className="ambient" />
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />
      <div className="gradient-orb orb-3" />

      <div className="floating-particles" aria-hidden="true">
        <div className="fp fp-1" />
        <div className="fp fp-2" />
        <div className="fp fp-3" />
        <div className="fp fp-4" />
        <div className="fp fp-5" />
        <div className="fp fp-6" />
        <div className="fp fp-7" />
        <div className="fp fp-8" />
      </div>

      <header className="topbar">
        <div className="brand-mark">
          <img src="/tencent-wordmark.png" alt="Tencent" />
        </div>
        <div className="slide-indicator">
          {slides.map((s, i) => (
            <button
              key={s}
              className={`dot ${i === current ? 'dot-active' : ''}`}
              onClick={(e) => { e.stopPropagation(); go(i) }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="top-meta">
          FUTURE OF TECHNOLOGY <i /> TENCENT.COM
        </div>
        <button
          className="icon-btn"
          aria-label="Toggle keyboard help"
          onClick={(e) => {
            e.stopPropagation()
            setHelp((v) => !v)
          }}
        >
          <Sparkles size={15} />
        </button>
        <button
          className="icon-btn"
          aria-label="Enter fullscreen"
          onClick={(e) => {
            e.stopPropagation()
            document.documentElement.requestFullscreen?.()
          }}
        >
          <Maximize2 size={15} />
        </button>
      </header>

      <div className="slides">
        {slides.map((_, i) => (
          <Slide key={i} index={i} active={i === current} />
        ))}
      </div>

      <footer className="controls" onClick={(e) => e.stopPropagation()}>
        <button className="nav-btn" aria-label="Previous slide" onClick={() => go(current - 1)}>
          <ArrowLeft size={16} />
        </button>
        <div className="progress">
          <span>{slides[current]}</span>
          <div className="progress-line">
            <i style={{ width: `${((current + 1) / 5) * 100}%` }} />
          </div>
          <span>05</span>
        </div>
        <button className="nav-btn" aria-label="Next slide" onClick={() => go(current + 1)}>
          <ArrowRight size={16} />
        </button>
      </footer>

      {help && (
        <div className="help-panel" onClick={(e) => e.stopPropagation()}>
          <b>Navigate</b>
          <span>
            <strong>← →</strong> or <strong>SPACE</strong> move slides
          </span>
          <span>
            <strong>F</strong> fullscreen · <strong>?</strong> toggle help
          </span>
          <button onClick={() => setHelp(false)}>CLOSE</button>
        </div>
      )}
    </main>
  )
}
