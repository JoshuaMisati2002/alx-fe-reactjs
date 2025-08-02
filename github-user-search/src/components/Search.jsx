import React, { useState } from 'react';
import { searchUsers, fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  
  const [detailedProfile, setDetailedProfile] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setResults([]);
    setError(null);
    setIsLoading(true);
    setPage(1);
    setDetailedProfile(null);

    try {
      const users = await searchUsers({
        username,
        location,
        minRepos,
        page: 1
      });

      setResults(users);
      setHasMore(users.length === 30); // GitHub API returns max 30 by default
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setIsLoading(true);

    try {
      const users = await searchUsers({
        username,
        location,
        minRepos,
        page: nextPage
      });

      setResults(prev => [...prev, ...users]);
      setPage(nextPage);
      setHasMore(users.length === 30);
    } catch (err) {
      setError(err.message || 'Failed to load more.');
    } finally {
      setIsLoading(false);
    }
  };

const handleUserClick = async (user) => {
  setDetailedProfile(null);
  setIsLoading(true);
  setError(null);

  try {
    const fullProfile = await fetchUserData(user.login);
    setDetailedProfile(fullProfile);
  } catch {
    setError('Failed to fetch detailed profile.');
  } finally {
    setIsLoading(false);
  }
};


  const renderResults = () => {
    if (isLoading && results.length === 0) return <p className="text-blue-500 mt-4">Loading...</p>;
    if (error) return <p className="text-red-500 mt-4">{error}</p>;

    if (results.length > 0) {
      return (
        <div className="mt-6 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {results.map((user) => (
            <div
              key={user.id}
              className="p-4 bg-white shadow rounded flex items-center space-x-4 cursor-pointer hover:bg-gray-50"
              onClick={() => handleUserClick(user)}
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">{user.login}</h2>
                <p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Profile
                  </a>
                </p>
              </div>
            </div>
          ))}

          {hasMore && (
            <button
              onClick={loadMore}
              className="col-span-full mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Load More
            </button>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl space-y-4"
      >
        <h1 className="text-2xl font-bold text-center mb-4">🔍 GitHub User Search</h1>

        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            GitHub Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location (optional)
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">
            Minimum Public Repositories (optional)
          </label>
          <input
            id="minRepos"
            type="number"
            min="0"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {renderResults()}

      {detailedProfile && (
        <div className="mt-6 bg-white p-6 rounded shadow max-w-xl w-full">
          <h2 className="text-xl font-bold mb-2">{detailedProfile.name || detailedProfile.login}</h2>
          {detailedProfile.bio && <p className="mb-2">{detailedProfile.bio}</p>}
          <p><strong>Location:</strong> {detailedProfile.location || 'N/A'}</p>
          <p><strong>Public Repos:</strong> {detailedProfile.public_repos}</p>
          <p><strong>Followers:</strong> {detailedProfile.followers}</p>
          <p><strong>Following:</strong> {detailedProfile.following}</p>
          <a
            href={detailedProfile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 mt-2 inline-block hover:underline"
          >
            Visit GitHub Profile →
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
