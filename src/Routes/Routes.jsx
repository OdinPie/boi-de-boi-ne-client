import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../layout/App';
import Banner from '../Banner/Banner';
import AddProducts from '../Pages/AddProducts/AddProducts';
import Register from '../Authentication/Register';
import Login from '../Authentication/Login';
import PrivateRoute from './PrivateRoute';
import Services from '../Pages/Services/Services';
import SingleService from '../Pages/Services/SingleService';



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
                },
                {
                    path: '/services',
                    element: <Services></Services>,
                    loader: ()=> fetch('http://localhost:5000/services')
                },
                {
                    path: '/services/:id',
                    element: <SingleService></SingleService>,
                    loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
                }
            ]
        }
    ])


