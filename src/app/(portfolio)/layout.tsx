import type { Metadata } from 'next';
import Providers from '@/lib/providers';
import Link from 'next/link';

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
    <div className="flex min-h-screen">
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-background border-b z-50 flex items-center px-4 md:hidden">
        <h1>Neelima&apos;s Portfolio</h1>
        <nav className="ml-auto flex gap-4">
          <NavItem icon="🏠" label="" href="/" />
          <NavItem icon="👩‍💻" label="" href="/about" />
          <NavItem icon="📚" label="" href="/skills" />
          <NavItem icon="📁" label="" href="/projects" />
          <NavItem icon="✉️" label="" href="/contact" />
        </nav>
      </header>

      {/* Sidebar - hidden on mobile */}
      <aside className="hidden md:sticky md:flex top-0 z-50 w-20 md:w-50 flex-col px-4 py-10 border-r">
        <h1 className="mb-4">Neelima&apos;s Portfolio</h1>
        <div className="space-y-6 flex flex-col">
          <NavItem icon="🏠" label="Home" href="/" />
          <NavItem icon="👩‍💻" label="About" href="/about" />
          <NavItem icon="📚" label="Skills" href="/skills" />
          <NavItem icon="📁" label="Projects" href="/projects" />
          <NavItem icon="✉️" label="Contact" href="/contact" />
        </div>
      </aside>

      {/* Main content - adjusted for mobile header */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10 flex flex-col mt-16 md:mt-0">
        <Providers>{children}</Providers>
      </main>
    </div>
  );
}
function NavItem({ icon, label, href }: { icon: string; label: string; href: string }) {
  return (
    <Link href={href}>
      <div className="flex items-center text-sm space-x-1 space-y-1 hover:text-primary cursor-pointer">
        <span className="text-2xl">{icon}</span>
        <span>{label}</span>
      </div>
    </Link>
  );
}
