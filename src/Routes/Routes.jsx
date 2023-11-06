import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../layout/App';
import Banner from '../Banner/Banner';
import AddProducts from '../Pages/AddProducts/AddProducts';
import Register from '../Authentication/Register';
import Login from '../Authentication/Login';
import PrivateRoute from './PrivateRoute';



    export const router = createBrowserRouter([
        {
            path: '/',
            element: <App></App>,
            children: [
                {
                    path: '/',
                    element: <Banner></Banner>
                },
                {
                    path: '/addproducts',
                    element:<PrivateRoute><AddProducts></AddProducts></PrivateRoute> 
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                }
            ]
        }
    ])


