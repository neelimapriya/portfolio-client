import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/providers";
import Link from "next/link";



export const metadata: Metadata = {
  title: "Nelima's Portfolio",
  description:     "Nelima Sultana is a full-stack developer passionate about building scalable, high-performance web applications. She has hands-on experience developing full-stack solutions using a variety of modern technologies.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" suppressHydrationWarning>
    <body className="bg-black text-white font-sans">
        <div className="flex min-h-screen">
          <aside className="w-20 md:w-40 bg-black text-white flex flex-col items-center py-10 space-y-6 border-r border-gray-800">
            <NavItem icon="🏠" label="Home" href="/" />
            <NavItem icon="👩‍💻" label="About" href="/about" />
            <NavItem icon="📚 " label="Skills" href="/skills" />
            <NavItem icon="📁" label="Projects" href="/projects" />
            <NavItem icon="✉️" label="Contact" href="/contact" />
          </aside>
          <main className="flex-1 p-10"><Providers>{children}</Providers></main>
        </div>
      </body>
    </html>
  );
}
function NavItem({ icon, label, href }: { icon: string; label: string; href: string }) {
  return (
    <Link href={href} style={{ textShadow: '0 0 20px  #fff' }}>
      <div  className="flex  items-center text-sm space-x-1 space-y-1 hover:text-[#F4FBA3] cursor-pointer">
        <span className="text-2xl">{icon}</span>
        <span>{label}</span>
      </div>
    </Link>
  )
}
