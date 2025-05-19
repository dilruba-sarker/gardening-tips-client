import React, { useEffect, useState } from 'react';
import { AuthContext } from './../Context/AuthContext';
import { auth } from './../../firebase.init';
import { createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
const [user,setUser]=useState()
const createUser=(email, password)=>{
   return createUserWithEmailAndPassword(auth, email, password)

}
const signInUser=(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

const googleSignin=()=>{
    return signInWithPopup(auth, provider)
}
const updateUser=(updateData)=>{
return  updateProfile(auth.currentUser,updateData)
}

const logOut=()=>{
  return  signOut(auth)
}
const authInfo={
createUser,signInUser,updateUser,user,setUser,googleSignin,logOut,
}

useEffect(()=>{
    const disconnect= onAuthStateChanged(auth,currentUser=>{

        setUser(currentUser)
         console.log('User status changed:', currentUser);
})
return ()=> disconnect()
    
},[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;