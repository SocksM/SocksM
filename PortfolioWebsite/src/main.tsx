import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import App from './App.tsx'
import ROUTES from "./Routes.ts";

const router = createBrowserRouter([
    {
        path: ROUTES.BASE,
        element: <App />,
        children: [

        ]
    },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
