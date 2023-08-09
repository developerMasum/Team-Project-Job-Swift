import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
{/* <Provider store={store}> */}
// Auth provider will also add here 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
   </div>
  </React.StrictMode>
)
