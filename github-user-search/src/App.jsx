import React from 'react'
import {Routes, Route,Link} from 'react-router-dom'
import './App.css'
import Search from './components/Search'

function App() {

  const githubApiKey = import.meta.env.VITE_GITHUB_API_KEY;
  return (
    <>
    
    
     <Routes>
        <Route path="/" element={<Search />} />
     </Routes>
     
    </>
  )
}

export default App
