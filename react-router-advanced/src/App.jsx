import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function Home() {
  return <h1>Home Page</h1>;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;



