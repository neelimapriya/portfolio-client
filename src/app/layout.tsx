import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/lib/providers';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: "Nelima's Portfolio",
  description:
    'Nelima Sultana is a full-stack developer passionate about building scalable, high-performance web applications. She has hands-on experience developing full-stack solutions using a variety of modern technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
