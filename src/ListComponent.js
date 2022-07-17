import React from 'react'; 

const ListComponent = (props) => { 
  
  return ( 
    
    <div className={props.text}> 
    
      <h1>{props.text}</h1> 
      
    </div> 
    
  ); 
  
}; 

export {ListComponent};