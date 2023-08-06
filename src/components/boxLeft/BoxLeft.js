import './boxLeft.css';
import React from 'react';



  function BoxLeft  ({titre,description,images,text}  )  {
    const delay = 2500;

    const [index_2, setIndex_2] = React.useState(0);
    React.useEffect(() => {
        setTimeout(
          () =>
            setIndex_2((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
     
        return () => {};
      }, [index_2,images]);
return(
    <div className="Boxleft"> 
 <h2 >  {titre}</h2>
<h3>{description} </h3>
<br/> 
<div className="confianceshow">
  <div className="confiantehowSlider"
  
  style={{ transform: `translate3d(${-index_2 * 100}%, 0, 0)` }}

  >
    {images? images.map((backgroundColor, index_2) => (
      <img
        className="confiance"
        key={index_2}
        alt={ backgroundColor }
        src={ backgroundColor }
      />
    )):null}
  </div>

</div>
  

   <h3>{text}</h3>
    </div>
)
  };
  export default BoxLeft;
