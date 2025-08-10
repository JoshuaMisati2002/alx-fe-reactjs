import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    // If not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the protected component
  return children;
}

export default ProtectedRoute;
