'use client';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Page() {
  const { push } = useRouter();
  const pathname = usePathname();
  React.useEffect(() => {
    if (pathname === '/') {
      push('/main/home');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return null;
}
