import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css";
import WishList from './Components/WishList/WishList.jsx';
import './Components/WishList/WishList.css';
import { Router, RouterProvider, createBrowserRouter

 } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "wishlist",
    element: <WishList></WishList>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
