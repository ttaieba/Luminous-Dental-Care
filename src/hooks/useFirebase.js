import { useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAthentication from "../Firebase/Firebase.init";



initializeAthentication()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    const signInUingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            })

            .catch((error) => {

                setError(error.message);
            })

    }



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('paisi user', user)
                setUser(user)
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })

    }

    return {
        user,
        signInUingGoogle,
        error,
        logout
    }

}



export default useFirebase;