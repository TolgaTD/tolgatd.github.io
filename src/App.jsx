import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MatrixBackground from './components/MatrixBackground';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import NewsFeed from './components/NewsFeed';
import Awards from './components/Awards';
import profileData from './data/profile.json'; // Import data here
import { Helmet } from 'react-helmet-async';
import { Globe, Menu, X } from 'lucide-react';

function App() {
    const [lang, setLang] = useState('tr');
    const [menuOpen, setMenuOpen] = useState(false);
    const data = profileData ? profileData[lang] : null;
    const shared = profileData ? profileData.social : null;

    if (!data) return <div style={{ color: 'white' }}>Loading profile data...</div>;

    const toggleLang = () => {
        setLang(prev => prev === 'tr' ? 'en' : 'tr');
    };

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <Router>
            <div className="app-container scanline">
                <Helmet>
                    <title>{lang === 'tr' ? 'Tolga Demirel | Siber Güvenlik Uzmanı' : 'Tolga Demirel | Cyber Security Expert'}</title>
                    <html lang={lang} />
                </Helmet>
                <MatrixBackground />

                <div className="container">
                    {/* Navigation could go here */}
                    <header style={{
                        padding: '1rem 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '2rem',
                        flexWrap: 'wrap',
                        gap: '1rem'
                    }}>
                        <h1 style={{
                            color: '#fff',
                            margin: 0,
                            fontFamily: "'Orbitron', sans-serif",
                            letterSpacing: '2px',
                            textShadow: '0 0 10px var(--color-primary)',
                            fontSize: 'clamp(1.5rem, 5vw, 2rem)'
                        }}>SyCro</h1>

                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="mobile-menu-btn"
                            style={{
                                display: 'none',
                                background: 'transparent',
                                border: '1px solid var(--color-cyan)',
                                color: 'var(--color-cyan)',
                                padding: '0.5rem',
                                cursor: 'pointer',
                                borderRadius: '4px'
                            }}
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            flexWrap: 'wrap'
                        }}>
                            <a href="#about" onClick={closeMenu} style={{ color: 'var(--color-cyan)', fontSize: 'clamp(0.75rem, 2vw, 1rem)' }}>/root/about</a>
                            <a href="#experience" onClick={closeMenu} style={{ color: 'var(--color-cyan)', fontSize: 'clamp(0.75rem, 2vw, 1rem)' }}>/root/exp</a>
                            <a href="#awards" onClick={closeMenu} style={{ color: 'var(--color-cyan)', fontSize: 'clamp(0.75rem, 2vw, 1rem)' }}>/root/awards</a>
                            <a href="#news" onClick={closeMenu} style={{ color: 'var(--color-cyan)', fontSize: 'clamp(0.75rem, 2vw, 1rem)' }}>/root/news</a>

                            <button
                                onClick={toggleLang}
                                className="btn"
                                style={{
                                    marginLeft: '1rem',
                                    padding: '0.25rem 0.5rem',
                                    fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderColor: 'var(--color-cyan)',
                                    color: 'var(--color-cyan)'
                                }}
                            >
                                <Globe size={14} style={{ marginRight: '5px' }} />
                                {data.ui.lang_switch}
                            </button>
                        </nav>
                    </header>

                    <main>
                        <Hero data={data} shared={shared} />
                        <div id="about"><About data={data} /></div>
                        <div id="experience"><Experience data={data} /></div>
                        <div id="awards"><Awards data={data} /></div>
                        <div id="news"><NewsFeed data={data} /></div>
                    </main>

                    <footer style={{ marginTop: '4rem', padding: '2rem 0', textAlign: 'center', opacity: 0.6, fontSize: '0.8rem' }}>
                        <p>&copy; {(new Date().getFullYear())} Tolga Demirel. All systems operational.</p>
                    </footer>
                </div>
            </div>
        </Router>
    );
}

export default App;
