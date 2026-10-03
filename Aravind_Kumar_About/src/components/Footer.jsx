
const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>AK<span className="logo-bracket">/&gt;</span>
          </div>
          <p className="footer-tagline">Software Developer · React.js · Vue.js</p>
          <p className="footer-copy">© {CURRENT_YEAR} Aravind Kumar .A · All rights reserved.</p>
        </div>

        <div className="footer-links">
          {['#home','#about','#projects','#experience','#skills','#education','#contact'].map(href => (
            <a key={href} href={href} className="footer-link">
              {href.replace('#', '').charAt(0).toUpperCase() + href.replace('#', '').slice(1)}
            </a>
          ))}
        </div>

        <button className="scroll-top-btn" onClick={scrollTop} aria-label="Back to top">↑</button>
      </div>
    </footer>
  );
}
