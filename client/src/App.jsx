import Navbar from './components/Navbar'
import PageWrapper from './components/PageWrapper'
import Footer from './components/Footer'
import { UserContextProvider, useUserContext } from './contexts/UserContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import CourseDetailPage from './pages/CourseDetailPage'
import LoginPage from './pages/LoginPage'
import { ThemeProvider } from 'styled-components'
import { themes } from './theme'
import UserRegisterPage from './pages/UserRegisterPage/UserRegisterPage'

function App () {
  if (localStorage.length === 0) {
    localStorage.setItem('login', JSON.stringify({ user: '', isAdmin: false }))
  }
  const { user, isAdmin } = JSON.parse(localStorage.getItem('login'))

  const Provider = UserContextProvider

  const context = useUserContext()

  context.user = user
  context.isAdmin = isAdmin

  console.log(user, isAdmin)

  return (
    <>

      <Navbar />
      <Provider value={{ user, isAdmin }}>
        <ThemeProvider theme={themes}>
        <PageWrapper>

          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/course/:id' element={<CourseDetailPage />}/>
              <Route path='/login' element={<LoginPage />}/>
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/user/register' element={<UserRegisterPage/> }/>
            </Routes>
          </BrowserRouter>

        </PageWrapper>
        </ThemeProvider>
      </Provider>

      <Footer />
    </>
  )
}

export default App
