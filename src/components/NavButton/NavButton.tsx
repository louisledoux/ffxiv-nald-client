import React, { ReactNode } from 'react';
import Link from 'next/link';

type NavButtonProps = {
  title: string,
  url: string,
  isActive: boolean,
  icon?: ReactNode,
}
function NavButton({
  title, url, isActive, icon,
}: NavButtonProps) {
  return (
    <Link
      className={`${isActive ? 'text-white bg-slate-800' : 'text-slate-300'}
        transition ease-in-out duration-150
        flex flex-row gap-2 p-2 rounded-md
        hover:text-white active:text-white hover:bg-slate-800 active:bg-slate-900
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
