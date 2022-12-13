import React from 'react';
import App from '../src/App';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import About from '../src/About';

export default function Home() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <React.StrictMode>
          <App />
        </React.StrictMode>
      ),
    },
    {
      path: "about",
      element: (
        <React.StrictMode>
          <About />
        </React.StrictMode>
      )
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}
