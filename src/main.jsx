import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, BrowserRouter ,  useNavigate ,Route, Routes, } from 'react-router-dom'
import SingUp from './pages/SingUp.jsx'
import Hero from './pages/Hero.jsx'
import Error404 from './error404.jsx'
import { RecoilRoot } from 'recoil'
import CategoryCart from './Component/Categories/CategoriesCart.jsx'
import SignIn from './pages/SignIn.jsx'
 


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
        path: "/signUp",
        element: <SingUp />,
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


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router}>
       
      </RouterProvider>
    </RecoilRoot>
  </React.StrictMode>
);
