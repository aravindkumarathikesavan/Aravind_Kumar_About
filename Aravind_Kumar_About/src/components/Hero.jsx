import { useEffect, useRef } from 'react';
import avatar from '../assets/avatar.jpg';

const roles = ['Software Developer', 'React.js Developer', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Vue.js Developer', 'MERN Stack Developer'];

export default function Hero() {
  const roleRef = useRef(null);

  useEffect(() => {
    let i = 0, j = 0, deleting = false, looping = true;
    const el = roleRef.current;
    if (!el) return;
    const type = () => {
      if (!looping) return;
      const current = roles[i];
      if (!deleting) {
        el.textContent = current.slice(0, j + 1);
        j++;
        if (j === current.length) { deleting = true; setTimeout(type, 1800); return; }
      } else {
        el.textContent = current.slice(0, j - 1);
        j--;
        if (j === 0) { deleting = false; i = (i + 1) % roles.length; }
      }
      setTimeout(type, deleting ? 60 : 90);
    };
    type();
    return () => { looping = false; };
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="hero-grid-overlay" />

      <div className="container hero-container">
        {/* Left — text */}
        <div className="hero-content animate-fadeInLeft">
          {/* <div className="section-tag">👋 Hello, World!</div> */}

          <h1 className="hero-name">
            Aravind Kumar
            <span className="name-suffix"> .A</span>
          </h1>

          <div className="hero-role-wrapper">
            <span className="role-prefix">I'm a </span>
            <span className="hero-role" ref={roleRef} />
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-bio">
            BE graduate in Electrical & Electronics Engineering with hands-on experience in full-stack
            web development. Passionate about building scalable, high-performance web applications
            with modern technologies like React.js, Vue.js, and Node.js.
          </p>

          <div className="hero-info-chips">
            <span className="chip"><span>📍</span> Villupuram, TN</span>
            <span className="chip"><span>📞</span> 7358494847</span>
            <span className="chip chip-green"><span>🟢</span> Open to Work</span>
          </div>

          <div className="hero-actions">
            <a className="btn-primary" href="#contact">Get In Touch ✦</a>
            <a className="btn-outline" href="#experience">View Work →</a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">1+</span>
              <span className="stat-label">Year Exp.</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">22+</span>
              <span className="stat-label">Skills</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">87%</span>
              <span className="stat-label">B.E Score</span>
            </div>
          </div>
        </div>

        {/* Right — avatar */}
        <div className="hero-avatar-wrapper animate-fadeInRight">
          <div className="avatar-ring avatar-ring-1" />
          <div className="avatar-ring avatar-ring-2" />
          <div className="avatar-glow" />
          <div className="avatar-frame">
            <img src={avatar} alt="Aravind Kumar" className="avatar-img" />
          </div>
          {/* Floating badges */}
          <div className="float-badge badge-react">⚛ React.js</div>
          <div className="float-badge badge-vue">🟩 Vue.js</div>
          <div className="float-badge badge-python">🐍 Python</div>
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#about" className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-arrow">↓</div>
      </a>
    </section>
  );
}
