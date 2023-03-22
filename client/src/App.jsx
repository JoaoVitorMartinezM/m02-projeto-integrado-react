import Navbar from './components/Navbar';
import PageWrapper from './components/PageWrapper';
import Footer from './components/Footer';
import {UserContextProvider, useUserContext} from './contexts/UserContext';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import HomePage from './pages/HomePage';
import CourseDetailPage from './pages/CourseDetailPage'
import LoginPage from './pages/LoginPage';







function App() {

  if(localStorage.length == 0){
    localStorage.setItem('login', JSON.stringify({user:'', isAdmin:false}))
  }
  const {user, isAdmin} = JSON.parse(localStorage.getItem('login'))
  
  const Provider = UserContextProvider

  const context = useUserContext()

  
  context.user = user
  context.isAdmin = isAdmin

  console.log(user, isAdmin)

  return (
    <>

      <Navbar />
      <Provider value={{user, isAdmin}}>
        <PageWrapper>
          
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />}/>  
              <Route path='/course/:id' element={<CourseDetailPage />}/> 
              <Route path='/login' element={<LoginPage />}/>
            </Routes> 
          </BrowserRouter>
          
        </PageWrapper>
      </Provider>

      <Footer />
    </>
  );
}

export default App;
