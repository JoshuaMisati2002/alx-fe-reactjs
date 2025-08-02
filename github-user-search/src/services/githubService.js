import axios from 'axios';

// Get the API key from your environment variables
const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

// Base URL for the GitHub API
const API_BASE_URL = 'https://api.github.com';

// Set up the Axios instance with a base URL and default headers
const githubApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
  },
});

/**
 * Fetches user data from the GitHub API.
 * @param {string} username The GitHub username to search for.
 * @returns {Promise<object>} A promise that resolves to the user data.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    // Axios automatically parses the JSON, so the data is in response.data
    return response.data;
  } catch (error) {
    // Handle specific errors, like a user not found (404)
    if (error.response && error.response.status === 404) {
      throw new Error(`User "${username}" not found.`);
    }
    // Re-throw the error to be handled by the component
    throw error;
  }
};