import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hero from "./Component/Hero/Hero.jsx"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Home.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: "Error 404",
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//         index: true,
//       },
//       {
//         path: "/Hero",
//         element: <Hero />,
//       },
      // {
      //   path: "/new-post/:Id",
      //   element: <NewPost />,
      // },
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
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    {/* <RouterProvider router={router}> */}
    <App />
  {/* </RouterProvider> */}
  </React.StrictMode>,
)
