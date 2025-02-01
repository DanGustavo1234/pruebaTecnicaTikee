import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './routes/Login'
import Singup from './routes/Singup'
import Dashboard from './routes/Dashboard'
import ProtectedRoute from './routes/ProtectedRoute'
import AuthProvider from './auth/AuthProvider'


const router=createBrowserRouter([
 
  {
    path: '/',
    element:<Login/>
  },
  {
    path: '/signup',
    element:<Singup/>
  },
  {
    path: '/',
    element:<ProtectedRoute/>,
    children:[
      {
       path:'/dashboard',
       element:<Dashboard/> 
      }]
  }

 
 
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/> 
    </AuthProvider>
  </StrictMode>,
)
