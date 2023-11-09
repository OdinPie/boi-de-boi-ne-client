import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider'
import WebsiteNameProvider from './WebsiteNameProvider/WebsiteNameProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WebsiteNameProvider>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </WebsiteNameProvider>
  </React.StrictMode>,
)
