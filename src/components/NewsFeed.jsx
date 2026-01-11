import React from 'react';
import profileData from '../data/profile.json';
import { Rss, ExternalLink } from 'lucide-react';

const NewsFeed = () => {
    return (
        <section style={{ padding: '4rem 0', marginBottom: '4rem' }}>
            <h2 style={{ borderBottom: '2px solid var(--color-primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                <span style={{ color: 'var(--color-primary)' }}>03.</span> Haberler & Güncellemeler
            </h2>

            <div style={{ marginTop: '2rem', display: 'grid', gap: '1.5rem' }}>
                {profileData.news.map((item) => (
                    <a
                        key={item.id}
                        href={item.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="terminal-box news-item"
                        style={{
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'block',
                            textDecoration: 'none',
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                        }}
                    >
                        <div style={{ position: 'absolute', top: 0, right: 0, padding: '0.5rem', background: 'var(--color-secondary)', color: '#000', fontSize: '0.8rem', fontWeight: 'bold' }}>
                            {item.date}
                        </div>
                        <h3 style={{ marginTop: '1rem', color: '#fff', display: 'flex', alignItems: 'center' }}>
                            <Rss size={20} style={{ marginRight: '10px', color: 'var(--color-primary)' }} />
                            {item.title}
                            <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.7 }} />
                        </h3>
                        <p style={{ color: 'var(--color-text)' }}>{item.content}</p>
                    </a>
                ))}
            </div>
            <style>{`
        .news-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 255, 65, 0.2);
          border-color: var(--color-primary);
        }
      `}</style>
        </section>
    );
};

export default NewsFeed;
