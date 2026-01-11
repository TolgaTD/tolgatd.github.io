import React from 'react';
import { Briefcase } from 'lucide-react';
const Experience = ({ data }) => {
    return (
        <section style={{ padding: '4rem 0' }}>
            <h2 style={{ borderBottom: '2px solid var(--color-primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--color-primary)' }}>02.</span> {data.ui.experience}
            </h2>

            <div style={{ marginTop: '2rem' }}>
                {data.experience.map((exp) => (
                    <div key={exp.id} className="terminal-box" style={{ borderLeft: '4px solid var(--color-primary)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                            <h3 style={{ margin: 0, color: '#fff' }}>{exp.role}</h3>
                            <span style={{ fontFamily: 'monospace', color: 'var(--color-text)' }}>{exp.duration}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: 'var(--color-cyan)' }}>
                            <Briefcase size={16} style={{ marginRight: '0.5rem' }} />
                            <span>@{exp.company}</span>
                        </div>
                        <p style={{ margin: 0, opacity: 0.9 }}>
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
