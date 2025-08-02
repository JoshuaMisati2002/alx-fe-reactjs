import React from 'react'
import {Routes, Route,Link} from 'react-router-dom'
import './App.css'
import Search from './components/Search'

function App() {

  const githubApiKey = import.meta.env.VITE_GITHUB_API_KEY;
  return (
    <>
       <Search />
      <h1>Vite + React</h1>
    
        <p>
          Edit <code>src/App.jsx</code> and save to test HMRssss
        </p>
     
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
