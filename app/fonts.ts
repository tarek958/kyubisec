import { Share_Tech_Mono, Fira_Code } from 'next/font/google';

export const shareTechMono = Share_Tech_Mono({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-share-tech-mono',
});

export const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});