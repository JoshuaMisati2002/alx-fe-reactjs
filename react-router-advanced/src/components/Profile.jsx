import { Routes, Route, Link } from "react-router-dom";

function ProfileDetails() {
  return <h2>Profile Details Section</h2>;
}

function ProfileSettings() {
  return <h2>Profile Settings Section</h2>;
}

function Profile() {
  return (
    <div>
      <h1>User Profile</h1>

      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;

