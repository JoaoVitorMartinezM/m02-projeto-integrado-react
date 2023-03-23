import { useEffect, useState } from 'react'
import { apiService } from '../../services/api'
import { useUserContext } from '../../contexts/UserContext'

const UseAuth = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await apiService.get('/users')
      setUsers(response.data)
      setError(response.error)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return {
    users,
    error,
    isLoading
  }
}

const auth = (value) => {
  const context = useUserContext()
  context.user = value

  console.log(context)
}

export default UseAuth
export { auth }
