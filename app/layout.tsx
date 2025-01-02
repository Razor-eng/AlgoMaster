import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AlgoMaster - Learn Data Structures & Algorithms | Interactive Learning Platform',
  description: 'AlgoMaster is an interactive learning platform designed to help you master Data Structures and Algorithms.',
  keywords: 'Data Structures, Algorithms, Learn Data Structures, Learn Algorithms, Programming, Coding Challenges, Tech Education, Interactive Learning, Algorithm Mastery',
  robots: 'index, follow',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <main className="min-h-screen pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}