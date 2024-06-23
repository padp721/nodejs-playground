import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export default function Routes() {
    
  const router = createBrowserRouter([
    {
      path: '/',
      lazy: () => import('./components/Layout'),
      children: [
        {
            index: true,
            lazy: () => import('./pages/Home')
        },
        {
            path: 'register',
            lazy: () => import('./pages/Register')
        },
        {
            path: 'login',
            lazy: () => import('./pages/Login')
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />
}