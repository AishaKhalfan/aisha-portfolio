import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Aisha Kauma Khalifan | Software Engineer & Cloud Engineer',
  description:
    'AWS Certified Cloud Practitioner and Software Engineer based in Nairobi, Kenya. Specialist in reliable backend systems, cloud infrastructure (AWS), Python automation, and modern web applications.',
  keywords: [
    'Aisha Kauma Khalifan',
    'Software Engineer',
    'Cloud Engineer',
    'AWS Certified',
    'Nairobi Kenya',
    'Python',
    'Full Stack',
    'DevOps',
  ],
  authors: [{ name: 'Aisha Kauma Khalifan' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="bg-navy-950 text-slate-100 antialiased selection:bg-cyan-400/20 selection:text-cyan-400 min-h-screen flex flex-col">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
