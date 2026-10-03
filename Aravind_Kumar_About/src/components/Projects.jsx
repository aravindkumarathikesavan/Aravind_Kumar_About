import { useState } from 'react';

const projectData = {
  title: 'AI-First CRM — HCP Interaction Logger',
  tagline: 'Intelligent Healthcare Professional CRM with Autonomous LangGraph Agent & Groq LLMs',
  liveUrl: 'https://ai-first-crm-hcp-log-interactions.onrender.com/',
  badge: '🏥 Pharma & Healthcare CRM · AI-First',
  techStack: [
    { name: 'React', color: '#61dafb' },
    { name: 'Redux Toolkit', color: '#764abc' },
    { name: 'Python', color: '#3572a5' },
    { name: 'FastAPI', color: '#009688' },
    { name: 'LangGraph', color: '#ff6b6b' },
    { name: 'Groq Cloud', color: '#f55036' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'Docker', color: '#2496ed' },
    { name: 'Render', color: '#00d4aa' },
  ],
  stats: [
    { label: 'AI Agent Tools', value: '5 Tools' },
    { label: 'Logging Modes', value: 'Dual Path' },
    { label: 'LLM Latency', value: '< 600ms' },
    { label: 'Cloud Hosting', value: 'Render' },
  ],
  tabs: [
    {
      id: 'overview',
      label: '💡 Problem & Solution',
      icon: '🎯',
      content: {
        title: 'Core Purpose & Architecture',
        description:
          'A field sales representative’s highest-friction moment is immediately after visiting a Healthcare Professional (HCP). They are in transit or between hospital rounds, and filling out traditional 12-field CRM forms leads to delayed or inaccurate reporting.',
        points: [
          {
            heading: 'Dual-Path Interaction Design',
            text: 'Reps can log visits via a Structured Form (for direct, manual entry) OR an AI Chat Interface (where they type natural conversational notes like talking to a colleague).',
          },
          {
            heading: 'Single Unified Data Model',
            text: 'Both the AI chat agent and the manual form write to the exact same Interaction schema, allowing seamless history review, editing, and analytics.',
          },
          {
            heading: 'Real-Time Field Extraction',
            text: 'The AI extracts interaction type, channel, products discussed, topics, sentiment, samples distributed, summary, and next-best-action in under 1 second.',
          },
        ],
      },
    },
    {
      id: 'tools',
      label: '🤖 5 LangGraph Tools',
      icon: '⚡',
      content: {
        title: 'Autonomous Multi-Tool Agent',
        description:
          'The LangGraph agent acts as an intent router and structured data extractor. Instead of a single brittle prompt, it routes user requests to 5 specialized tools:',
        tools: [
          {
            name: '1. Log Interaction',
            badge: 'llama-3.1-8b-instant',
            color: '#00d4aa',
            desc: 'Extracts structured interaction data (type, products, sentiment, samples, next action) from unstructured rep notes into the CRM database.',
          },
          {
            name: '2. Edit Interaction',
            badge: 'Minimal Diffing',
            color: '#6c63ff',
            desc: 'Applies targeted field updates based on natural language instructions (e.g. "change sentiment to positive and add 2 samples") without overwriting unrelated data.',
          },
          {
            name: '3. Fetch HCP History',
            badge: 'Database Read',
            color: '#3178c6',
            desc: 'Queries the database for past interactions with the doctor, giving both the rep and the AI contextual memory before prescribing actions.',
          },
          {
            name: '4. Suggest Next Best Action',
            badge: 'llama-3.3-70b-versatile',
            color: '#f55036',
            desc: 'Synthesizes long-term relationship history across multiple past meetings to recommend high-impact strategic follow-up steps.',
          },
          {
            name: '5. Schedule Follow-up',
            badge: 'Calendar Workflow',
            color: '#ffd93d',
            desc: 'Calculates and sets follow-up reminder cadences (+14 days default or rep-specified timeline) to keep engagements on schedule.',
          },
        ],
      },
    },
    {
      id: 'tech',
      label: '🛠️ Tech Stack & Tools',
      icon: '⚙️',
      content: {
        title: 'Full-Stack Implementation',
        description:
          'Built with modern enterprise-grade technologies across frontend, backend, AI orchestration, and cloud infrastructure:',
        stackGroups: [
          {
            category: 'Frontend Client',
            icon: '💻',
            items: ['React 18 (SPA)', 'Redux Toolkit (State Management)', 'Axios (REST Client)', 'Inter & Space Grotesk Typography', 'Responsive CSS'],
          },
          {
            category: 'Backend & API',
            icon: '🚀',
            items: ['Python 3.11', 'FastAPI (High-Performance ASGI)', 'Pydantic v2 (Data Validation)', 'SQLAlchemy ORM', 'SQLite / PostgreSQL Support'],
          },
          {
            category: 'AI & LLM Orchestration',
            icon: '🧠',
            items: ['LangGraph (StateGraph Workflow)', 'Groq Cloud (Ultra-Fast Inference)', 'Llama 3.1 8B Instant (Extraction)', 'Llama 3.3 70B (Complex Reasoning)'],
          },
          {
            category: 'DevOps & Deployment',
            icon: '☁️',
            items: ['Docker Multi-Stage Build', 'Render Cloud Platform', 'Uvicorn ASGI Server', 'Unified Static Serving', 'Automated Health Checks'],
          },
        ],
      },
    },
    {
      id: 'notes',
      label: '📝 Developer Notes',
      icon: '📋',
      content: {
        title: 'How It Was Created & Key Takeaways',
        description: 'Key engineering decisions made during architecture and deployment:',
        notes: [
          {
            title: 'Unified Full-Stack Deployment on Render',
            detail:
              'Configured FastAPI to serve both the REST API endpoints and the compiled React production bundle from a single Docker container, eliminating CORS issues and hosting both layers completely free on Render.',
          },
          {
            title: 'Hierarchical Model Selection',
            detail:
              'High-frequency extraction tasks use the ultra-fast, cost-effective Llama 3.1 8B model on Groq, while strategic Next-Best-Action advice routes to Llama 3.3 70B with larger context reasoning.',
          },
          {
            title: 'Human-in-the-Loop Transparency',
            detail:
              'The chat interface automatically echoes back the exact structured fields it recorded (Doctor, Sentiment, Products, Summary, Next Action), allowing the representative to verify the extraction immediately.',
          },
        ],
      },
    },
  ],
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('overview');

  const currentTab = projectData.tabs.find((t) => t.id === activeTab);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">💼 Featured Project</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Real-world enterprise applications built with cutting-edge full-stack and Generative AI technologies.
          </p>
          <div className="grad-line" />
        </div>

        {/* Featured Project Showcase Card */}
        <div className="project-card card">
          {/* Top Banner */}
          <div className="project-top">
            <div className="project-meta">
              <span className="project-badge">{projectData.badge}</span>
              <h3 className="project-title">{projectData.title}</h3>
              <p className="project-tagline">{projectData.tagline}</p>
            </div>

            {/* Live Demo Action */}
            <div className="project-actions">
              <a
                href={projectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary project-live-btn"
              >
                <span>🚀</span> Open Live Project <span>↗</span>
              </a>
              <span className="project-live-indicator">
                <span className="live-ping" />
                Live on Render
              </span>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="project-tech-chips">
            {projectData.techStack.map((tech) => (
              <span
                key={tech.name}
                className="project-tech-chip"
                style={{ borderColor: `${tech.color}40`, color: tech.color }}
              >
                <span className="tech-dot" style={{ background: tech.color }} />
                {tech.name}
              </span>
            ))}
          </div>

          {/* Quick Metrics Bar */}
          <div className="project-stats-bar">
            {projectData.stats.map((stat, i) => (
              <div key={i} className="project-stat-item">
                <span className="project-stat-val">{stat.value}</span>
                <span className="project-stat-lbl">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="project-tabs-nav">
            {projectData.tabs.map((tab) => (
              <button
                key={tab.id}
                className={`project-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="project-tab-body">
            {activeTab === 'overview' && (
              <div className="tab-pane animate-fadeInUp">
                <h4 className="tab-pane-title">{currentTab.content.title}</h4>
                <p className="tab-pane-desc">{currentTab.content.description}</p>
                <div className="overview-points-grid">
                  {currentTab.content.points.map((pt, i) => (
                    <div key={i} className="overview-point-card">
                      <div className="point-number">0{i + 1}</div>
                      <h5 className="point-heading">{pt.heading}</h5>
                      <p className="point-text">{pt.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'tools' && (
              <div className="tab-pane animate-fadeInUp">
                <h4 className="tab-pane-title">{currentTab.content.title}</h4>
                <p className="tab-pane-desc">{currentTab.content.description}</p>
                <div className="tools-list-grid">
                  {currentTab.content.tools.map((tool, i) => (
                    <div key={i} className="tool-item-card" style={{ borderColor: `${tool.color}35` }}>
                      <div className="tool-card-header">
                        <span className="tool-name" style={{ color: tool.color }}>
                          {tool.name}
                        </span>
                        <span className="tool-badge" style={{ borderColor: `${tool.color}40`, color: tool.color }}>
                          {tool.badge}
                        </span>
                      </div>
                      <p className="tool-desc">{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'tech' && (
              <div className="tab-pane animate-fadeInUp">
                <h4 className="tab-pane-title">{currentTab.content.title}</h4>
                <p className="tab-pane-desc">{currentTab.content.description}</p>
                <div className="stack-groups-grid">
                  {currentTab.content.stackGroups.map((grp, i) => (
                    <div key={i} className="stack-group-card">
                      <div className="stack-group-header">
                        <span className="stack-group-icon">{grp.icon}</span>
                        <h5 className="stack-group-cat">{grp.category}</h5>
                      </div>
                      <ul className="stack-items-list">
                        {grp.items.map((item, idx) => (
                          <li key={idx}>
                            <span className="stack-bullet" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="tab-pane animate-fadeInUp">
                <h4 className="tab-pane-title">{currentTab.content.title}</h4>
                <p className="tab-pane-desc">{currentTab.content.description}</p>
                <div className="dev-notes-list">
                  {currentTab.content.notes.map((note, i) => (
                    <div key={i} className="dev-note-item">
                      <div className="dev-note-icon">📌</div>
                      <div>
                        <h5 className="dev-note-title">{note.title}</h5>
                        <p className="dev-note-detail">{note.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Card Footer with Direct Action */}
          <div className="project-card-footer">
            <div className="footer-info">
              <span className="footer-label">Live Deployment:</span>
              <a
                href={projectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-url"
              >
                {projectData.liveUrl}
              </a>
            </div>
            <a
              href={projectData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary visit-btn"
            >
              Explore Live App ✦
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
