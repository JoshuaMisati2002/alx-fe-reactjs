import { create } from 'zustand';

export const useRecipeStore = create((set,get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

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
}));
