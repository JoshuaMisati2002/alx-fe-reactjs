import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

function App() {
  return (
    <>
      <h1>Vite + React Recipes</h1>
      <Routes>
        <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/edit/:id" element={<EditRecipeForm />} />
      </Routes>
    </>
  );
}

export default App;