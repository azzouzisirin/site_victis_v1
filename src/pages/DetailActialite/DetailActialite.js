import './detailActialite.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import {actuialites} from '../../data/db.json'

import Footer from '../../components/footer/Footer'

 
  function DetailActialite ()  {
    let { id } = useParams();
 
    const actuialite=actuialites[id]
    function ListModule({listitem}){
      function  ModelText({context}){
        return (
          context.map((con)=>{
          return  (<>
          <br/>
           <h6> {con}</h6>
           
           </>
         )
          })
    
        )
      } 
 
      function  ModelTitre({context}){
        return (
          <h2 >  {context}</h2>
        )
      } 
      function  PetitTitre({context}){
        return (<>   <br/>
          <h3>   {context} </h3>  
          <br/>
        </>
        
        )
      } 
   
    
     
        function Listmodul ({t}){
          const context=actuialite.context[t]
         if(t.includes("text")){
          return  <ModelText context={context} />
         }
     
         if(t.includes("Grandtitre")){
            return <ModelTitre context={context} />
         }
  
         if(t.includes("titre")){
          return <PetitTitre context={context} item={t} />
    
         }
      
           }
          return (<>
          {
        listitem.map((m)=>{
          return(<> 
        
          <Listmodul t={m}/>
          </> ) 
        })
      } 
      </>
          )
      }
    
return( 
  <> 
  <div className='Detailactualite'>
  <div className='divSlide'> 
  <img src='../images/actuialite/live-classroom.jpg' alt=''/>
  </div>

 <div className='Granddiv'>
 <img src={actuialite.img} alt={actuialite.img}/>

<h1>{actuialite.titre}</h1>
<h4>{actuialite.date}</h4>
<ListModule listitem={actuialite.forma}/>


  </div>

 
</div>
<Footer/>
</>
)
 
  };
  export default DetailActialite;