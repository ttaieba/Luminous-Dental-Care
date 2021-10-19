import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"

// --------------------------context use 
const useAuth = () => {


    return useContext(AuthContext)
}

export default useAuth