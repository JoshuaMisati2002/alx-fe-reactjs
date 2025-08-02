import React, { useState } from 'react';
// Import the API service function i created
import { fetchUserData } from '../services/githubService'; 

function Search() {
  // State to hold the value of the input field
  const [username, setUsername] = useState('');

  // State to store the user data returned from the API
  const [userData, setUserData] = useState(null);

  // State to manage the loading status of the API call
  const [isLoading, setIsLoading] = useState(false);

  // State to store any error message
  const [error, setError] = useState(null);

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  // Function to handle form submission (now an async function)
  const handleFormSubmit = async (event) => {
    // Prevent the default form submission behavior (which reloads the page)
    event.preventDefault();

    // Reset states before a new search
    setUserData(null);
    setError(null);
    setIsLoading(true);

    try {
      // Call the API service function with the username
      const data = await fetchUserData(username);
      // If the call is successful, set the user data
      setUserData(data);
    } catch (err) {
      // If there's an error, set the error message
      // The `||` operator provides a fallback message if `err.message` is not available
      setError(err.message || 'An error occurred.');
    } finally {
      // This block always runs after try or catch, so we turn off the loading state
      setIsLoading(false);
    }
  };

  // Helper function for conditional rendering of results
  const renderResults = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Looks like we cant find the user. Error: {error}</p>;
    }

    if (userData) {
      return (
        <div className="user-profile">
          <img 
            src={userData.avatar_url} 
            alt={`${userData.login}'s avatar`} 
            className="avatar" 
          />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      );
    }

    // Default state: return nothing when no search has been performed
    return null;
  };

  return (
    <div className="search-container">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          aria-label="GitHub Username"
        />
        <button type="submit">Search</button>
      </form>
      
      {/* Display the results based on the state */}
      <div className="results-container">
        {renderResults()}
      </div>
    </div>
  );
}

export default Search;
