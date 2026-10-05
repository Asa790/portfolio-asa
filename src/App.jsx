import React, { useState } from 'react';
import { portfolioData } from './data';
import DynamicAmbientBackground from './DynamicAmbientBackground';
import { 
  Mail, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Sparkles, 
  FolderGit2, 
  Briefcase, 
  GraduationCap, 
  Cpu, 
  ChevronRight, 
  Send, 
  Layers, 
  ArrowUpRight, 
  Terminal, 
  Award, 
  CheckCircle2,
  FileText,
  Image as ImageIcon,
  MessageSquare,
  Mic,
  Users,
  Globe,
  Menu,
  X,
  Download,
  Phone,
  Heart
} from 'lucide-react';

const GithubIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const techLogos = {
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  html5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  pytorch: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  huggingface: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  scikitlearn: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  streamlit: "https://streamlit.io/images/brand/streamlit-mark-color.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  sqlite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
};

const TechLogo = ({ name, size = 22 }) => {
  const src = techLogos[name.toLowerCase()];
  if (!src) return <Terminal size={size} color="#e63956" />;
  return (
    <img 
      src={src} 
      alt={name} 
      width={size} 
      height={size} 
      style={{ width: `${size}px`, height: `${size}px`, objectFit: 'contain', flexShrink: 0 }}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [filterExp, setFilterExp] = useState('all');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeImageIndex, setActiveImageIndex] = useState({});
  const [previewModalImage, setPreviewModalImage] = useState(null);

  const { personal, skills, projects, experience, education } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "b68a62e2-1273-4085-8d9c-5edb7a63e969",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Inquiry from ${formData.name}`,
          from_name: `${formData.name} (Portfolio Web)`
        })
      });

      const result = await response.json();

      if (result.success) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {

        const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
        const body = encodeURIComponent(
          `Halo Khalisa,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}\n\n---\nDikirim via Portfolio Web`
        );
        window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
        setFormSubmitted(true);
      }
    } catch (err) {

      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Halo Khalisa,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}\n\n---\nDikirim via Portfolio Web`
      );
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      setFormSubmitted(true);
    } finally {
      setFormSubmitting(false);
    }
  };

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.tags.some(t => t.toLowerCase().includes(activeTab.toLowerCase())));

  const filteredExp = filterExp === 'all'
    ? experience
    : experience.filter(e => e.tag.toLowerCase().includes(filterExp.toLowerCase()));

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '80px', position: 'relative' }}>
      
      <DynamicAmbientBackground />

      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(14, 4, 7, 0.8)',
        borderBottom: '1px solid rgba(244, 194, 194, 0.12)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '76px'
        }}>
          <a href="#" style={{ textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, rgba(230, 57, 86, 0.25), rgba(90, 12, 26, 0.4))',
              border: '1px solid rgba(244, 194, 194, 0.3)',
              boxShadow: '0 0 15px rgba(230, 57, 86, 0.35)'
            }}>
              <Heart size={16} color="#ff4d6d" fill="#e63956" />
            </span>
            <span className="font-editorial" style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '0.05em', color: '#fff4eb' }}>
              KHALISA
            </span>
            <span style={{ 
              fontSize: '0.7rem', 
              letterSpacing: '0.2em', 
              color: 'var(--crimson-accent)',
              border: '1px solid var(--crimson-accent)',
              padding: '2px 8px',
              borderRadius: '12px'
            }}>
              SE & AI
            </span>
          </a>

          <nav className="desktop-nav">
            <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>About</a>
            <a href="#skills" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Skills</a>
            <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Projects</a>
            <a href="#experience" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Experience</a>
            <a 
              href="/Khalisa-Kasih-Redwina-Resume.pdf" 
              download="Khalisa-Kasih-Redwina-Resume.pdf" 
              className="glass-pill" 
              style={{ padding: '7px 16px', fontSize: '0.82rem', borderColor: 'var(--crimson-accent)' }}
            >
              <Download size={14} color="#e63956" /> Download CV
            </a>
            <a href="#contact" className="btn-crimson" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
              Connect
            </a>
          </nav>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div style={{
            background: 'rgba(18, 5, 8, 0.98)',
            borderBottom: '1px solid var(--border-glow)',
            padding: '20px 24px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#fff', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600, padding: '8px 0', borderBottom: '1px solid rgba(244, 194, 194, 0.1)' }}
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#fff', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600, padding: '8px 0', borderBottom: '1px solid rgba(244, 194, 194, 0.1)' }}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#fff', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600, padding: '8px 0', borderBottom: '1px solid rgba(244, 194, 194, 0.1)' }}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#fff', textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600, padding: '8px 0', borderBottom: '1px solid rgba(244, 194, 194, 0.1)' }}
            >
              Experience
            </a>
            <a 
              href="/Khalisa-Kasih-Redwina-Resume.pdf" 
              download="Khalisa-Kasih-Redwina-Resume.pdf" 
              onClick={() => setMobileMenuOpen(false)}
              className="btn-outline" 
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Download size={16} color="#e63956" /> Download CV / Resume
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="btn-crimson" 
              style={{ marginTop: '4px', textAlign: 'center' }}
            >
              Get In Touch
            </a>
          </div>
        )}
      </header>

      <section style={{ padding: '50px 0 60px', position: 'relative' }}>
        <div className="container">
          <div className="hero-grid">
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span className="badge-glow">Portfolio 2026</span>
                <span style={{ color: 'var(--rose-gold)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={14} color="#e63956" /> {personal.location}
                </span>
              </div>

              <div style={{ position: 'relative', marginBottom: '24px' }}>
                <h1 className="font-editorial" style={{ 
                  fontSize: 'clamp(2.6rem, 6vw, 4.8rem)', 
                  lineHeight: '1.05', 
                  color: '#fff4eb',
                  fontWeight: 400
                }}>
                  Khalisa Kasih
                </h1>
                <h2 className="font-display" style={{
                  fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
                  lineHeight: '1',
                  background: 'linear-gradient(135deg, #ffffff 30%, #f4c2c2 70%, #e63956 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginTop: '4px'
                }}>
                  REDWINA.
                </h2>
              </div>

              <p style={{ 
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
                color: 'var(--rose-gold)', 
                fontWeight: 500, 
                marginBottom: '18px',
                fontFamily: "'Cinzel', serif",
                letterSpacing: '0.04em'
              }}>
                SOFTWARE ENGINEER &bull; WEB DEVELOPER
              </p>

              <p style={{ 
                color: 'var(--text-muted)', 
                fontSize: '1rem', 
                lineHeight: '1.7', 
                maxWidth: '600px', 
                marginBottom: '32px' 
              }}>
                {personal.bio}
              </p>

              <div className="hero-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', marginBottom: '36px' }}>
                <a href="#projects" className="btn-crimson">
                  <FolderGit2 size={18} /> View Projects
                </a>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn-outline">
                  <LinkedinIcon size={18} color="#e63956" /> LinkedIn
                </a>
                <button onClick={handleCopyEmail} className="glass-pill" style={{ cursor: 'pointer', padding: '12px 20px', border: '1px solid var(--border-glass)', justifyContent: 'center' }}>
                  <Mail size={16} />
                  {copiedEmail ? 'Email Copied!' : 'Copy Email'}
                </button>
              </div>

              <div className="stats-grid" style={{ 
                borderTop: '1px solid rgba(244, 194, 194, 0.15)',
                paddingTop: '24px',
                width: '100%'
              }}>
                {personal.stats.map((stat, i) => (
                  <div key={i} style={{ 
                    textAlign: i === 0 ? 'left' : i === personal.stats.length - 1 ? 'right' : 'center'
                  }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--rose-gold)', opacity: 0.8, letterSpacing: '0.08em' }}>{stat.label}</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginTop: '4px' }}>{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div className="glass-card" style={{ 
                padding: '30px', 
                position: 'relative', 
                overflow: 'hidden',
                background: 'linear-gradient(145deg, rgba(38, 12, 18, 0.85) 0%, rgba(18, 5, 8, 0.95) 100%)',
                border: '1px solid rgba(230, 57, 86, 0.3)'
              }}>
                
                <div style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, #e63956 0%, transparent 70%)',
                  opacity: 0.25,
                  filter: 'blur(30px)'
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e' }}></div>
                    <span style={{ fontSize: '0.8rem', color: '#ffb3c1', letterSpacing: '0.08em', fontWeight: 600 }}>OPEN FOR INTERNSHIP</span>
                  </div>
                  <span className="font-editorial" style={{ fontSize: '1.2rem', color: 'var(--rose-gold)', fontStyle: 'italic' }}>BINUS University</span>
                </div>

                <div style={{
                  width: '100%',
                  aspectRatio: '1/1',
                  maxHeight: '380px',
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, #3d0c15 0%, #150306 100%)',
                  border: '1px solid rgba(244, 194, 194, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  
                  <div style={{
                    position: 'absolute',
                    width: '280px',
                    height: '280px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #e63956 0%, transparent 70%)',
                    filter: 'blur(55px)',
                    opacity: 0.65
                  }} />

                  <div style={{
                    position: 'relative',
                    width: '210px',
                    height: '210px',
                    borderRadius: '28px',
                    padding: '4px',
                    background: 'linear-gradient(135deg, #e63956, #a81c33, rgba(244, 194, 194, 0.6))',
                    boxShadow: '0 0 45px rgba(230, 57, 86, 0.65)',
                    marginBottom: '14px',
                    zIndex: 2
                  }}>
                    <img 
                      src="/profile.jpg" 
                      alt="Khalisa Kasih Redwina"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '24px',
                        objectFit: 'cover',
                        objectPosition: 'center 20%',
                        display: 'block'
                      }}
                    />
                  </div>

                  <p style={{ 
                    fontSize: '0.88rem', 
                    color: 'var(--rose-gold)', 
                    zIndex: 2, 
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    lineHeight: '1.4',
                    maxWidth: '90%'
                  }}>
                    Computer Science &ndash; Software Engineering Undergraduate
                  </p>
                </div>

                <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', borderBottom: '1px solid rgba(244, 194, 194, 0.1)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Campus</span>
                    <span style={{ color: '#fff', fontWeight: 600 }}>BINUS Bekasi (Jul 2024 - Present)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Specialization</span>
                    <span style={{ color: 'var(--rose-gold)', fontWeight: 600 }}>Web Dev &amp; AI Integration</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="skills" style={{ padding: '80px 0', position: 'relative' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="badge-glow" style={{ marginBottom: '12px' }}>Skills &amp; Expertise</span>
            <h2 className="font-editorial" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#fff4eb' }}>
              Technical Stack &amp; Soft Skills
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '12px auto 0', fontSize: '1rem' }}>
              A balanced synthesis of software engineering, artificial intelligence tools, and strong leadership communication.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(230, 57, 86, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb3c1' }}>
                <Code2 size={18} />
              </div>
              <h3 className="font-cinzel" style={{ fontSize: '1.3rem', color: '#fff', letterSpacing: '0.06em' }}>
                Technical &amp; Hard Skills
              </h3>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', 
              gap: '14px' 
            }}>
              {skills.hardSkills.map((tech, idx) => (
                <div 
                  key={idx} 
                  className="glass-card" 
                  style={{ 
                    padding: '16px 18px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '14px',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(244, 194, 194, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <TechLogo name={tech.icon} size={22} />
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                      {tech.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--crimson-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {tech.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(230, 57, 86, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb3c1' }}>
                <Users size={18} />
              </div>
              <h3 className="font-cinzel" style={{ fontSize: '1.3rem', color: '#fff', letterSpacing: '0.06em' }}>
                Soft Skills &amp; Leadership
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {skills.softSkills.map((item, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '12px', 
                        background: 'rgba(230, 57, 86, 0.15)', 
                        border: '1px solid rgba(230, 57, 86, 0.4)',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: 'var(--crimson-accent)'
                      }}>
                        {idx === 0 && <Globe size={20} />}
                        {idx === 1 && <Briefcase size={20} />}
                        {idx === 2 && <Mic size={20} />}
                        {idx === 3 && <MessageSquare size={20} />}
                      </div>
                      <span className="badge-glow" style={{ fontSize: '0.7rem' }}>
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="font-cinzel" style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 600, marginBottom: '10px' }}>
                      {item.name}
                    </h4>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.65' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section id="projects" style={{ padding: '80px 0', position: 'relative' }}>
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            <div>
              <span className="badge-glow" style={{ marginBottom: '12px' }}>Code &amp; Architecture</span>
              <h2 className="font-editorial" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#fff4eb' }}>
                Featured Projects &amp; Repositories
              </h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
                Dedicated space for GitHub open-source repositories, client builds, and AI applications.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['all', 'Machine Learning', 'Python', 'Streamlit', 'HCI'].map(category => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  style={{
                    background: activeTab === category ? 'linear-gradient(135deg, #a81c33, #e63956)' : 'rgba(255, 255, 255, 0.05)',
                    color: activeTab === category ? '#fff' : 'var(--rose-gold)',
                    border: '1px solid ' + (activeTab === category ? 'var(--crimson-accent)' : 'var(--border-glass)'),
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {category.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
            {filteredProjects.map((proj) => (
              <div key={proj.id} className="glass-card" style={{ 
                padding: '30px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                position: 'relative' 
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      letterSpacing: '0.1em', 
                      textTransform: 'uppercase', 
                      color: 'var(--crimson-accent)', 
                      fontWeight: 700 
                    }}>
                      {proj.category}
                    </span>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <a href={proj.github} target="_blank" rel="noreferrer" style={{ color: 'var(--rose-gold)', transition: 'color 0.2s' }} title="GitHub Repo">
                        <GithubIcon size={18} />
                      </a>
                      <a href={proj.demo} target="_blank" rel="noreferrer" style={{ color: 'var(--rose-gold)', transition: 'color 0.2s' }} title="Live Preview">
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>

                  <h3 className="font-cinzel" style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '12px' }}>
                    {proj.title}
                  </h3>

                  {proj.images && proj.images.length > 0 && (
                    <div style={{ marginBottom: '20px' }}>
                      <div 
                        onClick={() => setPreviewModalImage(proj.images[activeImageIndex[proj.id] || 0])}
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '210px',
                          borderRadius: '14px',
                          overflow: 'hidden',
                          border: '1px solid rgba(230, 57, 86, 0.4)',
                          cursor: 'pointer',
                          background: '#150508'
                        }}
                      >
                        <img 
                          src={proj.images[activeImageIndex[proj.id] || 0]} 
                          alt={`${proj.title} Preview`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: proj.id === 'fuelwise' ? 'center 10%' : 'center top',
                            transition: 'transform 0.4s ease'
                          }}
                          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                        <div style={{
                          position: 'absolute',
                          bottom: '8px',
                          right: '8px',
                          background: 'rgba(10, 4, 5, 0.85)',
                          backdropFilter: 'blur(8px)',
                          padding: '4px 10px',
                          borderRadius: '20px',
                          fontSize: '0.72rem',
                          color: '#fff',
                          border: '1px solid rgba(244, 194, 194, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <Sparkles size={12} color="#e63956" /> Click to enlarge
                        </div>
                      </div>

                      {proj.images.length > 1 && (
                        <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                          {proj.images.map((img, i) => (
                            <button
                              key={i}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageIndex(prev => ({ ...prev, [proj.id]: i }));
                              }}
                              style={{
                                width: '56px',
                                height: '36px',
                                borderRadius: '6px',
                                overflow: 'hidden',
                                border: (activeImageIndex[proj.id] || 0) === i 
                                  ? '2px solid var(--crimson-accent)' 
                                  : '1px solid rgba(244, 194, 194, 0.2)',
                                padding: 0,
                                background: 'transparent',
                                cursor: 'pointer',
                                opacity: (activeImageIndex[proj.id] || 0) === i ? 1 : 0.6,
                                transition: 'all 0.2s ease'
                              }}
                            >
                              <img src={img} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '20px' }}>
                    {proj.description}
                  </p>

                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--rose-gold)', marginBottom: '8px', opacity: 0.8 }}>
                      Key Features:
                    </div>
                    {proj.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#ffeaed', marginBottom: '4px' }}>
                        <CheckCircle2 size={13} color="#e63956" /> {h}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                    {proj.tags.map((tag, i) => (
                      <span key={i} style={{
                        background: 'rgba(230, 57, 86, 0.1)',
                        border: '1px solid rgba(230, 57, 86, 0.25)',
                        color: 'var(--rose-gold)',
                        padding: '3px 10px',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 500
                      }}>
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-outline" 
                    style={{ width: '100%', justifyContent: 'center', padding: '10px 0', fontSize: '0.88rem' }}
                  >
                    <GithubIcon size={16} /> Explore Repository
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card" style={{ 
            marginTop: '36px', 
            padding: '28px 36px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '20px',
            background: 'linear-gradient(135deg, rgba(45, 12, 20, 0.9), rgba(20, 5, 10, 0.95))'
          }}>
            <div>
              <h4 className="font-cinzel" style={{ fontSize: '1.25rem', color: '#fff' }}>
                Add or Sync More Repositories
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
                Easily plug in your newest GitHub projects, commit history, and live deployments.
              </p>
            </div>
            <a href="https://github.com/khalisaredwina" target="_blank" rel="noreferrer" className="btn-crimson">
              <GithubIcon size={18} /> Open GitHub Profile
            </a>
          </div>

        </div>
      </section>

      <section id="experience" style={{ padding: '80px 0', position: 'relative' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="badge-glow" style={{ marginBottom: '12px' }}>Track Record</span>
            <h2 className="font-editorial" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#fff4eb' }}>
              Leadership &amp; Organizational Experience
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '12px auto 0', fontSize: '1rem' }}>
              Demonstrated responsibility across HIMTI BINUS University Bekasi in HR, project direction, media design, and talent management.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '24px' }}>
              {['all', 'Leadership', 'Project Management', 'Recruitment', 'Multimedia'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilterExp(f)}
                  style={{
                    background: filterExp === f ? 'rgba(230, 57, 86, 0.3)' : 'rgba(255, 255, 255, 0.04)',
                    color: filterExp === f ? '#fff' : 'var(--rose-gold)',
                    border: '1px solid ' + (filterExp === f ? 'var(--crimson-accent)' : 'var(--border-glass)'),
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    cursor: 'pointer'
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
            {filteredExp.map((exp, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '28px', borderLeft: '4px solid var(--crimson-accent)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
                  <div>
                    <h3 className="font-cinzel" style={{ fontSize: '1.25rem', color: '#fff' }}>
                      {exp.role}
                    </h3>
                    <p style={{ color: 'var(--rose-gold)', fontSize: '0.95rem', fontWeight: 600 }}>
                      {exp.organization}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    <span className="badge-glow" style={{ fontSize: '0.72rem', padding: '3px 10px' }}>
                      {exp.period}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {exp.tag}
                    </span>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '14px', fontStyle: 'italic' }}>
                  {exp.description}
                </p>

                <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: exp.photos || exp.certificates ? '18px' : '0' }}>
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#ffeaed' }}>
                      <span style={{ color: 'var(--crimson-accent)', marginTop: '2px' }}>&rsaquo;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {((exp.photos && exp.photos.length > 0) || (exp.certificates && exp.certificates.length > 0)) && (
                  <div style={{
                    marginTop: '20px',
                    paddingTop: '20px',
                    borderTop: '1px dashed rgba(244, 194, 194, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--rose-gold)', letterSpacing: '0.08em', fontWeight: 600 }}>
                      <Award size={16} color="#e63956" /> Official Certificate &amp; Credentials
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      
                      {exp.certificates && exp.certificates.map((cert, cIdx) => (
                        <div 
                          key={cIdx}
                          onClick={() => setPreviewModalImage(cert.image || cert)}
                          style={{
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            background: 'linear-gradient(135deg, rgba(40, 10, 18, 0.8), rgba(20, 5, 8, 0.9))',
                            border: '1px solid rgba(230, 57, 86, 0.4)',
                            borderRadius: '14px',
                            padding: '12px 16px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.borderColor = 'var(--crimson-accent)';
                            e.currentTarget.style.boxShadow = '0 6px 25px rgba(230, 57, 86, 0.3)';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.borderColor = 'rgba(230, 57, 86, 0.4)';
                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
                          }}
                        >
                          
                          <div style={{
                            width: '120px',
                            height: '85px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            border: '1px solid rgba(244, 194, 194, 0.25)',
                            flexShrink: 0,
                            position: 'relative',
                            background: '#0a0305'
                          }}>
                            <img 
                              src={cert.image || cert} 
                              alt={cert.title}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                              position: 'absolute',
                              inset: 0,
                              background: 'rgba(0, 0, 0, 0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              opacity: 0,
                              transition: 'opacity 0.2s ease'
                            }}
                            onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                            onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                            >
                              <Sparkles size={16} color="#fff" />
                            </div>
                          </div>

                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--crimson-accent)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '4px' }}>
                              Verified Credential
                            </div>
                            <h4 className="font-cinzel" style={{ fontSize: '1rem', color: '#fff', fontWeight: 600, lineHeight: '1.3' }}>
                              {cert.title}
                            </h4>
                            <p style={{ fontSize: '0.8rem', color: 'var(--rose-gold)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <ExternalLink size={12} color="#e63956" /> Click to view full certificate
                            </p>
                          </div>
                        </div>
                      ))}

                      {exp.photos && exp.photos.length > 0 && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginTop: '6px' }}>
                          {exp.photos.map((photo, pIdx) => (
                            <div 
                              key={pIdx}
                              onClick={() => setPreviewModalImage(photo.url || photo)}
                              style={{
                                position: 'relative',
                                height: '140px',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                border: '1px solid rgba(230, 57, 86, 0.4)',
                                cursor: 'pointer',
                                background: '#120407',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                                transition: 'all 0.3s ease'
                              }}
                              onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'var(--crimson-accent)';
                                e.currentTarget.style.boxShadow = '0 6px 25px rgba(230, 57, 86, 0.3)';
                              }}
                              onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'rgba(230, 57, 86, 0.4)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.4)';
                              }}
                            >
                              <img 
                                src={photo.url || photo} 
                                alt={photo.caption || "Event Photo"}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                              />
                              <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(10, 3, 5, 0.9) 0%, transparent 60%)',
                                display: 'flex',
                                alignItems: 'flex-end',
                                padding: '10px',
                                pointerEvents: 'none'
                              }}>
                                <span style={{ fontSize: '0.74rem', color: '#fff', lineHeight: '1.2' }}>
                                  {photo.caption || "Documentation • Click to enlarge"}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="glass-card" style={{ 
            maxWidth: '900px', 
            margin: '40px auto 0', 
            padding: '28px', 
            background: 'linear-gradient(135deg, rgba(35, 10, 16, 0.9), rgba(15, 4, 7, 0.95))',
            border: '1px solid rgba(244, 194, 194, 0.25)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ 
                width: '54px', 
                height: '54px', 
                borderRadius: '14px', 
                background: 'linear-gradient(135deg, #a81c33, #e63956)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#fff'
              }}>
                <GraduationCap size={28} />
              </div>
              <div style={{ flex: 1 }}>
                <span className="badge-glow" style={{ marginBottom: '6px' }}>Formal Education</span>
                <h3 className="font-cinzel" style={{ fontSize: '1.25rem', color: '#fff' }}>
                  {education.institution}
                </h3>
                <p style={{ color: 'var(--rose-gold)', fontSize: '0.95rem', fontWeight: 600 }}>
                  {education.degree} ({education.period})
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '4px' }}>
                  {education.details}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="contact" style={{ padding: '80px 0 40px', position: 'relative' }}>
        <div className="container">
          
          <div className="glass-card" style={{ 
            padding: 'clamp(28px, 5vw, 50px) clamp(20px, 4vw, 40px)', 
            background: 'linear-gradient(145deg, rgba(50, 12, 22, 0.95) 0%, rgba(20, 5, 10, 0.98) 100%)',
            border: '1px solid rgba(230, 57, 86, 0.4)',
            overflow: 'hidden',
            position: 'relative'
          }}>
            
            <div style={{
              position: 'absolute',
              bottom: '-80px',
              right: '-80px',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #e63956 0%, transparent 70%)',
              opacity: 0.25,
              filter: 'blur(50px)'
            }} />

            <div className="contact-grid">
              
              <div>
                <span className="badge-glow" style={{ marginBottom: '14px' }}>Get In Touch</span>
                <h2 className="font-editorial" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', color: '#fff4eb', lineHeight: '1.1', marginBottom: '16px' }}>
                  Connect With me!
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '30px' }}>
                  Open for software engineering opportunities, fullstack web projects, AI system integrations, or organizational partnerships. Send a message directly or connect via social channels.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(230, 57, 86, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb3c1' }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--rose-gold)' }}>Email</div>
                      <a href={`mailto:${personal.email}`} style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                        {personal.email}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(230, 57, 86, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb3c1' }}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--rose-gold)' }}>Phone / WhatsApp</div>
                      <a href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`} style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                        {personal.phone}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(230, 57, 86, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb3c1' }}>
                      <LinkedinIcon size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--rose-gold)' }}>LinkedIn</div>
                      <a href={personal.linkedin} target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                        khalisa-kasih-redwina
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(230, 57, 86, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb3c1' }}>
                      <GithubIcon size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--rose-gold)' }}>GitHub Workspace</div>
                      <a href={personal.github} target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                        github.com/khalisaredwina
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '10px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    padding: '2px',
                    background: 'linear-gradient(135deg, #e63956, #a81c33)',
                    boxShadow: '0 0 20px rgba(230, 57, 86, 0.4)',
                    flexShrink: 0
                  }}>
                    <img 
                      src="/profile.jpg" 
                      alt="Khalisa" 
                      style={{ width: '100%', height: '100%', borderRadius: '14px', objectFit: 'cover' }} 
                    />
                  </div>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', flex: 1 }}>
                    <button onClick={handleCopyEmail} className="btn-crimson">
                      <Mail size={16} /> {copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address'}
                    </button>
                  </div>
                </div>
              </div>

              <div style={{
                background: 'rgba(20, 5, 8, 0.85)',
                border: '1px solid rgba(244, 194, 194, 0.15)',
                borderRadius: '16px',
                padding: '32px'
              }}>
                <h3 className="font-cinzel" style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '8px' }}>
                  Send a Direct Message
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '20px' }}>
                  Looking to build a website, collaborate, or hire? Send a note!
                </p>

                {formSubmitted ? (
                  <div style={{ 
                    padding: '24px', 
                    textAlign: 'center', 
                    background: 'rgba(230, 57, 86, 0.1)', 
                    border: '1px solid var(--crimson-accent)',
                    borderRadius: '12px'
                  }}>
                    <CheckCircle2 size={36} color="#e63956" style={{ margin: '0 auto 12px' }} />
                    <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>Message Sent!</h4>
                    <p style={{ color: 'var(--rose-gold)', fontSize: '0.88rem', marginTop: '6px' }}>
                      Pesan Anda berhasil diteruskan ke email <strong>khalisa.k.redwina@gmail.com</strong>. Terima kasih!
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      style={{
                        marginTop: '16px',
                        background: 'transparent',
                        border: '1px solid rgba(244, 194, 194, 0.3)',
                        color: 'var(--rose-gold)',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '0.78rem',
                        cursor: 'pointer'
                      }}
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--rose-gold)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(244, 194, 194, 0.2)',
                          color: '#fff',
                          outline: 'none',
                          fontSize: '0.9rem'
                        }} 
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--rose-gold)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Email</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(244, 194, 194, 0.2)',
                          color: '#fff',
                          outline: 'none',
                          fontSize: '0.9rem'
                        }} 
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--rose-gold)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message / Project Idea</label>
                      <textarea 
                        rows={3} 
                        required 
                        placeholder="Let's build a modern web application..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(244, 194, 194, 0.2)',
                          color: '#fff',
                          outline: 'none',
                          fontSize: '0.9rem',
                          resize: 'none'
                        }} 
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={formSubmitting}
                      className="btn-crimson" 
                      style={{ 
                        width: '100%', 
                        justifyContent: 'center', 
                        marginTop: '6px',
                        opacity: formSubmitting ? 0.7 : 1,
                        cursor: formSubmitting ? 'not-allowed' : 'pointer'
                      }}
                    >
                      <Send size={16} /> {formSubmitting ? 'Sending...' : 'Send Inquiry to Email'}
                    </button>
                  </form>
                )}

              </div>

            </div>
          </div>

        </div>
      </section>

      {previewModalImage && (
        <div 
          onClick={() => setPreviewModalImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(7, 2, 4, 0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            animation: 'fadeIn 0.25s ease'
          }}
        >
          <div 
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '960px',
              width: '100%',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(230, 57, 86, 0.5)',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(230, 57, 86, 0.3)',
              background: '#150508'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 22px',
              borderBottom: '1px solid rgba(244, 194, 194, 0.15)',
              background: 'rgba(30, 10, 15, 0.9)'
            }}>
              <span className="font-cinzel" style={{ color: 'var(--rose-gold)', fontSize: '1rem', letterSpacing: '0.08em' }}>
                Project Preview Snapshot
              </span>
              <button 
                onClick={() => setPreviewModalImage(null)}
                style={{
                  background: 'rgba(230, 57, 86, 0.2)',
                  border: '1px solid rgba(230, 57, 86, 0.4)',
                  color: '#fff',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  lineHeight: '1'
                }}
              >
                &times;
              </button>
            </div>
            <div style={{ padding: '16px', background: '#0a0305', textAlign: 'center' }}>
              <img 
                src={previewModalImage} 
                alt="Enlarged project preview" 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '75vh', 
                  borderRadius: '12px',
                  objectFit: 'contain',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.8)'
                }} 
              />
            </div>
          </div>
        </div>
      )}

      <footer style={{ marginTop: '50px', textAlign: 'center', borderTop: '1px solid rgba(244, 194, 194, 0.1)', paddingTop: '30px' }}>
        <p className="font-editorial" style={{ fontSize: '1.2rem', color: 'var(--rose-gold)', letterSpacing: '0.05em' }}>
          Khalisa Kasih Redwina &bull; Portfolio 2026
        </p>
      </footer>

    </div>
  );
}
