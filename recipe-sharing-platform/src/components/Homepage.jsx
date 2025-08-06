import { useState, useEffect } from "react";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load recipe data
    fetch("/src/data.json") // Change to "/data.json" if in public folder
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="px-4 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        🍽 Our Delicious Recipes
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
