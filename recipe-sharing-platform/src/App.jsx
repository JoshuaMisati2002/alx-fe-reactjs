import './App.css'
import HomePage from './components/Homepage'
import { Routes,BrowserRouter,Route, Link } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail.jsx";
import AddRecipeForm from "./components/AddRecipeForm.jsx";

function App() {
  

  return (
    <>
     
    
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
    </>
  )
}

export default App
