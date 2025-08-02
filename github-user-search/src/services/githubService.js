import axios from 'axios';

// Get the API key from your environment variables
const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

// Base URL for the GitHub API
const API_BASE_URL = 'https://api.github.com/search/users?q';

// Set up the Axios instance
const githubApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    ...(GITHUB_API_KEY && {
      Authorization: `token ${GITHUB_API_KEY}`,
    }),
  },
});

/**
 * Fetches full profile data for a given username.
 * @param {string} username
 * @returns {Promise<object>}
 */
export const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error(`User "${username}" not found.`);
    }
    throw error;
  }
};

/**
 * Advanced user search using GitHub's Search API
 * @param {Object} params - Search parameters
 * @param {string} [params.username] - GitHub username or keywords
 * @param {string} [params.location] - Location (optional)
 * @param {number} [params.minRepos] - Minimum number of public repositories
 * @param {number} [params.page=1] - Page number for pagination
 * @returns {Promise<object[]>} - Array of users matching the criteria
 */
export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  let query = '';

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  try {
    const response = await githubApi.get('/search/users', {
      params: {
        q: query.trim(),
        page,
        per_page: 30, // GitHub default
      },
    });

    return response.data.items; // summary info for users
  } catch (error) {
    throw new Error('Failed to search users. ' + (error.message || ''));
  }
};

