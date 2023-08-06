import './boxHome.css';
import React from 'react';
import { Link } from 'react-router-dom';

 
  function BoxHome  ({titre,linkhref,text}  )  {
return(
    <div className="boxformHome"> 
 
<Link to={linkhref}> <h2> {titre} </h2>
   { text? <h5> {text}  </h5> : null}
     
   </Link>
    </div>
)
  }
  export default BoxHome;