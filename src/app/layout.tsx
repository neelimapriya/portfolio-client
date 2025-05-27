import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
