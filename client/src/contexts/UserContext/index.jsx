import { createContext, useContext } from "react"

const UserContext = createContext([])

export const UserContextProvider = UserContext.Provider

export function useUserContext(){
    return useContext(UserContext)
}

export function useUserState(){
    const [user] = useUserContext()
    return user
}

export function useSetUserState(){
    const [_, setUser] = useUserContext()
    return setUser
}



export default UserContext;