import Navbar from './components/Navbar';
import PageWrapper from './components/PageWrapper';
import Footer from './components/Footer';
import UserContext, {useUserState, UserContextProvider} from './contexts/UserContext';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import HomePage from './pages/HomePage';
import CourseDetailPage from './pages/CourseDetailPage'
import LoginPage from './pages/LoginPage';

import { useState } from 'react';





function App() {

  
  const Provider = UserContextProvider

  const {user, isAdmin} = JSON.parse(localStorage.getItem('login'))

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
