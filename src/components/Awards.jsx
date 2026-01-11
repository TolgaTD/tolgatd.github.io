import React from 'react';
import { Award, Trophy, Medal } from 'lucide-react';
const Awards = ({ data }) => {
    return (
        <section style={{ padding: '4rem 0' }}>
            <h2 style={{ borderBottom: '2px solid var(--color-primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--color-primary)' }}>03.</span> {data.ui.awards}
            </h2>

            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {data.awards.map((award, index) => (
                    <div key={index} className="terminal-box" style={{
                        borderLeft: '4px solid gold',
                        background: 'rgba(255, 215, 0, 0.05)',
                        transition: 'transform 0.2s',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                            <Trophy size={24} color="gold" style={{ marginRight: '1rem', flexShrink: 0 }} />
                            <div>
                                <h3 style={{ margin: 0, color: '#fff', fontSize: '1.1rem' }}>{award.title}</h3>
                                <div style={{ fontSize: '0.9rem', color: 'var(--color-cyan)', marginTop: '0.2rem' }}>
                                    {award.organization}
                                </div>
                            </div>
                        </div>
                        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#ccc', paddingLeft: '2.5rem' }}>
                            {award.description}
                        </p>
                        <div style={{ textAlign: 'right', fontSize: '0.8rem', color: 'gray', marginTop: '0.5rem' }}>
                            {award.date}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Awards;
