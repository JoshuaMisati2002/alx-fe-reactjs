import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipeStore();

  const recipe = recipes.find(r => r.id === parseInt(id));
  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    updateRecipe({ id: parseInt(id), title, description });
    navigate(`/recipe/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={event => setTitle(event.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={event => setDescription(event.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;

