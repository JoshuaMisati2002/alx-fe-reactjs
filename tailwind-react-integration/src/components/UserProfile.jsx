function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 max-w-xs mx-auto my-20 rounded-lg shadow-lg text-center sm:p-4 md:p-8 md:max-w-sm">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-24 h-24 rounded-full mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36"
      />
      <h1 className="text-lg text-blue-800 my-4 font-semibold md:text-xl">John Doe</h1>
      <p className="text-sm text-gray-600 md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;