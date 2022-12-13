import React, { ReactNode } from 'react';
import HomeIcon from '../assets/icons/HomeIcon';
import ListIcon from '../assets/icons/ListIcon';
import BookmarkIcon from '../assets/icons/BookmarkIcon';
import StatsIcon from '../assets/icons/StatsIcon';
import { RoutesEnum } from './Routes.enum';

export type RouteType = {
  title: string,
  url: string,
  icon?: ReactNode,
}
const routes: RouteType[] = [
  { title: 'Accueil', url: RoutesEnum.ROOT, icon: <HomeIcon /> },
  { title: 'Objets suivis', url: RoutesEnum.ALERTS, icon: <BookmarkIcon /> },
  { title: 'Listes', url: RoutesEnum.LISTS, icon: <ListIcon /> },
  { title: 'Statistiques', url: RoutesEnum.STATS, icon: <StatsIcon /> },
];

export { routes };
