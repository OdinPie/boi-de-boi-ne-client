import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";

    const auth = getAuth(app);
    export const AuthContext = createContext();
    const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    const provider = new GoogleAuthProvider();

    const signWithGoogle = () =>{
        signInWithPopup(auth, provider )
        .then(result=>{
            console.log(result.user);
        })
        .catch(err=>console.log(err))
    }

    const signUpUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, photo) =>{
        setloading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const loginUser = (email, password)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setloading(true);
        return signOut(auth);
    }

    const userInfo = {
        user,
        signUpUser,
        updateUser,
        loginUser,
        logOut,
        loading,
        signWithGoogle
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('current user: ', user);
            setloading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[user])
    

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;

