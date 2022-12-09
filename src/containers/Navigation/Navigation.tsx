import React from 'react';
import NavButton from '../../components/NavButton/NavButton';
import { RouteType } from '../../routes/routes';
import ProfileButton from '../../components/ProfileButton/ProfileButton';

type NavigationProps = {
  routes: RouteType[],
}
function Navigation({
  routes,
}: NavigationProps) {
  return (
    <div className="flex flex-col justify-between bg-indigo-700 w-1/4 h-full">
      <div className="flex flex-col gap-2 m-2 mt-20">
        {routes.map(({ title, url, icon }) => (
          <NavButton key={`${title}-nav-button`} title={title} url={url} icon={icon} />
        ))}
      </div>
      <ProfileButton />
    </div>
  );
}

export default Navigation;
