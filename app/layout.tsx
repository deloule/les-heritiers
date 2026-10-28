import type { Metadata } from 'next';
import './style.css';
export const metadata: Metadata = { title: 'LES HÉRITIERS', description: 'Atlas mondial des sources historiques' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html>; }
