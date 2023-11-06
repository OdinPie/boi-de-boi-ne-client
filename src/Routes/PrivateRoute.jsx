import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Spinner } from 'flowbite-react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return(<div>
        <div className="flex flex-wrap items-center gap-2">
      <Spinner aria-label="Extra small spinner example" size="xs" />
      <Spinner aria-label="Small spinner example" size="sm" />
      <Spinner aria-label="Medium sized spinner example" size="md" />
      <Spinner aria-label="Large spinner example" size="lg" />
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div></div>)
    }

    if(user){
        return children;
    }
    else{
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
   
};

export default PrivateRoute;