
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from  './components/UserProfile'
import React from 'react'

function App() {
  return (
    <>
    <div>
      <UserProfile name="Joshua" age={23} bio="I live in Nairobi"/>
    </div>
      <div>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <Footer />
        <UserProfile />
      </div>
    </>
  )
}

export default App