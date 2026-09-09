import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-mark"><span className="brand-mark" aria-hidden="true"><i/><i/></span><span>Uncuts<br/><small>Production</small></span></div>
    <div className="footer-address"><b>{siteConfig.registration}</b><span>{siteConfig.location}</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
    <div className="footer-links"><span>EXPLORE</span><Link href="/work">WORK</Link><Link href="/services">SERVICES</Link><Link href="/contact">CONTACT</Link></div>
    <p className="footer-copyright">© 2026 Uncuts Production. All rights reserved.</p>
    <a className="whatsapp-float" href={`https://wa.me/${siteConfig.whatsapp}`} aria-label="Contact Uncuts on WhatsApp">WA</a>
  </footer>;
}
