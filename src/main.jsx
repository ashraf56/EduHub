import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './route/Route'
import Authcontext from './AuthContext/Authcontext'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authcontext>
    <QueryClientProvider client={queryClient}>

            <RouterProvider router={router } />

    </QueryClientProvider>
    </Authcontext>
    
  </React.StrictMode>,
)
