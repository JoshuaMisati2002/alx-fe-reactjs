import React from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import ProfilePage from './components/ProfilePage'
import UserContext from './components/UserContext'

function App() {
 const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

 <UserContext.Provider value={userData}>
  return <ProfilePage userData={userData} />; 
  </UserContext.Provider>
}

export default App