// src/components/AddRecipeForm.jsx
import { useState } from "react";

export default function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required.";
    }
    const ingredientsList = ingredients
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
    if (ingredientsList.length < 2) {
      newErrors.ingredients = "Please list at least two ingredients.";
    }
    if (!instructions.trim()) {
      newErrors.instructions = "Preparation steps are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
      instructions,
    };

    onAddRecipe(newRecipe);
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 sm:p-10 bg-white shadow-xl rounded-2xl border border-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        Add a New Recipe
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
            placeholder="e.g. Spaghetti Carbonara"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Ingredients
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
            placeholder="List each ingredient on a new line"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
            placeholder="Step-by-step preparation instructions"
          ></textarea>
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
          >
            ➕ Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

