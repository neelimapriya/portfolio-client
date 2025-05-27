'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { useLayoutEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [init, setInit] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useLayoutEffect(() => {
    setInit(true);
  }, []);

  // to avoid hydration error
  if (!init) return null;

  return (
    <Button size="icon" variant="ghost" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      {resolvedTheme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  );
}
