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
import MyServices from '../Pages/MyServices/MyServices';
import UpdateService from '../Pages/UpdateService/UpdateService';
import MyScedule from '../MyScedule/MyScedule';
import ErrorRoute from './ErrorRoute';



    export const router = createBrowserRouter([
        {
            path: '/',
            element: <App></App>,
            errorElement: <ErrorRoute></ErrorRoute>,
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
                    element: <Services></Services>
                },
                {
                    path: '/services/:id',
                    element:<PrivateRoute><SingleService></SingleService></PrivateRoute> ,
                    loader: ({params})=>fetch(`https://bdbn-server.vercel.app/services/${params.id}`)
                },
                {
                    path: '/myservices',
                    element: <PrivateRoute><MyServices></MyServices></PrivateRoute>
                },
                {
                    path: '/update/:id',
                    element:<PrivateRoute><UpdateService></UpdateService></PrivateRoute> ,
                    loader: ({params})=>fetch(`https://bdbn-server.vercel.app/services/${params.id}`)
                },
                {
                    path: '/myscedule',
                    element: <PrivateRoute><MyScedule></MyScedule></PrivateRoute>
                }
            ]
        }
    ])


