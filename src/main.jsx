import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './route/Route'
import Authcontext from './AuthContext/Authcontext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authcontext>
      <RouterProvider router={router } />
    </Authcontext>
    
  </React.StrictMode>,
)
