import { useState } from 'react'
import { apiService } from '../../services/api'

const useCourseRegister = () => {
  const [data, setData] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const registerCourse = async (course) => {
    setIsSubmitting(true)
    const response = await apiService.post('/courses', course)
    setError(response.error)
    setData(response.data)
    setIsSubmitting(false)
  }
  return {
    courses: data,
    error,
    isSubmitting,
    registerCourse
  }
}

export default useCourseRegister
