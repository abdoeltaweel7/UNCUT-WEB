'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type TouchEvent, type WheelEvent } from 'react';

type CinematicOpeningProps = {
  tagline: string;
};

export function CinematicOpening({ tagline }: CinematicOpeningProps) {
  const [visible, setVisible] = useState(true);
  const [openingStarted, setOpeningStarted] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [fallbackOpening, setFallbackOpening] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const openingStartedRef = useRef(false);
  const fallbackStartedRef = useRef(false);
  const closingRef = useRef(false);
  const fallbackTimerRef = useRef<number | null>(null);

  const completeOpening = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    const video = videoRef.current;
    video?.pause();
    window.setTimeout(() => setVisible(false), 240);
  }, []);

  const startFallback = useCallback(() => {
    if (closingRef.current || fallbackStartedRef.current) return;
    fallbackStartedRef.current = true;
    setVideoReady(false);
    setFallbackOpening(true);
    fallbackTimerRef.current = window.setTimeout(completeOpening, 1800);
  }, [completeOpening]);

  const startOpening = useCallback(() => {
    if (openingStartedRef.current || closingRef.current) return;
    openingStartedRef.current = true;
    setOpeningStarted(true);

    const video = videoRef.current;
    if (!video) {
      startFallback();
      return;
    }

    video.currentTime = 0;
    video.playbackRate = 3.75;
    void video.play().catch(() => startFallback());
  }, [startFallback]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    return () => {
      if (fallbackTimerRef.current !== null) window.clearTimeout(fallbackTimerRef.current);
      videoRef.current?.pause();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markReady = () => setVideoReady(true);
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) markReady();
    video.addEventListener('loadeddata', markReady);
    video.addEventListener('canplay', markReady);

    return () => {
      video.removeEventListener('loadeddata', markReady);
      video.removeEventListener('canplay', markReady);
    };
  }, []);

  const handleWheel = (event: WheelEvent<HTMLElement>) => {
    event.preventDefault();
    startOpening();
  };

  const handleTouchMove = (event: TouchEvent<HTMLElement>) => {
    event.preventDefault();
    startOpening();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!['ArrowDown', 'PageDown', ' ', 'Enter', 'Escape'].includes(event.key)) return;
    event.preventDefault();
    startOpening();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          className={`curtain${videoReady ? ' video-ready' : ''}${openingStarted ? ' opening-started' : ''}${fallbackOpening ? ' fallback-opening' : ''}`}
          aria-label="Cinematic opening"
          tabIndex={0}
          onWheel={handleWheel}
          onTouchMove={handleTouchMove}
          onKeyDown={handleKeyDown}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
        >
          <div className="curtain-stage" aria-hidden="true" />
          <div className="curtain-light" aria-hidden="true" />
          <video
            ref={videoRef}
            className="curtain-video"
            poster="/scenes/curtain-closed.png"
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            onEnded={completeOpening}
            onCanPlay={() => setVideoReady(true)}
            onError={startFallback}
          >
            <source media="(max-width: 760px)" src="/media/curtain-opening-mobile.webm" type="video/webm" />
            <source src="/media/curtain-opening-desktop.webm" type="video/webm" />
          </video>
          <div className="curtain-half left curtain-panel-left" aria-hidden="true" />
          <div className="curtain-half right curtain-panel-right" aria-hidden="true" />
          <div className="opening-content">
            <div className="opening-lockup">
              <span className="brand-mark" aria-hidden="true"><i /><i /></span>
              <b>UNCUTS</b>
              <small>PRODUCTION</small>
            </div>
            <p>{tagline}</p>
            <span className="opening-hint">SCROLL TO OPEN</span>
            <span className="opening-note">A VISUAL PRODUCTION STUDIO / 2026</span>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
