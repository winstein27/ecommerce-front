import { createBrowserRouter } from 'react-router-dom';

import Root from './pages/Root';
import Products from './pages/Products';
import NewProduct from './pages/NewProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Products />,
      },
      {
        path: '/newProduct',
        element: <NewProduct />,
      },
    ],
  },
]);

export default router;
