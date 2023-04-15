import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import Products from './pages/Products';
import Product from './pages/Product'
import ErrorPage from './pages/ErrorPage';
import ManageProducts from './pages/admin/ManageProducts';
import CreateProduct from './pages/admin/CreateProduct';
import UpdateProduct from './pages/admin/UpdateProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Products/>,
      },
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path: `/products/:productId`,
        element: <Product/>,
      },
      {
        path: `/admin/manageproducts`,
        element: <ManageProducts/>,
      },
      {
        path: `/admin/createproduct`,
        element: <CreateProduct/>,
      },
      {
        path: `/admin/updateproduct/:productId`,
        element: <UpdateProduct/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
