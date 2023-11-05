import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../layout/App';
import Banner from '../Banner/Banner';



    export const router = createBrowserRouter([
        {
            path: '/',
            element: <App></App>,
            children: [
                {
                    path: '/',
                    element: <Banner></Banner>
                }
            ]
        }
    ])


