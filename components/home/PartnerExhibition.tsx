'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, type CSSProperties } from 'react';
import { partners } from '@/data/partners';

type PartnerExhibitionProps = {
  compact?: boolean;
};

export function PartnerExhibition({ compact = false }: PartnerExhibitionProps) {
  const visiblePartners = partners;
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);

  useEffect(() => {
    if (!compact || carouselPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % visiblePartners.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [carouselPaused, compact, visiblePartners.length]);

  const moveCarousel = (direction: number) => {
    setActiveIndex((current) => (current + direction + visiblePartners.length) % visiblePartners.length);
  };

  const relativePosition = (index: number) => {
    const raw = (index - activeIndex + visiblePartners.length) % visiblePartners.length;
    return raw > visiblePartners.length / 2 ? raw - visiblePartners.length : raw;
  };

  return (
    <section className={`partners-strip legacy-scene${compact ? ' legacy-scene-compact' : ''}`} id={compact ? undefined : 'partners-exhibition'}>
      <div className="exhibition-atmosphere" aria-hidden="true" />
      <div className="exhibition-camera" aria-hidden="true">
        <img src="/scenes/craft-stage.png" alt="" />
      </div>
      <span className="stage-lamp stage-lamp-legacy" aria-hidden="true" />
      <div className="red-rope red-rope-left" aria-hidden="true"><i /><i /><b /></div>
      <div className="red-rope red-rope-right" aria-hidden="true"><i /><i /><b /></div>
      <div className="partners-heading">
        <span className="eyebrow">ACT 05 — THE LEGACY</span>
        <h2>شركاء <em>النجاح.</em></h2>
        <p>كل نجاح عظيم يبدأ بشراكة تؤمن بالفكرة.</p>
      </div>
      <div className="exhibition-copy">
        <span>OUR PARTNERS ARE PART OF OUR STORY.</span>
        <small>EXHIBITION / 05</small>
      </div>
      {compact ? (
        <div className="partner-carousel" onMouseEnter={() => setCarouselPaused(true)} onMouseLeave={() => setCarouselPaused(false)}>
          <div className="partner-carousel-stage" aria-live="polite">
            {visiblePartners.map((partner, index) => {
              const position = relativePosition(index);
              const positionName = position < 0 ? `left-${Math.abs(position)}` : position > 0 ? `right-${position}` : 'center';
              const nearby = Math.abs(position) <= 2;
              const slideStyle = {
                '--carousel-opacity': nearby ? (position === 0 ? 1 : position === -2 || position === 2 ? 0.35 : 0.68) : 0,
                '--carousel-scale': position === 0 ? 1 : position === -1 || position === 1 ? 0.84 : 0.68,
                zIndex: 10 - Math.abs(position),
              } as CSSProperties;
              return (
                <article className={`partner-carousel-slide carousel-position-${positionName} ${nearby ? '' : 'is-hidden'} ${position === 0 ? 'is-active' : ''}`} key={partner.name} style={slideStyle} aria-hidden={position !== 0}>
                  <span className="partner-exhibit-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="exhibit-spotlight" aria-hidden="true" />
                  <div className="partner-plinth">
                    <div className="museum-frame">
                      <div className="museum-mat">
                        <img src={partner.image} alt={partner.label} loading={index < 3 ? 'eager' : 'lazy'} />
                      </div>
                      <img className="museum-frame-art" src="/scenes/ornate-frame.png" alt="" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="partner-plaque">
                    <b>{partner.label}</b>
                    <small>PARTNER / {partner.name.toUpperCase()}</small>
                  </div>
                </article>
              );
            })}
            <button className="partner-carousel-control partner-carousel-control-prev" type="button" aria-label="Previous partner" onClick={() => moveCarousel(-1)}><span aria-hidden="true">←</span></button>
            <button className="partner-carousel-control partner-carousel-control-next" type="button" aria-label="Next partner" onClick={() => moveCarousel(1)}><span aria-hidden="true">→</span></button>
          </div>
          <div className="partner-carousel-meta" aria-hidden="true">
            <span>{String(activeIndex + 1).padStart(2, '0')} / {String(visiblePartners.length).padStart(2, '0')}</span>
            <div className="partner-carousel-progress"><i style={{ width: `${((activeIndex + 1) / visiblePartners.length) * 100}%` }} /></div>
            <span>PARTNER EXHIBITION</span>
          </div>
        </div>
      ) : (
        <div className="partner-logos">
          {visiblePartners.map((partner, index) => (
            <motion.article
              className="partner-exhibit"
              key={partner.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: Math.min(index * 0.035, 0.3), ease: [0.23, 1, 0.32, 1] }}
            >
              <span className="partner-exhibit-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="exhibit-spotlight" aria-hidden="true" />
              <div className="partner-plinth">
                <div className="museum-frame">
                  <div className="museum-mat">
                    <img src={partner.image} alt={partner.label} loading="lazy" />
                  </div>
                  <img className="museum-frame-art" src="/scenes/ornate-frame.png" alt="" aria-hidden="true" />
                </div>
              </div>
              <div className="partner-plaque">
                <b>{partner.label}</b>
                <small>PARTNER / {partner.name.toUpperCase()}</small>
              </div>
            </motion.article>
          ))}
        </div>
      )}
      <div className="stats">
        <div><strong>50,000<span>+</span></strong><small>محتوى احترافي</small></div>
        <div><strong>2,000<span>+</span></strong><small>تغطية ميدانية</small></div>
        <div><strong>856<span>+</span></strong><small>شراكة استراتيجية</small></div>
      </div>
    </section>
  );
}
