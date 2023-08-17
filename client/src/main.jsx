import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'

import AuthProvider from './Auth/AuthProvider'
{/* <Provider store={store}> */ }

import { Provider } from 'react-redux';
import store from './redux/store'


// Auth provider will also add here 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div className='max-w-screen-xl mx-auto'>
      <AuthProvider>

        <RouterProvider router={router} />
      </AuthProvider>
    </div>

   <div className='max-w-screen-xl mx-auto'>
    <Provider store={store}>
   <RouterProvider router={router} />
   </Provider>
   </div>

  </React.StrictMode>
)
