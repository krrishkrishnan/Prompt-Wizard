import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Prompt Wizard',
  description: 'Master the art of prompt engineering with AI-powered scoring and guidance',
  keywords: ['prompt engineering', 'AI', 'ChatGPT', 'LLM', 'prompting'],
  openGraph: {
    title: 'Prompt Wizard',
    description: 'Master the art of prompt engineering with AI-powered scoring and guidance',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
