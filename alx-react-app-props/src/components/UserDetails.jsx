import React,{UseContext} from 'react';
import UserContext from './components/UserContext'
function UserDetails({ userData }) {
  return (
    <div>
        const userName = useContext(UserContext);
      <p>Name:{userData}  </p>
      <p>Email: {userData}</p>
    </div>
  );
}

export default UserDetails;