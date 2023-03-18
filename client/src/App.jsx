import Navbar from './components/Navbar';
import PageWrapper from './components/PageWrapper';
import Footer from './components/Footer';
import UserContext from './contexts/UserContext';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import HomePage from './pages/HomePage';
import CourseDetailPage from './pages/CourseDetailPage'
import LoginPage from './pages/LoginPage';

import { useState } from 'react';





function App() {

  const [user, setUser] = useState({name:"Joao", isAdministrator:true});

  return (
    <>

      <Navbar />
      <UserContext.Provider value={[user, setUser]}>
        <PageWrapper>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />}/>  
              <Route path='/course/:id' element={<CourseDetailPage />}/> 
              <Route path='/login' element={<LoginPage />}/>
            </Routes> 
          </BrowserRouter>
          
        </PageWrapper>
      </UserContext.Provider>

      <Footer />
    </>
  );
}

export default App;
