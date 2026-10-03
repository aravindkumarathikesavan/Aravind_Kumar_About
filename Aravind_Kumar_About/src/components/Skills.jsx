import { useState, useEffect, useCallback, useRef } from 'react';

const skills = [
  {
    name: 'JavaScript',
    icon: '⚡',
    color: '#f7df1e',
    category: 'Language',
    points: [
      'Develop interactive and dynamic web applications.',
      'Work with modern JavaScript features and application logic.',
      'Integrate APIs and frontend components.',
    ],
  },
  {
    name: 'TypeScript',
    icon: '🔷',
    color: '#3178c6',
    category: 'Language',
    points: [
      'Build type-safe and maintainable applications.',
      'Use interfaces, types, and structured application models.',
      'Apply TypeScript in modern frontend development.',
    ],
  },
  {
    name: 'Python',
    icon: '🐍',
    color: '#3572a5',
    category: 'Language',
    points: [
      'Develop software solutions using Python.',
      'Work with application logic and APIs.',
      'Apply Python for development and data-related tasks.',
    ],
  },
  {
    name: 'React.js',
    icon: '⚛️',
    color: '#61dafb',
    category: 'Framework',
    points: [
      'Build responsive web applications with reusable components.',
      'Integrate REST APIs and manage application state.',
      'Develop scalable and maintainable user interfaces.',
    ],
  },
  {
    name: 'React Native',
    icon: '📱',
    color: '#6c63ff',
    category: 'Mobile',
    points: [
      'Build cross-platform mobile applications.',
      'Implement UI, API integration, and state management.',
      'Work on application performance and optimization.',
    ],
  },
  {
    name: 'Vue.js',
    icon: '🟩',
    color: '#41b883',
    category: 'Framework',
    points: [
      'Develop responsive web interfaces.',
      'Build reusable components and application features.',
      'Integrate frontend applications with backend services.',
    ],
  },
  {
    name: 'Node.js',
    icon: '🟢',
    color: '#539e43',
    category: 'Backend',
    points: [
      'Develop server-side application functionality.',
      'Build and integrate REST APIs.',
      'Implement backend logic for web applications.',
    ],
  },
  {
    name: 'HTML',
    icon: '🌐',
    color: '#e34f26',
    category: 'Frontend',
    points: [
      'Create structured web page layouts.',
      'Build semantic and responsive interfaces.',
      'Work with frontend frameworks and components.',
    ],
  },
  {
    name: 'CSS',
    icon: '🎨',
    color: '#264de4',
    category: 'Frontend',
    points: [
      'Design responsive and user-friendly interfaces.',
      'Implement layouts, styling, and visual components.',
      'Create consistent designs across screen sizes.',
    ],
  },
  {
    name: 'Tailwind CSS',
    icon: '💨',
    color: '#06b6d4',
    category: 'Frontend',
    points: [
      'Build responsive interfaces using utility classes.',
      'Create reusable and consistent UI designs.',
      'Develop modern layouts efficiently.',
    ],
  },
  {
    name: 'SQL',
    icon: '🗃️',
    color: '#00758f',
    category: 'Database',
    points: [
      'Write queries for relational databases.',
      'Retrieve and manage application data.',
      'Work with database-driven application requirements.',
    ],
  },
  {
    name: 'MongoDB',
    icon: '🍃',
    color: '#47a248',
    category: 'Database',
    points: [
      'Work with NoSQL database structures.',
      'Store and retrieve application data.',
      'Integrate MongoDB with backend applications.',
    ],
  },
  {
    name: 'CockroachDB',
    icon: '🪳',
    color: '#6933ff',
    category: 'Database',
    points: [
      'Work with distributed SQL database concepts.',
      'Integrate database operations with applications.',
      'Manage application data through SQL-based workflows.',
    ],
  },
  {
    name: 'Power BI',
    icon: '📊',
    color: '#f2c811',
    category: 'Analytics',
    points: [
      'Create data visualizations and reports.',
      'Build dashboards for presenting data insights.',
      'Work with data analysis and reporting workflows.',
    ],
  },
  {
    name: 'REST APIs',
    icon: '🔗',
    color: '#ff6b6b',
    category: 'Backend',
    points: [
      'Integrate APIs with web and mobile applications.',
      'Connect frontend applications with backend services.',
      'Handle API requests, responses, and application data.',
    ],
  },
  {
    name: 'Git',
    icon: '🐙',
    color: '#f05032',
    category: 'Tools',
    points: [
      'Manage source code using version control.',
      'Track development changes and maintain project history.',
      'Support collaborative software development workflows.',
    ],
  },
  {
    name: 'Analog & IP Camera Setup',
    icon: '📹',
    color: '#9b59b6',
    category: 'Hardware & CCTV',
    points: [
      'Install analog and IP-based CCTV cameras.',
      'Configure camera connections and installations.',
      'Troubleshoot camera connectivity and setup issues.',
    ],
  },
  {
    name: 'DVR/NVR Configuration',
    icon: '📼',
    color: '#e67e22',
    category: 'Hardware & CCTV',
    points: [
      'Configure DVR and NVR systems.',
      'Connect and manage CCTV camera systems.',
      'Troubleshoot recording and surveillance system issues.',
    ],
  },
  {
    name: 'Network Cabling',
    icon: '🔌',
    color: '#1abc9c',
    category: 'Networking',
    points: [
      'Install coaxial and Cat6 network cabling.',
      'Route cables through walls and ceilings.',
      'Perform structured cabling for CCTV and network systems.',
    ],
  },
  {
    name: 'Networking Tools',
    icon: '🛠️',
    color: '#3498db',
    category: 'Networking',
    points: [
      'Work with tools required for network installations.',
      'Support CCTV and network infrastructure setup.',
      'Use appropriate tools for installation and troubleshooting.',
    ],
  },
  {
    name: 'Router Setup',
    icon: '📡',
    color: '#00d4aa',
    category: 'Networking',
    points: [
      'Perform basic router configuration.',
      'Configure network connectivity for installations.',
      'Troubleshoot basic network connectivity issues.',
    ],
  },
  {
    name: 'Troubleshooting & Maintenance',
    icon: '🔧',
    color: '#e74c3c',
    category: 'Hardware & Support',
    points: [
      'Diagnose hardware and system issues.',
      'Perform maintenance for client installations.',
      'Troubleshoot CCTV, networking, and related technical problems.',
    ],
  },
];

