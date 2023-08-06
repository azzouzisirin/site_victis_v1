import './box.css';
import React from 'react';
import { Link } from 'react-router-dom';

 
  function Box  ({titre,img,linkhref}  )  {
return(
    <div className="boxforme"> 
    <Link to={linkhref}>
<div className='divUn'>
 <h2> {titre} </h2>   


</div>

<div className='divDeux'>
{ img? <img style={{marginBottom:"-1px"}}src={img} alt={img} /> : null}

</div>

</Link>
    </div>
)
  }
  export default Box;
