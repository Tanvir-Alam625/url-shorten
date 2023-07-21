import { LayoutType } from '@/types';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Error404 = lazy(() => import('@/components/Error404'));

// Import Pages

const HomePage = lazy(() => import('@/pages/HomePage'));
const ListPage = lazy(() => import('@/pages/ListPage'));
const EditPage = lazy(() => import('@/pages/EditPage'));

type AppRoute = RouteObject & {
  layout?: LayoutType;
};

export const routes: AppRoute[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/list',
    element: <ListPage />,
  },
  {
    path: '/edit/:id',
    element: <EditPage />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
];
