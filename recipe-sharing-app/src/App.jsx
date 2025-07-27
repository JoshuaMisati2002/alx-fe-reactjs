import React from 'react'
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'

function App() {


  return (
    <>
 
      <h1>Vite + Reacts</h1>
      <AddRecipeForm />
      <RecipeList />
      <div className="card">
    
       
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
