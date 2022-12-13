'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import NavButton from '../../components/NavButton/NavButton';
import { RouteType } from '../../routes/routes';
import ProfileButton from '../../components/ProfileButton/ProfileButton';
import { RoutesEnum } from '../../routes/Routes.enum';

type NavigationProps = {
  routes: RouteType[],
}
function Navigation({
  routes,
}: NavigationProps) {
  const currentPath = usePathname();
  return (
    <div className="flex flex-col justify-between bg-slate-700 w-1/4 h-full">
      <div className="flex flex-col gap-2 m-2 mt-20">
        {routes.map(({ title, url, icon }) => {
          const isActive = currentPath === url;
          return (
            <NavButton
              key={`${title}-nav-button`}
              title={title}
              url={url}
              icon={icon}
              isActive={isActive}
            />
          );
        })}
      </div>
      <ProfileButton isActive={currentPath === RoutesEnum.PROFILE} />
    </div>
  );
}

export default Navigation;
