import React, { useState } from 'react';
import { apiService } from '../../services/api';

const useUserRegister = () => {
  const [data, setData] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const registerUser = async (user) => {
    setIsSubmitting(true)
    const response = await apiService.post('/users', user)
    setError(response.error)
    setData(response.data)
    if (response.error) {
      return
    }
    setIsSubmitting(false)
  }
  return {
    data,
    error,
    isSubmitting,
    registerUser
  }
}

export default useUserRegister
