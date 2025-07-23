
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from  './components/UserProfile'
import React from 'react'
import { useState } from 'react'

function App() {
  const [count,setCount] =useState(7);
  function decrementCount () {
    setCount(prevCount => prevCount - 1)
  }
  function incrementCount () {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <>
    <div>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
      <div>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <Footer />
      </div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App