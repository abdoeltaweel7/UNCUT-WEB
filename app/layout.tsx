import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
export const metadata: Metadata = { title: 'Uncuts Production — نصنع الرؤية.. لنلهم العالم', description: 'شريككم الإبداعي في إنتاج المحتوى المرئي الاحترافي بلمسة سينمائية.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="ar" dir="rtl" data-scroll-behavior="smooth"><body><Navigation/>{children}<Footer/></body></html> }
