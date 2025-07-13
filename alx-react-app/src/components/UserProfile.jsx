import React from 'react';
function UserProfile (props){
    return(
        <>
        <h2>{props.name}</h2>
        <p> {props.Age}</p>
        <p> {props.Bio}</p>
        </>
    )
}
export default UserProfile;