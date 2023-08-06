import './boxModul.css';
import React from 'react';


  function BoxModul  ({titre,linkhref}  )  {
return(
    <div className="boxModul"> 
 
<a href={linkhref}> <h2> {titre} </h2>

     
   </a>
    </div>
)
  };
  export default BoxModul;