const total = skills.length;
const TICK_MS = 50; // 50ms * 100 ticks = 5000ms (5 seconds)

export default function Skills() {
  const [current, setCurrent]   = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const go = useCallback((dir) => {
    setCurrent(prev =>
      dir === 'right'
        ? (prev + 1) % total
        : (prev - 1 + total) % total
    );
    setProgress(0);
    setIsPaused(false);
  }, []);

  const goTo = useCallback((idx) => {
    setCurrent(idx);
    setProgress(0);
    setIsPaused(false);
  }, []);

  // Smooth 5-second timer that resets on slide change and auto-changes smoothly
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrent((c) => (c + 1) % total);
          return 0;
        }
        return prev + 1; // 1% per 50ms = 100% in 5000ms
      });
    }, TICK_MS);

    return () => clearInterval(interval);
  }, [current, isPaused]);

  // Only pause when hovering the active card on desktop with mouse
  const handleCardMouseEnter = () => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover)').matches) {
      setIsPaused(true);
    }
  };

  const handleCardMouseLeave = () => {
    setIsPaused(false);
  };

  // Touch swipe support for mobile & tablet
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        go('right');
      } else {
        go('left');
      }
    }
    touchStartX.current = null;
  };

  const prevIdx = (current - 1 + total) % total;
  const nextIdx = (current + 1) % total;
  const active  = skills[current];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">🚀 Technical Expertise</span>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Every skill — one at a time. Auto-scrolls every 5s or navigate with arrows and swipe.
          </p>
          <div className="grad-line" />
        </div>

        {/* ── Carousel root ── */}
        <div
          className="sk-root"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left arrow */}
          <button
            type="button"
            className="sk-arrow sk-arrow-left"
            onClick={() => go('left')}
            aria-label="Previous Skill"
          >
            ‹
          </button>

          {/* Fixed-height track */}
          <div className="sk-track">
            {/* Left side card */}
            <div
              className="sk-card sk-side"
              style={{ '--sk-color': skills[prevIdx].color }}
              onClick={() => go('left')}
            >
              <div className="sk-icon-wrap">
                <span>{skills[prevIdx].icon}</span>
              </div>
              <div className="sk-category">{skills[prevIdx].category}</div>
              <div className="sk-name sk-name-side">{skills[prevIdx].name}</div>
            </div>

            {/* Centre card */}
            <div
              className="sk-card sk-center"
              key={current}
              style={{ '--sk-color': active.color }}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              {/* Card top animated progress bar */}
              <div className="sk-top-bar">
                <div
                  className="sk-top-bar-fill"
                  style={{
                    width: `${progress}%`,
                    background: `linear-gradient(90deg, ${active.color}88, ${active.color}, #ffffff)`,
                    boxShadow: `0 0 10px ${active.color}`,
                  }}
                />
              </div>

              <div className="sk-card-header">
                <div className="sk-icon-wrap sk-icon-lg">
                  <span>{active.icon}</span>
                </div>
                <div className="sk-title-group">
                  <div className="sk-category">{active.category}</div>
                  <h3 className="sk-name">{active.name}</h3>
                </div>
              </div>

              <ul className="sk-points">
                {active.points.map((p, i) => (
                  <li key={i}>
                    <span className="sk-bullet" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side card */}
            <div
              className="sk-card sk-side"
              style={{ '--sk-color': skills[nextIdx].color }}
              onClick={() => go('right')}
            >
              <div className="sk-icon-wrap">
                <span>{skills[nextIdx].icon}</span>
              </div>
              <div className="sk-category">{skills[nextIdx].category}</div>
              <div className="sk-name sk-name-side">{skills[nextIdx].name}</div>
            </div>
          </div>

          {/* Right arrow */}
          <button
            type="button"
            className="sk-arrow sk-arrow-right"
            onClick={() => go('right')}
            aria-label="Next Skill"
          >
            ›
          </button>
        </div>

        {/* ── Bottom: Dots with active pill timer & counter ── */}
        <div className="sk-bottom">
          {/* Dots */}
          <div className="sk-dots" role="tablist">
            {skills.map((sk, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === current}
                aria-label={sk.name}
                className={`sk-dot ${i === current ? 'active' : ''}`}
                style={i === current ? { borderColor: active.color } : {}}
                onClick={() => goTo(i)}
              >
                {/* 5-second animated fill inside active dot pill */}
                {i === current && (
                  <span
                    className="sk-dot-fill"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: active.color,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Counter & quick nav */}
          <div className="sk-counter-label">
            <span className="sk-current-tag" style={{ color: active.color }}>
              <span>{active.icon}</span> {active.name}
            </span>
            <span className="sk-counter">{current + 1} / {total}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
