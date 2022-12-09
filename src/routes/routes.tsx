import React, { ReactNode } from 'react';
import HomeIcon from '../assets/icons/HomeIcon';
import ListIcon from '../assets/icons/ListIcon';
import BookmarkIcon from '../assets/icons/BookmarkIcon';
import StatsIcon from '../assets/icons/StatsIcon';

export type RouteType = {
  title: string,
  url: string,
  icon?: ReactNode,
}

const routes: RouteType[] = [
  { title: 'Accueil', url: '/', icon: <HomeIcon /> },
  { title: 'Objets suivis', url: '/alerts', icon: <BookmarkIcon /> },
  { title: 'Listes', url: '/lists/1', icon: <ListIcon /> },
  { title: 'Statistiques', url: '/stats', icon: <StatsIcon /> },
];

export default routes;
