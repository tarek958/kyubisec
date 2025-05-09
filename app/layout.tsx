import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { shareTechMono, firaCode } from './fonts';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'KyubiSec - Securing Your Digital Future',
  description: 'Advanced cybersecurity solutions and training for professionals',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${shareTechMono.variable} ${firaCode.variable} font-fira bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}