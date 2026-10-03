
const strengths = [
  { icon: '✍️', text: 'Strong writing & communication skills' },
  { icon: '🔥', text: 'Highly motivated self-starter' },
  { icon: '🧩', text: 'Love working with new challenges' },
  { icon: '🗂️', text: 'Great organizational skills' },
  { icon: '💪', text: 'Works well under pressure' },
  { icon: '🤝', text: 'Team player with positive attitude' },
];

const languages = [
  { lang: 'English', level: 'Professional', pct: 90 },
  { lang: 'Tamil',   level: 'Native',       pct: 100 },
];

const training = [
  { icon: '🌐', title: 'Complete Python Full Stack Web Developer', org: 'QSpider' },
  { icon: '📊', title: 'Complete Data Analysis',                   org: 'Green Technologys' },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">🙋 About Me</span>
          <h2 className="section-title">Who Am I?</h2>
          <div className="grad-line" />
        </div>

        <div className="about-grid">
          {/* Professional Summary */}
          <div className="about-objective card">
            <div className="obj-icon">🎯</div>
            <h3>Professional Summary</h3>
            <p>
              Software Developer with over 1 year of experience building cross-platform mobile
              applications with React Native and full-stack web applications with React.js, Vue.js,
              and Node.js. Skilled in REST API integration, state management, and database design
              with MongoDB and CockroachDB. Background in hardware and network systems from prior
              CCTV technician experience. Seeking to apply front-end and back-end development skills
              to build scalable, reliable software products.
            </p>
            <div className="contact-chips">
              <a href="tel:7358494847" className="contact-chip">
                <span>📱</span> +91 7358494847
              </a>
              <a href="mailto:aravindkumarathikesavan@gmail.com" className="contact-chip">
                <span>📧</span> aravindkumarathikesavan@gmail.com
              </a>
              <span className="contact-chip">
                <span>📍</span> Villupuram, Tamil Nadu, India
              </span>
            </div>
          </div>

          {/* Strengths */}
          <div className="about-strengths card">
            <h3><span className="card-icon">⚡</span> Strengths</h3>
            <div className="strengths-grid">
              {strengths.map((s, i) => (
                <div key={i} className="strength-item">
                  <span className="strength-icon">{s.icon}</span>
                  <span>{s.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="about-languages card">
            <h3><span className="card-icon">🗣️</span> Languages</h3>
            {languages.map((l, i) => (
              <div key={i} className="lang-item">
                <div className="lang-header">
                  <span className="lang-name">{l.lang}</span>
                  <span className="lang-level">{l.level}</span>
                </div>
                <div className="lang-bar">
                  <div className="lang-fill" style={{ width: `${l.pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Professional Training */}
          <div className="about-training card">
            <h3><span className="card-icon">🎓</span> Professional Training</h3>
            {training.map((t, i) => (
              <div key={i} className="training-item">
                <div className="training-icon">{t.icon}</div>
                <div>
                  <div className="training-title">{t.title}</div>
                  <div className="training-org">@ {t.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
