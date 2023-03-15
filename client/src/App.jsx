import Navbar from './components/Navbar';
import PageWrapper from './components/PageWrapper';
import Footer from './components/Footer';
import UserContext from './contexts/UserContext';

import HomePage from './pages/HomePage';
import { useState } from 'react';





function App() {

  const [user, setUser] = useState({name:"Joao", isAdministrator:true});

  return (
    <>

      <Navbar />
      <UserContext.Provider value={[user, setUser]}>
        <PageWrapper>
          <HomePage />
        </PageWrapper>
      </UserContext.Provider>

      <Footer />
    </>
  );
}

export default App;
