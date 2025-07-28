import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <>
     <SearchBar />
      
      <Routes>
        <Route path="/" element={<><AddRecipeForm /> <RecipeList /></>} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/edit/:id" element={<EditRecipeForm />} />
        <Route path="/favorites" element={<FavoritesList />} />
         <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
      <FavoritesList />
     <RecommendationsList />
    </>
  );
}

export default App;