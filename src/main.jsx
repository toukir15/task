import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import DashboardLayout from './DashboardLayout'
import { router } from './Routes/router'
import {
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <DashboardLayout />
    </RouterProvider>
    <ToastContainer />
  </React.StrictMode>,
)
