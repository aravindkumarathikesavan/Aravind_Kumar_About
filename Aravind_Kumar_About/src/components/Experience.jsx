const experiences = [
  {
    id: 1,
    role: 'Software Developer',
    company: 'TeleCMI Cloud Telephony',
    location: 'Villupuram, India',
    from: 'Aug 2025',
    to: 'Present',
    current: true,
    logo: '📡',
    color: '#6c63ff',
    summary:
      'Spearheading the frontend and full-stack development of enterprise cloud telephony dashboards, cross-platform desktop applications (Electron), mobile apps (React Native), and automated verification microservices.',
    bullets: [
      'Developed the Piopiy AI Enterprise Cloud Telephony Dashboard using React 18, Tailwind CSS, and Zustand, supporting cloud telephony operations, live agent monitoring, virtual numbers, and multi-channel communication.',
      'Engineered an interactive Visual Call Flow Builder using React Flow, enabling enterprise clients to visually design automated IVR routing, hunt groups, and dynamic number assignments.',
      'Integrated Wavesurfer.js for real-time waveform audio playback, allowing supervisors and agents to visually inspect customer call recordings, playback speed, and audio clarity.',
      'Built Connle Desktop using Electron, Vite, React 18, and Zustand, supporting cross-platform desktop builds (macOS, Windows, Linux) with integrated VoIP audio calling and LiveKit WebRTC video conferencing.',
      'Developed Connle AI Mobile using React Native, Expo, and TypeScript, featuring contact syncing, QR-code device pairing, push notifications, and mobile VoIP calling.',
      'Built automated government identity verification pipelines for Aadhaar and PAN Card compliance (KYC), streamlining customer onboarding with secure API integrations.',
      'Architected high-throughput backend services and REST APIs in Node.js and Express, managing data persistence across MongoDB, PostgreSQL, and Redis caching for sub-millisecond dashboard performance.',
      'Implemented robust security governance, including Two-Factor Authentication (TOTP 2FA), IP whitelisting, session persistence with connect-mongo, and API rate limiting.',
    ],
    projects: [
      {
        name: 'Piopiy AI Telephony Dashboard',
        icon: '📊',
        role: 'Lead Frontend & Call Flow Architecture',
        tech: ['React 18', 'Zustand', 'React Flow', 'Wavesurfer.js', 'Tailwind CSS'],
        desc: 'Enterprise contact center suite featuring visual drag-and-drop call flow routing, audio waveform recording playback, live agent status monitoring, and telephony analytics.',
      },
      {
        name: 'Connle Desktop',
        icon: '💻',
        role: 'Desktop App Developer (Electron)',
        tech: ['Electron', 'Vite', 'React 18', 'Zustand', 'LiveKit / WebRTC', 'Wavesurfer.js'],
        desc: 'Cross-platform desktop communication app for macOS, Windows, and Linux featuring real-time VoIP voice calls, LiveKit video meetings, waveform audio players, and local PouchDB caching.',
      },
      {
        name: 'Connle AI Mobile',
        icon: '📱',
        role: 'Mobile App Developer',
        tech: ['React Native', 'Expo', 'TypeScript', 'WebRTC', 'Push Notifications'],
        desc: 'Cross-platform mobile VoIP communication application supporting contact syncing, QR-code device pairing, and voice/video calling.',
      },
      {
        name: 'KYC & Verification Services',
        icon: '🛡️',
        role: 'Backend & Security Architecture',
        tech: ['Node.js', 'Express', 'Aadhaar / PAN APIs', 'MongoDB', 'TOTP 2FA'],
        desc: 'Automated compliance pipelines verifying Aadhaar and PAN card credentials for client onboarding, coupled with Two-Factor Authentication security.',
      },
      {
        name: 'TeleCMI Cloud Website & Platform',
        icon: '🌐',
        role: 'Full-Stack Developer',
        tech: ['Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL', 'ZeptoMail'],
        desc: 'Official company cloud platform with dynamic rate calculators, carrier route optimization, SEO structure, and transactional email infrastructure.',
      },
    ],
    tags: [
      'React 18',
      'Electron',
      'React Native',
      'TypeScript',
      'Node.js',
      'Express',
      'Zustand',
      'React Flow',
      'Wavesurfer.js',
      'LiveKit / WebRTC',
      'Tailwind CSS',
      'MongoDB',
      'PostgreSQL',
      'Redis',
      'Aadhaar / PAN APIs',
      'Stripe',
    ],
  },
  {
    id: 2,
    role: 'CCTV Technician',
    company: 'HILTECH Security System',
    location: 'Chennai, India',
    from: 'Aug 2023',
    to: 'Jun 2025',
    current: false,
    logo: '📹',
    color: '#00d4aa',
    summary:
      'Hands-on field experience installing, configuring, and maintaining enterprise analog and IP-based surveillance systems, network cabling, and hardware infrastructure.',
    bullets: [
      'Installed and configured analog and IP-based CCTV camera systems, including DVR/NVR setup, lens calibration, and camera mounting.',
      'Ran and terminated coaxial and Cat6 network cabling through walls and ceilings in compliance with technical safety standards.',
      'Performed router configuration, IP address assignment, network troubleshooting, and preventative hardware maintenance for client installations.',
    ],
    projects: [],
    tags: [
      'CCTV Installation',
      'DVR / NVR Configuration',
      'IP Cameras',
      'Cat6 Cabling',
      'Router Setup',
      'Hardware Troubleshooting',
      'Network Maintenance',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">💼 Work History</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey — building enterprise cloud products, telephony systems, desktop apps, and mobile applications.
          </p>
          <div className="grad-line" />
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-connector">
                <div className="timeline-dot" style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}` }} />
                {idx < experiences.length - 1 && <div className="timeline-line" />}
              </div>

              <div className="exp-card card">
                {exp.current && <div className="current-badge">🟢 Current Role</div>}
                <div className="exp-header">
                  <div className="exp-logo" style={{ background: `${exp.color}18`, border: `1px solid ${exp.color}40` }}>
                    {exp.logo}
                  </div>
                  <div className="exp-meta">
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company} — {exp.location}</p>
                    <p className="exp-date">📅 {exp.from} – {exp.to}</p>
                  </div>
                </div>

                {exp.summary && <p className="exp-summary">{exp.summary}</p>}

                {/* Bullets */}
                <ul className="exp-bullets">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>
                      <span className="bullet-dot" style={{ background: exp.color }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Office Projects Highlight (TeleCMI) */}
                {exp.projects && exp.projects.length > 0 && (
                  <div className="exp-office-projects">
                    <h4 className="exp-subhead">
                      <span>🏢</span> Key TeleCMI Projects Delivered
                    </h4>
                    <div className="exp-projects-grid">
                      {exp.projects.map((proj, pIdx) => (
                        <div key={pIdx} className="exp-proj-card">
                          <div className="exp-proj-header">
                            <span className="exp-proj-icon">{proj.icon}</span>
                            <div>
                              <h5 className="exp-proj-name">{proj.name}</h5>
                              <span className="exp-proj-role">{proj.role}</span>
                            </div>
                          </div>
                          <p className="exp-proj-desc">{proj.desc}</p>
                          <div className="exp-proj-tech">
                            {proj.tech.map((t) => (
                              <span key={t} className="exp-proj-badge">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Tags */}
                <div className="exp-tags">
                  {exp.tags.map(tag => (
                    <span key={tag} className="exp-tag" style={{ borderColor: `${exp.color}40`, color: exp.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
