
import { Spinner} from 'phosphor-react'
import CourseFilter from '../../components/CourseFilter';
import CourseList from '../../components/CourseList';
import useCourseList from '../../hooks/useCourseList';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import Button, { BUTTON_VARIANT } from '../../components/Button';

import './HomePage.css';


function HomePage() {
  const {courses, error, isLoading} = useCourseList();

  const [user, _] = useContext(UserContext);
  
  

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
