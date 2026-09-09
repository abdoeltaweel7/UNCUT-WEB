'use client';
import { FormEvent, useState } from 'react';
import { siteConfig } from '@/data/siteConfig';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  if (submitted) return <div className="form-success"><span>✦</span><h2>وصلنا المشهد الأول.</h2><p>تم تجهيز تفاصيل مشروعك. أرسلها الآن على واتساب لإكمال التواصل مع فريق Uncuts.</p><a className="button" href={`https://wa.me/${siteConfig.whatsapp}`}>أرسل التفاصيل على واتساب <span>↗</span></a><button className="text-link" onClick={() => setSubmitted(false)}>تعديل التفاصيل</button></div>;
  return <form onSubmit={handleSubmit}><label>الاسم<input name="name" required autoComplete="name" placeholder="اسمك الكامل"/></label><label>الشركة<input name="company" autoComplete="organization" placeholder="اسم الشركة"/></label><label>البريد الإلكتروني<input name="email" type="email" required autoComplete="email" placeholder="name@company.com"/></label><label>الهاتف<input name="phone" type="tel" autoComplete="tel" placeholder="+966"/></label><label>حدثنا عن مشروعك<textarea name="message" required rows={4} placeholder="ما الفكرة التي تريد أن نراها؟"/></label><button className="button" type="submit">ابدأ مشروعًا <span>↗</span></button></form>;
}
