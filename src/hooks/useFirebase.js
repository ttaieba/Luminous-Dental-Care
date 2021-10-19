import { useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAthentication from "../Firebase/Firebase.init";



initializeAthentication()


const useFirebase = () => {
    const [user, setUser] = useState({})

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [submit, setSubmit] = useState("")
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
            });
    }
    const handdleSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                setSubmit(result.user)

            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage)
            });

    }






    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('user is', user)
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
        handleEmail,
        handlePassword,
        handleLogin,
        submit,
        handdleSubmit,
        logout
    }

}



export default useFirebase;