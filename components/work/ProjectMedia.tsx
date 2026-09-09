'use client';

import { useState } from 'react';
import type { Project } from '@/data/projects';

export function ProjectMedia({ project }: { project: Project }) {
  const [videoStarted, setVideoStarted] = useState(false);
  const externalUrl = project.sourceUrl ?? project.videoUrl?.replace('player.vimeo.com/video', 'vimeo.com').split('?')[0];

  if (project.mediaType === 'image') return <div className="project-gallery-image"><img src={project.coverImage} alt={project.title}/></div>;

  return <div className="project-video video-frame">
    {videoStarted ? <><iframe src={project.videoUrl} title={project.title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/><div className="player-source">{externalUrl && <a href={externalUrl} target="_blank" rel="noreferrer">فتح على Vimeo <span>↗</span></a>}</div></> : <button className="media-poster" type="button" onClick={() => setVideoStarted(true)} aria-label="Play video inside site"><img src={project.coverImage} alt=""/><span className="media-poster-shade"/><span className="media-poster-play">▶</span><span className="media-poster-label">PLAY FILM / {project.number}</span></button>}
  </div>;
}
