import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './App.css'
import { createBrowserRouter, Route } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import {Listing} from './Listing.tsx'
import { Newserver } from './New.tsx'

 
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        Component: Listing,
      },
      {
        path: 'newserver',
        Component: Newserver,
      },
    ],
  },
])
 
 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
