
const education = [
  {
    degree: 'B.E – Electrical & Electronics Engineering',
    short: 'B.E EEE',
    institution: 'Vels Institute of Science, Technology & Advanced Studies (VISTAS)',
    location: 'Chennai',
    year: '2019 – 2023',
    score: '87%',
    icon: '🎓',
    color: '#6c63ff',
    grade: 'Distinction',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    short: 'HSC',
    institution: 'Rajshree Sugars Ramakrishna Vidyalaya Matriculation Higher Secondary School',
    location: 'Villupuram',
    year: '2018 - 2019',
    score: '61%',
    icon: '📚',
    color: '#00d4aa',
    grade: 'First Class',
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    short: 'SSLC',
    institution: 'Rajshree Sugars Ramakrishna Vidyalaya Matriculation Higher Secondary School',
    location: 'Villupuram',
    year: '2016 - 2017',
    score: '90%',
    icon: '🏫',
    color: '#ffd93d',
    grade: 'Distinction',
  },
];

const activities = [
  {
    icon: '🏃',
    title: 'Triple Jump – Third Place',
    event: 'Intra University Sports Meet',
    org: 'Vels Institute of Science, Technology & Advanced Studies (VISTAS)',
    year: '2022',
  },
  {
    icon: '🏅',
    title: 'Triple Jump – State Participant',
    event: 'Republic Day Athletes Sports Meet',
    org: 'Kalasalingam University, Krishnankoil, Virudhunagar (D.T)',
    year: '2016–2017',
  },
];

export default function Education() {
  return (
    <section id="education" className="section edu-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">📖 Academic Background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic milestones that shaped my technical and analytical thinking.
          </p>
          <div className="grad-line" />
        </div>

        <div className="edu-grid">
          {education.map((edu, i) => (
            <div key={i} className="edu-card card" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="edu-top-bar" style={{ background: `linear-gradient(90deg, ${edu.color}, ${edu.color}44)` }} />
              <div className="edu-icon-wrap" style={{ background: `${edu.color}18`, border: `1px solid ${edu.color}30` }}>
                {edu.icon}
              </div>

              <div className="edu-badge" style={{ color: edu.color, borderColor: `${edu.color}40`, background: `${edu.color}12` }}>
                {edu.short}
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-location">📍 {edu.location}</p>

              <div className="edu-footer">
                <div className="edu-score-wrap">
                  <span className="edu-score" style={{ color: edu.color }}>{edu.score}</span>
                  <span className="edu-grade">{edu.grade}</span>
                </div>
                <span className="edu-year">🗓️ {edu.year}</span>
              </div>

              <div className="edu-score-bar">
                <div
                  className="edu-score-fill"
                  style={{
                    width: edu.score,
                    background: `linear-gradient(90deg, ${edu.color}, ${edu.color}66)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Extracurricular */}
        <div className="extra-section">
          <div className="section-header" style={{ marginTop: 64, marginBottom: 32 }}>
            <span className="section-tag">🏆 Sports & Activities</span>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Extracurricular</h2>
            <div className="grad-line" />
          </div>

          <div className="extra-grid">
            {activities.map((act, i) => (
              <div key={i} className="extra-card card">
                <div className="extra-icon">{act.icon}</div>
                <div>
                  <h4 className="extra-title">{act.title}</h4>
                  <p className="extra-event">{act.event}</p>
                  <p className="extra-org">{act.org}</p>
                  <span className="extra-year">🗓️ {act.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
