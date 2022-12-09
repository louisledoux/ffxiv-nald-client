'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavButtonProps = {
  title: string,
  url: string,
  icon?: ReactNode,
}
function NavButton({
  title, url, icon,
}: NavButtonProps) {
  const pathname = usePathname();
  const isActive = pathname === url;
  return (
    <Link
      className={`${isActive ? 'text-white bg-indigo-800' : 'text-slate-300'}
        transition ease-in-out duration-150
        flex flex-row gap-2 p-2 rounded-md
        hover:text-white active:text-white hover:bg-indigo-800 active:bg-indigo-900
      `}
      href={url}
      style={{ textDecoration: 'none' }}
    >
      {icon}
      {title}
    </Link>
  );
}

NavButton.defaultProps = {
  icon: undefined,
};

export default NavButton;
