import './actuialiteBox.css';
import React from 'react';


 
  function ActuialiteBox ({img, titre,date,id})  {
return(
    <div className="actuialite" > 
  <div className='Divun'>
  <img src={img} alt={img}/>
<h3>{titre}</h3> 
<p>{date}</p>

  </div>
 
<div className='DivDeux'>
<a href={"/detailActuialite/"+id} > LIRE EN DÉTAIL</a></div>

    </div> 
)
  }
  export default ActuialiteBox;