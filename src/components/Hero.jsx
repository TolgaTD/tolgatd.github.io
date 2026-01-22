import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Terminal, BookOpen, Share2, MapPin, Mail } from 'lucide-react';
const Hero = ({ data, shared }) => {
    const [text, setText] = useState('');
    const fullText = `> ${data.personal.tagline}`;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setText('');
        setIndex(0);
    }, [data.personal.tagline]);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText.charAt(index));
                setIndex((prev) => prev + 1);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [index, fullText]);

    return (
        <section style={{ minHeight: '25vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '4rem' }}>
            <div className="terminal-box">
                <div className="terminal-header">
                    <span>root@tolgademirel:~/portfolio</span>
                    <span>bash</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', margin: '0 0 1rem 0', color: '#fff' }}>
                    {data.personal.name}
                </h1>
                <h2 style={{ fontSize: 'clamp(1rem, 4vw, 1.5rem)', color: 'var(--color-primary)', fontFamily: 'monospace' }}>
                    {text}<span className="cursor">_</span>
                </h2>

                <div style={{ marginTop: '1rem', color: '#ccc', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <MapPin size={16} style={{ marginRight: '8px', color: 'var(--color-secondary)' }} />
                        {data.personal.location}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Mail size={16} style={{ marginRight: '8px', color: 'var(--color-secondary)' }} />
                        <a href={`mailto:${data.personal.email}`} style={{ color: '#ccc' }}>{data.personal.email}</a>
                    </div>
                </div>

                <div style={{
                    marginTop: '2rem',
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start'
                }}>
                    <a href={shared.github} target="_blank" rel="noopener noreferrer" className="btn" style={{
                        borderColor: 'var(--color-cyan)',
                        color: 'var(--color-cyan)',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: 'clamp(0.8rem, 2vw, 1rem)'
                    }}>
                        <Github size={20} style={{ marginRight: '8px' }} /> GitHub
                    </a>
                    <a href={shared.linkedin} target="_blank" rel="noopener noreferrer" className="btn" style={{
                        borderColor: 'var(--color-cyan)',
                        color: 'var(--color-cyan)',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: 'clamp(0.8rem, 2vw, 1rem)'
                    }}>
                        <Linkedin size={20} style={{ marginRight: '8px' }} /> LinkedIn
                    </a>
                    <a href={shared.huggingface} target="_blank" rel="noopener noreferrer" className="btn" style={{
                        borderColor: 'var(--color-cyan)',
                        color: 'var(--color-cyan)',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: 'clamp(0.8rem, 2vw, 1rem)'
                    }}>
                        <Share2 size={20} style={{ marginRight: '8px' }} /> HuggingFace
                    </a>
                    <a href={shared.medium} target="_blank" rel="noopener noreferrer" className="btn" style={{
                        borderColor: 'var(--color-cyan)',
                        color: 'var(--color-cyan)',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: 'clamp(0.8rem, 2vw, 1rem)'
                    }}>
                        <BookOpen size={20} style={{ marginRight: '8px' }} /> Medium
                    </a>
                </div>
            </div>

            <style>{`
        .cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
