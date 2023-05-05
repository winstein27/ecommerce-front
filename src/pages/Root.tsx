import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';

const Root = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
