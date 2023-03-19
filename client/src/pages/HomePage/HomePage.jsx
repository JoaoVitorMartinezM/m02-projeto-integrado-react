
import { Spinner} from 'phosphor-react'
import CourseFilter from '../../components/CourseFilter';
import CourseList from '../../components/CourseList';
import useCourseList from '../../hooks/useCourseList';

import {  useUserContext } from '../../contexts/UserContext'
import Button, { BUTTON_VARIANT } from '../../components/Button';
import {userIsAdministrator} from '../../hooks/UseUserInfo/UseUserInfo';


import './HomePage.css';
// import userIsAdministrator from '../../hooks/UseUserInfo';



function HomePage() {
  const {courses, error, isLoading} = useCourseList();

  const [user, _] = useUserContext();
  

  const admin = userIsAdministrator();
  console.log(admin)


  

  return (
    <div className='homePageContainer'>

      <div className='HomeTop'>
        <CourseFilter />
        {user.isAdministrator && <Button variant={BUTTON_VARIANT.SECONDARY}>Cadastrar</Button>}
      </div>
      

      {isLoading && <Spinner width={100}/>}
      {isLoading && !!error && <p>{error}</p>}
      {!!courses.length &&  <CourseList list={courses} />}
      
    </div>
  );
}

export default HomePage;
