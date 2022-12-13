import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import CustomNavbar from './CustomNavbar';
import About from './About';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.StrictMode>
        <CustomNavbar />
        <App />
      </React.StrictMode>
    ),
  },
  {
    path: "about",
    element: (
      <React.StrictMode>
        <CustomNavbar />
        <About />
      </React.StrictMode>
    )
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
