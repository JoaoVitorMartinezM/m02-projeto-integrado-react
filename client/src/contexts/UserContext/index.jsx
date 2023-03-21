import { createContext, useContext } from "react"

const UserContext = createContext({user:'', isAdmin:false})

export const UserContextProvider = UserContext.Provider

export function useUserContext(){
    return useContext(UserContext)
}

export function useUserState(){
    const user = useUserContext()
    return user
}



export default UserContext;