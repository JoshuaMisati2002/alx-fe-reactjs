import React from 'react';
function UserProfile (props){
    return(
        <>
        <h2 style={{font: 'caption', color:'blue'}}>{props.name}</h2>
        <p style={{ fontFamily:'sans-serif'}}>Age: {props.age}</p>
        <p style={{fontFamily:'revert-layer', fontPalette:'revert-layer',color:'purple'}}>Bio: {props.bio}</p>
        </>
    )
}
export default UserProfile;