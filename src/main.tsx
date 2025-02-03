import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './routes/Login'
import Singup from './routes/Singup'
import Dashboard from './routes/Dashboard'
import Otp from './routes/Otp'
import ProtectedRoute from './routes/ProtectedRoute'
import AuthProvider from './auth/AuthProvider'
import Home from './routes/Home'
import Gmail from './routes/Gmail'
import EnviarGmail from './routes/EnviarGmail'



const router=createBrowserRouter([
 
  {
    path: '/',
    element:<Login/>
  },
  {
    path: '/singup',
    element:<Singup/>
  },
  {
    path: '/otp',
    element:<Otp/>
  },
  {
    path: '/',
    element:<ProtectedRoute/>,
    children:[
      {
       path:'/dashboard',
       element:<Dashboard/> ,
       children:[
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'gmail',
          element: <Gmail />,
        },
        {
          path: 'enviargmail',
          element: <EnviarGmail />,
        },

       ]
      },
      
    
    ]
  }

 
 
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/> 
    </AuthProvider>
  </StrictMode>,
)
