import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App.tsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/Routes.tsx'

createRoot(document.getElementById('root')!).render(

  //Artık App.tsx Tag Helper'ına gerek duymuyoruz çünkü router tag helper kullanıyoruz.
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
