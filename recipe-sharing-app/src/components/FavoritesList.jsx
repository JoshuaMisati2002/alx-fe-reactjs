import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites);
  const removeFromFavorites = useRecipeStore(state => state.removeFromFavorites);

  return (
    <div>
      <h2> Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favorites.map(recipe => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            <button onClick={() => removeFromFavorites(recipe.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
