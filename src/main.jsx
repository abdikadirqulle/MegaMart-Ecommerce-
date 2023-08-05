import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SingUp from './pages/SingUp.jsx'
import Home from './Component/Home/Home.jsx'
import Hero from './pages/Hero.jsx'
import Error404 from '../error404.jsx'
import { RecoilRoot } from 'recoil'
import CategoryCart from './Component/Categories/CategoriesCart.jsx'
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Hero />,
        index: true,
      },
      {
        path: "/SingUp",
        element: <SingUp />
      },
     
      {
        path: "/categories",
        element: <CategoryCart />,
      },
      // {
      //   path: "/new-post",
      //   element: <NewPost />,
      // },
      // {
      //   path: "/messages",
      //   element: <Messages />,
      // },
      // {
      //   path: "/post/:id",
      //   element: <PostInfo />,
      // },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router}>{/* <App /> */}</RouterProvider>
    </RecoilRoot>
  </React.StrictMode>
);
