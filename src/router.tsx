import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './pages';

export const router = createBrowserRouter([
  {
    children: [
      {
        element: <Home />,
        path: '/',
      },
    ],
    element: <Layout />,
  },
]);
