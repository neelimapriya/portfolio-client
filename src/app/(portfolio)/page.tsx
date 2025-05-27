'use client';

import Image from 'next/image';
import Img from '@/assets/myPicture.jpg';
import { useState } from 'react';
import Link from 'next/link';
import { Contact } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false);

  const cvFileName = '';
  const cvPath = `/cv/${cvFileName}`;

  const driveLink = 'https://drive.google.com/file/d/1pSAg1DGfXTZy28U8nMo0hBfuhUA_hNXN/view?usp=sharing';

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(cvPath, { method: 'HEAD' });
      if (response.ok) {
        const link = document.createElement('a');
        link.href = cvPath;
        link.setAttribute('download', cvFileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(driveLink, '_blank');
      }
    } catch (error) {
      console.error('Download error:', error);
      window.open(driveLink, '_blank');
    } finally {
      setTimeout(() => setIsDownloading(false), 1500);
    }
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center min-h-full gap-8 md:gap-12 justify-center md:items-center px-4 md:px-8">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-5 max-w-xl text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold">Nelima Sultana</h1>

        <p className="text-xl md:text-2xl font-medium text-primary">Full Stack Web Developer</p>

        <p className="text-base md:text-lg text-foreground leading-relaxed">
          As a <span className="text-primary font-semibold">Full Stack Developer</span>, I build fast, scalable, and intuitive web applications using modern technologies like
          <span className="text-primary font-semibold"> React</span>,<span className="text-primary font-semibold"> Next.js</span>,<span className="text-primary font-semibold"> Tailwind CSS</span>, and
          <span className="text-primary font-semibold"> Node.js</span>.
        </p>

        <p className="text-base md:text-lg leading-relaxed">
          I love transforming ideas into reality through code. Whether it’s a startup MVP, a business dashboard, or a personal passion project, I strive to deliver products that are not only
          functional, but also visually striking.
        </p>

        <p className="text-base md:text-lg leading-relaxed">Let’s build something great together. Check out my work or get in touch!</p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
          <Button size="lg" className="cursor-pointer" onClick={handleDownloadCV} disabled={isDownloading}>
            <Contact />
            <span>{isDownloading ? 'Downloading...' : 'Download My CV'}</span>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <SocialButton name="Github" href="https://github.com/neelimapriya" />
          <SocialButton name="Facebook" href="https://www.facebook.com/Neelim.priya/" />
          <SocialButton name="LinkedIn" href="https://www.linkedin.com/in/nelima-sultana-7b4280298" />
          <SocialButton name="Instagram" href="#" />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="w-full md:w-auto">
        <Image src={Img} alt="Nelima Sultana" width={500} height={600} className="rounded-xl shadow-lg object-cover mx-auto" />
      </motion.div>
    </section>
  );
}

type Props = {
  name: string;
  href: string;
};

function SocialButton({ name, href }: Props) {
  return (
    <Button variant="link" className="!px-0 w-auto justify-start" asChild>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {name}
      </Link>
    </Button>
  );
}
