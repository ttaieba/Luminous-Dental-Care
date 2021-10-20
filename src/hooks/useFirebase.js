import { useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAthentication from "../Firebase/Firebase.init";

// imported------------------------------------------

initializeAthentication()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    // --------------------------Athentication works-------------


    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    const signInUingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)


    }
    // -----------------Googol Athentication--End---------------


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {

        if (e.target.value.length < 6) {
            setError("password should be more than 6")
        } else {
            setPassword(e.target.value)
            setError("")
        }
    }

    const handleLogin = (e) => {
        setIsLoading(true);
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {



                setUser(result.user)
                setError("")

            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                setIsLoading(false);
            });
    }
    const handdleSubmit = (e) => {
        setIsLoading(true)
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                setUser(result.user)

            })
            .catch((error) => {

                const errorMessage = error.message;
                // console.log(errorMessage)
                setError(errorMessage)
                setIsLoading(false)
            });

    }

    // ------------------Email Athentication---end----------------


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('user is', user)
                setUser(user)
            } else {
                // User is signed out
                // ...
            }
            setIsLoading(false)
        });
    }, [])

    // ---------------Loging Obsevation for multiple tabs end--------

    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))

    }
    // ---------------singout end------------------------------------
    return {
        user,
        isLoading,
        signInUingGoogle,
        error,
        handleEmail,
        handlePassword,
        handleLogin,
        handdleSubmit,
        logout
    }

}



export default useFirebase;