import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'
import AuthProvider from './auth/context/AuthProvider.jsx'
import DataProvider from './auth/context/DataProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <DataProvider>
    <RouterProvider router={router}/>
      </DataProvider>
    </AuthProvider>
  </StrictMode>
)