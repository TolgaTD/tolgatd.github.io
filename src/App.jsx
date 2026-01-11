import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MatrixBackground from './components/MatrixBackground';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import NewsFeed from './components/NewsFeed';
import Awards from './components/Awards';
import { Helmet } from 'react-helmet-async';

function App() {
    return (
        <Router>
            <div className="app-container scanline">
                <Helmet>
                    <title>Tolga Demirel | Siber Güvenlik Uzmanı</title>
                </Helmet>
                <MatrixBackground />

                <div className="container">
                    {/* Navigation could go here */}
                    <header style={{ padding: '0.25rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
                        <h1 style={{ color: '#fff', margin: 0, fontFamily: "'Orbitron', sans-serif", letterSpacing: '2px', textShadow: '0 0 10px var(--color-primary)' }}>SyCro</h1>
                        <nav>
                            <a href="#about" style={{ marginLeft: '1rem' }}>/root/about</a>
                            <a href="#experience" style={{ marginLeft: '1rem' }}>/root/exp</a>
                            <a href="#awards" style={{ marginLeft: '1rem' }}>/root/awards</a>
                            <a href="#news" style={{ marginLeft: '1rem' }}>/root/news</a>
                        </nav>
                    </header>

                    <main>
                        <Hero />
                        <div id="about"><About /></div>
                        <div id="experience"><Experience /></div>
                        <div id="awards"><Awards /></div>
                        <div id="news"><NewsFeed /></div>
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
