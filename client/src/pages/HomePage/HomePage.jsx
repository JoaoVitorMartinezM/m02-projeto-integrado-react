import { Spinner } from 'phosphor-react'
import CourseFilter from '../../components/CourseFilter'
import CourseList from '../../components/CourseList'
import React from 'react'
import useCourseList from '../../hooks/useCourseList'
import Button, { BUTTON_VARIANT } from '../../components/Button'
import { userIsAdministrator } from '../../hooks/UseUserInfo/UseUserInfo'
import { useNavigate } from 'react-router-dom'
import { HomePageContainer, HomeTop } from './style'

function HomePage () {
  const { courses, error, isLoading } = useCourseList()
  const navigate = useNavigate()
  const isAdmin = userIsAdministrator()
  console.log(isAdmin)

  const handleClick = () => {
    navigate('/register')
  }

  return (
    <HomePageContainer>

      <HomeTop>
        <CourseFilter />
        {isAdmin && <Button variant={BUTTON_VARIANT.SECONDARY} onClick={ handleClick }>Cadastrar</Button>}
      </HomeTop>

      {isLoading && <Spinner width={100}/>}
      {isLoading && !!error && <p>{error}</p>}
      {!!courses.length && <CourseList list={courses} />}

    </HomePageContainer>
  )
}

export default HomePage
