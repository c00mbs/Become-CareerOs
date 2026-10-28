import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Become | Career Record',
  description: 'A human-centered career record for personal growth.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
