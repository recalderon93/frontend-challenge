import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './root';
import AddProduct from './add-product';
import EditProduct from './edit-product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // loader: rootLoader,
  },
  {
    path: '/edit_product/:productId',
    element: <EditProduct />,
  },
  {
    path: '/add_product',
    element: <AddProduct />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
