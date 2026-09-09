'use client';
import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import { services } from '@/data/services';
import { PartnerExhibition } from '@/components/home/PartnerExhibition';
import { ReelShowcase } from '@/components/home/ReelShowcase';

const sceneServices = [
  { title: 'الإنتاج المرئي للشركات', detail: 'فكرة واضحة. صورة لا تُنسى.', image: services[0].image },
  { title: 'تغطية الفعاليات والمؤتمرات', detail: 'نحفظ اللحظة وهي تحدث.', image: services[2].image },
  { title: 'صناعة المحتوى الإبداعي', detail: 'محتوى يتحرك مع جمهورك.', image: services[4].image }
];

export default function Home() {
  const [activeScene, setActiveScene] = useState(2);

  return <main className="home">
    <aside className="scene-rail" aria-label="Page progress"><span>00</span><div className="rail-line"><i style={{height:`${(activeScene + 1) * 25}%`}}/></div><span>04</span></aside>
    <section className="hero scene grain" id="top">
      <div className="hero-media" aria-hidden="true"><video className="hero-video" autoPlay muted loop playsInline preload="auto" poster="/scenes/final-stage.jpg"><source src="/media/hero-spotlight.mp4" type="video/mp4" /></video></div>
      <span className="stage-lamp" aria-hidden="true"/>
      <div className="hero-shade"/><div className="hero-stage-mark">UNCUTS / 001 <span>●</span></div>
      <div className="hero-copy"><span className="eyebrow">ACT 01 — THE OPENING / {siteConfig.location}</span><h1>نصنع <em>الرؤية..</em><br/>لنلهم العالم.</h1><p>{siteConfig.arabicIntro}</p><div className="actions"><Link href="/work" className="button">اكتشف أعمالنا <span>↗</span></Link><Link href="/contact" className="text-link">ابدأ مشروعًا <span>↗</span></Link></div></div>
      <a href="#services" className="scroll-cue"><span className="scroll-wheel"/>اسحب لتدخل المشهد</a><span className="hero-caption">FILM / PHOTO / STORY</span>
    </section>

    <section className="manifesto" id="story" onMouseEnter={() => setActiveScene(1)}><div className="manifesto-top"><span className="eyebrow">ACT 02 — THE STORY</span><span className="section-number">02 / 04</span></div><div className="manifesto-layout"><div><h2>من الرؤية إلى <em>الأثر.</em></h2><p className="arabic-copy">كل فكرة عظيمة تبدأ بشرارة. نحن نمنحها لغة بصرية، إيقاعًا، وصوتًا يظل حاضرًا بعد انتهاء المشاهدة.</p><Link href="/about" className="text-link light-link">عن Uncuts <span>↗</span></Link></div><div className="manifesto-stamp"><span>U</span><small>THE ART OF<br/>THE UNEXPECTED</small></div></div><div className="manifesto-footer"><span>01 — IDEA</span><span>02 — EXECUTION</span><span>03 — IMPACT</span></div></section>

    <section className="service-scene" id="services" onMouseEnter={() => setActiveScene(2)}><div className="section-heading"><div><span className="eyebrow">ACT 03 — THE CRAFT</span><h2>كل مشهد<br/><em>له سبب.</em></h2></div><p>نصنع المحتوى المرئي الاحترافي للأعمال والشركات بلمسة سينمائية.</p></div><div className="service-tabs" role="tablist" aria-label="Our services">{sceneServices.map((item, index) => <button key={item.title} className={index === activeScene - 2 ? 'active' : ''} onClick={() => setActiveScene(index + 2)} role="tab" aria-selected={index === activeScene - 2}><span>{String(index + 1).padStart(2, '0')}</span><b>{item.title}</b><i>↗</i></button>)}</div><div className="service-feature" style={{backgroundImage:`linear-gradient(90deg, rgba(5,5,5,.9), rgba(5,5,5,.1)), url(${sceneServices[Math.max(0, Math.min(2, activeScene - 2))].image})`}}><span className="feature-kicker">THE CURRENT SCENE</span><strong>{sceneServices[Math.max(0, Math.min(2, activeScene - 2))].detail}</strong><Link href="/services" className="text-link light-link">كل خدماتنا <span>↗</span></Link></div></section>

    <ReelShowcase />

    <div className="home-partners-station" onMouseEnter={() => setActiveScene(4)}><PartnerExhibition compact /></div>

    <section className="closing-cta"><span className="eyebrow">ACT 06 — THE FINAL SCENE</span><h2>جاهز تخلّي<br/><em>فكرتك تُرى؟</em></h2><p>من الشرارة الأولى إلى الإنتاج النهائي، نكون معك في كل لقطة.</p><Link href="/contact" className="button">تواصل معنا <span>↗</span></Link></section>
  </main>;
}
