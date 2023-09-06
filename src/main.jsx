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
import PhonesCart from './Component/smartPhones/PhonesCart.jsx'
import EssentialCart from './Component/Essential/EssentialCart.jsx'
import { Provider } from 'react-redux'
import {store} from './store.js'
 


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
        path: "/categories/:id",
        element: <CategoryCart />,
      },
      {
        path: "/phones/:id",
        element: <PhonesCart />,
      },

      {
        path: "/essentialCart/:id",
        element: <EssentialCart />,
      },
      // {
      //   path: "/cart",
      //   element: <Cart />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RecoilRoot>
        <RouterProvider router={router}></RouterProvider>
      </RecoilRoot>
    </Provider>
  </React.StrictMode>
);
