import React from 'react';
function UserProfile (props){
    return(
        <>
        <h2 style={{font: 'caption', color:'blue'}}>{props.name}</h2>
        <p style={{ fontFamily:'sans-serif', border: '1px solid gray', padding: '10px', margin: '10px'}}>Age: {props.age}</p>
        <p><span style={{fontFamily:'revert-layer', fontPalette:'revert-layer',color:'purple'}}>Bio: {props.bio}</span></p>
        </>
    )
}
export default UserProfile;