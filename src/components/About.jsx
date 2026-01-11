import React from 'react';
import { User, Shield, Trophy } from 'lucide-react';
const About = ({ data }) => {
    return (
        <section style={{ padding: '1rem 0' }}>
            <h2 style={{ borderBottom: '2px solid var(--color-primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--color-primary)' }}>01.</span> {data.ui.about}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
                <div className="terminal-box">
                    <div className="terminal-header">
                        <User size={16} /> <span>{data.ui.bio}</span>
                    </div>
                    <p>{data.about.summary}</p>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                        {data.about.highlights.map((item, i) => (
                            <li key={i} style={{ marginBottom: '0.5rem', color: '#ccc' }}>
                                <span style={{ color: 'var(--color-primary)', marginRight: '10px' }}>➜</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="terminal-box">
                    <div className="terminal-header">
                        <Shield size={16} /> <span>{data.ui.skills}</span>
                    </div>
                    <p style={{ marginBottom: '1rem' }}>{data.ui.tech_skills}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {data.skills.map((skill, i) => (
                            <span key={i} style={{
                                border: '1px solid var(--color-cyan)',
                                color: 'var(--color-cyan)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '4px',
                                fontSize: '0.9rem',
                                background: 'rgba(0, 217, 247, 0.05)'
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
