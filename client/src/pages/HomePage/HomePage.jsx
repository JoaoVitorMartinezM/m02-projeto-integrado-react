import { Spinner } from 'phosphor-react'
import CourseFilter from '../../components/CourseFilter'
import CourseList from '../../components/CourseList'
import React from 'react'
import useCourseList from '../../hooks/useCourseList'
import Button, { BUTTON_VARIANT } from '../../components/Button'
import { userIsAdministrator } from '../../hooks/UseUserInfo/UseUserInfo'

import './HomePage.css'

function HomePage () {
  const { courses, error, isLoading } = useCourseList()

  const isAdmin = userIsAdministrator()
  console.log(isAdmin)

  return (
    <div className='homePageContainer'>

      <div className='HomeTop'>
        <CourseFilter />
        {isAdmin && <Button variant={BUTTON_VARIANT.SECONDARY}>Cadastrar</Button>}
      </div>

      {isLoading && <Spinner width={100}/>}
      {isLoading && !!error && <p>{error}</p>}
      {!!courses.length && <CourseList list={courses} />}

    </div>
  )
}

export default HomePage
