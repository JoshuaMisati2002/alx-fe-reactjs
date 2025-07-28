import { create } from 'zustand';


export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    }), false, 'addRecipe'),

  // Replace entire recipe list
  setRecipes: (recipes) => set({ recipes }),

  // Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      favorites: state.favorites.filter((recipe) => recipe.id !== id), // Clean up favorites too
    }), false, 'deleteRecipe'),

  // Update a recipe by ID
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    }), false, 'updateRecipe'),

  // Update search term and compute filtered recipes
  setSearchTerm: (term) =>
    set(() => {
      const allRecipes = get().recipes;
      const filtered = allRecipes.filter((r) =>
        r.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  // Add to favorites
  addToFavorites: (recipe) =>
    set((state) => {
      const alreadyExists = state.favorites.some((r) => r.id === recipe.id);
      return alreadyExists
        ? {}
        : { favorites: [...state.favorites, recipe] };
    }, false, 'addToFavorites'),

  // Remove from favorites
  removeFromFavorites: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((r) => r.id !== id),
    }), false, 'removeFromFavorites'),

  //  Generate recommendations based on favorite ingredients or tags
  generateRecommendations: () => {
    const favorites = get().favorites;
    const allRecipes = get().recipes;

    const favoriteIngredients = favorites.flatMap((r) =>
      r.ingredients ? r.ingredients.map((i) => i.toLowerCase()) : []
    );

    const recommendations = allRecipes.filter((recipe) => {
      if (!recipe.ingredients) return false;
      return recipe.ingredients.some((i) =>
        favoriteIngredients.includes(i.toLowerCase())
      );
    });

    set({ recommendations });
  },
}));
if (typeof window !== 'undefined') {
  window.recipeStore = useRecipeStore;
}