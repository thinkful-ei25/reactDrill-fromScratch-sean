import React from 'react'; 

export default function Button(props){ 

  return ( 
    <input type="button" value="press this button for some weird stuff yo" onClick={() => props.click()}></input>
  ); 
}