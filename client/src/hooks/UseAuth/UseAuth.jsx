import {useEffect, useState} from "react"
import {apiService} from '../../services/api'

const UseAuth = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    

    useEffect(()=>{
        const fetchData = async () =>{
            setIsLoading(true)
            const response = await apiService.get('/users')
            setUsers(response.data)
            setError(response.error)
            setIsLoading(false)
        }

        fetchData()
    },[])

    

    return {
        users,
        error,
        isLoading
    }
}

export default UseAuth