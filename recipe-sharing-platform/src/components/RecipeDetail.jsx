// src/components/RecipeDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id === parseInt(id));
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) {
    return <p className="p-6 text-gray-500">Loading recipe details...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <p className="mt-2 text-gray-600">{recipe.summary}</p>

      <h2 className="text-xl font-semibold mt-6">Ingredients</h2>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        {recipe.ingredients.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Instructions</h2>
      <p className="mt-2 text-gray-700">{recipe.instructions}</p>
    </div>
  );
}
