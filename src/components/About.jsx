import React from 'react';
import profileData from '../data/profile.json';
import { User, Shield, Trophy } from 'lucide-react';

const About = () => {
    return (
        <section style={{ padding: '1rem 0' }}>
            <h2 style={{ borderBottom: '2px solid var(--color-primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--color-primary)' }}>01.</span> Hakkımda
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
                <div className="terminal-box">
                    <div className="terminal-header">
                        <User size={16} /> <span>bio.txt</span>
                    </div>
                    <p>{profileData.about.summary}</p>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                        {profileData.about.highlights.map((item, i) => (
                            <li key={i} style={{ marginBottom: '0.5rem', color: '#ccc' }}>
                                <span style={{ color: 'var(--color-primary)', marginRight: '10px' }}>➜</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="terminal-box">
                    <div className="terminal-header">
                        <Shield size={16} /> <span>skills.sh</span>
                    </div>
                    <p style={{ marginBottom: '1rem' }}>// Teknik Yetkinlikler</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {profileData.skills.map((skill, i) => (
                            <span key={i} style={{
                                border: '1px solid var(--color-secondary)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '4px',
                                fontSize: '0.9rem',
                                background: 'rgba(0, 255, 65, 0.05)'
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
