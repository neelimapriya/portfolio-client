import type { Metadata } from 'next';
import Providers from '@/lib/providers';
import Link from 'next/link';
import { Home, User, BookOpen, FolderOpen, Mail, Github, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: "Nelima's Portfolio",
  description:
    'Nelima Sultana is a full-stack developer passionate about building scalable, high-performance web applications. She has hands-on experience developing full-stack solutions using a variety of modern technologies.',
};

const navItems = [
  { icon: Home, label: 'Home', href: '/', description: 'Back to start' },
  { icon: User, label: 'About', href: '/about', description: 'My story' },
  { icon: BookOpen, label: 'Skills', href: '/skills', description: 'Technologies' },
  { icon: FolderOpen, label: 'Projects', href: '/projects', description: 'My work' },
  { icon: Mail, label: 'Contact', href: '/contact', description: 'Get in touch' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 z-50 flex items-center px-4 md:hidden">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <h1 className="font-bold text-gray-900 dark:text-white">Nelima&apos;s Portfolio</h1>
        </div>
        <nav className="ml-auto flex gap-2">
          {navItems.map((item) => (
            <NavItem key={item.href} {...item} isMobile />
          ))}
        </nav>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex sticky top-0 h-screen w-72 flex-col bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-r border-gray-200 dark:border-gray-700 p-6 z-40">
        {/* Logo Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900 dark:text-white">Nelima Sultana</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Developer</p>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            Navigation
          </p>
          {navItems.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </nav>

        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            Quick Links
          </p>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="hover-lift" asChild>
              <Link href="https://github.com/neelimapriya" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="hover-lift" asChild>
              <Link href="https://www.linkedin.com/in/nelima-sultana-7b4280298" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="hover-lift" asChild>
              <Link href="tel:+8801882277032">
                <Phone className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mt-4 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm text-green-700 dark:text-green-300 font-medium">Available for work</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-screen pt-16 md:pt-0 page-transition">
          <Providers>{children}</Providers>
        </div>
      </main>
    </div>
  );
}

type NavItemProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  description?: string;
  isMobile?: boolean;
};

function NavItem({ icon: Icon, label, href, description, isMobile = false }: NavItemProps) {
  if (isMobile) {
    return (
      <Button variant="ghost" size="sm" className="hover-lift p-2" asChild>
        <Link href={href} aria-label={label}>
          <Icon className="w-4 h-4" />
        </Link>
      </Button>
    );
  }

  return (
    <Link href={href} className="block group">
      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover-lift group-hover:shadow-md">
        <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors duration-200">
          <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
            {label}
          </p>
          {description && (
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
