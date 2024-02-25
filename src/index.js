import ReactDOM from 'react-dom/client';
import './index.css';

import React from 'react';
import{
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import App from './App';
import Signup from './Components/Signup';
import Login from './Components/Login';




const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
  {
    path: "/Signup",
    element: <Signup/>
},
{
    path: "/Login",
    element: <Login/>
},


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
    
