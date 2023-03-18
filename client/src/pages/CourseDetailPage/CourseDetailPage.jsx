import './CourseDetailPage.css'
import { useParams } from 'react-router-dom'
import useCourseList from '../../hooks/useCourseList';


const CourseDetailPage = () => {

    const {id} = useParams()

    const {courses, error, isLoading} = useCourseList()

    const details = courses.filter((course) => course.id == id && course )

    console.log(details)

    return(
        <>
            {
                details && (
                    <>
                    <h1>Details of {details[0].name} <img src={details[0].imageUrl} width={50}/></h1>
                    <span>{details[0].category}</span>
                    <p>{details[0].description}</p>
                    <span>{details[0].duration}h</span>
                    </>
                )
            }
           

        </>
        

        
    )
}

export default CourseDetailPage