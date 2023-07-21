import Head from '@/components/Head';
import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <Head />
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;
