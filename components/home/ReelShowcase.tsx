'use client';
import { useEffect, useState } from 'react';
import { projects } from '@/data/projects';
import { MediaViewer } from '@/components/work/MediaViewer';

const featuredIds = ['coach-joud-bush-club', 'jaras-enzar', 'summer-training', 'jaras-enzar-virgin', 'gt-cars'];

export function ReelShowcase() {
  const [active, setActive] = useState<string | null>(null);
  const project = projects.find(item => item.id === active);
  const featured = featuredIds.map(id => projects.find(item => item.id === id)).filter(Boolean);

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setActive(null);
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('modal-open');
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.classList.remove('modal-open'); };
  }, [active]);

  return <>
    <section className="reels-section" id="reels">
      <div className="section-heading"><div><span className="eyebrow">ACT 04 — THE EXHIBITION</span><h2>أبرز <em>أعمالنا</em></h2></div><p>من الفكرة الأولى إلى اللقطة الأخيرة. مجموعة من الأعمال التي صنعتها عدساتنا.</p></div>
      <div className="reel-grid">{featured.map((item, index) => item && <button className={`reel-card reel-card-${index + 1}`} key={item.id} onClick={() => setActive(item.id)} aria-label={`Play ${item.title}`}>
        <span className="reel-image" style={{backgroundImage:`linear-gradient(180deg, transparent 35%, rgba(0,0,0,.85)), url(${item.coverImage})`}} />
        <span className="reel-play" aria-hidden="true">↗</span><span className="reel-index">{item.number}</span><span className="reel-copy"><small>{item.tag}</small><b>{item.title}</b><i>{item.client}</i></span>
      </button>)}</div>
      <a className="text-link light-link" href="/work">عرض المعرض كاملًا <span>↗</span></a>
    </section>
    {project && <MediaViewer project={project} onClose={() => setActive(null)} />}
  </>;
}
