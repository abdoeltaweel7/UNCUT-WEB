import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-mark"><img className="footer-logo" src="/uncuts-logo.jpeg" alt="Uncuts Production" /></div>
    <div className="footer-address"><b>{siteConfig.registration}</b><span>{siteConfig.location}</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
    <div className="footer-links"><span>EXPLORE</span><Link href="/work">WORK</Link><Link href="/services">SERVICES</Link><Link href="/contact">CONTACT</Link></div>
    <p className="footer-copyright">© 2026 Uncuts Production. All rights reserved.</p>
    <a className="whatsapp-float" href={`https://wa.me/${siteConfig.whatsapp}`} aria-label="Contact Uncuts on WhatsApp">WA</a>
  </footer>;
}
