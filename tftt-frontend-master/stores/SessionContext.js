import { createContext,useEffect,useState } from "react"
//Context to keep track of user session
const SessionContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
})

// Provider component that wraps your app and makes auth object ...
export const SessionContextProvider = ({ children })  =>{
    const [user, setUser] = useState(null)
    useEffect(() => {
        // Check if user is logged in on page load
        fetch('/api/getSession')
            .then((res) => {
                if (res.status === 200){
                    res.json().then((data) => {
                        // console.log(data.user)
                        setUser(data.user)
                    })
                }
            });
    }, [])

    // Set User data in context
    const login = (user) => {
        setUser(user)
    }
    // Clear User data in context
    const logout = () => {
        setUser(null)
    }

    return (
        <SessionContext.Provider
            value={{
                user,
                login,
                logout,
            }}
        >
            {children}
        </SessionContext.Provider>
    )
}

export default SessionContext