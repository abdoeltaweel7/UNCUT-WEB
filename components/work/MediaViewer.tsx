'use client';

import { useEffect, useState } from 'react';
import type { Project } from '@/data/projects';

type MediaViewerProps = {
  project: Project;
  onClose: () => void;
};

export function MediaViewer({ project, onClose }: MediaViewerProps) {
  const [videoStarted, setVideoStarted] = useState(false);
  const externalUrl = project.sourceUrl ?? project.videoUrl?.replace('player.vimeo.com/video', 'vimeo.com').split('?')[0];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('modal-open');
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [onClose]);

  return <div className="video-modal" role="dialog" aria-modal="true" aria-label={project.title} onClick={onClose}>
    <div className="video-modal-inner" onClick={event => event.stopPropagation()}>
      <button className="modal-close" onClick={onClose} aria-label="Close media viewer">×</button>
      {project.mediaType === 'image' ? <div className="media-stage image-stage"><img src={project.coverImage} alt={project.title}/></div> : <div className="media-stage video-stage">{videoStarted ? <><iframe src={project.videoUrl} title={project.title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/><div className="player-source"><span>VIMEO / {project.number}</span>{externalUrl && <a href={externalUrl} target="_blank" rel="noreferrer">فتح على Vimeo <span>↗</span></a>}</div></> : <button className="media-poster" type="button" onClick={() => setVideoStarted(true)} aria-label="Play video inside site"><img src={project.coverImage} alt=""/><span className="media-poster-shade"/><span className="media-poster-play">▶</span><span className="media-poster-label">PLAY FILM / {project.number}</span></button>}</div>}
      <div className="modal-caption"><span>{project.number} / {project.tag}</span><h3>{project.title}</h3><p>{project.arabicDescription}</p></div>
    </div>
  </div>;
}
