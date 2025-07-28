import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipes = useRecipeStore((state) => state.recipes);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const recipe = recipes.find((r) => r.id === parseInt(id));
  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id: parseInt(id), title, description });
    navigate(`/recipe/${id}`);
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Save Changes</button>
    </form>
  );
};
export default EditRecipeForm;
